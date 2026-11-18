import clsx from "clsx";
import React, { useRef } from "react";

import type { BreakpointCSSVariableString, BreakpointSize } from "../theme";
import { BREAKPOINT_SIZES, useApplyStyle, useTheme } from "../theme";
import { Breakpoint } from "../theme/tokens/breakpoint";
import { parseCSSVariableValue } from "../theme/utils/css-variable";
import { mergeRefs, useIsMounted } from "../util";
import * as styles from "./col-div.styles";
import type { ColDivProps, ColSpan } from "./types";

const TOKEN_MAP = {
    xxs: {
        start: styles.tokens.xxsStart,
        span: styles.tokens.xxsSpan,
        end: styles.tokens.xxsEnd,
        startAttr: styles.tokens.xxsStartAttr,
        spanAttr: styles.tokens.xxsSpanAttr,
        endAttr: styles.tokens.xxsEndAttr,
    },
    xs: {
        start: styles.tokens.xsStart,
        span: styles.tokens.xsSpan,
        end: styles.tokens.xsEnd,
        startAttr: styles.tokens.xsStartAttr,
        spanAttr: styles.tokens.xsSpanAttr,
        endAttr: styles.tokens.xsEndAttr,
    },
    sm: {
        start: styles.tokens.smStart,
        span: styles.tokens.smSpan,
        end: styles.tokens.smEnd,
        startAttr: styles.tokens.smStartAttr,
        spanAttr: styles.tokens.smSpanAttr,
        endAttr: styles.tokens.smEndAttr,
    },
    md: {
        start: styles.tokens.mdStart,
        span: styles.tokens.mdSpan,
        end: styles.tokens.mdEnd,
        startAttr: styles.tokens.mdStartAttr,
        spanAttr: styles.tokens.mdSpanAttr,
        endAttr: styles.tokens.mdEndAttr,
    },
    lg: {
        start: styles.tokens.lgStart,
        span: styles.tokens.lgSpan,
        end: styles.tokens.lgEnd,
        startAttr: styles.tokens.lgStartAttr,
        spanAttr: styles.tokens.lgSpanAttr,
        endAttr: styles.tokens.lgEndAttr,
    },
    xl: {
        start: styles.tokens.xlStart,
        span: styles.tokens.xlSpan,
        end: styles.tokens.xlEnd,
        startAttr: styles.tokens.xlStartAttr,
        spanAttr: styles.tokens.xlSpanAttr,
        endAttr: styles.tokens.xlEndAttr,
    },
    xxl: {
        start: styles.tokens.xxlStart,
        span: styles.tokens.xxlSpan,
        end: styles.tokens.xxlEnd,
        startAttr: styles.tokens.xxlStartAttr,
        spanAttr: styles.tokens.xxlSpanAttr,
        endAttr: styles.tokens.xxlEndAttr,
    },
} as const;

const Component = (
    props: ColDivProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const {
        xxlCols,
        xlCols,
        lgCols,
        mdCols,
        smCols,
        xsCols,
        xxsCols,
        className,
        ...otherProps
    } = props;

    const { themeElement } = useTheme();
    const isMounted = useIsMounted();
    const rootRef = useRef<HTMLDivElement>(null);
    const mergedRef = mergeRefs(rootRef, ref);

    const resolvedCols = resolveInheritedColumns();
    const dataAttributes = getDataAttrs();
    const cssVars = getCssVars();

    useApplyStyle(rootRef, cssVars);

    // =========================================================================
    // HELPERS
    // =========================================================================

    function resolveInheritedColumns() {
        const colsByBreakpoint: Record<BreakpointSize, ColSpan> = {
            xxs: xxsCols,
            xs: xsCols,
            sm: smCols,
            md: mdCols,
            lg: lgCols,
            xl: xlCols,
            xxl: xxlCols,
        };

        // each breakpoint inherits the nearest smaller breakpoint's value
        let inheritedCols: ColSpan;
        const resolvedCols = BREAKPOINT_SIZES.map((breakpoint) => {
            inheritedCols = colsByBreakpoint[breakpoint] || inheritedCols;
            return { breakpoint, cols: inheritedCols };
        });
        return resolvedCols;
    }

    function getColCount(token: BreakpointCSSVariableString): number {
        const value = parseCSSVariableValue(token, themeElement);
        const parsed = parseInt(value, 10);
        return Number.isNaN(parsed) ? Infinity : parsed;
    }

    function getColSpan(
        cols: number | [number, number] | undefined,
        colToken: (typeof Breakpoint)[keyof typeof Breakpoint],
        bounded: boolean
    ) {
        if (!cols) return { start: undefined, span: undefined, end: undefined };

        if (Array.isArray(cols)) {
            const [start, end] = cols;
            if (end === -1) {
                return { start, span: undefined, end: -1 };
            }
            const maxCols = bounded ? getColCount(colToken) : Infinity;
            return {
                start,
                span: Math.min(end - start, maxCols),
                end: undefined,
            };
        }

        const maxCols = bounded ? getColCount(colToken) : Infinity;
        return {
            start: undefined,
            span: Math.min(cols, maxCols),
            end: undefined,
        };
    }

    /**
     * Generates the col spans as css variables, bounded by the breakpoint
     * column token
     */
    function getCssVars() {
        if (!isMounted) return {};

        const cssVars: Record<string, string> = {};

        resolvedCols.forEach(({ breakpoint, cols }) => {
            const result = getColSpan(
                cols,
                Breakpoint[`${breakpoint}-column`],
                true
            );
            const tokens = TOKEN_MAP[breakpoint];

            if (result.start) cssVars[tokens.start] = String(result.start);
            if (result.span) cssVars[tokens.span] = String(result.span);
            if (result.end) cssVars[tokens.end] = String(result.end);
        });

        return cssVars;
    }

    /**
     * Generates the col spans as data attributes, without referencing the
     * breakpoint tokens. Before hydration, the layout relies on these computed
     * values. Once the component is mounted, the CSS variables take precedence
     * so the data attributes are no longer needed.
     */
    function getDataAttrs() {
        if (isMounted) return {};

        const dataAttrs: Record<string, string> = {};

        resolvedCols.forEach(({ breakpoint, cols }) => {
            const result = getColSpan(
                cols,
                Breakpoint[`${breakpoint}-column`],
                false
            );
            const tokens = TOKEN_MAP[breakpoint];

            if (result.start)
                dataAttrs[tokens.startAttr] = String(result.start);
            if (result.span) dataAttrs[tokens.spanAttr] = String(result.span);
            if (result.end) dataAttrs[tokens.endAttr] = String(result.end);
        });

        return dataAttrs;
    }

    // =========================================================================
    // RENDER
    // =========================================================================

    return (
        <div
            ref={mergedRef}
            className={clsx(styles.colDiv, className)}
            {...dataAttributes}
            {...otherProps}
        />
    );
};

export const ColDiv = React.forwardRef(Component);
