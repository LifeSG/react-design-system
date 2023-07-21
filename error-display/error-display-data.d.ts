/// <reference types="react" />
import { ErrorDisplayType, MaintenanceAdditionalAttributes } from "./types";
interface ErrorDisplayDataAttrs {
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    imgSrc?: string | undefined;
    title?: string | undefined;
    description?: string | JSX.Element | undefined;
    renderDescription?: (attrs?: MaintenanceAdditionalAttributes) => JSX.Element | string | undefined;
}
export declare const ERROR_DISPLAY_DATA: Map<ErrorDisplayType, ErrorDisplayDataAttrs>;
export {};
