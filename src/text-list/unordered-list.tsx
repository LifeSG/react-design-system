import React from "react";
import { StyledUnorderedList } from "./text-list.styles";
import { UnorderedListProps } from "./types";

export const UnorderedList = ({
    size = "body-baseline",
    children,
    ...otherProps
}: UnorderedListProps) => {
    return (
        <StyledUnorderedList size={size} {...otherProps}>
            {children}
        </StyledUnorderedList>
    );
};
