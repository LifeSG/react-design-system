import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { propMapping } from "./data";

const IMPORT_PATHS = {
    V2_LAYOUT: "@lifesg/react-design-system/v2_layout",
    DESIGN_SYSTEM: "@lifesg/react-design-system",
    LAYOUT: "@lifesg/react-design-system/layout",
};

const IMPORT_SPECIFIERS = {
    V2_LAYOUT: "V2_Layout",
    LAYOUT: "Layout",
};

export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let isLifesgImport = false;

    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        if (
            importPath === IMPORT_PATHS.V2_LAYOUT ||
            importPath === IMPORT_PATHS.DESIGN_SYSTEM
        ) {
            // Update V2 modules to V3 modules
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

                        // Replace import subpath only
                        if (importPath === IMPORT_PATHS.V2_LAYOUT) {
                            path.node.source.value = IMPORT_PATHS.LAYOUT;
                        }

                        isLifesgImport = true;
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

        source
            .find(j.Identifier, { name: IMPORT_SPECIFIERS.V2_LAYOUT })
            .forEach((path) => {
                path.node.name = IMPORT_SPECIFIERS.LAYOUT;
            });

        // Update Layout props to its V3 Mapped version
        source.find(j.JSXOpeningElement).forEach((path) => {
            const { name, attributes } = path.node;

            if (
                j.JSXMemberExpression.check(name) &&
                j.JSXIdentifier.check(name.object) &&
                name.object.name === IMPORT_SPECIFIERS.LAYOUT &&
                j.JSXIdentifier.check(name.property) &&
                name.property.name === "ColDiv"
            ) {
                if (attributes && attributes.length > 0) {
                    attributes.forEach((attribute) => {
                        if (
                            j.JSXAttribute.check(attribute) &&
                            j.JSXIdentifier.check(attribute.name)
                        ) {
                            const oldPropName = attribute.name.name;
                            const newPropName =
                                propMapping[
                                    oldPropName as keyof typeof propMapping
                                ];

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
