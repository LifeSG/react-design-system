import clsx from "clsx";
import type React from "react";
import { forwardRef, useMemo, useRef } from "react";

import { useApplyStyle } from "../theme";
import { generateFontProperties } from "../theme/utils";
import { mergeRefs } from "../util";
import * as styles from "./markup.style";
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
            ...fontDeclarations,
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

// @catalog
/**
 * A container for rendering rich HTML markup.
 *
 * Use `Markup` to wrap CMS-generated or sanitised HTML content while applying
 * a consistent base font size and colour.
 */
export const Markup = forwardRef(Component);
