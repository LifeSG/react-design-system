interface FileUploadContextValues {
    activeId?: string | undefined;
    setActiveId: (id: string | undefined) => void;
}
export declare const FileUploadContext: import("react").Context<FileUploadContextValues>;
export {};
