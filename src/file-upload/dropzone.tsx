import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useDropzone } from "react-dropzone";
import {
    Container,
    DragOverlay,
    HiddenInput,
    OverlayIcon,
    OverlayText,
} from "./dropzone.styles";
import { FileInputProps } from "./types";

export interface DropzoneElement extends HTMLInputElement {
    openFileDialog: () => void;
}

interface Props extends FileInputProps {
    children: JSX.Element[];
    id: string;
    border: boolean;
    onChange: (files: File[]) => void;
}

const Component = (
    {
        children,
        accept,
        capture,
        multiple,
        id,
        className,
        name,
        border,
        disabled,
        onChange,
    }: Props,
    ref: React.Ref<DropzoneElement>
) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const inputRef = useRef<HTMLInputElement>();
    const { getRootProps, isDragActive } = useDropzone({
        onDrop: onChange,
        noClick: true,
        disabled,
    });

    useImperativeHandle(ref, () => ({
        ...inputRef.current,
        openFileDialog: () => inputRef.current?.click(),
    }));

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            onChange(Array.from(event.target.files));
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderDragOverlay = () => (
        <DragOverlay>
            <OverlayIcon />
            <OverlayText weight="semibold">Drop files here</OverlayText>
        </DragOverlay>
    );

    return (
        <Container
            id={id}
            data-testid="dropzone"
            $border={border}
            className={className}
            {...getRootProps()}
        >
            <HiddenInput
                type="file"
                name={name}
                ref={inputRef}
                tabIndex={-1}
                aria-hidden
                accept={accept}
                capture={capture}
                multiple={multiple}
                data-testid="dropzone-input"
                onChange={handleChange}
            />
            {children}
            {isDragActive && renderDragOverlay()}
        </Container>
    );
};

export const FileUploadDropzone = forwardRef(Component);
