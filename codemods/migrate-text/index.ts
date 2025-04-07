import {
    API,
    ASTPath,
    FileInfo,
    JSCodeshift,
    MemberExpression,
} from "jscodeshift";
import { CodemodUtils } from "../codemod-utils";
import { textComponentMap, textStyleFontMap, weightMap } from "./data";

// ======= Constants ======= //

const IMPORT_PATHS = {
    V2_TEXT: "@lifesg/react-design-system/v2_text",
    DESIGN_SYSTEM: "@lifesg/react-design-system",
    TYPOGRAPHY: "@lifesg/react-design-system/typography",
    THEME: "@lifesg/react-design-system/theme",
};

const IMPORT_SPECIFIERS = {
    V2_TEXT: "V2_Text",
    V2_TEXT_STYLE_HELPER: "V2_TextStyleHelper",
    TYPOGRAPHY: "Typography",
    FONT: "Font",
};

const JSX_IDENTIFIERS = {
    V2_TEXT: "V2_Text",
    TYPOGRAPHY: "Typography",
};

const IDENTIFIERS = {
    V2_GET_TEXT_STYLE: "getTextStyle",
};

// ======= Transformer Function ======= //

export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    const importsText = CodemodUtils.hasImport(
        source,
        api,
        [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_TEXT],
        IMPORT_SPECIFIERS.V2_TEXT
    );
    const importsTextStyleHelper = CodemodUtils.hasImport(
        source,
        api,
        [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_TEXT],
        IMPORT_SPECIFIERS.V2_TEXT_STYLE_HELPER
    );

    const replaceWithTypography = (
        path: ASTPath<MemberExpression>,
        newComponentValue: string
    ) => {
        path.replace(
            j.memberExpression(
                j.identifier(JSX_IDENTIFIERS.TYPOGRAPHY),
                j.identifier(newComponentValue)
            )
        );
    };

    if (importsText) {
        CodemodUtils.addImport(
            source,
            api,
            IMPORT_PATHS.TYPOGRAPHY,
            IMPORT_SPECIFIERS.TYPOGRAPHY
        );

        CodemodUtils.removeImport(
            source,
            api,
            [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_TEXT],
            IMPORT_SPECIFIERS.V2_TEXT
        );

        source
            .find(j.Identifier, { name: JSX_IDENTIFIERS.V2_TEXT })
            .forEach((path) => {
                // Replace V2_Text with Typography
                path.node.name = JSX_IDENTIFIERS.TYPOGRAPHY;
            });

        // Map to respective V3 Typography component usage
        source.find(j.MemberExpression).forEach((path) => {
            const propertyNameParts: string[] = [];
            let currentPath = path.node;
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
                const propertyName = propertyNameParts.join(
                    "."
                ) as keyof typeof textComponentMap;
                const newTypographyValue = textComponentMap[propertyName];
                if (newTypographyValue) {
                    replaceWithTypography(path, newTypographyValue);
                }
            }
        });
    }

    if (importsTextStyleHelper) {
        let usesTextStyleHelper = false;

        source.find(j.CallExpression).forEach((path) => {
            if (
                !j.CallExpression.check(path.node) ||
                !j.MemberExpression.check(path.node.callee) ||
                !j.Identifier.check(path.node.callee.object) ||
                path.node.callee.object.name !==
                    IMPORT_SPECIFIERS.V2_TEXT_STYLE_HELPER ||
                !j.Identifier.check(path.node.callee.property) ||
                path.node.callee.property.name !== IDENTIFIERS.V2_GET_TEXT_STYLE
            ) {
                return;
            }

            const style = j.Literal.check(path.node.arguments[0])
                ? path.node.arguments[0].value
                : undefined;
            const weight = j.Literal.check(path.node.arguments[1])
                ? path.node.arguments[1].value
                : "regular";

            if (!style) {
                return;
            }

            const mappedType =
                textStyleFontMap[style as keyof typeof textStyleFontMap];
            const mappedWeight = weightMap[weight as keyof typeof weightMap];

            j(path).replaceWith(() => {
                return j.memberExpression(
                    j.identifier("Font"),
                    j.literal(`${mappedType}-${mappedWeight}`)
                );
            });

            usesTextStyleHelper = true;
        });

        if (usesTextStyleHelper) {
            CodemodUtils.addImport(
                source,
                api,
                IMPORT_PATHS.THEME,
                IMPORT_SPECIFIERS.FONT
            );
        }

        if (
            !CodemodUtils.hasReferences(
                source,
                api,
                [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_TEXT],
                IMPORT_SPECIFIERS.V2_TEXT_STYLE_HELPER
            )
        ) {
            CodemodUtils.removeImport(
                source,
                api,
                [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_TEXT],
                IMPORT_SPECIFIERS.V2_TEXT_STYLE_HELPER
            );
        }
    }

    return source.toSource();
}
