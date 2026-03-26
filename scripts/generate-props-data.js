#!/usr/bin/env node
/**
 * generate-props-data.js
 *
 * Reads JSDoc from TypeScript interface declarations and emits generated-props.ts
 * files containing ApiTableSectionProps[] arrays for Storybook props-table files.
 *
 * MODES
 * -----
 * Write/update the config (auto-discovers all components):
 *   node scripts/generate-props-data.js --write-config
 *
 * Generate all components from config:
 *   node scripts/generate-props-data.js --all
 *
 * Single component:
 *   node scripts/generate-props-data.js \
 *     src/data-table/types.ts \
 *     stories/data-table/generated-props.ts \
 *     HeaderItemProps RowProps
 */

const ts = require("typescript");
const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");
const CONFIG_FILE = path.join(__dirname, "props-data-config.json");

// ─── Helpers ──────────────────────────────────────────────────────────────────

function splitUnion(typeStr) {
    const parts = [];
    let depth = 0;
    let current = "";
    for (const ch of typeStr) {
        if (ch === "<" || ch === "(" || ch === "{") depth++;
        else if (ch === ">" || ch === ")" || ch === "}") depth--;
        else if (ch === "|" && depth === 0) {
            parts.push(current.trim());
            current = "";
            continue;
        }
        current += ch;
    }
    if (current.trim()) parts.push(current.trim());
    return parts;
}

function getJsDocText(node) {
    const commentNode = ts.getJSDocCommentsAndTags(node)[0];
    if (!commentNode || !ts.isJSDoc(commentNode) || !commentNode.comment)
        return "";
    if (typeof commentNode.comment === "string")
        return commentNode.comment.replace(/\s+/g, " ").trim();
    return commentNode.comment
        .map((c) => c.text)
        .join("")
        .replace(/\s+/g, " ")
        .trim();
}

function typeToDisplayString(checker, type) {
    const str = checker.typeToString(type);
    return str.length > 120 ? str.slice(0, 117) + "..." : str;
}

// ─── Core generation ──────────────────────────────────────────────────────────

function getExportedPropsInterfaces(typesFile) {
    const src = fs.readFileSync(typesFile, "utf8");
    const sf = ts.createSourceFile(
        typesFile,
        src,
        ts.ScriptTarget.ESNext,
        true
    );
    const names = [];
    ts.forEachChild(sf, (node) => {
        if (
            (ts.isInterfaceDeclaration(node) ||
                ts.isTypeAliasDeclaration(node)) &&
            node.modifiers &&
            node.modifiers.some(
                (m) => m.kind === ts.SyntaxKind.ExportKeyword
            ) &&
            node.name.text.endsWith("Props")
        ) {
            names.push(node.name.text);
        }
    });
    return names;
}

function classifyInterfaces(componentDir, allInterfaces) {
    const EXCLUDE_SUFFIXES = [
        "StyleProps",
        "WrapperStyleProps",
        "PartialProps",
        "WithForwardedRefProps",
        "RenderProps",
    ];
    const EXCLUDE_PREFIXES = ["Base"];

    const isInternal = (name) =>
        EXCLUDE_SUFFIXES.some((s) => name.endsWith(s)) ||
        EXCLUDE_PREFIXES.some((p) => name.startsWith(p));

    const camel = componentDir
        .split(/[-_]/)
        .map((p, i) =>
            i === 0 && p === "v2"
                ? "V2_"
                : p.charAt(0).toUpperCase() + p.slice(1)
        )
        .join("");

    let primary = allInterfaces.find(
        (n) =>
            n === camel + "Props" ||
            n === "V2_" + camel.replace(/^V2_/, "") + "Props"
    );
    if (!primary)
        primary = [...allInterfaces].reverse().find((n) => !isInternal(n));
    if (!primary) primary = allInterfaces[allInterfaces.length - 1];

    return {
        primary,
        subs: allInterfaces.filter((n) => n !== primary && !isInternal(n)),
    };
}

