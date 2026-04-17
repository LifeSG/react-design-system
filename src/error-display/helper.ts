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
        mobile: string,
        tablet: string
    ): React.ImgHTMLAttributes<HTMLImageElement> {
        const { base, md, lg, width, height } = pathAttributes;

        return {
            srcSet: `${base} 400w, ${md} 800w, ${lg} 1200w`,
            src: lg,
            sizes: `(max-width: ${mobile}) 400px, (max-width: ${tablet}) 800px, 1200px`,
            width,
            height,
        };
    }
}
