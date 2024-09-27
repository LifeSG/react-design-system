import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { textComponentMap } from "./data";

// ======= Constants ======= //

// Import Paths
const importPathV2Text = "@lifesg/react-design-system/v2_text";
const importPathLib = "@lifesg/react-design-system";
const importPathTypography = "@lifesg/react-design-system/typography";

// Import Specifiers
const specifierV2Text = "V2_Text";
const specifierTypography = "Typography";

// JSX Identifiers
const jsxIdentifierV2Text = "V2_Text";
const jsxIdentifierTypography = "Typography";

// ======= Transformer Function ======= //

export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let isLifesgImport = false;

    // Process Import Declarations
    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        // Check if the import is from the target design system path
        if (importPath === importPathV2Text || importPath === importPathLib) {
            // Iterate over each specifier in the import declaration
            path.node.specifiers?.forEach((specifier) => {
                if (
                    j.ImportSpecifier.check(specifier) &&
                    specifier.imported.name === specifierV2Text
                ) {
                    // Rename imported specifier from V2_Text to Typography
                    specifier.imported.name = specifierTypography;

                    // Rename local specifier if it matches V2_Text
                    if (
                        specifier.local &&
                        specifier.local.name === specifierV2Text
                    ) {
                        specifier.local.name = specifierTypography;
                    }

                    // Update the import path to the new typography module
                    path.node.source.value = importPathTypography;
                    isLifesgImport = true;
                }
            });
        }
    });

    // Helper Function to Replace Member Expressions
    const replaceWithNewComponent = (path: any, newComponentValue: string) => {
        path.replace(
            j.memberExpression(
                j.identifier(jsxIdentifierTypography),
                j.identifier(newComponentValue)
            )
        );
    };

    if (isLifesgImport) {
        // Rename Identifiers from V2_Text to Typography
        source
            .find(j.Identifier, { name: jsxIdentifierV2Text })
            .forEach((path) => {
                path.node.name = jsxIdentifierTypography;
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
                    if (object.name === jsxIdentifierTypography) {
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
