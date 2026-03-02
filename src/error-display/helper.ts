import { V3_Breakpoint } from "../v3_theme";
import { V3_ThemeSpec } from "../v3_theme/types";

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

export class ErrorDisplayHelper {
    /**
     * returns the html attributes required for the img element
     * @param {ErrorDisplayImagePathAttributes} pathAttributes
     */
    public static imgAttributeHelper(
        pathAttributes: ErrorDisplayImagePathAttributes,
        theme?: V3_ThemeSpec
    ): React.ImgHTMLAttributes<HTMLImageElement> {
        const { base, md, lg, width, height } = pathAttributes;
        const mobile = V3_Breakpoint["sm-max"]({ theme });
        const tablet = V3_Breakpoint["lg-max"]({ theme });

        return {
            srcSet: `${base} 400w, ${md} 800w, ${lg} 1200w`,
            src: lg,
            sizes: `(max-width: ${mobile}px) 400px, (max-width: ${tablet}px) 800px, 1200px`,
            width,
            height,
        };
    }
}
