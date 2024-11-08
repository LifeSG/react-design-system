/// <reference types="react" />
import { V2_ResourceScheme } from "../v2_theme/types";
import { ErrorDisplayHelper } from "./helper";
import { ErrorDisplayType, InactivityAdditionalAttributes, MaintenanceAdditionalAttributes } from "./types";
interface ErrorDisplayDataAttrs {
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    imgSrc?: string | undefined;
    title?: string | undefined;
    description?: string | JSX.Element | undefined;
    renderDescription?: (attrs?: MaintenanceAdditionalAttributes | InactivityAdditionalAttributes) => JSX.Element | string | undefined;
}
export declare const generateErrorDisplayData: (ImgPathsObject: Record<string, ErrorDisplayHelper.ImagePathAttributes>) => Map<ErrorDisplayType, ErrorDisplayDataAttrs>;
export declare const getErrorDisplayData: (type: ErrorDisplayType, resourceScheme: V2_ResourceScheme) => ErrorDisplayDataAttrs;
export {};
