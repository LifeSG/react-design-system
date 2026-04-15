import clsx from "clsx";
import React, { useRef } from "react";

import { type BreakpointCSSVariableString, useApplyStyle } from "../theme";
import { Breakpoint } from "../theme/tokens/breakpoint";
import { parseCSSVariableValue } from "../theme/utils/css-variable";
import { mergeRefs } from "../util";
import * as styles from "./col-div.styles";
import type { ColDivProps } from "./types";

const TOKEN_MAP: Record<string, Record<string, string>> = {
    xxs: {
        start: styles.tokens.xxsStart,
        span: styles.tokens.xxsSpan,
        end: styles.tokens.xxsEnd,
    },
    xs: {
        start: styles.tokens.xsStart,
        span: styles.tokens.xsSpan,
        end: styles.tokens.xsEnd,
    },
    sm: {
        start: styles.tokens.smStart,
        span: styles.tokens.smSpan,
        end: styles.tokens.smEnd,
    },
    md: {
        start: styles.tokens.mdStart,
        span: styles.tokens.mdSpan,
        end: styles.tokens.mdEnd,
    },
    lg: {
        start: styles.tokens.lgStart,
        span: styles.tokens.lgSpan,
        end: styles.tokens.lgEnd,
    },
    xl: {
        start: styles.tokens.xlStart,
        span: styles.tokens.xlSpan,
        end: styles.tokens.xlEnd,
    },
    xxl: {
        start: styles.tokens.xxlStart,
        span: styles.tokens.xxlSpan,
        end: styles.tokens.xxlEnd,
    },
};

const getColCount = (token: BreakpointCSSVariableString): number => {
    const value = parseCSSVariableValue(
        token,
        globalThis.document?.documentElement ?? null
    );
    const parsed = parseInt(value, 10);
    return Number.isNaN(parsed) ? Infinity : parsed;
};

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

    const rootRef = useRef<HTMLDivElement>(null);
    const mergedRef = mergeRefs(rootRef, ref);

    const getColSpan = (
        cols: number | [number, number] | undefined,
        colToken: (typeof Breakpoint)[keyof typeof Breakpoint]
    ) => {
        if (!cols) return { start: undefined, span: undefined, end: undefined };

        if (Array.isArray(cols)) {
            const [start, end] = cols;
            if (end === -1) {
                return { start, span: undefined, end: -1 };
            }
            const maxCols = getColCount(colToken);
            return {
                start,
                span: Math.min(end - start, maxCols),
                end: undefined,
            };
        }

        const maxCols = getColCount(colToken);
        return {
            start: undefined,
            span: Math.min(cols, maxCols),
            end: undefined,
        };
    };

    const getCssVars = () => {
        const xxsResult = getColSpan(xxsCols, Breakpoint["xxs-column"]);
        const xsResult = getColSpan(xsCols || xxsCols, Breakpoint["xs-column"]);
        const smResult = getColSpan(
            smCols || xsCols || xxsCols,
            Breakpoint["sm-column"]
        );
        const mdResult = getColSpan(
            mdCols || smCols || xsCols || xxsCols,
            Breakpoint["md-column"]
        );
        const lgResult = getColSpan(
            lgCols || mdCols || smCols || xsCols || xxsCols,
            Breakpoint["lg-column"]
        );
        const xlResult = getColSpan(
            xlCols || lgCols || mdCols || smCols || xsCols || xxsCols,
            Breakpoint["xl-column"]
        );
        const xxlResult = getColSpan(
            xxlCols ||
                xlCols ||
                lgCols ||
                mdCols ||
                smCols ||
                xsCols ||
                xxsCols,
            Breakpoint["xxl-column"]
        );

        const cssVars: Record<string, string> = {};

        const results = [
            { result: xxsResult, prefix: "xxs" },
            { result: xsResult, prefix: "xs" },
            { result: smResult, prefix: "sm" },
            { result: mdResult, prefix: "md" },
            { result: lgResult, prefix: "lg" },
            { result: xlResult, prefix: "xl" },
            { result: xxlResult, prefix: "xxl" },
        ];

        results.forEach(({ result, prefix }) => {
            const tokens = TOKEN_MAP[prefix];
            if (result.start) cssVars[tokens.start] = String(result.start);
            if (result.span) cssVars[tokens.span] = String(result.span);
            if (result.end) cssVars[tokens.end] = String(result.end);
        });

        return cssVars;
    };

    useApplyStyle(rootRef, {
        ...getCssVars(),
    });

    return (
        <div
            ref={mergedRef}
            className={clsx(styles.colDiv, className)}
            {...otherProps}
        />
    );
};

export const ColDiv = React.forwardRef(Component);
