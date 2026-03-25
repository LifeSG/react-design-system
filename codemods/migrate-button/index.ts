import type { API, FileInfo, JSCodeshift } from "jscodeshift";

import { CodemodUtils } from "../codemod-utils";

const IMPORT_PATHS = {
    DESIGN_SYSTEM: "@lifesg/react-design-system",
    BUTTON_WITH_ICON: "@lifesg/react-design-system/button-with-icon",
    ICON_BUTTON: "@lifesg/react-design-system/icon-button",
    BUTTON: "@lifesg/react-design-system/button",
};

const IMPORT_SPECIFIERS = {
    BUTTON_WITH_ICON: "ButtonWithIcon",
    ICON_BUTTON: "IconButton",
    BUTTON: "Button",
};

export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    const isLifesgImport = CodemodUtils.hasImport(
        source,
        api,
        [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.BUTTON_WITH_ICON],
        IMPORT_SPECIFIERS.BUTTON_WITH_ICON
    );

    if (isLifesgImport) {
        CodemodUtils.addImport(
            source,
            api,
            IMPORT_PATHS.BUTTON,
            IMPORT_SPECIFIERS.BUTTON
        );

        CodemodUtils.removeImport(
            source,
            api,
            [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.BUTTON_WITH_ICON],
            IMPORT_SPECIFIERS.BUTTON_WITH_ICON
        );

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

        // Update ColDiv column props to its V3 version
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
