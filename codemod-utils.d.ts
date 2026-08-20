import { API, ASTPath, Collection, MemberExpression } from "jscodeshift";
export declare namespace CodemodUtils {
    function hasImport(source: Collection, api: API, importPath: string | string[], importSpecifier: string): boolean;
    function addImport(source: Collection, api: API, importPath: string, importSpecifier: string): void;
    function removeImport(source: Collection, api: API, importPath: string | string[], importSpecifier: string): void;
    function hasReferences(source: Collection, api: API, importPath: string | string[], importSpecifier: string): boolean;
    function getObjectPath(source: Collection, api: API, path: ASTPath<MemberExpression>): string | undefined;
}
