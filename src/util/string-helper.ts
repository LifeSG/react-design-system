export namespace StringHelper {
    export const transformWithSpaces = (
        value: string | any,
        groupLength: number
    ) => {
        const regex = "(.{" + groupLength + "})";
        return value
            .replace(/[^\dA-Z]/gi, "")
            .replace(new RegExp(regex, "g"), "$1 ")
            .trim();
    };

    /**
     * Pads single digit values with a zero and trims leading zero for
     * values of length more than 2
     * @param value the string value
     * @param retainSingleZero setting true will allow single zero value
     */
    export const padValue = (
        value: string,
        retainSingleZero?: boolean
    ): string => {
        if (value === "0") {
            return retainSingleZero ? value : value.padStart(2, "0");
        }

        if (value === "") {
            return value;
        }

        const trimmedValue = parseInt(value);
        return trimmedValue.toString().padStart(2, "0");
    };

    /**
     * Checks if the text is required to be truncated and broken into two lines based
     * on the available width of container. **Note: This is relevant to font size 18px or 1.125rem only **
     * @param text input text
     * @param widthOfElement element width in px
     */
    export const shouldTruncateToTwoLines = (
        text: string,
        widthOfElement: number
    ): boolean => {
        // This is arbitrary and based on tests to derive that every 9px increment ~= 1 char length.
        // But this applies to font size 18px or 1.125rem only
        const estimatedCharOnLine = Math.floor(widthOfElement / 9);
        return (
            text.length >= estimatedCharOnLine * 2 ||
            (text.split(" ").length === 1 && text.length > estimatedCharOnLine)
        );
    };

    /**
     * Performs a truncation by adding ellipsis in the middle of the text.
     * @param text input text
     * @param widthOfElement the dynamic width of the container in px
     * @param minDivSize the minimum container size (using size on mobileS viewport as baseline)
     * @param baselineCharLength the baseline amount of characters to be displayed before truncation kicks. This
     * will be increased if there is more space available (derived from `widthOfElement`)
     * @param incrementFactor the size (in px).
     */
    export const truncateOneLine = (
        text: string,
        widthOfElement: number,
        minDivSize: number,
        baselineCharLength: number,
        incrementFactor = 8 // Arbitrary based on tests and applies to font size of 18px or 1.125rem
    ): string => {
        let additionalCharAllowed = 0;
        if (widthOfElement > minDivSize) {
            additionalCharAllowed = Math.floor(
                (widthOfElement - minDivSize) / incrementFactor
            );
        }
        const allowedCharLength = baselineCharLength + additionalCharAllowed;
        if (allowedCharLength < text.length) {
            const thresholdIndex = Math.floor(allowedCharLength / 2); // We will cut it halfway to derive x num of characters
            return (
                text.substring(0, thresholdIndex) + // Use the first x
                " ... " +
                text.substring(text.length - thresholdIndex, text.length) // Use the last x
            );
        }

        return text;
    };

    /**
     * Returns the width of the text in the specified font
     * https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
     */
    export const getTextWidth = (text: string, font: string): number => {
        if (typeof document === "undefined") {
            return 0;
        }

        // create a reusable canvas object for better performance
        const canvas =
            (getTextWidth as any).canvas ||
            ((getTextWidth as any).canvas = document.createElement("canvas"));
        const context = canvas.getContext("2d");
        context.font = font;

        const metrics = context.measureText(text);
        return metrics.width;
    };
}
