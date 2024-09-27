import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { mediaQueryMap } from "./data";

// ======= Constants ======= //
// Import Paths
const importPathV2Media = "@lifesg/react-design-system/v2_media";
const importPathDesignSystem = "@lifesg/react-design-system";
const importPathTheme = "@lifesg/react-design-system/theme";

// Import Specifiers
const specifierV2MediaQuery = "V2_MediaQuery";
const specifierMediaQuery = "MediaQuery";
const specifierV2MediaWidths = "V2_MediaWidths";

// Member Expression Properties
const memberExpMaxWidth = "MaxWidth";
const memberExpMinWidth = "MinWidth";

// Deprecated Warning
const deprecatedUsageWarning = `\x1b[31mDeprecated usage detected: V2_MediaWidths is deprecated and needs adjustment.\x1b[0m`;

// Identifier Names
const identifierMediaQuery = "MediaQuery";

// ======= Transformer Function ======= //
export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let isMediaQueryImportUpdated = false;
    let isV2MediaWidthsUsed = false;

    // Change Import Declarations
    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        if (
            importPath === importPathV2Media ||
            importPath === importPathDesignSystem
        ) {
            const specifiers = path.node.specifiers;
            let hasMediaQuerySpecifier = false;

            if (specifiers && specifiers.length > 0) {
                specifiers.forEach((specifier) => {
                    if (j.ImportSpecifier.check(specifier)) {
                        // Handle V2_MediaQuery
                        if (specifier.imported.name === specifierV2MediaQuery) {
                            specifier.imported.name = specifierMediaQuery;
                            if (
                                specifier.local &&
                                specifier.local.name === specifierV2MediaQuery
                            ) {
                                specifier.local.name = specifierMediaQuery;
                            }
                            hasMediaQuerySpecifier = true;
                        }

                        // Detect usage of V2_MediaWidths
                        if (
                            specifier.imported.name === specifierV2MediaWidths
                        ) {
                            isV2MediaWidthsUsed = true;
                        }
                    }
                });

                // If MediaQuery was imported, set flag to update usages
                if (hasMediaQuerySpecifier) {
                    isMediaQueryImportUpdated = true;
                }

                // Update import path
                if (importPath === importPathV2Media) {
                    path.node.source.value = importPathTheme;
                }
            }
        }
    });

    // Handle Deprecated V2_MediaWidths Usage
    if (isV2MediaWidthsUsed) {
        let hasLoggedV2MediaWidthsWarning = false;

        source
            .find(j.Identifier, { name: specifierV2MediaWidths })
            .forEach((path) => {
                if (!hasLoggedV2MediaWidthsWarning) {
                    console.error(
                        `File: ${file.path}\n${deprecatedUsageWarning}`
                    );
                    hasLoggedV2MediaWidthsWarning = true;
                }
            });
    }

    // Update MediaQuery Imports and Usages
    if (isMediaQueryImportUpdated) {
        // Rename all instances of V2_MediaQuery to MediaQuery
        source
            .find(j.Identifier, { name: specifierV2MediaQuery })
            .forEach((path) => {
                path.node.name = specifierMediaQuery;
            });

        // Update Member Expressions related to MediaQuery
        source.find(j.MemberExpression).forEach((path) => {
            const object = path.node.object;
            const property = path.node.property;

            if (
                j.MemberExpression.check(object) &&
                j.Identifier.check(object.object) &&
                object.object.name === identifierMediaQuery &&
                j.Identifier.check(object.property) &&
                (object.property.name === memberExpMaxWidth ||
                    object.property.name === memberExpMinWidth) &&
                j.Identifier.check(property)
            ) {
                const queryType = object.property.name;
                const mediaKey = property.name;

                // Check and replace mediaKey using mediaQueryMap
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
