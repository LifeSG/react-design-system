import clsx from "clsx";
import { useRef } from "react";

import { useApplyStyle } from "../theme";
import * as styles from "./text-list.styles";
import type { OrderedListProps } from "./types";

// CSS `content` expects a quoted string literal, so we escape backslashes and
// double quotes to keep user-provided separators valid (e.g. `"` or `\`).
const toCssContentStringLiteral = (value: string) =>
    `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;

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

    useApplyStyle(listRef, {
        [styles.tokens.listBottomMargin]: `${bottomMargin ?? 0}rem`,
        [styles.tokens.orderedListCounterStyle]: counterType ?? null,
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
