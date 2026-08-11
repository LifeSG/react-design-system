/**
 * TypeFormattingService - Transform and format TypeScript type text for Storybook.
 *
 * Handles type text cleaning, union simplification, and formatting
 * to make types more readable in Storybook's argTypes table.
 */
import { type IndexSignatureDeclaration, type Node, type PropertySignature, type Type } from "ts-morph";
/**
 * Formats TypeScript type text for Storybook argTypes.
 * Provides type cleaning, union handling, and description generation.
 *
 * Usage:
 * ```typescript
 * const formatter = new TypeFormattingService();
 * const cleaned = formatter.cleanType('string | undefined');
 * ```
 */
export declare class TypeFormattingService {
    cleanType(type: string): string;
    formatUnionSummary(typeText: string): string;
    isSimpleLiteralUnion(type: Type): boolean;
    getExpandedLiteralUnionText(type: Type, contextNode: Node): string | undefined;
    getSummaryTypeText(type: Type, contextNode: Node, fallbackText?: string): string;
    getUnionMemberTexts(type: Type, contextNode: Node): string[] | undefined;
    getPropertyTypeText(property: PropertySignature): string;
    getIndexSignatureTypeText(indexSignature: IndexSignatureDeclaration): string;
}
