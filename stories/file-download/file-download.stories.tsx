import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { FileUpload } from "src/file-upload";
import { SimpleIdGenerator } from "src/util/simple-id-generator";
import { FileDownload } from "../../src/file-download/file-download";
import { FileItemProps } from "../../src/file-download";

type Component = typeof FileUpload;

const meta: Meta<Component> = {
    title: "Modules/FileDownload",
    component: FileUpload,
};

export default meta;

const handleDemoDownload = async (file: FileItemProps) => {
    //Noted demo is using some public api for fetching download
    const response = await fetch(file.filePath);
    const blob = await response.blob();
    if ("showSaveFilePicker" in window) {
        // Open the file picker
        const fileHandle = await (window as any).showSaveFilePicker({
            suggestedName: file.name,
            types: [
                {
                    description: "Image Files",
                    accept: {
                        "application/octet-stream": [
                            `.${file.name.split(".").pop()}`,
                        ],
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

        console.log("File saved successfully");
    } else {
        alert(
            "Your browser does not support the File System Access API. The file will be downloaded to your default download location."
        );
        // Fallback to the previous method
        const link: HTMLAnchorElement = document.createElement("a");
        link.download = "example.txt";
        link.href = window.URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

export const Default: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemProps[]>([
            {
                id: "1",
                name: "A super duper long text that it for what is it what this longer.txt",
                type: "./txt",
                size: 1000,
                filePath: "https://loripsum.net/api/html",
            },
        ]);

        return (
            <FileDownload
                fileItems={fileItems}
                onDownload={handleDemoDownload}
            />
        );
    },
};

export const FileHasThumbnail: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemProps[]>([
            {
                id: "1",
                name: "sample-image.jpg",
                type: "./jpeg",
                size: 6000,
                filePath:
                    "https://cors-anywhere.herokuapp.com/https://picsum.photos/seed/picsum/200/300",
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/picsum/200/300",
                errorMessage: "testing error",
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
