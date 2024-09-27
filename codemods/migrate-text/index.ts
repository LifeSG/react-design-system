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

    // Process Import Declarations
    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        // Check if the import is from the target design system path
        if (
            importPath === IMPORT_PATHS.V2_TEXT ||
            importPath === IMPORT_PATHS.DESIGN_SYSTEM
        ) {
            // Iterate over each specifier in the import declaration
            path.node.specifiers?.forEach((specifier) => {
                if (
                    j.ImportSpecifier.check(specifier) &&
                    specifier.imported.name === IMPORT_SPECIFIERS.V2_TEXT
                ) {
                    // Rename imported specifier from V2_Text to Typography
                    specifier.imported.name = IMPORT_SPECIFIERS.TYPOGRAPHY;

                    // Rename local specifier if it matches V2_Text
                    if (
                        specifier.local &&
                        specifier.local.name === IMPORT_SPECIFIERS.V2_TEXT
                    ) {
                        specifier.local.name = IMPORT_SPECIFIERS.TYPOGRAPHY;
                    }

                    // Update the import path to the new typography module
                    path.node.source.value = IMPORT_PATHS.TYPOGRAPHY;
                    isLifesgImport = true;
                }
            });
        }
    });

    // Helper Function to Replace Member Expressions
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

        // Update Member Expressions
        source.find(j.MemberExpression).forEach((path) => {
            let currentPath = path.node;
            const propertyNameParts: string[] = [];
            let startsWithTypography = false;

            // Traverse the member expression to collect property names
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
