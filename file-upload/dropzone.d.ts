import React from "react";
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
export declare const FileUploadDropzone: (props: Props & React.RefAttributes<DropzoneElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
