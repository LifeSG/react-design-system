import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useEffect, useState } from "react";
import type { FileItemDownloadProps } from "src/file-download";
import { FileDownload } from "src/file-download";

type Component = typeof FileDownload;

const meta: Meta<Component> = {
    title: "Selection and input/FileDownload",
    component: FileDownload,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
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
    render: (_args) => {
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
    render: (_args) => {
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

export const DownloadReadiness: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "Your file is being generated...",
                mimeType: "application/pdf",
                filePath: "",
                ready: false,
            },
        ]);

        useEffect(() => {
            setTimeout(() => {
                const readyFileItems = structuredClone(fileItems);
                readyFileItems[0] = {
                    ...readyFileItems[0],
                    ready: true,
                    name: "ready.pdf",
                    size: 6000,
                    filePath: "https://picsum.photos/200",
                    thumbnailImageDataUrl:
                        "https://picsum.photos/seed/picsum/200/300",
                };

                setFileItems(readyFileItems);
            }, 5000);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <FileDownload
                fileItems={fileItems}
                title={"Download readiness"}
                description={
                    "Ready status will be set to true after 5 seconds."
                }
                onDownload={handleDemoDownload}
            />
        );
    },
};

export const TextStyling: StoryObj<Component> = {
    render: (_args) => {
        const [fileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "lorem.pdf",
                mimeType: "application/pdf",
                size: 150000,
                filePath:
                    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            },
        ]);

        return (
            <FileDownload
                fileItems={fileItems}
                onDownload={handleDemoDownload}
                title={
                    <>
                        <p>
                            You can add <strong>bold text</strong>, <a>links</a>{" "}
                            and list items to the title:
                        </p>
                        <ul>
                            <li>List item</li>
                        </ul>
                        <ol>
                            <li>List item</li>
                        </ol>
                    </>
                }
                description={
                    <>
                        <p>
                            You can also add <strong>bold text</strong>,{" "}
                            <a>links</a> and list items to the description:
                        </p>
                        <ul>
                            <li>List item</li>
                        </ul>
                        <ol>
                            <li>List item</li>
                        </ol>
                    </>
                }
            />
        );
    },
};

export const ThumbnailFallbacks: StoryObj<Component> = {
    render: (_args) => {
        const [fileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "pdf-without-thumbnail.pdf",
                mimeType: "application/pdf",
                size: 150000,
                filePath: "",
            },
            {
                id: "2",
                name: "pdf-with-thumbnail.pdf",
                mimeType: "application/pdf",
                size: 150000,
                filePath: "",
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/pdfpage/200/300",
            },
            {
                id: "3",
                name: "image-with-thumbnail.jpeg",
                mimeType: "image/jpeg",
                size: 6000,
                filePath: "",
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/picsum/200/300",
            },
            {
                id: "4",
                name: "image-without-thumbnail.png",
                mimeType: "image/png",
                size: 82000,
                filePath: "",
            },
            {
                id: "5",
                name: "document-with-thumbnail.doc",
                mimeType: "application/msword",
                size: 24000,
                filePath: "",
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/docpage/200/300",
            },
            {
                id: "6",
                name: "document-without-thumbnail.doc",
                mimeType: "application/msword",
                size: 24000,
                filePath: "",
            },
        ]);

        return (
            <FileDownload
                fileItems={fileItems}
                onDownload={handleDemoDownload}
                title="Thumbnail fallbacks"
                description="A supplied thumbnail is always rendered, whatever the file type. PDF files fall back to the PDF badge. Anything else without a thumbnail shows no preview."
            />
        );
    },
};

export const CustomCardAction: StoryObj<Component> = {
    render: (_args) => {
        const [fileItems] = useState<FileItemDownloadProps[]>([
            {
                id: "1",
                name: "lorem.pdf",
                mimeType: "application/pdf",
                size: 150000,
                filePath:
                    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                ariaLabel: "Preview lorem.pdf",
            },
        ]);

        return (
            <>
                <FileDownload
                    fileItems={fileItems}
                    onDownload={handleDemoDownload}
                    onClick={(file) =>
                        alert(`Custom onClick action for ${file.name}.`)
                    }
                    title="Custom card action"
                    description="Activating the card calls onClick. Activating the download button calls onDownload."
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        } catch {
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
