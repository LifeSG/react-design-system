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
    getLeadingCommentRanges: () => Array<{
        getText: () => string;
    }>;
};
/**
 * Shared parser for JSDoc tags and leading comments.
 */
export declare class JsDocParser {
    getTagCommentText(tag: {
        getCommentText: () => string | undefined;
    }): string | undefined;
    getDescriptionFromNode(node: JsDocNodeLike, options?: {
        joinWith?: string;
        normalizeNewlinesToSpaces?: boolean;
    }): string | undefined;
    getTags(node: JsDocNodeLike): JsDocTagLike[];
    getLeadingNonJsDocComments(node: LeadingCommentNodeLike): string[];
    getMarkerValuesFromLeadingComments(node: LeadingCommentNodeLike, marker: string): string[];
    splitCommaSeparatedValues(rawValue: string | undefined): string[];
    normalizeCommentText(text: string | undefined, options?: {
        normalizeNewlinesToSpaces?: boolean;
    }): string | undefined;
}
export {};
