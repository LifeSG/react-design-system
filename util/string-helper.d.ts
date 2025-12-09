interface MaskValueOptions {
    maskRange?: number[] | undefined;
    unmaskRange?: number[] | undefined;
    maskRegex?: RegExp | undefined;
    maskTransformer?: ((value: string) => string) | undefined;
    maskChar?: string | undefined;
}
export declare namespace StringHelper {
    const transformWithSpaces: (value: string | any, groupLength: number) => any;
    /**
     * Pads single digit values with a zero and trims leading zero for
     * values of length more than 2
     * @param value the string value
     * @param retainSingleZero setting true will allow single zero value
     */
    const padValue: (value: string, retainSingleZero?: boolean) => string;
    /**
     * Checks if the text is required to be truncated and broken into two lines based
     * on the available width of container. **Note: This is relevant to font size 18px or 1.125rem only **
     * @param text input text
     * @param widthOfElement element width in px
     */
    const shouldTruncateToTwoLines: (text: string, widthOfElement: number) => boolean;
    /**
     * Performs a truncation by adding ellipsis in the middle of the text.
     * @param text input text
     * @param widthOfElement the dynamic width of the container in px
     * @param minDivSize the minimum container size (using size on mobileS viewport as baseline)
     * @param baselineCharLength the baseline amount of characters to be displayed before truncation kicks. This
     * will be increased if there is more space available (derived from `widthOfElement`)
     * @param incrementFactor the size (in px).
     */
    const truncateOneLine: (text: string, widthOfElement: number, minDivSize: number, baselineCharLength: number, incrementFactor?: number) => string;
    /**
     * Performs a truncation by adding ellipsis in the middle of the text.
     * @param text input text
     * @param widthOfElement the dynamic width of the container in px
     * @param fontSize the fontsize of the text
     * @param lineHeight the line height of the text
     */
    const truncateTwoLines: (text: string, widthOfElement: number, fontSize: number, lineHeight?: number) => string;
    /**
     * Returns the width of the text in the specified font
     * https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
     */
    const getTextWidth: (text: string, font: string) => number;
    const maskValue: (value: string, options?: MaskValueOptions) => string;
}
export {};
