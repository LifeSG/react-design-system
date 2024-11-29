import React from "react";
import { V2_StyledUnorderedList } from "./text-list.styles";
import { V2_UnorderedListProps } from "./types";

/** @deprecated */
export const V2_UnorderedList = ({
    size = "Body",
    children,
    ...otherProps
}: V2_UnorderedListProps) => {
    return (
        <V2_StyledUnorderedList size={size} {...otherProps}>
            {children}
        </V2_StyledUnorderedList>
    );
};
