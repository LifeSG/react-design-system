import { css } from "@linaria/core";
import clsx from "clsx";
import type { OrderedListProps } from "src/text-list";
import { TextList } from "src/text-list";

const customOrderedList = css`
    margin-left: 2em;

    li {
        margin-left: 1em;
    }

    li:before {
        content: counters(list, ".") ".";
        left: -3em;
    }
`;

export const CustomOrderedList = ({
    className,
    ...otherProps
}: OrderedListProps) => {
    return (
        <TextList.Ol
            className={clsx(customOrderedList, className)}
            {...otherProps}
        />
    );
};

CustomOrderedList.displayName = "CustomOrderedList";
