import type { ThemeType } from "../theme";
import type { ErrorDisplayImagePathAttributes } from "./helper";
import type { ErrorDisplayType, InactivityAdditionalAttributes, MaintenanceAdditionalAttributes } from "./types";
interface ErrorDisplayDataAttrs {
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    imgSrc?: string | undefined;
    title?: string | undefined;
    description?: string | JSX.Element | undefined;
    renderDescription?: (attrs?: MaintenanceAdditionalAttributes | InactivityAdditionalAttributes) => JSX.Element | string | undefined;
}
export declare const generateErrorDisplayData: (ImgPathsObject: Record<string, ErrorDisplayImagePathAttributes>) => Map<ErrorDisplayType, ErrorDisplayDataAttrs>;
export declare const getErrorDisplayData: (type: ErrorDisplayType, resourceScheme: ThemeType) => ErrorDisplayDataAttrs | undefined;
export {};
