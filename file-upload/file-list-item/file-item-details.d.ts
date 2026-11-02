import type { FormLabelProps } from "../../form/form-label/types";
import type { FileItemMode } from "./types";
interface Props {
    mode: Exclude<FileItemMode, "edit">;
    formattedName: string | undefined;
    description: string | undefined;
    fileSize: string;
    errorMessage: string | React.ReactNode | undefined;
    isLoading: boolean;
    descriptionLabel?: FormLabelProps | undefined;
    detailSectionRef: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
}
export declare const FileItemDetails: ({ mode, formattedName, description, fileSize, errorMessage, isLoading, descriptionLabel, detailSectionRef, children, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
