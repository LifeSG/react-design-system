import {
    type InterfaceDeclaration,
    Node,
    type TypeAliasDeclaration,
} from "ts-morph";

import { JsDocParser } from "./jsdoc-parser";

// =============================================================================
// Types
// =============================================================================

export type PropEntry = {
    name: string;
    type: string;
    required: boolean;
    defaultVal: string;
    description: string;
};

// =============================================================================
// Helpers
// =============================================================================

const SKIP_PROP_NAMES = new Set([
    "data-testid",
    "data-error-testid",
    "ref",
    "key",
]);

function isFromReactOrHtmlBase(filePath: string): boolean {
    return (
        filePath.includes("node_modules/typescript") ||
        filePath.includes("node_modules/@types/react") ||
        filePath.includes("node_modules/@types/react-dom")
    );
}

function formatType(raw: string): string {
    return (
        raw
            // Remove trailing | undefined (optional marker)
            .replace(/\s*\|\s*undefined/g, "")
            // Collapse excessive whitespace
            .replace(/\s+/g, " ")
            .trim()
    );
}

// =============================================================================
// PropExtractor
// =============================================================================

/**
 * Extracts a flat list of prop entries from a TypeScript interface or type alias.
 *
 * Handles Omit<>, intersections, extends chains, and union members via ts-morph's
 * fully-resolved type system. Filters out HTML/React base props and internal
 * symbols. Uses JsDocParser for description and @default extraction.
 */
export class PropExtractor {
    private readonly parser = new JsDocParser();

    public collectProps(
        node: InterfaceDeclaration | TypeAliasDeclaration
    ): PropEntry[] {
        const result: PropEntry[] = [];

        for (const sym of node.getType().getProperties()) {
            const name = sym.getName();
            if (SKIP_PROP_NAMES.has(name)) continue;
            if (name.startsWith("__")) continue;

            const decls = sym.getDeclarations();
            const propDecl =
                decls.find(Node.isPropertySignature) ??
                decls.find(Node.isMethodSignature) ??
                decls[0];

            if (!propDecl) continue;

            const declPath = propDecl.getSourceFile().getFilePath();
            if (isFromReactOrHtmlBase(declPath)) continue;

            let type = "unknown";
            if (Node.isPropertySignature(propDecl)) {
                const typeNode = propDecl.getTypeNode();
                type = formatType(
                    typeNode
                        ? typeNode.getText()
                        : propDecl.getType().getText(propDecl)
                );
            } else {
                type = formatType(sym.getTypeAtLocation(node).getText());
            }

            const required = Node.isPropertySignature(propDecl)
                ? !propDecl.hasQuestionToken()
                : false;

            let description = "";
            let defaultVal = "";

            if (Node.isPropertySignature(propDecl)) {
                description =
                    this.parser.getDescriptionFromNode(propDecl, {
                        normalizeNewlinesToSpaces: true,
                    }) ?? "";

                for (const tag of this.parser.getTags(propDecl)) {
                    if (tag.getTagName() === "default") {
                        const comment = this.parser.getTagCommentText(tag);
                        if (comment && !defaultVal) defaultVal = comment;
                    }
                }
            }

            result.push({ name, type, required, defaultVal, description });
        }

        return result;
    }
}