function generateSectionAttributes(typesFile, interfaceName) {
    const program = ts.createProgram([typesFile], {
        noEmit: true,
        strict: false,
        target: ts.ScriptTarget.ESNext,
        moduleResolution: ts.ModuleResolutionKind.Node10,
        skipLibCheck: true,
    });
    const checker = program.getTypeChecker();
    const sourceFile = program.getSourceFile(typesFile);
    if (!sourceFile) return null;

    let decl = null;
    ts.forEachChild(sourceFile, (node) => {
        if (
            (ts.isInterfaceDeclaration(node) ||
                ts.isTypeAliasDeclaration(node)) &&
            node.name.text === interfaceName
        )
            decl = node;
    });
    if (!decl) return null;

    const type = checker.getTypeAtLocation(decl.name);
    const attributes = [];

    for (const sym of checker.getPropertiesOfType(type)) {
        const propName = sym.getName();
        if (propName.startsWith("__")) continue;

        const propDecl = (sym.getDeclarations() || [])[0];

        // Skip properties inherited from external libs (React HTML attrs, DOM, etc.)
        if (propDecl) {
            const fname = propDecl.getSourceFile().fileName;
            if (
                fname.includes("/node_modules/") ||
                fname.includes("/typescript/lib/")
            )
                continue;
        }

        const description = propDecl ? getJsDocText(propDecl) : "";
        const mandatory =
            propDecl && ts.isPropertySignature(propDecl)
                ? !propDecl.questionToken
                : false;

        let propTypes;
        if (propDecl && ts.isPropertySignature(propDecl) && propDecl.type) {
            const rawText = propDecl.type.getText(sourceFile);
            const parts = splitUnion(rawText)
                .map((s) => s.trim())
                .filter((s) => s !== "undefined");
            const hasBool = parts.includes("true") && parts.includes("false");
            const cleaned = hasBool
                ? [
                      "boolean",
                      ...parts.filter((s) => s !== "true" && s !== "false"),
                  ]
                : parts;
            propTypes = (cleaned.length > 0 ? cleaned : [rawText]).map((s) =>
                JSON.stringify(s)
            );
        } else {
            propTypes = [
                JSON.stringify(
                    typeToDisplayString(
                        checker,
                        checker.getTypeOfSymbolAtLocation(sym, sourceFile)
                    )
                ),
            ];
        }

        const defaultTag = ts
            .getJSDocTags(propDecl || decl)
            .find((t) => t.tagName.text === "default");
        const defaultRaw = defaultTag
            ? typeof defaultTag.comment === "string"
                ? defaultTag.comment
                : defaultTag.comment?.map((c) => c.text).join("") ?? ""
            : undefined;
        const defaultValue =
            defaultRaw && defaultRaw !== "undefined"
                ? JSON.stringify(defaultRaw)
                : undefined;

        attributes.push(
            `        {\n` +
                [
                    `            name: ${JSON.stringify(propName)},`,
                    `            description: ${JSON.stringify(description)},`,
                    `            propTypes: [${propTypes.join(", ")}],`,
                    mandatory ? `            mandatory: true,` : null,
                    defaultValue
                        ? `            defaultValue: ${defaultValue},`
                        : null,
                ]
                    .filter(Boolean)
                    .join("\n") +
                `\n        }`
        );
    }

    for (const info of checker.getIndexInfosOfType(type)) {
        const description = info.declaration
            ? getJsDocText(info.declaration)
            : "";
        attributes.push(
            `        {\n` +
                `            name: ${JSON.stringify(
                    `[${checker.typeToString(info.keyType)}]`
                )},\n` +
                `            description: ${JSON.stringify(description)},\n` +
                `            propTypes: [${JSON.stringify(
                    typeToDisplayString(checker, info.type)
                )}],\n` +
                `        }`
        );
    }

    return attributes;
}

