import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { CodemodUtils } from "../codemod-utils";
import { sizePropMapping } from "./data";

// ======= Constants ======= //

const IMPORT_PATHS = {
    TEXT_LIST: "@lifesg/react-design-system/text-list",
    V2_TEXT_LIST: "@lifesg/react-design-system/v2_text-list",
    DESIGN_SYSTEM: "@lifesg/react-design-system",
};

const IMPORT_SPECIFIERS = {
    TEXT_LIST: "TextList",
    V2_TEXT_LIST: "V2_TextList",
};

const JSX_IDENTIFIERS = {
    TEXT_LIST: "TextList",
    V2_TEXT_LIST: "V2_TextList",
};

// ======= Transformer Function ======= //

export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    const isV2TextListImport = CodemodUtils.hasImport(
        source,
        api,
        [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_TEXT_LIST],
        IMPORT_SPECIFIERS.V2_TEXT_LIST
    );

    if (isV2TextListImport) {
        CodemodUtils.addImport(
            source,
            api,
            IMPORT_PATHS.TEXT_LIST,
            IMPORT_SPECIFIERS.TEXT_LIST
        );

        CodemodUtils.removeImport(
            source,
            api,
            [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_TEXT_LIST],
            IMPORT_SPECIFIERS.V2_TEXT_LIST
        );

        source
            .find(j.Identifier, { name: JSX_IDENTIFIERS.V2_TEXT_LIST })
            .forEach((path) => {
                path.node.name = JSX_IDENTIFIERS.TEXT_LIST;
            });

        source.find(j.MemberExpression).forEach((path) => {
            if (
                j.Identifier.check(path.node.object) &&
                path.node.object.name === JSX_IDENTIFIERS.V2_TEXT_LIST
            ) {
                path.node.object.name = JSX_IDENTIFIERS.TEXT_LIST;
            }
        });

        source.find(j.JSXMemberExpression).forEach((path) => {
            if (
                j.JSXIdentifier.check(path.node.object) &&
                path.node.object.name === JSX_IDENTIFIERS.V2_TEXT_LIST
            ) {
                path.node.object.name = JSX_IDENTIFIERS.TEXT_LIST;
            }
        });

        source.find(j.JSXOpeningElement).forEach((path) => {
            const openingElement = path.node;
            let isTextListElement = false;

            if (
                j.JSXMemberExpression.check(openingElement.name) &&
                j.JSXIdentifier.check(openingElement.name.object) &&
                openingElement.name.object.name === JSX_IDENTIFIERS.TEXT_LIST
            ) {
                isTextListElement = true;
            }

            if (isTextListElement) {
                const attributes = openingElement.attributes;

                attributes?.forEach((attribute) => {
                    if (
                        j.JSXAttribute.check(attribute) &&
                        attribute.name.name === "size" &&
                        j.StringLiteral.check(attribute.value)
                    ) {
                        const sizeValue = attribute.value
                            .value as keyof typeof sizePropMapping;
                        if (sizePropMapping[sizeValue]) {
                            attribute.value = j.literal(
                                sizePropMapping[sizeValue]
                            );
                        }
                    }
                });
            }
        });
    }

    return source.toSource();
}
