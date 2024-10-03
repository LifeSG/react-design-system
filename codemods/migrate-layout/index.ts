import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { propMapping } from "./data";

const IMPORT_PATHS = {
    V2_LAYOUT: "@lifesg/react-design-system/v2_layout",
    LAYOUT: "@lifesg/react-design-system/layout",
};

const IMPORT_SPECIFIERS = {
    V2_LAYOUT: "V2_Layout",
    LAYOUT: "Layout",
};

export default function transformer(file: FileInfo, api: API, options: any) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let isLifesgImport = false;

    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        if (importPath === IMPORT_PATHS.V2_LAYOUT) {
            isLifesgImport = true;

            // Update import path
            if (path.node.specifiers && path.node.specifiers.length > 0) {
                path.node.specifiers.forEach((specifier) => {
                    if (
                        j.ImportSpecifier.check(specifier) &&
                        specifier.imported.name === IMPORT_SPECIFIERS.V2_LAYOUT
                    ) {
                        specifier.imported.name = IMPORT_SPECIFIERS.LAYOUT;
                        if (
                            specifier.local &&
                            specifier.local.name === IMPORT_SPECIFIERS.V2_LAYOUT
                        ) {
                            specifier.local.name = IMPORT_SPECIFIERS.LAYOUT;
                        }

                        path.node.source.value = IMPORT_PATHS.LAYOUT;
                    }
                });
            }
        }
    });

    if (isLifesgImport) {
        // Update V2_Layout to Layout
        source.find(j.JSXMemberExpression).forEach((path) => {
            const { object } = path.node;

            if (
                j.JSXIdentifier.check(object) &&
                object.name === IMPORT_SPECIFIERS.V2_LAYOUT
            ) {
                object.name = IMPORT_SPECIFIERS.LAYOUT;
            }
        });

        // Update Layout props to its V3 Mapped version
        source.find(j.JSXOpeningElement).forEach((path) => {
            const { name, attributes } = path.node;

            if (
                j.JSXMemberExpression.check(name) &&
                j.JSXIdentifier.check(name.object) &&
                name.object.name === IMPORT_SPECIFIERS.LAYOUT
            ) {
                if (attributes && attributes.length > 0) {
                    attributes.forEach((attribute) => {
                        if (
                            j.JSXAttribute.check(attribute) &&
                            j.JSXIdentifier.check(attribute.name)
                        ) {
                            const oldPropName = attribute.name.name;
                            const newPropName = propMapping[oldPropName];

                            if (newPropName) {
                                attribute.name.name = newPropName;
                            }
                        }
                    });
                }
            }
        });

        source.find(j.JSXElement).forEach((path) => {
            const openingElement = path.node.openingElement;
            const { name } = openingElement;
            if (
                j.JSXMemberExpression.check(name) &&
                j.JSXIdentifier.check(name.object)
            ) {
                if (name.object.name === IMPORT_SPECIFIERS.V2_LAYOUT) {
                    name.object.name = IMPORT_SPECIFIERS.LAYOUT;
                }
            }
        });
    }

    return source.toSource();
}
