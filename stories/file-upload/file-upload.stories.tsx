import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { FileItemProps, FileUpload } from "src/file-upload";
import { SimpleIdGenerator } from "src/util/simple-id-generator";

type Component = typeof FileUpload;

const meta: Meta<Component> = {
    title: "Selection and input/FileUpload",
    component: FileUpload,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemProps[]>([]);
        const handleChange = (files: File[]) => {
            const newFileItems = files.map((file) => {
                return {
                    id: SimpleIdGenerator.generate(),
                    name: file.name,
                    size: file.size,
                    type: file.type,
                };
            });
            setFileItems((prevItems) => {
                return prevItems.concat(newFileItems);
            });
        };
        const handleDelete = (fileItem: FileItemProps) => {
            const newArr = [...fileItems];
            newArr.splice(newArr.indexOf(fileItem), 1);
            setFileItems(newArr);
        };
        return (
            <FileUpload
                fileItems={fileItems}
                onChange={handleChange}
                onDelete={handleDelete}
                title="Content title"
                description="Additional description for the user to consider when uploading their files."
                warning={
                    <>
                        Maximum size per file: 2 MB
                        <br />
                        Supported file types: .JPG, .JPEG, .PNG
                    </>
                }
            />
        );
    },
};

export const WithErrorDisplay: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemProps[]>([]);
        const handleChange = (files: File[]) => {
            const newFileItems = files.map((file) => {
                return {
                    id: SimpleIdGenerator.generate(),
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    errorMessage: "Something went wrong",
                };
            });
            setFileItems((prevItems) => {
                return prevItems.concat(newFileItems);
            });
        };
        const handleDelete = (fileItem: FileItemProps) => {
            const newArr = [...fileItems];
            newArr.splice(newArr.indexOf(fileItem), 1);
            setFileItems(newArr);
        };
        return (
            <FileUpload
                fileItems={fileItems}
                onChange={handleChange}
                onDelete={handleDelete}
                title="Content title"
                description="Try dragging or adding a file to see the error state"
                errorMessage="This is a sample error"
                warning={
                    <>
                        Maximum size per file: 2 MB
                        <br />
                        Supported file types: .JPG, .JPEG, .PNG
                    </>
                }
            />
        );
    },
};

export const WithLoadingIndicator: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemProps[]>([]);
        useEffect(() => {
            if (fileItems.length > 0) {
                updateProgress();
            }
        }, [fileItems]);
        const handleChange = (files: File[]) => {
            const newFileItems = files.map((file) => {
                return {
                    id: SimpleIdGenerator.generate(),
                    name: file.name,
                    size: file.size,
                    type: file.type,
                };
            });
            setFileItems((prevItems) => {
                return prevItems.concat(newFileItems);
            });
        };
        const handleDelete = (fileItem: FileItemProps) => {
            const newArr = [...fileItems];
            newArr.splice(newArr.indexOf(fileItem), 1);
            setFileItems(newArr);
        };
        const updateProgress = () => {
            const hasInProgressItems = fileItems.some(
                (item) => typeof item.progress === "number" && item.progress < 1
            );
            if (hasInProgressItems) {
                const updatedFileItems = fileItems.map((item) => {
                    let newProgress;
                    if (item.progress === 1) {
                        newProgress = undefined;
                    } else if (
                        typeof item.progress === "number" &&
                        item.progress < 1
                    ) {
                        newProgress = item.progress + 0.25;
                    }
                    return {
                        ...item,
                        progress: newProgress,
                    };
                });
                setTimeout(() => {
                    setFileItems(updatedFileItems);
                }, 200);
            }
        };
        return (
            <FileUpload
                fileItems={fileItems}
                onChange={handleChange}
                onDelete={handleDelete}
                title="Content title"
                description="Additional description for the user to consider when uploading their files."
                warning={
                    <>
                        Maximum size per file: 2 MB
                        <br />
                        Supported file types: .JPG, .JPEG, .PNG
                    </>
                }
            />
        );
    },
};

