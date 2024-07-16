import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { FileUpload } from "src/file-upload";
import { SimpleIdGenerator } from "src/util/simple-id-generator";
import { FileDownload } from "../../src/file-download/file-download";
import { FileItemDownloadProps } from "../../src/file-download";

type Component = typeof FileUpload;

const meta: Meta<Component> = {
    title: "Modules/FileDownload",
    component: FileUpload,
};

export default meta;

const handleDemoDownload = async (file: FileItemDownloadProps) => {
    //Noted demo is using some public api for fetching download
    const response = await fetch(file.filePath);
    const blob = await response.blob();
    if ("showSaveFilePicker" in window) {
        const fileExtension = file.name.split(".").pop() || "";
        // Open the file picker
        try {
            const fileHandle = await (window as any).showSaveFilePicker({
                suggestedName: file.name,
                types: [
                    {
                        description: "All Files",
                        accept: {
                            [file.mimeType]: [`.${fileExtension}`],
                        },
                    },
                ],
            });
            // Create a writable stream
            const writable = await fileHandle.createWritable();
            // Write the content to the file
            await writable.write(blob);
            // Close the stream
            await writable.close();
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("File save cancelled by the user");
                return; // Exit the function without throwing an error
            }
        }
    } else {
        alert(
            "Your browser does not support the File System Access API. The file will be downloaded to your default download location."
        );
        // Fallback to the previous method
        const link: HTMLAnchorElement = document.createElement("a");
        link.download = file.name;
        link.href = window.URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

const handleDemoError = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    throw new Error("Download error");
};

export const Default: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "A super duper long text that it for what is it what this longer.txt",
                mimeType: "application/txt",
                size: 1000,
                filePath: "https://loripsum.net/api/html",
            },
            {
                id: "2",
                name: "Sample.pdf",
                mimeType: "application/pdf",
                size: 150000,
                filePath:
                    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            },
            {
                id: "3",
                name: "sample-image.jpeg",
                mimeType: "image/jpeg",
                size: 6000,
                filePath:
                    "https://cors-anywhere.herokuapp.com/https://picsum.photos/200/300",
            },
        ]);

        return (
            <FileDownload
                fileItems={fileItems}
                onDownload={handleDemoDownload}
                title={"Content title"}
                description={
                    "Additional description for the user to consider when downloading files."
                }
            />
        );
    },
};

export const WhenDownloadFailed: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "This file is error.txt",
                mimeType: "application/txt",
                filePath: "",
            },
        ]);

        return (
            <FileDownload
                fileItems={fileItems}
                description={
                    "In this section is file download that has error when download after 5s"
                }
                title={"Testing Download File Error"}
                onDownload={handleDemoError}
            />
        );
    },
};

export const WithCustomErrorMessage: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "This file is error.txt",
                mimeType: "application/txt",
                filePath: "",
                errorMessage: "This is custom error message!",
            },
        ]);

        return (
            <FileDownload
                fileItems={fileItems}
                description={
                    "In this section is file download that has error when download after 5s"
                }
                title={"Downloading Error with custom error message"}
                onDownload={handleDemoError}
            />
        );
    },
};

export const FileHasThumbnail: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "sample-image.jpeg",
                mimeType: "image/jpeg",
                size: 6000,
                filePath:
                    "https://cors-anywhere.herokuapp.com/https://picsum.photos/seed/picsum/200/300",
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/picsum/200/300",
            },
        ]);

        return (
            <FileDownload
                fileItems={fileItems}
                description={
                    "In this section is file download that has thumbnail"
                }
                title={"Testing Download File Has Thumbnail"}
                onDownload={handleDemoDownload}
            />
        );
    },
};
