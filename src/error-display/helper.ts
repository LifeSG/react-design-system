import { MediaWidths } from "../spec/media-spec";

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
        pathAttributes: ImagePathAttributes
    ): React.ImgHTMLAttributes<HTMLImageElement> => {
        const { base, md, lg, width, height } = pathAttributes;
        return {
            srcSet: `${base} 400w, ${md} 800w, ${lg} 1200w`,
            src: lg,
            sizes: `(max-width: ${MediaWidths.mobileL}px) 400px, (max-width: ${MediaWidths.tablet}px) 800px, 1200px`,
            width,
            height,
        };
    };
}
