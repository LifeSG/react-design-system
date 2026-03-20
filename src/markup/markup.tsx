import clsx from "clsx";
import type React from "react";
import { forwardRef } from "react";

import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Container } from "./markup.style";
import type { MarkupProps } from "./types";

const Component = (props: MarkupProps, ref: React.Ref<HTMLDivElement>) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { baseTextColor, baseTextSize, inline, className, ...otherProps } =
        props;
    const htmlContentClassName = applyHtmlContentStyle({
        textSize: baseTextSize,
    });
    const mergedClassName = clsx(className, htmlContentClassName);

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <Container
            ref={ref}
            as={inline ? "span" : "div"}
            $textColor={baseTextColor}
            className={mergedClassName}
            {...otherProps}
        />
    );
};

export const Markup = forwardRef(Component);
