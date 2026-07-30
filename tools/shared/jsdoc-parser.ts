type JsDocTagLike = {
    getCommentText: () => string | undefined;
    getTagName: () => string;
};

type JsDocBlockLike = {
    getCommentText: () => string | undefined;
    getTags: () => JsDocTagLike[];
};

type JsDocNodeLike = {
    getJsDocs: () => JsDocBlockLike[];
};

type LeadingCommentNodeLike = {
    getLeadingCommentRanges: () => Array<{ getText: () => string }>;
};

/**
 * Shared parser for JSDoc tags and leading comments.
 */
export class JsDocParser {
    public getTagCommentText(tag: {
        getCommentText: () => string | undefined;
    }): string | undefined {
        const comment = tag.getCommentText();
        return typeof comment === "string" ? comment.trim() : undefined;
    }

    public getDescriptionFromNode(
        node: JsDocNodeLike,
        options?: {
            joinWith?: string;
            normalizeNewlinesToSpaces?: boolean;
        }
    ): string | undefined {
        const descriptions = node
            .getJsDocs()
            .map((doc) =>
                this.normalizeCommentText(doc.getCommentText(), options)
            )
            .filter((comment): comment is string => Boolean(comment));

        if (descriptions.length === 0) {
            return undefined;
        }

        return descriptions.join(options?.joinWith ?? "\n\n");
    }

    public getTags(node: JsDocNodeLike): JsDocTagLike[] {
        return node.getJsDocs().flatMap((doc) => doc.getTags());
    }

    public getLeadingNonJsDocComments(node: LeadingCommentNodeLike): string[] {
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

    public getMarkerValuesFromLeadingComments(
        node: LeadingCommentNodeLike,
        marker: string
    ): string[] {
        for (const comment of this.getLeadingNonJsDocComments(node)) {
            const markerIndex = comment.indexOf(marker);

            if (markerIndex < 0) {
                continue;
            }

            const raw = comment.slice(markerIndex + marker.length).trim();
            if (!raw) {
                return [];
            }

            return this.splitCommaSeparatedValues(raw);
        }

        return [];
    }

    public splitCommaSeparatedValues(rawValue: string | undefined): string[] {
        if (!rawValue) {
            return [];
        }

        return rawValue
            .trim()
            .split(",")
            .map((value) => value.trim())
            .filter(Boolean);
    }

    public normalizeCommentText(
        text: string | undefined,
        options?: {
            normalizeNewlinesToSpaces?: boolean;
        }
    ): string | undefined {
        if (typeof text !== "string") {
            return undefined;
        }

        const trimmed = text.trim();
        if (!trimmed) {
            return undefined;
        }

        return options?.normalizeNewlinesToSpaces
            ? trimmed.replaceAll("\n", " ")
            : trimmed;
    }
}
