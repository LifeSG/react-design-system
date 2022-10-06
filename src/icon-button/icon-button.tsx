import React from "react";
import { ButtonRef } from "../button/types";
import { Icon } from "../icon/icon";
import { Main } from "./icon-button.style";
import { IconButtonProps } from "./types";

const Component = (
    { children, iconType, ...otherProps }: IconButtonProps,
    ref: ButtonRef
) => {
    let componentToRender;

    if (children) {
        // Custom component passed in
        componentToRender = children;
    } else if (iconType) {
        componentToRender = <Icon type={iconType} />;
    } else {
        console.error(
            "IconButton - Did not specify a valid children or iconType prop"
        );
        return null;
    }

    return (
        <Main ref={ref} {...otherProps}>
            {componentToRender}
        </Main>
    );
};

export const IconButton = React.forwardRef(Component);
