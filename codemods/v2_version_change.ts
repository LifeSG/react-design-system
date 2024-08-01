import { API, FileInfo, JSCodeshift } from "jscodeshift";

const componentMap = [
    {
        oldName: "DesignToken",
        newName: "v2_DesignToken",
        newPath: "v2_design-token",
    },
    {
        oldName: "Color",
        newName: "v2_Color",
        newPath: "v2_color",
    },
    {
        oldName: "MediaQuery",
        newName: "v2_MediaQuery",
        newPath: "v2_media",
    },
    {
        oldName: "Text",
        newName: "v2_Text",
        newPath: "v2_text",
    },
];

export default function transformer(file: FileInfo, api: API, options: any) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    componentMap.forEach(({ oldName, newName, newPath }) => {
        // Change import declarations
        source.find(j.ImportDeclaration).forEach((path) => {
            let importChanged = false;
            const importPath = path.node.source.value;

            // Check if importPath starts with @lifesg/
            const isPathLib =
                typeof importPath === "string" &&
                importPath.startsWith("@lifesg/");

            // Change specifiers if defined
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
                    }
                });
            }

            // Check and update path by replacing the last word with the new path
            if (
                importChanged &&
                isPathLib &&
                importPath !== "@lifesg/react-design-system" &&
                typeof importPath === "string"
            ) {
                const pathParts = importPath.split("/");
                if (pathParts[pathParts.length - 1] !== "react-design-system") {
                    pathParts[pathParts.length - 1] = newPath;
                    path.node.source.value = pathParts.join("/");
                }
            }
        });

        // Change JSX identifiers
        source
            .find(j.Identifier)
            .filter((path) => path.node.name === oldName)
            .forEach((path) => {
                path.node.name = newName;
            });
    });

    return source.toSource();
}