function writeGeneratedProps(typesFile, outputFile, interfaceNames) {
    const absTypesFile = path.resolve(ROOT, typesFile);
    const absOutputFile = path.resolve(ROOT, outputFile);

    if (!fs.existsSync(absTypesFile)) {
        console.warn(`  SKIP: ${typesFile} not found`);
        return false;
    }

    const sections = [];
    for (const name of interfaceNames) {
        const attrs = generateSectionAttributes(absTypesFile, name);
        if (!attrs) {
            console.warn(`  WARN: ${name} not found in ${typesFile}`);
            continue;
        }
        sections.push(
            `export const ${name}Data: ApiTableSectionProps[] = [\n    {\n        attributes: [` +
                (attrs.length > 0
                    ? `\n` + attrs.join(",\n") + `,\n        `
                    : ``) +
                `],\n    },\n];`
        );
    }

    if (sections.length === 0) return false;

    fs.mkdirSync(path.dirname(absOutputFile), { recursive: true });
    fs.writeFileSync(
        absOutputFile,
        `// AUTO-GENERATED — do not edit manually.\n` +
            `// Source: ${typesFile}\n` +
            `// Regenerate: npm run props:generate\n\n` +
            `import { ApiTableSectionProps } from "stories/storybook-common";\n\n` +
            sections.join("\n\n") +
            `\n`
    );
    return true;
}

// ─── Config ───────────────────────────────────────────────────────────────────

function writeConfig() {
    const srcDir = path.join(ROOT, "src");
    const storiesDir = path.join(ROOT, "stories");
    const config = {};

    for (const dir of fs.readdirSync(srcDir)) {
        try {
            if (!fs.statSync(path.join(srcDir, dir)).isDirectory()) continue;
        } catch {
            continue;
        }

        const typesFile = path.join(srcDir, dir, "types.ts");
        if (
            !fs.existsSync(typesFile) ||
            !fs.existsSync(path.join(storiesDir, dir))
        )
            continue;

        const all = getExportedPropsInterfaces(typesFile);
        if (all.length === 0) continue;

        const { primary, subs } = classifyInterfaces(dir, all);
        const interfaces = primary ? [primary, ...subs] : subs;
        if (interfaces.length === 0) continue;

        config[dir] = {
            typesFile: `src/${dir}/types.ts`,
            outputFile: `stories/${dir}/generated-props.ts`,
            interfaces,
        };
    }

    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2) + "\n");
    console.log(
        `Wrote ${path.relative(ROOT, CONFIG_FILE)} (${
            Object.keys(config).length
        } components)`
    );
    return config;
}

// ─── Entrypoint ───────────────────────────────────────────────────────────────

const [, , mode, ...rest] = process.argv;

if (mode === "--write-config") {
    writeConfig();
} else if (mode === "--all") {
    if (!fs.existsSync(CONFIG_FILE)) writeConfig();
    const config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"));
    let generated = 0;
    for (const [dir, entry] of Object.entries(config)) {
        const ok = writeGeneratedProps(
            entry.typesFile,
            entry.outputFile,
            entry.interfaces
        );
        if (ok) {
            console.log(`  ✓ ${dir} (${entry.interfaces.join(", ")})`);
            generated++;
        }
    }
    console.log(`\nDone: ${generated} generated`);
} else {
    const [typesFile, outputFile, ...interfaceNames] = [mode, ...rest];
    if (!typesFile || !outputFile || interfaceNames.length === 0) {
        console.error(
            "Usage:\n" +
                "  node scripts/generate-props-data.js --write-config\n" +
                "  node scripts/generate-props-data.js --all\n" +
                "  node scripts/generate-props-data.js <typesFile> <outputFile> <Interface1> ..."
        );
        process.exit(1);
    }
    const ok = writeGeneratedProps(typesFile, outputFile, interfaceNames);
    if (ok)
        console.log(
            `Generated ${outputFile} (${interfaceNames.length} interface(s))`
        );
    else {
        console.error("Generation failed.");
        process.exit(1);
    }
}
