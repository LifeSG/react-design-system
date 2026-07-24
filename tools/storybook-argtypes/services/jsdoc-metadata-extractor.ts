/**
 * JsDocMetadataExtractor - Extract JSDoc and comment metadata from TypeScript nodes.
 *
 * Parses JSDoc tags and comments to extract documentation metadata
 * like descriptions, examples, deprecation notices, and custom fields.
 */

import {
    type IndexSignatureDeclaration,
    type PropertySignature,
} from "ts-morph";

import type {
    JsDocMeta,
    StorybookTaggedDeclarationNode,
} from "../types/arg-types-types";

/** Nodes that can carry JSDoc in storybook generation. */
type JsDocNode =
    | IndexSignatureDeclaration
    | PropertySignature
    | StorybookTaggedDeclarationNode;

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
export class JsDocMetadataExtractor {
    public getTagCommentText(tag: {
        getCommentText: () => string | undefined;
    }): string | undefined {
        const comment = tag.getCommentText();
        return typeof comment === "string" ? comment.trim() : undefined;
    }

    public getLeadingNonJsDocComments(
        node: StorybookTaggedDeclarationNode
    ): string[] {
        return node
            .getLeadingCommentRanges()
            .map((commentRange) => commentRange.getText())
            .filter((rawText) => !rawText.startsWith("/**"))
            .map((rawText) =>
                rawText
                    .replace(/^\/\//gm, "")
                    .replace(/^\/\*|\*\/$/g, "")
                    .trim()
            )
            .filter(Boolean);
    }

    public getStorybookSectionsFromLeadingComment(
        node: StorybookTaggedDeclarationNode
    ): string[] {
        const marker = "@storybookSection";

        for (const comment of this.getLeadingNonJsDocComments(node)) {
            const markerIndex = comment.indexOf(marker);

            if (markerIndex >= 0) {
                const raw = comment.slice(markerIndex + marker.length).trim();

                if (!raw) {
                    return [];
                }

                return raw
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean);
            }
        }

        return [];
    }

    public hasSkipTag(node: StorybookTaggedDeclarationNode): boolean {
        for (const comment of this.getLeadingNonJsDocComments(node)) {
            if (/@?storybookSkipProps\b/.test(comment)) {
                return true;
            }
        }
        return false;
    }

    public getJsDocMeta(node: JsDocNode): JsDocMeta {
        const isTaggableNode =
            node.getKindName() === "InterfaceDeclaration" ||
            node.getKindName() === "TypeAliasDeclaration" ||
            node.getKindName() === "VariableStatement";

        const tabGroups = isTaggableNode
            ? this.getStorybookSectionsFromLeadingComment(
                  node as StorybookTaggedDeclarationNode
              )
            : [];

        const docs = node.getJsDocs();

        if (!docs.length) {
            return {
                tabGroups: tabGroups.length > 0 ? tabGroups : undefined,
            };
        }

        const description =
            docs
                .map((doc) => doc.getCommentText()?.trim())
                .filter((comment): comment is string => Boolean(comment))
                .join("\n\n") || undefined;

        const tags = docs.flatMap((doc) => doc.getTags());

        let deprecated: string | boolean | undefined;
        let defaultValue: string | undefined;
        const remarks: string[] = [];
        const examples: string[] = [];

        for (const tag of tags) {
            const tagName = tag.getTagName();
            const comment = this.getTagCommentText(tag);

            if (tagName === "deprecated") {
                deprecated = comment || true;
                continue;
            }

            if (tagName === "default") {
                if (!defaultValue && comment) {
                    defaultValue = comment;
                }
                continue;
            }

            if (tagName === "remarks" && comment) {
                remarks.push(comment);
                continue;
            }

            if (tagName === "example" && comment) {
                examples.push(comment);
                continue;
            }
        }

        return {
            description,
            deprecated,
            defaultValue,
            remarks: remarks.length > 0 ? remarks.join("\n\n") : undefined,
            examples: examples.length > 0 ? examples : undefined,
            tabGroups: tabGroups.length > 0 ? tabGroups : undefined,
        };
    }

    public mergeJsDocMeta(metas: JsDocMeta[]): JsDocMeta {
        const descriptions = metas
            .map((meta) => meta.description)
            .filter((value): value is string => Boolean(value));
        const remarks = metas
            .map((meta) => meta.remarks)
            .filter((value): value is string => Boolean(value));
        const examples = metas
            .flatMap((meta) => meta.examples ?? [])
            .filter(Boolean);

        return {
            description:
                descriptions.length > 0
                    ? Array.from(new Set(descriptions)).join("\n\n")
                    : undefined,
            remarks:
                remarks.length > 0
                    ? Array.from(new Set(remarks)).join("\n\n")
                    : undefined,
            examples:
                examples.length > 0 ? Array.from(new Set(examples)) : undefined,
            deprecated: metas.find((meta) => meta.deprecated !== undefined)
                ?.deprecated,
            defaultValue: metas.find((meta) => meta.defaultValue !== undefined)
                ?.defaultValue,
        };
    }

    public toStorybookDescription(meta: JsDocMeta): string | undefined {
        const blocks: string[] = [];

        if (meta.description) {
            blocks.push(meta.description);
        }

        if (meta.deprecated) {
            blocks.push(
                `==Deprecated:\n${
                    typeof meta.deprecated === "string"
                        ? meta.deprecated
                        : "This API is deprecated."
                }==`
            );
        }

        if (meta.remarks) {
            blocks.push(`Remarks:\n${meta.remarks}`);
        }

        if (meta.examples && meta.examples.length > 0) {
            blocks.push(
                meta.examples
                    .map((example) => `Example:\n${example}`)
                    .join("\n\n")
            );
        }

        return blocks.length > 0 ? blocks.join("\n\n") : undefined;
    }
}
