import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { CodemodUtils } from "../codemod-utils";
import { mediaQueryMap } from "./data";

// ======= Constants ======= //

const IMPORT_PATHS = {
    V2_MEDIA: "@lifesg/react-design-system/v2_media",
    DESIGN_SYSTEM: "@lifesg/react-design-system",
    THEME: "@lifesg/react-design-system/theme",
};

const IMPORT_SPECIFIERS = {
    V2_MEDIA_QUERY: "V2_MediaQuery",
    MEDIA_QUERY: "MediaQuery",
    V2_MEDIA_WIDTHS: "V2_MediaWidths",
};

const MEMBER_EXPRESSION_PROPERTIES = {
    MAX_WIDTH: "MaxWidth",
    MIN_WIDTH: "MinWidth",
};

const WARNINGS = {
    DEPRECATED_USAGE: `\x1b[31m[MIGRATION] V2_MediaWidths requires manual migration to Breakpoint. Refer to <"https://github.com/LifeSG/react-design-system/wiki/Migration-to-V3-(WIP)">. File:\x1b[0m`,
};

const IDENTIFIERS = {
    MEDIA_QUERY: "MediaQuery",
};

// ======= Transformer Function ======= //
export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    const isV2MediaQueryImported = CodemodUtils.hasImport(
        source,
        api,
        [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_MEDIA],
        IMPORT_SPECIFIERS.V2_MEDIA_QUERY
    );
    const isV2MediaWidthsImported = CodemodUtils.hasImport(
        source,
        api,
        [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_MEDIA],
        IMPORT_SPECIFIERS.V2_MEDIA_WIDTHS
    );

    // Detect usage of V2_MediaQuery
    // Replace V2_MediaQuery with V3 MediaQuery
    if (isV2MediaQueryImported) {
        CodemodUtils.addImport(
            source,
            api,
            IMPORT_PATHS.THEME,
            IMPORT_SPECIFIERS.MEDIA_QUERY
        );

        CodemodUtils.removeImport(
            source,
            api,
            [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_MEDIA],
            IMPORT_SPECIFIERS.V2_MEDIA_QUERY
        );

        // Rename all instances of V2_MediaQuery to MediaQuery
        source
            .find(j.Identifier, { name: IMPORT_SPECIFIERS.V2_MEDIA_QUERY })
            .forEach((path) => {
                path.node.name = IMPORT_SPECIFIERS.MEDIA_QUERY;
            });

        // Map V2 to V3 breakpoints
        source.find(j.MemberExpression).forEach((path) => {
            const object = path.node.object;
            const property = path.node.property;

            if (
                j.MemberExpression.check(object) &&
                j.Identifier.check(object.object) &&
                object.object.name === IDENTIFIERS.MEDIA_QUERY &&
                j.Identifier.check(object.property) &&
                (object.property.name ===
                    MEMBER_EXPRESSION_PROPERTIES.MAX_WIDTH ||
                    object.property.name ===
                        MEMBER_EXPRESSION_PROPERTIES.MIN_WIDTH) &&
                j.Identifier.check(property)
            ) {
                const queryType = object.property
                    .name as keyof typeof mediaQueryMap;
                const mediaKey =
                    property.name as keyof (typeof mediaQueryMap)[typeof queryType];

                if (
                    mediaQueryMap[queryType] &&
                    mediaQueryMap[queryType][mediaKey]
                ) {
                    const newMediaKey = mediaQueryMap[queryType][mediaKey];
                    property.name = newMediaKey;
                }
            }
        });
    }

    // Link to migration docs for V2_MediaWidths deprecation
    if (isV2MediaWidthsImported) {
        console.error(`${WARNINGS.DEPRECATED_USAGE} ${file.path}`);
    }

    return source.toSource();
}
