import clsx from "clsx";
import React from "react";

import { Breakpoint } from "../theme/tokens/breakpoint";
import { parseCSSVariableValue } from "../theme/utils/css-variable";
import * as styles from "./col-div.styles";
import type { ColDivProps } from "./types";

const getColCount = (
    token: (typeof Breakpoint)[keyof typeof Breakpoint]
): number => {
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
        style,
        ...otherProps
    } = props;

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

        if (xxsResult.start)
            cssVars[styles.tokens.xxsStart] = String(xxsResult.start);
        if (xxsResult.span)
            cssVars[styles.tokens.xxsSpan] = String(xxsResult.span);
        if (xxsResult.end)
            cssVars[styles.tokens.xxsEnd] = String(xxsResult.end);
        if (xsResult.start)
            cssVars[styles.tokens.xsStart] = String(xsResult.start);
        if (xsResult.span)
            cssVars[styles.tokens.xsSpan] = String(xsResult.span);
        if (xsResult.end) cssVars[styles.tokens.xsEnd] = String(xsResult.end);
        if (smResult.start)
            cssVars[styles.tokens.smStart] = String(smResult.start);
        if (smResult.span)
            cssVars[styles.tokens.smSpan] = String(smResult.span);
        if (smResult.end) cssVars[styles.tokens.smEnd] = String(smResult.end);
        if (mdResult.start)
            cssVars[styles.tokens.mdStart] = String(mdResult.start);
        if (mdResult.span)
            cssVars[styles.tokens.mdSpan] = String(mdResult.span);
        if (mdResult.end) cssVars[styles.tokens.mdEnd] = String(mdResult.end);
        if (lgResult.start)
            cssVars[styles.tokens.lgStart] = String(lgResult.start);
        if (lgResult.span)
            cssVars[styles.tokens.lgSpan] = String(lgResult.span);
        if (lgResult.end) cssVars[styles.tokens.lgEnd] = String(lgResult.end);
        if (xlResult.start)
            cssVars[styles.tokens.xlStart] = String(xlResult.start);
        if (xlResult.span)
            cssVars[styles.tokens.xlSpan] = String(xlResult.span);
        if (xlResult.end) cssVars[styles.tokens.xlEnd] = String(xlResult.end);
        if (xxlResult.start)
            cssVars[styles.tokens.xxlStart] = String(xxlResult.start);
        if (xxlResult.span)
            cssVars[styles.tokens.xxlSpan] = String(xxlResult.span);
        if (xxlResult.end)
            cssVars[styles.tokens.xxlEnd] = String(xxlResult.end);

        return cssVars;
    };

    return (
        <div
            ref={ref}
            className={clsx(styles.colDiv, className)}
            style={{ ...getCssVars(), ...style } as React.CSSProperties}
            {...otherProps}
        />
    );
};

export const ColDiv = React.forwardRef(Component);
