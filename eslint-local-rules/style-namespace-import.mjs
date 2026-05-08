const SAME_DIR_STYLE_MODULE_IMPORT_PATTERN = /^\.\/[^/]+\.styles$/;

function getStyleNamespaceLocalName(node) {
    const namespaceSpecifier = node.specifiers.find(
        (specifier) => specifier.type === "ImportNamespaceSpecifier"
    );
    if (namespaceSpecifier) return namespaceSpecifier.local.name;

    const defaultSpecifier = node.specifiers.find(
        (specifier) => specifier.type === "ImportDefaultSpecifier"
    );
    if (defaultSpecifier) return defaultSpecifier.local.name;

    return "styles";
}

const styleNamespaceImportRule = {
    meta: {
        type: "suggestion",
        docs: {
            description:
                "Enforce namespace imports for style modules (*.styles).",
        },
        fixable: "code",
        schema: [],
        messages: {
            namespaceStyleImport:
                "Import style modules using a namespace import (e.g. import * as styles from './component.styles').",
        },
    },
    create(context) {
        return {
            ImportDeclaration(node) {
                if (!node?.source || typeof node.source.value !== "string") {
                    return;
                }

                const importSource = node.source.value;
                if (!SAME_DIR_STYLE_MODULE_IMPORT_PATTERN.test(importSource)) {
                    return;
                }

                // Type-only imports are ignored to avoid rewriting TS type flows.
                if (node.importKind === "type") return;

                // Side-effect imports are allowed (no bindings to enforce).
                if (!node.specifiers.length) return;

                const hasOnlyNamespaceSpecifiers = node.specifiers.every(
                    (specifier) => specifier.type === "ImportNamespaceSpecifier"
                );
                if (hasOnlyNamespaceSpecifiers) return;

                context.report({
                    node,
                    messageId: "namespaceStyleImport",
                    // TODO: Autofix is disabled until linaria migration is complete.

                    // fix(fixer) {
                    //     const quote = getQuote(node.source.raw);
                    //     const localName = getStyleNamespaceLocalName(node);
                    //     const fixedImport = `import * as ${localName} from ${quote}${importSource}${quote};`;
                    //     return fixer.replaceText(node, fixedImport);
                    // },
                });
            },
        };
    },
};

export default styleNamespaceImportRule;
