import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { mediaQueryMap } from "./data";

export default function transformer(file: FileInfo, api: API, options: any) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let isV2MediaQueryImport = false;
    let isV2MediaWidthsUsed = false;

    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        if (importPath === "@lifesg/react-design-system/v2_media") {
            isV2MediaQueryImport = true;

            // loop over specifiers to rename V2_MediaQuery
            if (path.node.specifiers && path.node.specifiers.length > 0) {
                path.node.specifiers.forEach((specifier) => {
                    if (j.ImportSpecifier.check(specifier)) {
                        if (specifier.imported.name === "V2_MediaQuery") {
                            specifier.imported.name = "MediaQuery";
                            if (
                                specifier.local &&
                                specifier.local.name === "V2_MediaQuery"
                            ) {
                                specifier.local.name = "MediaQuery";
                            }
                        } else if (
                            specifier.imported.name === "V2_MediaWidths"
                        ) {
                            isV2MediaWidthsUsed = true;
                        }
                    }
                });

                // change the import source path
                path.node.source.value = "@lifesg/react-design-system/theme";
            }
        }
    });

    if (isV2MediaWidthsUsed) {
        let hasLoggedV2MediaWidthsWarning = false;

        source
            .find(j.Identifier, { name: "V2_MediaWidths" })
            .forEach((path) => {
                if (!hasLoggedV2MediaWidthsWarning) {
                    console.error(
                        `\x1b[31mDeprecated usage detected: V2_MediaWidths is deprecated and needs adjustment. File: ${file.path}\x1b[0m`
                    );
                    hasLoggedV2MediaWidthsWarning = true;
                }
            });
    }

    if (isV2MediaQueryImport) {
        // change all instances of V2_MediaQuery
        source.find(j.Identifier, { name: "V2_MediaQuery" }).forEach((path) => {
            path.node.name = "MediaQuery";
        });

        // for nested member expression
        source.find(j.MemberExpression).forEach((path) => {
            const object = path.node.object;
            const property = path.node.property;

            // checking the obj
            if (
                j.MemberExpression.check(object) && // ensure obj is a MemberExpression
                j.Identifier.check(object.object) &&
                object.object.name === "MediaQuery" && // check if MediaQuery
                j.Identifier.check(object.property) && // max,min width
                (object.property.name === "MaxWidth" ||
                    object.property.name === "MinWidth") &&
                j.Identifier.check(property)
            ) {
                const queryType = object.property.name;
                const mediaKey = property.name;

                // check if the mediaKey exists in the mediaQueryMap
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
