import { API, FileInfo, JSCodeshift } from "jscodeshift";

const componentMap = [
    {
        oldName: "DesignToken",
        newName: "v2_DesignToken",
        newPath: "v2_design-token",
    },
    {
        oldName: "DesignTokenSet",
        newName: "v2_DesignTokenSet",
        newPath: "v2_design-token",
    },
    {
        oldName: "CssValue",
        newName: "v2_CssValue",
        newPath: "v2_design-token",
    },
    {
        oldName: "DesignTokenSetOptions",
        newName: "v2_DesignTokenSetOptions",
        newPath: "v2_design-token",
    },
    {
        oldName: "MediaQuery",
        newName: "v2_MediaQuery",
        newPath: "v2_media",
    },
    {
        oldName: "MediaWidths",
        newName: "v2_MediaWidths",
        newPath: "v2_media",
    },
    {
        oldName: "MediaWidth",
        newName: "v2_MediaWidth",
        newPath: "v2_media",
    },
    {
        oldName: "MediaType",
        newName: "v2_MediaType",
        newPath: "v2_media",
    },
    {
        oldName: "Color",
        newName: "v2_Color",
        newPath: "v2_color",
    },
    {
        oldName: "ColorSet",
        newName: "v2_ColorSet",
        newPath: "v2_color",
    },
    {
        oldName: "ValidationElementAttributes",
        newName: "v2_ValidationElementAttributes",
        newPath: "v2_color",
    },
    {
        oldName: "ValidationTypes",
        newName: "v2_ValidationTypes",
        newPath: "v2_color",
    },
    {
        oldName: "ColorSetOptions",
        newName: "v2_ColorSetOptions",
        newPath: "v2_color",
    },
    {
        oldName: "Text",
        newName: "v2_Text",
        newPath: "v2_text",
    },
    {
        oldName: "TextStyleHelper",
        newName: "v2_TextStyleHelper",
        newPath: "v2_text",
    },
    {
        oldName: "TextStyle",
        newName: "v2_TextStyle",
        newPath: "v2_text",
    },
    {
        oldName: "TextSizeType",
        newName: "v2_TextSizeType",
        newPath: "v2_text",
    },
    {
        oldName: "TextLinkSizeType",
        newName: "v2_TextLinkSizeType",
        newPath: "v2_text",
    },
    {
        oldName: "TextStyleSpec",
        newName: "v2_TextStyleSpec",
        newPath: "v2_text",
    },
    {
        oldName: "TextStyleSetType",
        newName: "v2_TextStyleSetType",
        newPath: "v2_text",
    },
    {
        oldName: "TextStyleSetOptionsType",
        newName: "v2_TextStyleSetOptionsType",
        newPath: "v2_text",
    },
    {
        oldName: "TextWeight",
        newName: "v2_TextWeight",
        newPath: "v2_text",
    },
    {
        oldName: "TextProps",
        newName: "v2_TextProps",
        newPath: "v2_text",
    },
    {
        oldName: "TextLinkProps",
        newName: "v2_TextLinkProps",
        newPath: "v2_text",
    },
    {
        oldName: "TextLinkStyleProps",
        newName: "v2_TextLinkStyleProps",
        newPath: "v2_text",
    },
];

export default function transformer(file: FileInfo, api: API, options: any) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    const componentsToChange = new Set();

    // change import declarations and check which components to change
    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        // check if importPath starts with @lifesg/
        const isPathLib =
            typeof importPath === "string" && importPath.startsWith("@lifesg/");

        if (isPathLib) {
            componentMap.forEach(({ oldName, newName, newPath }) => {
                let importChanged = false;

                // change specifiers
                if (path.node.specifiers) {
                    path.node.specifiers.forEach((specifier) => {
                        if (
                            specifier.type === "ImportSpecifier" &&
                            specifier.imported.name === oldName
                        ) {
                            specifier.imported.name = newName;
                            if (
                                specifier.local &&
                                specifier.local.name === oldName
                            ) {
                                specifier.local.name = newName;
                            }
                            importChanged = true;
                            componentsToChange.add(oldName);
                        }
                    });
                }

                // check and update path by replacing the last word with the new path
                if (
                    importChanged &&
                    importPath !== "@lifesg/react-design-system" &&
                    typeof importPath === "string"
                ) {
                    const pathParts = importPath.split("/");
                    if (
                        pathParts[pathParts.length - 1] !==
                        "react-design-system"
                    ) {
                        pathParts[pathParts.length - 1] = newPath;
                        path.node.source.value = pathParts.join("/");
                    }
                }
            });
        }
    });

    // change JSX identifiers and normal identifiers
    if (componentsToChange.size > 0) {
        componentMap.forEach(({ oldName, newName }) => {
            if (componentsToChange.has(oldName)) {
                source
                    .find(j.JSXIdentifier, { name: oldName })
                    .forEach((path) => {
                        path.node.name = newName;
                    });

                source.find(j.Identifier, { name: oldName }).forEach((path) => {
                    path.node.name = newName;
                });
            }
        });
    }

    return source.toSource();
}
