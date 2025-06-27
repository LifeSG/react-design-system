import { ThemeSpec } from "../theme/types";
export declare namespace ErrorDisplayHelper {
    interface ImagePathAttributes {
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
    /**
     * returns the html attributes required for the img element
     * @param {ImagePathAttributes} pathAttributes
     */
    const imgAttributeHelper: (pathAttributes: ImagePathAttributes, theme: ThemeSpec) => React.ImgHTMLAttributes<HTMLImageElement>;
}
