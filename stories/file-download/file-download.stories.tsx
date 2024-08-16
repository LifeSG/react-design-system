import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Text } from "../../src";
import { FileDownload, FileItemDownloadProps } from "../../src/file-download";

type Component = typeof FileDownload;

const meta: Meta<Component> = {
    title: "Modules/FileDownload",
    component: FileDownload,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [fileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "lorem.pdf",
                mimeType: "application/pdf",
                size: 150000,
                filePath:
                    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            },
            {
                id: "2",
                name: "lorem ipsum odor amet consectetuer adipiscing elit.txt",
                mimeType: "application/txt",
                size: 1000,
                filePath:
                    "https://raw.githubusercontent.com/LifeSG/react-design-system/master/README.md",
            },
            {
                id: "3",
                name: "lorem.jpeg",
                mimeType: "image/jpeg",
                size: 6000,
                filePath: "https://picsum.photos/200",
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/picsum/200/300",
            },
            {
                id: "4",
                name: "lorem_ipsum_odor_amet_consectetuer_adipiscing_elit_viverra_diam_sociosqu_rutrum_conubia_rhoncus_netus_nostra_montes_massa_rhoncus_condimentum.jpeg",
                mimeType: "image/jpeg",
                size: 6000,
                filePath: "https://picsum.photos/200",
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/picsum/200/300",
            },
            {
                id: "5",
                name: "not-ready.pdf",
                mimeType: "application/pdf",
                filePath: "",
                errorMessage: "This is custom error message!",
                ready: false,
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

export const ErrorDisplay: StoryObj<Component> = {
    render: () => {
        const [fileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "error.txt",
                mimeType: "application/txt",
                filePath: "",
            },
            {
                id: "2",
                name: "error.txt",
                mimeType: "application/txt",
                filePath: "",
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/picsum/200/300",
            },
        ]);

        return (
            <FileDownload
                fileItems={fileItems}
                title={"Content title"}
                description={"File download will fail after 3 seconds"}
                onDownload={handleDemoError}
            />
        );
    },
};

export const WithCustomError: StoryObj<Component> = {
    render: () => {
        const [fileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "error.txt",
                mimeType: "application/txt",
                filePath: "",
                errorMessage: "This is custom error message!",
            },
        ]);

        return (
            <FileDownload
                fileItems={fileItems}
                title={"Content title"}
                description={
                    "File download will fail after 3 seconds. A custom error message can be set"
                }
                onDownload={handleDemoError}
            />
        );
    },
};

export const DownloadReadinessControl: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItem] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "not-ready.pdf",
                mimeType: "application/pdf",
                filePath: "",
                errorMessage: "This is custom error message!",
                ready: false,
            },
        ]);

        useEffect(() => {
            setInterval(() => {
                const isReadyFileItem = structuredClone(fileItems);
                isReadyFileItem[0] = {
                    ...isReadyFileItem[0],
                    ready: true,
                    name: "ready.pdf",
                    size: 6000,
                    filePath: "https://picsum.photos/200",
                    thumbnailImageDataUrl:
                        "https://picsum.photos/seed/picsum/200/300",
                };

                setFileItem(isReadyFileItem);
            }, 5000);
        }, []);

        return (
            <>
                <FileDownload
                    fileItems={fileItems}
                    title={"Download Readiness Control"}
                    description={
                        <Text.XSmall>
                            The ready prop allows users to manage the
                            availability of a file.
                            <br />
                            This can be used in scenarios where an image needs
                            time to be generated and is not immediately
                            available.
                            <br />
                            This demo shows the ready prop change after 5
                            seconds
                        </Text.XSmall>
                    }
                    onDownload={handleDemoDownload}
                />
            </>
        );
    },
};

// The following code is meant for simulation purposes and is not intended for production

const handleDemoDownload = async (file: FileItemDownloadProps) => {
    const response = await fetch(file.filePath);
    const blob = await response.blob();
    if ("showSaveFilePicker" in window) {
        const fileExtension = file.name.split(".").pop() || "";
        try {
            // Open the file picker
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
            return; // Fail silently
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
    await new Promise((resolve) => setTimeout(resolve, 3000));
    throw new Error("Download error");
};
