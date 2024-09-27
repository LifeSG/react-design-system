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
    DEPRECATED_USAGE: `\x1b[31mDeprecated usage detected: V2_MediaWidths is deprecated and needs adjustment.\x1b[0m`,
};

const IDENTIFIERS = {
    MEDIA_QUERY: "MediaQuery",
};

// ======= Transformer Function ======= //
export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let IS_MEDIA_QUERY_IMPORT_UPDATED = false;
    let IS_V2_MEDIA_WIDTHS_USED = false;

    // Process Import Declarations
    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        if (
            importPath === IMPORT_PATHS.V2_MEDIA ||
            importPath === IMPORT_PATHS.DESIGN_SYSTEM
        ) {
            const specifiers = path.node.specifiers;
            let HAS_MEDIA_QUERY_SPECIFIER = false;

            if (specifiers && specifiers.length > 0) {
                specifiers.forEach((specifier) => {
                    if (j.ImportSpecifier.check(specifier)) {
                        // Handle V2_MediaQuery
                        if (
                            specifier.imported.name ===
                            IMPORT_SPECIFIERS.V2_MEDIA_QUERY
                        ) {
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
                            HAS_MEDIA_QUERY_SPECIFIER = true;
                        }

                        // Detect usage of V2_MediaWidths
                        if (
                            specifier.imported.name ===
                            IMPORT_SPECIFIERS.V2_MEDIA_WIDTHS
                        ) {
                            IS_V2_MEDIA_WIDTHS_USED = true;
                        }
                    }
                });

                // If MediaQuery was imported, set flag to update usages
                if (HAS_MEDIA_QUERY_SPECIFIER) {
                    IS_MEDIA_QUERY_IMPORT_UPDATED = true;
                }

                // Update import path if necessary
                if (importPath === IMPORT_PATHS.V2_MEDIA) {
                    path.node.source.value = IMPORT_PATHS.THEME;
                }
            }
        }
    });

    // Handle Deprecated V2_MediaWidths Usage
    if (IS_V2_MEDIA_WIDTHS_USED) {
        const hasV2MediaWidths =
            source.find(j.Identifier, {
                name: IMPORT_SPECIFIERS.V2_MEDIA_WIDTHS,
            }).length > 0;

        if (hasV2MediaWidths) {
            console.error(`File: ${file.path}\n${WARNINGS.DEPRECATED_USAGE}`);
        }
    }

    // Update MediaQuery Imports and Usages
    if (IS_MEDIA_QUERY_IMPORT_UPDATED) {
        // Rename all instances of V2_MediaQuery to MediaQuery
        source
            .find(j.Identifier, { name: IMPORT_SPECIFIERS.V2_MEDIA_QUERY })
            .forEach((path) => {
                path.node.name = IMPORT_SPECIFIERS.MEDIA_QUERY;
            });

        // Update Member Expressions related to MediaQuery
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
                const queryType = object.property.name;
                const mediaKey = property.name;

                // Check and replace mediaKey using mediaQueryMap
                if (
                    mediaQueryMap[queryType] &&
                    mediaQueryMap[queryType][mediaKey]
                ) {
                    const NEW_MEDIA_KEY = mediaQueryMap[queryType][mediaKey];
                    property.name = NEW_MEDIA_KEY;
                }
            }
        });
    }

    return source.toSource();
}
