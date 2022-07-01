import React from "react";
import { StyledOrderedList } from "./text-list.styles";
import { OrderedListProps } from "./types";

export const OrderedList = ({
    size = "Body",
    children,
    ...otherProps
}: OrderedListProps) => {
    return (
        <StyledOrderedList size={size} {...otherProps}>
            {children}
        </StyledOrderedList>
    );
};
