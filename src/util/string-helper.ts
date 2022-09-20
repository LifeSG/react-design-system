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
     * on the available width of container
     * @param text input text
     * @param widthOfElement element width in px
     */
    export const shouldTruncateToTwoLines = (
        text: string,
        widthOfElement: number
    ): boolean => {
        const estimatedCharOnLine = Math.floor(widthOfElement / 9);
        return (
            text.length >= estimatedCharOnLine * 2 ||
            (text.split(" ").length === 1 && text.length > estimatedCharOnLine)
        );
    };

    export const truncateOneLine = (
        text: string,
        widthOfElement: number,
        minDivSize: number,
        initialCharLength: number
    ): string => {
        //minDivSize -> Minimum div size for Mobile S
        let additionThreshold = 0;
        if (widthOfElement > minDivSize) {
            additionThreshold = Math.floor((widthOfElement - minDivSize) / 8); //Every 8px increment ~= 1 char length
        }
        const threshold = initialCharLength + additionThreshold;
        const length = text.length;
        if (length > threshold) {
            const thresholdIndex = Math.floor(threshold / 2);
            return (
                text.substring(0, thresholdIndex) +
                " ... " +
                text.substring(text.length - thresholdIndex, text.length)
            );
        }

        return text;
    };
}
