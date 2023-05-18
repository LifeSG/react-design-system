import React from "react";
import { ButtonRef } from "../button/types";
import { Main } from "./image-button.style";
import { ImageButtonProps } from "./types";
import { Text } from "../text/text";
import { ImageWithFallback } from "src/shared/image-with-fallback/image-with-fallback";

const Component = (
    { children, src, ...otherProps }: ImageButtonProps,
    ref: ButtonRef
) => {
    return (
        <Main ref={ref} {...otherProps}>
            <ImageWithFallback src={src} />
            <Text.H4>{children}</Text.H4>
        </Main>
    );
};

export const ImageButton = React.forwardRef(Component);
