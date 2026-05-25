"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";
import { useRef, useState } from "react";

export default function Story() {
    const nextId = useRef(0);
    const [fileItems, setFileItems] = useState<FileItemProps[]>([]);

    const createFileItems = (files: File[]) => {
        return files.map((file) => {
            nextId.current += 1;

            return {
                id: `upload-file-${nextId.current}`,
                name: file.name,
                size: file.size,
                type: file.type,
            };
        });
    };

    const handleUpload = (files: File[]) => {
        setFileItems((prevItems) => prevItems.concat(createFileItems(files)));
    };

    const handleDelete = (fileItem: FileItemProps) => {
        setFileItems((prevItems) => {
            return prevItems.filter((item) => item.id !== fileItem.id);
        });
    };

    return (
        <div className="story-column-container">
            <FileUpload
                data-testid="file-upload"
                title="Upload supporting files"
                description="You can upload with the button or drag and drop into the dropzone."
                warning="Maximum size per file: 2 MB"
                fileItems={fileItems}
                onChange={handleUpload}
                onDelete={handleDelete}
            />
        </div>
    );
}