export const EditableFileItems: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemProps[]>([
            {
                id: "1",
                name: "img-1.jpg",
                type: "image/jpeg",
                size: 5000,
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/picsum/200/300",
            },
        ]);
        const handleChange = (files: File[]) => {
            const newFileItems = files.map((file) => {
                return {
                    id: SimpleIdGenerator.generate(),
                    name: file.name,
                    size: file.size,
                    type: file.type,
                };
            });
            setFileItems((prevItems) => {
                return prevItems.concat(newFileItems);
            });
        };
        const handleDelete = (fileItem: FileItemProps) => {
            if (fileItems.length === 1) {
                setFileItems([]);
            } else {
                const newArr = [...fileItems];
                newArr.splice(newArr.indexOf(fileItem), 1);
                setFileItems(newArr);
            }
        };
        const handleEdit = (fileItem: FileItemProps) => {
            setFileItems((prevItems) => {
                return prevItems.map((item) => {
                    if (item.id === fileItem.id) {
                        return fileItem;
                    } else {
                        return item;
                    }
                });
            });
        };
        return (
            <FileUpload
                fileItems={fileItems}
                onChange={handleChange}
                onDelete={handleDelete}
                onEdit={handleEdit}
                title="Editable file items"
                description="Drag an image file and a textarea will be shown for you to enter a description"
                fileDescriptionMaxLength={200}
                editableFileItems
                maxFiles={6}
                warning={
                    <>
                        Maximum size per file: 2 MB
                        <br />
                        Supported file types: .JPG, .JPEG, .PNG
                    </>
                }
            />
        );
    },
};

export const SortableFileItems: StoryObj<Component> = {
    render: () => {
        const [fileItems, setFileItems] = useState<FileItemProps[]>([]);
        const handleChange = (files: File[]) => {
            const newFileItems = files.map((file) => {
                return {
                    id: SimpleIdGenerator.generate(),
                    name: file.name,
                    size: file.size,
                    type: file.type,
                };
            });
            setFileItems((prevItems) => {
                return prevItems.concat(newFileItems);
            });
        };
        const handleDelete = (fileItem: FileItemProps) => {
            if (fileItems.length === 1) {
                setFileItems([]);
            } else {
                const newArr = [...fileItems];
                newArr.splice(newArr.indexOf(fileItem), 1);
                setFileItems(newArr);
            }
        };
        const handleSort = (fileItems: FileItemProps[]) => {
            setFileItems(fileItems);
        };
        return (
            <FileUpload
                fileItems={fileItems}
                onChange={handleChange}
                onDelete={handleDelete}
                onSort={handleSort}
                title="Sortable file items"
                description="Upload an image and try to perform sorting on them"
                fileDescriptionMaxLength={200}
                sortable
                maxFiles={6}
                warning={
                    <>
                        Maximum size per file: 2 MB
                        <br />
                        Maximum number of files: 6
                    </>
                }
            />
        );
    },
};

export const ReadonlyState: StoryObj<Component> = {
    render: (_args) => {
        const [fileItems] = useState([
            {
                id: "1",
                name: "img-1.jpg",
                type: "image/jpeg",
                size: 5000,
                description: "An evening sunset picture",
                thumbnailImageDataUrl:
                    "https://picsum.photos/seed/picsum/200/300",
            },
            {
                id: "2",
                name: "pdf-doc-2.pdf",
                type: "application/pdf",
                size: 3000,
            },
        ]);
        return (
            <FileUpload
                fileItems={fileItems}
                readOnly
                title="Readonly file items"
                description="In this state, you cannot sort nor interact with any of the items"
            />
        );
    },
};

export const TextStyling: StoryObj<Component> = {
    render: (_args) => {
        const [fileItems, setFileItems] = useState<FileItemProps[]>([]);
        const handleChange = (files: File[]) => {
            const newFileItems = files.map((file) => {
                return {
                    id: SimpleIdGenerator.generate(),
                    name: file.name,
                    size: file.size,
                    type: file.type,
                };
            });
            setFileItems((prevItems) => {
                return prevItems.concat(newFileItems);
            });
        };
        const handleDelete = (fileItem: FileItemProps) => {
            const newArr = [...fileItems];
            newArr.splice(newArr.indexOf(fileItem), 1);
            setFileItems(newArr);
        };
        return (
            <FileUpload
                fileItems={fileItems}
                onChange={handleChange}
                onDelete={handleDelete}
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
