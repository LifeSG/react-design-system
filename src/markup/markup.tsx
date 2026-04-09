import clsx from "clsx";
import type React from "react";
import { forwardRef, useMemo, useRef } from "react";

import { generateFontProperties, useApplyStyle } from "../theme";
import { mergeRefs } from "../util";
import * as styles from "./markup.style";
import { createMarkupFontStyles } from "./markup.utils";
import type { MarkupProps } from "./types";

const Component = (props: MarkupProps, ref: React.Ref<HTMLDivElement>) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { baseTextColor, baseTextSize, inline, className, ...otherProps } =
        props;

    const containerRef = useRef<HTMLDivElement | HTMLSpanElement>(null);
    const mergedRef = useMemo(() => mergeRefs(containerRef, ref), [ref]);

    const fontDeclarations = useMemo(() => {
        if (!baseTextSize) {
            return undefined;
        }

        return generateFontProperties(baseTextSize, "regular");
    }, [baseTextSize]);

    const appliedStyles = useMemo(
        () => ({
            color: baseTextColor || null,
            ...createMarkupFontStyles(fontDeclarations),
        }),
        [baseTextColor, fontDeclarations]
    );

    useApplyStyle(containerRef, appliedStyles);

    const mergedClassName = clsx(
        styles.baseMarkup,
        baseTextSize && styles.sizedMarkup,
        className
    );

    const ElementTag = inline ? "span" : "div";

    return (
        <ElementTag
            ref={mergedRef as React.Ref<HTMLDivElement & HTMLSpanElement>}
            className={mergedClassName}
            {...otherProps}
        />
    );
};

export const Markup = forwardRef(Component);
