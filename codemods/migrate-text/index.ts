import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { textComponentMap } from "./data";

export default function transformer(file: FileInfo, api: API, options: any) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let isLifesgImport = false;

    // Check import declarations
    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        // If the import is from lifesg ds , set to true
        if (importPath === "@lifesg/react-design-system/v2_text") {
            isLifesgImport = true;

            // Check if specifiers exist and iterate over them
            if (path.node.specifiers && path.node.specifiers.length > 0) {
                path.node.specifiers.forEach((specifier) => {
                    if (
                        j.ImportSpecifier.check(specifier) &&
                        specifier.imported.name === "V2_Text"
                    ) {
                        specifier.imported.name = "Typography";
                        if (
                            specifier.local &&
                            specifier.local.name === "V2_Text"
                        ) {
                            specifier.local.name = "Typography";
                        }

                        // Update the import path
                        path.node.source.value =
                            "@lifesg/react-design-system/typography";
                    }
                });
            }
        }
    });

    // change if import from @lifesg/react-design-system
    if (isLifesgImport) {
        // update JSX and identifiers
        source.find(j.JSXMemberExpression).forEach((path) => {
            const { object, property } = path.node;

            // Change V2_text to typography
            if (j.JSXIdentifier.check(object) && object.name === "V2_Text") {
                object.name = "Typography";

                // Map properties (e.g., Body -> BodyBL)
                if (textComponentMap[property.name]) {
                    property.name = textComponentMap[property.name];
                }
            }
        });
    }

    return source.toSource();
}
