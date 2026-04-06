import clsx from "clsx";
import { useRef } from "react";

import { useApplyStyle } from "../theme";
import * as styles from "./text-list.styles";
import type { OrderedListProps } from "./types";

const escapeDoubleQuotes = (value: string) => `"${value.replace(/"/g, '\\"')}"`;

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
        [styles.tokens.orderedListCounterSeparator]: escapeDoubleQuotes(
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
