interface Props {
    thumbnailImageDataUrl?: string | undefined;
    fileType?: string | undefined;
    "data-testid"?: string | undefined;
    renderReplaceButton?: boolean | undefined;
    onReplaceClick?: (() => void) | undefined;
}
export declare const FileListItemThumbnail: ({ thumbnailImageDataUrl, fileType, "data-testid": testId, renderReplaceButton, onReplaceClick, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
