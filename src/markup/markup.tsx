import React, { forwardRef } from "react";
import { Container } from "./markup.style";
import { MarkupProps } from "./types";

const Component = (props: MarkupProps, ref: React.Ref<HTMLDivElement>) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { baseTextColor, baseTextSize, inline, ...otherProps } = props;

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <Container
            ref={ref}
            as={inline ? "span" : "div"}
            $textSize={baseTextSize}
            $textColor={baseTextColor}
            {...otherProps}
        />
    );
};

/**
 * Sets styling for commonly used HTML markup elements such as `<strong>` or `<a>`.
 */
export const Markup = forwardRef(Component);
