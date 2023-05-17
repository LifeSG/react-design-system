import React from "react";
import { ButtonRef } from "../button/types";
import { Main } from "./image-button.style";
import { ImageButtonProps } from "./types";
import { Text } from "../text/text";
import image from "../navbar/img/default.png";
const Component = (
    {
        children,
        focusOutline = "none",
        src,
        disabled,
        ...otherProps
    }: ImageButtonProps,
    ref: ButtonRef
) => {
    const handleError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        (event.target as HTMLImageElement).onerror = null;
        (event.target as HTMLImageElement).src = image;
    };
    return (
        <Main
            ref={ref}
            $outline={focusOutline}
            $disabled={disabled}
            {...otherProps}
        >
            <img src={src} alt="icon-image" onError={handleError} />
            <Text.H4 inline={false}>{children}</Text.H4>
        </Main>
    );
};

export const ImageButton = React.forwardRef(Component);
