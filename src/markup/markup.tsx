import clsx from "clsx";
import type React from "react";
import { forwardRef, useMemo, useRef } from "react";

import {
    type ColourCSSVariableString,
    generateFontProperties,
    isTokenWithPrefix,
    useApplyStyle,
    useResolvedTokenValue,
} from "../theme";
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
    const mergedRef = mergeRefs(
        containerRef,
        ref as React.Ref<HTMLDivElement | HTMLSpanElement>
    );
    const resolvedTextColor = useResolvedTokenValue<
        ColourCSSVariableString,
        string
    >({
        value: baseTextColor,
        fallback: "",
        isToken: (value): value is ColourCSSVariableString =>
            isTokenWithPrefix<ColourCSSVariableString>(
                value,
                "var(--fds-colour-"
            ),
        normalizeCustom: String,
    });

    const fontDeclarations = useMemo(() => {
        if (!baseTextSize) {
            return undefined;
        }

        return {
            regular: generateFontProperties(baseTextSize, "regular"),
            semibold: generateFontProperties(baseTextSize, "semibold"),
        };
    }, [baseTextSize]);

    const appliedStyles = useMemo(
        () => ({
            color: resolvedTextColor || null,
            ...createMarkupFontStyles(fontDeclarations),
        }),
        [resolvedTextColor, fontDeclarations]
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
