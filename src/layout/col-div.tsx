import clsx from "clsx";
import React from "react";

import * as styles from "./col-div.styles";
import type { ColDivProps } from "./types";

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

    const getColSpan = (cols: number | [number, number] | undefined) => {
        if (!cols) return { start: undefined, span: undefined };

        if (Array.isArray(cols)) {
            const [start, end] = cols;
            if (end === -1) return { start, span: undefined };
            return { start, span: end - start };
        }

        return { start: undefined, span: cols };
    };

    const getCssVars = () => {
        const xxsStartSpan = getColSpan(xxsCols);
        const xsStartSpan = getColSpan(xsCols || xxsCols);
        const smStartSpan = getColSpan(smCols || xsCols || xxsCols);
        const mdStartSpan = getColSpan(mdCols || smCols || xsCols || xxsCols);
        const lgStartSpan = getColSpan(
            lgCols || mdCols || smCols || xsCols || xxsCols
        );
        const xlStartSpan = getColSpan(
            xlCols || lgCols || mdCols || smCols || xsCols || xxsCols
        );
        const xxlStartSpan = getColSpan(
            xxlCols || xlCols || lgCols || mdCols || smCols || xsCols || xxsCols
        );

        const cssVars: Record<string, string> = {};

        if (xxsStartSpan.start)
            cssVars[styles.tokens.xxsStart] = String(xxsStartSpan.start);
        if (xxsStartSpan.span)
            cssVars[styles.tokens.xxsSpan] = String(xxsStartSpan.span);
        if (xsStartSpan.start)
            cssVars[styles.tokens.xsStart] = String(xsStartSpan.start);
        if (xsStartSpan.span)
            cssVars[styles.tokens.xsSpan] = String(xsStartSpan.span);
        if (smStartSpan.start)
            cssVars[styles.tokens.smStart] = String(smStartSpan.start);
        if (smStartSpan.span)
            cssVars[styles.tokens.smSpan] = String(smStartSpan.span);
        if (mdStartSpan.start)
            cssVars[styles.tokens.mdStart] = String(mdStartSpan.start);
        if (mdStartSpan.span)
            cssVars[styles.tokens.mdSpan] = String(mdStartSpan.span);
        if (lgStartSpan.start)
            cssVars[styles.tokens.lgStart] = String(lgStartSpan.start);
        if (lgStartSpan.span)
            cssVars[styles.tokens.lgSpan] = String(lgStartSpan.span);
        if (xlStartSpan.start)
            cssVars[styles.tokens.xlStart] = String(xlStartSpan.start);
        if (xlStartSpan.span)
            cssVars[styles.tokens.xlSpan] = String(xlStartSpan.span);
        if (xxlStartSpan.start)
            cssVars[styles.tokens.xxlStart] = String(xxlStartSpan.start);
        if (xxlStartSpan.span)
            cssVars[styles.tokens.xxlSpan] = String(xxlStartSpan.span);

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
