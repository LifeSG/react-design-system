interface Props {
    thumbnailImageDataUrl?: string | undefined;
    fileType?: string | undefined;
    "data-testid"?: string | undefined;
    renderReplaceButton?: boolean | undefined;
    onReplaceClick?: (() => void) | undefined;
}
export declare const FileListItemThumbnail: ({ thumbnailImageDataUrl, fileType, "data-testid": testId, renderReplaceButton, onReplaceClick, }: Props) => import("react/jsx-runtime").JSX.Element;
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Thumbnail: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../../shared/image-with-fallback/image-with-fallback").ImageWithFallbackProps, {
    $isPdf?: boolean;
}>> & string & Omit<({ src, alt, className, "data-testid": testId, }: import("../../shared/image-with-fallback/image-with-fallback").ImageWithFallbackProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const ReplaceButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;
export {};
