import clsx from "clsx";
import React from "react";

import * as styles from "./container.styles";
import type { ContainerProps } from "./types";

const Component = (
    props: ContainerProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const {
        children,
        "data-testid": testId = "container",
        type = "flex",
        stretch = false,
        className,
        ...otherProps
    } = props;

    return (
        <div
            ref={ref}
            data-testid={testId}
            className={clsx(
                styles.container,
                !stretch && styles.containerNotStretched,
                type === "grid" && styles.containerGrid,
                type === "flex-column" && styles.containerFlexColumn,
                (type === "flex" || !type) && styles.containerFlex,
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};

export const Container = React.forwardRef(Component);
