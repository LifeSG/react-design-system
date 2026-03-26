import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { componentMap, pathMap } from "./data";

export default function transformer(file: FileInfo, api: API) {
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
            componentMap.forEach(({ oldName, newName }) => {
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
                        const lastPathPart = pathParts[pathParts.length - 1];
                        // map with pathMap to find the new path
                        pathMap.forEach(({ oldPath, newPath }) => {
                            if (lastPathPart === oldPath) {
                                pathParts[pathParts.length - 1] = newPath;
                                path.node.source.value = pathParts.join("/");
                            }
                        });
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
                    // only update if it's a parent property
                    if (!j.MemberExpression.check(path.parent.value.object)) {
                        path.node.name = newName;
                    }
                });
            }
        });
    }

    return source.toSource();
}
