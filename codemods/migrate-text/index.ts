import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { textComponentMap } from "./data";

// ======= Constants ======= //

const IMPORT_PATHS = {
    V2_TEXT: "@lifesg/react-design-system/v2_text",
    DESIGN_SYSTEM: "@lifesg/react-design-system",
    TYPOGRAPHY: "@lifesg/react-design-system/typography",
};

const IMPORT_SPECIFIERS = {
    V2_TEXT: "V2_Text",
    TYPOGRAPHY: "Typography",
};

const JSX_IDENTIFIERS = {
    V2_TEXT: "V2_Text",
    TYPOGRAPHY: "Typography",
};

// ======= Transformer Function ======= //

export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let isLifesgImport = false;

    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        if (
            importPath === IMPORT_PATHS.V2_TEXT ||
            importPath === IMPORT_PATHS.DESIGN_SYSTEM
        ) {
            // Update V2 modules to V3 modules
            path.node.specifiers?.forEach((specifier) => {
                if (
                    j.ImportSpecifier.check(specifier) &&
                    specifier.imported.name === IMPORT_SPECIFIERS.V2_TEXT
                ) {
                    specifier.imported.name = IMPORT_SPECIFIERS.TYPOGRAPHY;

                    if (
                        specifier.local &&
                        specifier.local.name === IMPORT_SPECIFIERS.V2_TEXT
                    ) {
                        specifier.local.name = IMPORT_SPECIFIERS.TYPOGRAPHY;
                    }

                    // Replace import subpath only
                    if (importPath === IMPORT_PATHS.V2_TEXT) {
                        path.node.source.value = IMPORT_PATHS.TYPOGRAPHY;
                    }

                    isLifesgImport = true;
                }
            });
        }
    });

    // Create updated Typography component
    const replaceWithNewComponent = (path: any, newComponentValue: string) => {
        path.replace(
            j.memberExpression(
                j.identifier(JSX_IDENTIFIERS.TYPOGRAPHY),
                j.identifier(newComponentValue)
            )
        );
    };

    if (isLifesgImport) {
        // Rename Identifiers from V2_Text to Typography
        source
            .find(j.Identifier, { name: JSX_IDENTIFIERS.V2_TEXT })
            .forEach((path) => {
                path.node.name = JSX_IDENTIFIERS.TYPOGRAPHY;
            });

        // Map V2 Text component usage to respective V3 Typography component usage
        source.find(j.MemberExpression).forEach((path) => {
            let currentPath = path.node;
            const propertyNameParts: string[] = [];
            let startsWithTypography = false;

            while (j.MemberExpression.check(currentPath)) {
                const property = currentPath.property;
                const object = currentPath.object;

                if (j.Identifier.check(property)) {
                    propertyNameParts.unshift(property.name);
                }

                if (j.MemberExpression.check(object)) {
                    currentPath = object;
                } else if (j.Identifier.check(object)) {
                    if (object.name === JSX_IDENTIFIERS.TYPOGRAPHY) {
                        startsWithTypography = true;
                    }
                    break;
                } else {
                    break;
                }
            }

            if (startsWithTypography) {
                const propertyName = propertyNameParts.join(".");
                const newTypographyValue = textComponentMap[propertyName];
                if (newTypographyValue) {
                    replaceWithNewComponent(path, newTypographyValue);
                }
            }
        });
    }

    return source.toSource();
}
