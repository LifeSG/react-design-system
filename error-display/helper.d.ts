import type { V3_ThemeSpec } from "../v3_theme/types";
export interface ErrorDisplayImagePathAttributes {
    /** base sized image path */
    base: string;
    /** medium sized image path */
    md: string;
    /** large sized image path */
    lg: string;
    /** used with `height` to determine the aspect ratio for layout purposes */
    width: number;
    /** used with `width` to determine the aspect ratio for layout purposes */
    height: number;
}
export declare class ErrorDisplayHelper {
    /**
     * returns the html attributes required for the img element
     * @param {ErrorDisplayImagePathAttributes} pathAttributes
     */
    static imgAttributeHelper(pathAttributes: ErrorDisplayImagePathAttributes, theme?: V3_ThemeSpec): React.ImgHTMLAttributes<HTMLImageElement>;
}
