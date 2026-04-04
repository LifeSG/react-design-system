import clsx from "clsx";
import { useRef } from "react";

import { useApplyStyle } from "../theme";
import * as styles from "./text-list.styles";
import type { CounterType, OrderedListProps } from "./types";

// CSS `content` expects a quoted string literal, so we escape backslashes and
// double quotes to keep user-provided separators valid (e.g. `"` or `\`).
const toCssContentStringLiteral = (value: string) =>
    `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;

const counterTypeToCssValue: Record<CounterType, string> = {
    decimal: "counter(list, decimal)",
    "lower-alpha": "counter(list, lower-alpha)",
    "lower-roman": "counter(list, lower-roman)",
};

export const OrderedList = ({
    className,
    size,
    counterType,
    counterSeparator,
    reversed,
    start,
    bottomMargin,
    children,
    ...otherProps
}: OrderedListProps) => {
    const listRef = useRef<HTMLOListElement>(null);
    const hasCustomStart = Boolean(start);
    const counterTypeToUse = counterType ?? "decimal";

    useApplyStyle(listRef, {
        [styles.tokens.listBottomMargin]: `${bottomMargin ?? 0}rem`,
        [styles.tokens.orderedListCounterContent]:
            counterTypeToCssValue[counterTypeToUse],
        [styles.tokens.orderedListCounterSeparator]: toCssContentStringLiteral(
            counterSeparator ?? ")"
        ),
        [styles.tokens.orderedListStartValue]: hasCustomStart
            ? reversed
                ? (start as number) + 1
                : (start as number) - 1
            : null,
    });

    return (
        <ol
            ref={listRef}
            reversed={reversed}
            start={start}
            className={clsx(
                styles.listBase,
                styles.orderedList,
                size && styles.listSize[size],
                reversed && styles.orderedListReversed,
                hasCustomStart && styles.orderedListCustomStart,
                className
            )}
            {...otherProps}
        >
            {children}
        </ol>
    );
};

OrderedList.displayName = "TextList.Ol";
