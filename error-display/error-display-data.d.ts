import type { V3_ResourceScheme, V3_ThemeSpec } from "../v3_theme/types";
import type { ErrorDisplayImagePathAttributes } from "./helper";
import type { ErrorDisplayType, InactivityAdditionalAttributes, MaintenanceAdditionalAttributes } from "./types";
interface ErrorDisplayDataAttrs {
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    imgSrc?: string | undefined;
    title?: string | undefined;
    description?: string | JSX.Element | undefined;
    renderDescription?: (attrs?: MaintenanceAdditionalAttributes | InactivityAdditionalAttributes) => JSX.Element | string | undefined;
}
export declare const generateErrorDisplayData: (ImgPathsObject: Record<string, ErrorDisplayImagePathAttributes>, theme?: V3_ThemeSpec) => Map<ErrorDisplayType, ErrorDisplayDataAttrs>;
export declare const getErrorDisplayData: (type: ErrorDisplayType, resourceScheme: V3_ResourceScheme, theme?: V3_ThemeSpec) => ErrorDisplayDataAttrs | undefined;
export {};
