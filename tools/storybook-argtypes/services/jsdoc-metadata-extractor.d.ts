/**
 * JsDocMetadataExtractor - Extract JSDoc and comment metadata from TypeScript nodes.
 *
 * Parses JSDoc tags and comments to extract documentation metadata
 * like descriptions, examples, deprecation notices, and custom fields.
 */
import { type IndexSignatureDeclaration, type PropertySignature, type SourceFile } from "ts-morph";
import type { JsDocMeta, StorybookTaggedDeclarationNode } from "../types";
/** Nodes that can carry JSDoc in storybook generation. */
type JsDocNode = IndexSignatureDeclaration | PropertySignature | StorybookTaggedDeclarationNode;
/**
 * Extracts JSDoc metadata from TypeScript declarations.
 * Parses "@deprecated", "@default", "@remarks", "@example", and "@storybookSection" tags.
 *
 * Usage:
 * ```typescript
 * const extractor = new JsDocMetadataExtractor();
 * const meta = extractor.getJsDocMeta(declaration);
 * ```
 */
export declare class JsDocMetadataExtractor {
    private readonly parser;
    /**
     * Check if a source file should be skipped from argTypes generation.
     * Only top-of-file line comments are considered.
     */
    isSkippedSourceFile(sourceFile: SourceFile): boolean;
    hasSkipTag(node: StorybookTaggedDeclarationNode): boolean;
    getJsDocMeta(node: JsDocNode): JsDocMeta;
    mergeJsDocMeta(metas: JsDocMeta[]): JsDocMeta;
    toStorybookDescription(meta: JsDocMeta): string | undefined;
}
export {};
