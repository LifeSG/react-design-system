import clsx from "clsx";
import { useRef } from "react";

import { useApplyStyle } from "../theme";
import {
    counterTypeClassNames,
    listSizeClassNames,
    orderedListCustomStartClassName,
    orderedListReversedClassName,
    StyledOrderedList,
    tokens,
} from "./text-list.styles";
import type { OrderedListProps } from "./types";

const toCssString = (value: string) =>
    `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

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
        [tokens.listBottomMargin]: `${bottomMargin ?? 0}rem`,
        [tokens.orderedListCounterSeparator]: toCssString(
            counterSeparator ?? ")"
        ),
        [tokens.orderedListStartValue]: hasCustomStart
            ? reversed
                ? (start as number) + 1
                : (start as number) - 1
            : null,
    });

    return (
        <StyledOrderedList
            ref={listRef}
            reversed={reversed}
            start={start}
            className={clsx(
                size && listSizeClassNames[size],
                counterTypeClassNames[counterType || "decimal"],
                reversed && orderedListReversedClassName,
                hasCustomStart && orderedListCustomStartClassName,
                className
            )}
            {...otherProps}
        >
            {children}
        </StyledOrderedList>
    );
};

OrderedList.displayName = "TextList.Ol";
