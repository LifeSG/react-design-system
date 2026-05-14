import type { API, ASTPath, Collection, MemberExpression } from "jscodeshift";
export declare class CodemodUtils {
    static hasImport(source: Collection, api: API, importPath: string | string[], importSpecifier: string): boolean;
    static addImport(source: Collection, api: API, importPath: string, importSpecifier: string): void;
    static removeImport(source: Collection, api: API, importPath: string | string[], importSpecifier: string): void;
    static hasReferences(source: Collection, api: API, importPath: string | string[], importSpecifier: string): boolean;
    static getObjectPath(source: Collection, api: API, path: ASTPath<MemberExpression>): string | undefined;
}
