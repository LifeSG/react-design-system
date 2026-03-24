import React from "react";

import { Button } from "../button/button";
import type { ButtonRef, ButtonStyleType } from "../button/types";
import type { IconButtonProps } from "./types";

const Component = (
    {
        "data-testid": dataTestId,
        styleType = "primary",
        children,
        sizeType = "default",
        type = "button",
        ...otherProps
    }: IconButtonProps,
    ref: ButtonRef
) => {
    const mappedStyleType: ButtonStyleType =
        styleType === "primary" ? "default" : styleType;

    return (
        <Button
            data-testid={dataTestId || "iconButton"}
            ref={ref}
            type={type}
            styleType={mappedStyleType}
            size={sizeType}
            icon={children as JSX.Element}
            {...otherProps}
        />
    );
};

export const IconButton = React.forwardRef(Component);
