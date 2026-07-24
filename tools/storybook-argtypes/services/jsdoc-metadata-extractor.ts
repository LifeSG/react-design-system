/**
 * JsDocMetadataExtractor - Extract JSDoc and comment metadata from TypeScript nodes.
 *
 * Parses JSDoc tags and comments to extract documentation metadata
 * like descriptions, examples, deprecation notices, and custom fields.
 */

import type {
    JsDocMeta,
    StorybookTaggedDeclarationNode,
} from "../types/arg-types-types";

/**
 * Extracts JSDoc metadata from TypeScript declarations.
 * Parses @description, @example, @deprecated, @remarks, @default, @tabGroup tags.
 *
 * Usage:
 * ```typescript
 * const extractor = new JsDocMetadataExtractor();
 * const meta = extractor.getJsDocMeta(declaration);
 * ```
 */
export class JsDocMetadataExtractor {
    /**
     * Get text content from a JSDoc tag.
     *
     * @param tag JSDoc tag with getCommentText method
     * @returns Trimmed comment text or undefined
     */
    public getTagCommentText(tag: {
        getCommentText: () => string | undefined;
    }): string | undefined {
        const comment = tag.getCommentText();
        return typeof comment === "string" ? comment.trim() : undefined;
    }

    /**
     * Get leading comments that are not JSDoc blocks.
     * Includes single-line and multi-line comments before a declaration.
     *
     * @param node TypeScript declaration node
     * @returns Array of comment texts
     */
    public getLeadingNonJsDocComments(
        node: StorybookTaggedDeclarationNode
    ): string[] {
        const comments: string[] = [];
        const leadingComments = node.getLeadingCommentRanges();

        for (const comment of leadingComments) {
            const text = comment.getText();
            // Skip JSDoc blocks (/** ... */)
            if (!text.startsWith("/**")) {
                // Remove comment markers and normalize
                const cleaned = text
                    .replace(/^\/\/\s?/, "") // Single-line: // comment
                    .replace(/^\/\*\s?/, "") // Multi-line: /* comment
                    .replace(/\s?\*\/$/, "") // Multi-line end: */
                    .trim();
                if (cleaned) {
                    comments.push(cleaned);
                }
            }
        }

        return comments;
    }

    /**
     * Extract Storybook sections from leading comments.
     * Looks for sections like "---" or custom markers.
     *
     * @param node TypeScript declaration node
     * @returns Array of section texts
     */
    public getStorybookSectionsFromLeadingComment(
        node: StorybookTaggedDeclarationNode
    ): string[] {
        const leadingComments = node.getLeadingCommentRanges();
        const sections: string[] = [];

        for (const comment of leadingComments) {
            const text = comment.getText();
            if (text.includes("---")) {
                const parts = text.split("---");
                sections.push(...parts.map((p) => p.trim()).filter(Boolean));
            }
        }

        return sections;
    }

    /**
     * Check if a declaration has a @skip or @storybook-skip tag in JSDoc.
     *
     * @param node TypeScript declaration node
     * @returns true if skip tag is present, false otherwise
     */
    public hasSkipTag(node: StorybookTaggedDeclarationNode): boolean {
        const jsDocs = node.getJsDocs();
        for (const jsDoc of jsDocs) {
            const tags = jsDoc.getTags();
            for (const tag of tags) {
                const tagName = tag.getTagName();
                if (tagName === "skip" || tagName === "storybook-skip") {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Extract all JSDoc metadata from a declaration.
     * Parses @description, @example, @deprecated, @remarks, @default, @tabGroup tags.
     *
     * @param node TypeScript declaration node
     * @returns JSDoc metadata object
     */
    public getJsDocMeta(node: StorybookTaggedDeclarationNode): JsDocMeta {
        const meta: JsDocMeta = {};
        const jsDocs = node.getJsDocs();

        if (jsDocs.length === 0) {
            return meta;
        }

        for (const jsDoc of jsDocs) {
            // Get main description (text before any tags)
            const description = jsDoc.getDescription();
            if (description && !meta.description) {
                meta.description = description.trim().replace(/\n\s+/g, "\n");
            }

            // Process tags
            const tags = jsDoc.getTags();
            for (const tag of tags) {
                const tagName = tag.getTagName();
                const tagComment = this.getTagCommentText(tag);

                switch (tagName) {
                    case "description":
                        if (tagComment) {
                            meta.description = tagComment;
                        }
                        break;
                    case "example":
                        if (tagComment) {
                            if (!meta.examples) {
                                meta.examples = [];
                            }
                            meta.examples.push(tagComment);
                        }
                        break;
                    case "deprecated":
                        meta.deprecated = tagComment || true;
                        break;
                    case "remarks":
                        if (tagComment) {
                            meta.remarks = tagComment;
                        }
                        break;
                    case "default":
                        if (tagComment) {
                            meta.defaultValue = tagComment;
                        }
                        break;
                    case "tabGroup":
                        if (tagComment) {
                            if (!meta.tabGroups) {
                                meta.tabGroups = [];
                            }
                            meta.tabGroups.push(tagComment);
                        }
                        break;
                }
            }
        }

        return meta;
    }

    /**
     * Merge multiple JSDoc metadata objects into one.
     * Later objects override earlier ones for conflicting keys.
     *
     * @param metas Array of JSDoc metadata objects
     * @returns Merged metadata object
     */
    public mergeJsDocMeta(metas: JsDocMeta[]): JsDocMeta {
        const result: JsDocMeta = {};

        for (const meta of metas) {
            // Scalar values: later overrides earlier
            if (meta.description) {
                result.description = meta.description;
            }
            if (meta.deprecated) {
                result.deprecated = meta.deprecated;
            }
            if (meta.remarks) {
                result.remarks = meta.remarks;
            }
            if (meta.defaultValue) {
                result.defaultValue = meta.defaultValue;
            }

            // Arrays: merge
            if (meta.examples) {
                result.examples = [
                    ...(result.examples ?? []),
                    ...meta.examples,
                ];
            }
            if (meta.tabGroups) {
                result.tabGroups = [
                    ...(result.tabGroups ?? []),
                    ...meta.tabGroups,
                ];
            }
        }

        return result;
    }
}
