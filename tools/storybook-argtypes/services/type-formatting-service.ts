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
} from "ts-morph";

import { TYPE_FORMAT_FLAGS } from "../config/arg-types-config";

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
export class TypeFormattingService {
    public cleanType(type: string): string {
        let cleaned = type
            .replace(/\s*\|\s*undefined/g, "")
            .replace(/^\s*\|\s*/, "")
            .replace(/\s+/g, " ")
            .trim();

        if (cleaned.startsWith("(") && cleaned.endsWith(")")) {
            let depth = 0;
            let outerWraps = true;

            for (let i = 0; i < cleaned.length - 1; i++) {
                if (cleaned[i] === "(") depth++;
                if (cleaned[i] === ")") depth--;
                if (depth === 0) {
                    outerWraps = false;
                    break;
                }
            }

            if (outerWraps) {
                cleaned = cleaned.slice(1, -1);
            }
        }

        return cleaned;
    }

    public formatUnionSummary(typeText: string): string {
        const members: string[] = [];
        let current = "";
        let parenDepth = 0;
        let bracketDepth = 0;
        let braceDepth = 0;
        let angleDepth = 0;

        for (const char of typeText) {
            if (char === "(") parenDepth++;
            if (char === ")") parenDepth = Math.max(0, parenDepth - 1);
            if (char === "[") bracketDepth++;
            if (char === "]") bracketDepth = Math.max(0, bracketDepth - 1);
            if (char === "{") braceDepth++;
            if (char === "}") braceDepth = Math.max(0, braceDepth - 1);
            if (char === "<") angleDepth++;
            if (char === ">") angleDepth = Math.max(0, angleDepth - 1);

            const isTopLevel =
                parenDepth === 0 &&
                bracketDepth === 0 &&
                braceDepth === 0 &&
                angleDepth === 0;

            if (char === "|" && isTopLevel) {
                members.push(current.trim());
                current = "";
                continue;
            }

            current += char;
        }

        if (current.trim()) {
            members.push(current.trim());
        }

        return members.length <= 1
            ? typeText
            : members.filter(Boolean).join("\n| ");
    }

    public isSimpleLiteralUnion(type: Type): boolean {
        const nonNullableType = type.getNonNullableType();

        if (!nonNullableType.isUnion()) {
            return false;
        }

        const unionTypes = nonNullableType.getUnionTypes();
        const hasBooleanLiterals = unionTypes.some((t) => t.isBooleanLiteral());
        const hasOnlyBooleanLiterals =
            hasBooleanLiterals && unionTypes.every((t) => t.isBooleanLiteral());

        if (hasOnlyBooleanLiterals) {
            return false;
        }

        return unionTypes.every(
            (t) =>
                t.isStringLiteral() ||
                t.isNumberLiteral() ||
                t.isBooleanLiteral()
        );
    }

    public getExpandedLiteralUnionText(
        type: Type,
        contextNode: Node
    ): string | undefined {
        const nonNullableType = type.getNonNullableType();

        if (!nonNullableType.isUnion()) {
            return undefined;
        }

        const unionTypes = nonNullableType.getUnionTypes();
        const hasOnlyLiterals = unionTypes.every(
            (unionType) =>
                unionType.isStringLiteral() ||
                unionType.isNumberLiteral() ||
                unionType.isBooleanLiteral()
        );

        if (!hasOnlyLiterals) {
            return undefined;
        }

        return this.cleanType(
            unionTypes
                .map((unionType) =>
                    unionType.getText(contextNode, TYPE_FORMAT_FLAGS)
                )
                .sort((a, b) => a.localeCompare(b))
                .join(" | ")
        );
    }

    public getSummaryTypeText(
        type: Type,
        contextNode: Node,
        fallbackText?: string
    ): string {
        return (
            this.getExpandedLiteralUnionText(type, contextNode) ??
            this.cleanType(
                fallbackText ?? type.getText(contextNode, TYPE_FORMAT_FLAGS)
            )
        );
    }

    public getUnionMemberTexts(
        type: Type,
        contextNode: Node
    ): string[] | undefined {
        const nonNullableType = type.getNonNullableType();

        if (!nonNullableType.isUnion()) {
            return undefined;
        }

        if (nonNullableType.isBoolean()) {
            return undefined;
        }

        const unionTypes = nonNullableType.getUnionTypes();

        if (unionTypes.length > 6) {
            return undefined;
        }

        const parts = unionTypes
            .map((t) =>
                this.cleanType(t.getText(contextNode, TYPE_FORMAT_FLAGS))
            )
            .sort((a, b) => a.localeCompare(b));

        if (parts.some((p) => p.includes("import("))) {
            return undefined;
        }

        return parts;
    }

    public getPropertyTypeText(property: PropertySignature): string {
        const typeNodeText = property.getTypeNode()?.getText();

        if (typeNodeText) {
            return this.cleanType(typeNodeText);
        }

        const resolvedType = property.getType();

        if (resolvedType.isAny() || resolvedType.isUnknown()) {
            return "-";
        }

        return this.getSummaryTypeText(resolvedType, property);
    }

    public getIndexSignatureTypeText(
        indexSignature: IndexSignatureDeclaration
    ): string {
        const summary = this.getSummaryTypeText(
            indexSignature.getReturnType(),
            indexSignature,
            indexSignature.getReturnTypeNode()?.getText()
        );

        return this.formatUnionSummary(summary);
    }
}
