import React from "react";
import { V2_StyledOrderedList } from "./text-list.styles";
import { V2_OrderedListProps } from "./types";

/** @deprecated */
export const V2_OrderedList = ({
    size = "Body",
    children,
    ...otherProps
}: V2_OrderedListProps) => {
    return (
        <V2_StyledOrderedList size={size} {...otherProps}>
            {children}
        </V2_StyledOrderedList>
    );
};
