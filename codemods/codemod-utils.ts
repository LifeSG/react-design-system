import {
    API,
    ASTPath,
    Collection,
    JSCodeshift,
    MemberExpression,
} from "jscodeshift";

export namespace CodemodUtils {
    export function hasImport(
        source: Collection,
        api: API,
        importPath: string | string[],
        importSpecifier: string
    ) {
        const j: JSCodeshift = api.jscodeshift;

        let imported = false;
        source.find(j.ImportDeclaration).forEach((path) => {
            const currentImportPath = path.node.source.value as string;

            if (Array.isArray(importPath)) {
                if (!importPath.includes(currentImportPath)) {
                    return;
                }
            } else {
                if (currentImportPath !== importPath) {
                    return;
                }
            }

            path.node.specifiers?.forEach((specifier) => {
                if (
                    j.ImportSpecifier.check(specifier) &&
                    specifier.imported.name === importSpecifier
                ) {
                    imported = true;
                }
            });
        });

        return imported;
    }

    export function addImport(
        source: Collection,
        api: API,
        importPath: string,
        importSpecifier: string
    ) {
        const j: JSCodeshift = api.jscodeshift;

        const hasExistingImport =
            source.find(j.ImportDeclaration, {
                source: { value: importPath },
            }).length > 0;

        if (hasExistingImport) {
            // Append the import
            source.find(j.ImportDeclaration).forEach((path) => {
                const currentImportPath = path.node.source.value;

                if (currentImportPath === importPath) {
                    const hasSpecifier =
                        j(path).find(j.ImportSpecifier, {
                            imported: { name: importSpecifier },
                        }).length > 0;

                    if (!hasSpecifier) {
                        // Add to existing import
                        path.node.specifiers?.push(
                            j.importSpecifier(j.identifier(importSpecifier))
                        );
                    }
                }
            });
        } else {
            // Add the import
            const newImportDeclaration = j.importDeclaration(
                [j.importSpecifier(j.identifier(importSpecifier))],
                j.literal(importPath)
            );

            source.get().node.program.body.unshift(newImportDeclaration);
        }
    }

    export function removeImport(
        source: Collection,
        api: API,
        importPath: string | string[],
        importSpecifier: string
    ) {
        const j: JSCodeshift = api.jscodeshift;

        source.find(j.ImportDeclaration).forEach((path) => {
            const currentImportPath = path.node.source.value as string;

            if (Array.isArray(importPath)) {
                if (!importPath.includes(currentImportPath)) {
                    return;
                }
            } else {
                if (currentImportPath !== importPath) {
                    return;
                }
            }

            const specifiers = j(path).find(j.ImportSpecifier, {
                imported: { name: importSpecifier },
            });

            if (specifiers.length) {
                specifiers.remove();

                // Remove entire import if no longer used
                const unused = j(path).find(j.ImportSpecifier).length === 0;
                if (unused) {
                    j(path).remove();
                }
            }
        });
    }

    export function hasReferences(
        source: Collection,
        api: API,
        importPath: string | string[],
        importSpecifier: string
    ) {
        const j: JSCodeshift = api.jscodeshift;

        const imported = hasImport(source, api, importPath, importSpecifier);
        if (imported) {
            return (
                source
                    .find(j.Identifier, { name: importSpecifier })
                    .filter((id) => {
                        // found in the import statement, does not count as usage
                        return !j(id).closest(j.ImportDeclaration).length;
                    }).length > 0
            );
        }

        return false;
    }

    export function getObjectPath(
        source: Collection,
        api: API,
        path: ASTPath<MemberExpression>
    ) {
        const j: JSCodeshift = api.jscodeshift;

        if (j.MemberExpression.check(path.node)) {
            return j(path.node).toSource();
        }
    }
}
