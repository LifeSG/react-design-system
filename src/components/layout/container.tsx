import React from "react";
import { LayoutProps } from "./types";

const Component = (props: LayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const { className, ...otherProps } = props;
    const libClassName = "sgds-container";
    const mergedClassName = className
        ? `${libClassName} ${className}`
        : libClassName;

    return (
        <div {...otherProps} className={mergedClassName} ref={ref}>
            {props.children}
        </div>
    );
};

export const Container = React.forwardRef(Component);
