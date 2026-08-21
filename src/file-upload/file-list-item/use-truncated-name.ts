import { useCallback, useEffect, useState } from "react";

import { StringHelper } from "../../util";

export function useTruncatedName(
    name: string,
    wrapperWidth: number,
    truncateText: boolean,
    elementRef: React.RefObject<HTMLElement | null>
): string | undefined {
    const [formattedName, setFormattedName] = useState<string>();

    const getTruncatedText = useCallback(
        (value: string) => {
            if (!truncateText) return value;

            const widthOfElement = elementRef?.current
                ? elementRef.current.getBoundingClientRect().width
                : 0;

            return StringHelper.truncateOneLine(
                value,
                widthOfElement,
                widthOfElement / 2,
                widthOfElement / 2 / 8,
                16
            );
        },
        [truncateText, elementRef]
    );

    useEffect(() => {
        setFormattedName(getTruncatedText(name));
    }, [wrapperWidth, getTruncatedText, name]);

    return formattedName;
}
