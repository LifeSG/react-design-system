/**
 * TypeFormattingService - Transform and format TypeScript type text for Storybook.
 *
 * Handles type text cleaning, union simplification, and formatting
 * to make types more readable in Storybook's argTypes table.
 */

import {
    type IndexSignatureDeclaration,
    type Node,
    type PropertySignature,
    type Type,
    TypeFormatFlags,
} from "ts-morph";

import { TYPE_FORMAT_FLAGS } from "../config/arg-types-config";
import type { JsDocMeta } from "../types/arg-types-types";

/**
 * Formats TypeScript type text for Storybook argTypes.
 * Provides type cleaning, union handling, and description generation.
 *
 * Usage:
 * ```typescript
 * const formatter = new TypeFormattingService();
 * const cleaned = formatter.cleanType('string | number | undefined');
 * ```
 */
export class TypeFormattingService {
    /**
     * Clean type text by removing long namespace prefixes and unions.
     * Simplifies verbose type representations.
     *
     * @param type Raw type text
     * @returns Cleaned type text
     */
    public cleanType(type: string): string {
        // Split namespace paths and keep only last 2 segments to reduce verbosity
        const parts = type.split(".");
        if (parts.length > 2) {
            // Check if we have a long namespace (A.B.C.D -> keep only C.D)
            const lastTwo = parts.slice(-2).join(".");
            const firstPart = parts.slice(0, -2).join(".");
            return type.replace(firstPart + ".", lastTwo);
        }
        return type;
    }

    /**
     * Format a union type into a brief summary.
     * Handles both simple unions and complex union expressions.
     *
     * @param typeText Union type text
     * @returns Formatted union summary
     */
    public formatUnionSummary(typeText: string): string {
        // Handle function types in unions (keep first 50 chars)
        const hasFunctionType = /\(\s*\w+\s*:\s*\w+\s*\)\s*=>/.test(typeText);
        if (hasFunctionType) {
            const match = typeText.match(/\(\s*\w+\s*:\s*\w+\s*\)\s*=>\s*\w+/);
            if (match) {
                return match[0].substring(0, 50) + "...";
            }
        }

        // For standard unions, simplify if too long
        if (typeText.length > 80) {
            const parts = typeText.split("|").map((p) => p.trim());
            if (parts.length > 3) {
                return `${parts.slice(0, 2).join(" | ")} | ...`;
            }
        }

        return typeText;
    }

    /**
     * Check if a type is a simple literal union (like 'a' | 'b' | 'c').
     *
     * @param type ts-morph Type object
     * @returns true if type is a simple literal union, false otherwise
     */
    public isSimpleLiteralUnion(type: Type): boolean {
        if (!type.isUnion()) {
            return false;
        }

        const types = type.getUnionTypes();
        return types.every((t) => {
            const text = t.getText(undefined, TypeFormatFlags.NoTruncation);
            // Check for literal types: 'string', 123, true, etc.
            return /^(['"].*['"]|true|false|\d+)$/.test(text);
        });
    }

    /**
     * Get expanded text for a literal union type.
     * Extracts individual literal values.
     *
     * @param type ts-morph Type object
     * @param contextNode Node for type resolution context
     * @returns Formatted union text
     */
    public getExpandedLiteralUnionText(type: Type, contextNode: Node): string {
        if (!type.isUnion()) {
            return type.getText(contextNode, TYPE_FORMAT_FLAGS);
        }

        const types = type.getUnionTypes();
        const literals = types.map((t) =>
            t.getText(contextNode, TypeFormatFlags.NoTruncation)
        );

        return literals.join(" | ");
    }

    /**
     * Get summary type text for display in Storybook.
     * Chooses between expanded and truncated formats based on length.
     *
     * @param type ts-morph Type object
     * @param contextNode Node for type resolution context
     * @returns Summary type text
     */
    public getSummaryTypeText(type: Type, contextNode: Node): string {
        const fullText = type.getText(contextNode, TYPE_FORMAT_FLAGS);

        if (this.isSimpleLiteralUnion(type)) {
            const expanded = this.getExpandedLiteralUnionText(
                type,
                contextNode
            );
            return expanded.length < 100 ? expanded : fullText;
        }

        return fullText;
    }

    /**
     * Get individual member texts from a union type.
     * Flattens nested unions.
     *
     * @param type ts-morph Type object
     * @param contextNode Node for type resolution context
     * @returns Array of member type texts
     */
    public getUnionMemberTexts(type: Type, contextNode: Node): string[] {
        if (!type.isUnion()) {
            return [type.getText(contextNode, TYPE_FORMAT_FLAGS)];
        }

        const members: string[] = [];
        const types = type.getUnionTypes();

        for (const t of types) {
            if (t.isUnion()) {
                // Recursively flatten nested unions
                members.push(...this.getUnionMemberTexts(t, contextNode));
            } else {
                members.push(t.getText(contextNode, TYPE_FORMAT_FLAGS));
            }
        }

        return members;
    }

    /**
     * Get type text for a property signature.
     *
     * @param property Property signature to format
     * @returns Type text
     */
    public getPropertyTypeText(property: PropertySignature): string {
        const type = property.getType();
        const contextNode = property;
        return this.getSummaryTypeText(type, contextNode);
    }

    /**
     * Get type text for an index signature (e.g., [key: string]: any).
     *
     * @param indexSignature Index signature to format
     * @returns Type text
     */
    public getIndexSignatureTypeText(
        indexSignature: IndexSignatureDeclaration
    ): string {
        const type = indexSignature.getReturnType();
        const contextNode = indexSignature;
        return this.getSummaryTypeText(type, contextNode);
    }

    /**
     * Convert JSDoc metadata to a Storybook description string.
     * Combines description, remarks, and examples.
     *
     * @param meta JSDoc metadata
     * @returns Formatted description string or undefined
     */
    public toStorybookDescription(meta: JsDocMeta): string | undefined {
        const parts: string[] = [];

        if (meta.description) {
            parts.push(meta.description);
        }

        if (meta.remarks) {
            parts.push(`\n**Remarks:** ${meta.remarks}`);
        }

        if (meta.examples && meta.examples.length > 0) {
            parts.push(`\n**Examples:**\n${meta.examples.join("\n")}`);
        }

        if (meta.deprecated) {
            const deprecationMsg =
                typeof meta.deprecated === "string"
                    ? meta.deprecated
                    : "This property is deprecated.";
            parts.push(`\n**Deprecated:** ${deprecationMsg}`);
        }

        return parts.length > 0 ? parts.join("\n") : undefined;
    }
}
