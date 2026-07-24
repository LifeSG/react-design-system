/**
 * Type definitions for Storybook argTypes generation system.
 * Centralizes all interfaces and types for better discoverability and reusability.
 */

import type {
    IndexSignatureDeclaration,
    InterfaceDeclaration,
    PropertySignature,
    Symbol as TsMorphSymbol,
    TypeAliasDeclaration,
    VariableStatement,
} from "ts-morph";

/**
 * Parsed JSDoc metadata extracted from a TypeScript declaration.
 * Supports these tags: "@deprecated", "@default", "@remarks", "@example", "@storybookSection"
 */
export interface JsDocMeta {
    defaultValue?: string;
    deprecated?: string | boolean;
    description?: string;
    examples?: string[];
    remarks?: string;
    tabGroups?: string[];
}

/**
 * Metadata about a story file that determines which argTypes it uses.
 */
export interface StoryMetadata {
    componentReference?: ComponentReference;
    filePath: string;
    title: string;
    typesFilePath?: string;
}

/**
 * Parsed component reference from story's component property.
 * Examples:
 * - component: Form.CustomField → { rootIdentifier: "Form", memberPath: ["CustomField"] }
 * - component: Button → { rootIdentifier: "Button", memberPath: [] }
 */
export interface ComponentReference {
    memberPath: string[];
    rootIdentifier: string;
}

/**
 * Single argType row for display in Storybook's props table.
 * Maps to Storybook's internal ArgType structure.
 */
export interface GeneratedArgType {
    key: string;
    value: {
        control: false;
        deprecated?: string | boolean;
        description?: string;
        name: string;
        type: {
            required?: boolean;
        };
        table: {
            category: string;
            defaultValue?: { summary: string };
            tabGroup?: string;
            type: { summary?: string; summaryParts?: string[] };
        };
    };
}

/**
 * TypeScript declaration nodes that can have JSDoc comments.
 * Union of declaration kinds that support documentation in Storybook.
 */
export type StorybookTaggedDeclarationNode =
    | InterfaceDeclaration
    | TypeAliasDeclaration
    | VariableStatement;

/**
 * TypeScript symbol that can be resolved to a type.
 * Alias for ts-morph's Symbol type for clearer intent.
 */
export type ResolvedSymbol = TsMorphSymbol;

/**
 * Supported JSDoc declaration node types for metadata extraction.
 */
export type JsDocSupportedNode =
    | IndexSignatureDeclaration
    | InterfaceDeclaration
    | PropertySignature
    | VariableStatement
    | TypeAliasDeclaration;

/**
 * Options for configuring the ArgTypes generation.
 */
export interface ArgTypesGenerationConfig {
    sourceFileGlobs: readonly string[];
    storybookArgTypesFile: string;
    storyFileGlob: string;
    watchRoots: readonly string[];
}

/**
 * Result of resolving a types file for a story.
 * Includes both the file path and metadata about whether it was nested.
 */
export interface ResolvedTypesFile {
    exportName: string;
    filePath: string;
    isNested: boolean;
}

/**
 * File statistics result from FileSystemAdapter.
 */
export interface FileStat {
    isDirectory(): boolean;
    isFile(): boolean;
}
