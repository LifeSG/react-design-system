import clsx from "clsx";
import type React from "react";
import { forwardRef, useMemo, useRef } from "react";

import {
    type ColourCSSVariableString,
    generateFont,
    isTokenWithPrefix,
    useApplyStyle,
    useResolvedTokenValue,
} from "../theme";
import { mergeRefs } from "../util";
import * as styles from "./markup.style";
import type { MarkupProps, ParsedFontDeclarations } from "./types";

const parseFontDeclarations = (
    declarations: string
): ParsedFontDeclarations => {
    const result: ParsedFontDeclarations = {};

    declarations
        .split(";")
        .map((item) => item.trim())
        .filter(Boolean)
        .forEach((item) => {
            const separatorIndex = item.indexOf(":");
            if (separatorIndex === -1) {
                return;
            }

            const key = item.slice(0, separatorIndex).trim();
            const value = item.slice(separatorIndex + 1).trim();

            if (key && value) {
                result[key as keyof ParsedFontDeclarations] = value;
            }
        });

    return result;
};

const Component = (props: MarkupProps, ref: React.Ref<HTMLDivElement>) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const { baseTextColor, baseTextSize, inline, className, ...otherProps } =
        props;

    const containerRef = useRef<HTMLDivElement | HTMLSpanElement>(null);
    const mergedRef = ref
        ? mergeRefs(
              containerRef,
              ref as React.Ref<HTMLDivElement | HTMLSpanElement>
          )
        : containerRef;
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
            regular: parseFontDeclarations(
                generateFont(baseTextSize, "regular")
            ),
            semibold: parseFontDeclarations(
                generateFont(baseTextSize, "semibold")
            ),
        };
    }, [baseTextSize]);

    useApplyStyle(containerRef, {
        color: resolvedTextColor || null,
        [styles.tokens.rootFontFamily]:
            fontDeclarations?.regular["font-family"] ?? null,
        [styles.tokens.rootFontVariant]:
            fontDeclarations?.regular["font-variant"] ?? null,
        [styles.tokens.rootFontSize]:
            fontDeclarations?.regular["font-size"] ?? null,
        [styles.tokens.rootFontWeight]:
            fontDeclarations?.regular["font-weight"] ?? null,
        [styles.tokens.rootLineHeight]:
            fontDeclarations?.regular["line-height"] ?? null,
        [styles.tokens.rootLetterSpacing]:
            fontDeclarations?.regular["letter-spacing"] ?? null,
        [styles.tokens.emphasizedFontFamily]:
            fontDeclarations?.semibold["font-family"] ?? null,
        [styles.tokens.emphasizedFontVariant]:
            fontDeclarations?.semibold["font-variant"] ?? null,
        [styles.tokens.emphasizedFontSize]:
            fontDeclarations?.semibold["font-size"] ?? null,
        [styles.tokens.emphasizedFontWeight]:
            fontDeclarations?.semibold["font-weight"] ?? null,
        [styles.tokens.emphasizedLineHeight]:
            fontDeclarations?.semibold["line-height"] ?? null,
        [styles.tokens.emphasizedLetterSpacing]:
            fontDeclarations?.semibold["letter-spacing"] ?? null,
    });

    const mergedClassName = clsx(
        styles.baseMarkup,
        baseTextSize && styles.sizedMarkup,
        className
    );
    if (inline) {
        return (
            <span
                ref={mergedRef as React.Ref<HTMLSpanElement>}
                className={mergedClassName}
                {...otherProps}
            />
        );
    }

    return (
        <div
            ref={mergedRef as React.Ref<HTMLDivElement>}
            className={mergedClassName}
            {...otherProps}
        />
    );
};

export const Markup = forwardRef(Component);
