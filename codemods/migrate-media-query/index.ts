import { API, FileInfo, JSCodeshift } from "jscodeshift";
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

    let isV2MediaQueryImported = false;
    let isV2MediaWidthsImported = false;

    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        if (
            importPath === IMPORT_PATHS.V2_MEDIA ||
            importPath === IMPORT_PATHS.DESIGN_SYSTEM
        ) {
            const specifiers = path.node.specifiers;

            if (specifiers && specifiers.length > 0) {
                let hasV2MediaWidths = false;
                let hasV2MediaQuery = false;

                specifiers.forEach((specifier) => {
                    if (j.ImportSpecifier.check(specifier)) {
                        // Detect usage of V2_MediaQuery
                        // Replace V2_MediaQuery with V3 MediaQuery
                        if (
                            specifier.imported.name ===
                            IMPORT_SPECIFIERS.V2_MEDIA_QUERY
                        ) {
                            hasV2MediaQuery = true;
                            isV2MediaQueryImported = true;

                            specifier.imported.name =
                                IMPORT_SPECIFIERS.MEDIA_QUERY;
                            if (
                                specifier.local &&
                                specifier.local.name ===
                                    IMPORT_SPECIFIERS.V2_MEDIA_QUERY
                            ) {
                                specifier.local.name =
                                    IMPORT_SPECIFIERS.MEDIA_QUERY;
                            }
                        }

                        // Detect usage of V2_MediaWidths
                        if (
                            specifier.imported.name ===
                            IMPORT_SPECIFIERS.V2_MEDIA_WIDTHS
                        ) {
                            hasV2MediaWidths = true;
                            isV2MediaWidthsImported = true;
                        }
                    }
                });

                // Create separate import for V2_MediaWidths
                if (hasV2MediaQuery && hasV2MediaWidths) {
                    path.node.specifiers = specifiers.filter((specifier) => {
                        if (j.ImportSpecifier.check(specifier)) {
                            return (
                                specifier.imported.name !==
                                IMPORT_SPECIFIERS.V2_MEDIA_WIDTHS
                            );
                        }
                        return true;
                    });
                    const newImportDeclaration = j.importDeclaration(
                        [
                            j.importSpecifier(
                                j.identifier(IMPORT_SPECIFIERS.V2_MEDIA_WIDTHS)
                            ),
                        ],
                        j.literal(IMPORT_PATHS.V2_MEDIA)
                    );

                    j(path).insertAfter(newImportDeclaration);
                }

                // Update import path for V2_MediaQuery
                if (hasV2MediaQuery) {
                    if (importPath === IMPORT_PATHS.V2_MEDIA) {
                        path.node.source.value = IMPORT_PATHS.THEME;
                    }
                }
            }
        }
    });

    // Link to migration docs for V2_MediaWidths deprecation
    if (isV2MediaWidthsImported) {
        const hasV2MediaWidths =
            source.find(j.Identifier, {
                name: IMPORT_SPECIFIERS.V2_MEDIA_WIDTHS,
            }).length > 0;

        if (hasV2MediaWidths) {
            console.error(`${WARNINGS.DEPRECATED_USAGE} ${file.path}`);
        }
    }

    // Update MediaQuery usages
    if (isV2MediaQueryImported) {
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

    return source.toSource();
}
