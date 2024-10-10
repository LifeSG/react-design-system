/// <reference types="react" />
interface FileUploadContextValues {
    activeId?: string | undefined;
    setActiveId: (id: string) => void;
}
export declare const FileUploadContext: import("react").Context<FileUploadContextValues>;
export {};
