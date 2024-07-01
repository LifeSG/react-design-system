interface Props {
    thumbnailImageDataUrl: string;
    "data-testid"?: string | undefined;
    renderReplaceButton?: boolean | undefined;
    onReplaceClick?: (() => void) | undefined;
}
export declare const FileListItemThumbnail: ({ thumbnailImageDataUrl, "data-testid": testId, renderReplaceButton, onReplaceClick, }: Props) => import("react/jsx-runtime").JSX.Element;
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Thumbnail: import("styled-components").StyledComponent<({ src, alt, className, "data-testid": testId, }: import("../../shared/image-with-fallback/image-with-fallback").ImageWithFallbackProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const ReplaceButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export {};
