import { Breakpoint, ThemeSpec } from "@/theme";

export namespace ErrorDisplayHelper {
    export interface ImagePathAttributes {
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
    export const imgAttributeHelper = (
        pathAttributes: ImagePathAttributes,
        theme: ThemeSpec
    ): React.ImgHTMLAttributes<HTMLImageElement> => {
        const { base, md, lg, width, height } = pathAttributes;
        const mobile = Breakpoint["sm-max"]({ theme });
        const tablet = Breakpoint["lg-max"]({ theme });

        return {
            srcSet: `${base} 400w, ${md} 800w, ${lg} 1200w`,
            src: lg,
            sizes: `(max-width: ${mobile}px) 400px, (max-width: ${tablet}px) 800px, 1200px`,
            width,
            height,
        };
    };
}
