/// <reference types="react" />
import { ResourceScheme } from "../theme/types";
import { ErrorDisplayType, MaintenanceAdditionalAttributes } from "./types";
interface ErrorDisplayDataAttrs {
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    imgSrc?: string | undefined;
    title?: string | undefined;
    description?: string | JSX.Element | undefined;
    renderDescription?: (attrs?: MaintenanceAdditionalAttributes) => JSX.Element | string | undefined;
}
export declare const getErrorDisplayData: (type: ErrorDisplayType, resourceScheme: ResourceScheme) => ErrorDisplayDataAttrs;
export {};
