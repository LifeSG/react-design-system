import type React from "react";
import { forwardRef } from "react";

import { Container } from "./markup.style";
import type { MarkupProps } from "./types";

const Component = (props: MarkupProps, ref: React.Ref<HTMLDivElement>) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { baseTextColor, baseTextSize, inline, className, ...otherProps } =
        props;

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <Container
            ref={ref}
            as={inline ? "span" : "div"}
            $textColor={baseTextColor}
            $baseTextSize={baseTextSize}
            className={className}
            {...otherProps}
        />
    );
};

export const Markup = forwardRef(Component);
