import React from "react";
import { ButtonRef, IconButtonProps } from "./types";
import { Main } from "./icon-button.style";
import classnames from "classnames/bind";
import styles from "../../index.css";

const cx = classnames.bind(styles); // Needed to use css

const Component = (props: IconButtonProps, ref: ButtonRef) => {
    const { children, ...otherProps } = props;

    return (
        <Main ref={ref} {...otherProps}>
            {children}
        </Main>
    );
};

export const IconButton = React.forwardRef(Component);
