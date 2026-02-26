import React, { useContext } from "react";
import { ColDivProps } from "./types";
import { StyledDiv } from "./col-div.style";
import { V3_BreakpointValues } from "../v3_theme/breakpoint/theme-helper";
import { ThemeContext } from "styled-components";

const Component = (
    props: ColDivProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const theme = useContext(ThemeContext);

    const {
        xxlCols,
        xlCols,
        lgCols,
        mdCols,
        smCols,
        xsCols,
        xxsCols,
        ...otherProps
    } = props;

    const getColSpan = (
        cols: number | [number, number] | undefined,
        maxCols: number,
        label: string
    ) => {
        if (!cols) return { start: undefined, span: undefined };

        if (process.env.NODE_ENV === "development") {
            if (typeof cols === "number" && cols > maxCols) {
                console.warn(
                    `Warning: ${label}Cols exceeds maximum (${maxCols}): ${cols}`
                );
            } else if (
                Array.isArray(cols) &&
                (cols[0] > maxCols + 1 || cols[1] > maxCols + 1)
            ) {
                console.warn(
                    `Warning: ${label}Cols array exceeds maximum (${maxCols}): [${cols[0]}, ${cols[1]}]`
                );
            }
        }

        if (Array.isArray(cols)) {
            const [start, end] = cols;
            if (end === -1) {
                return { start, span: maxCols - start + 1 };
            }
            const span = Math.min(end - start, maxCols);
            return { start, span };
        }

        return { start: undefined, span: Math.min(cols, maxCols) };
    };

    const getStyleProps = () => {
        const xxlColumnCount = V3_BreakpointValues["xxl-column"]({ theme });
        const xlColumnCount = V3_BreakpointValues["xl-column"]({ theme });
        const lgColumnCount = V3_BreakpointValues["lg-column"]({ theme });
        const mdColumnCount = V3_BreakpointValues["md-column"]({ theme });
        const smColumnCount = V3_BreakpointValues["sm-column"]({ theme });
        const xsColumnCount = V3_BreakpointValues["xs-column"]({ theme });
        const xxsColumnCount = V3_BreakpointValues["xxs-column"]({ theme });

        const xxlStartSpan = getColSpan(
            xxlCols ||
                xlCols ||
                lgCols ||
                mdCols ||
                smCols ||
                xsCols ||
                xxsCols,
            xxlColumnCount,
            "xxl"
        );

        const xlStartSpan = getColSpan(
            xlCols || lgCols || mdCols || smCols || xsCols || xxsCols,
            xlColumnCount,
            "xl"
        );

        const lgStartSpan = getColSpan(
            lgCols || mdCols || smCols || xsCols || xxsCols,
            lgColumnCount,
            "lg"
        );

        const mdStartSpan = getColSpan(
            mdCols || smCols || xsCols || xxsCols,
            mdColumnCount,
            "md"
        );

        const smStartSpan = getColSpan(
            smCols || xsCols || xxsCols,
            smColumnCount,
            "sm"
        );

        const xsStartSpan = getColSpan(xsCols || xxsCols, xsColumnCount, "xs");

        const xxsStartSpan = getColSpan(xxsCols, xxsColumnCount, "xxs");

        return {
            $xxlStart: xxlStartSpan.start,
            $xxlSpan: xxlStartSpan.span,
            $xlStart: xlStartSpan.start,
            $xlSpan: xlStartSpan.span,
            $lgStart: lgStartSpan.start,
            $lgSpan: lgStartSpan.span,
            $mdStart: mdStartSpan.start,
            $mdSpan: mdStartSpan.span,
            $smStart: smStartSpan.start,
            $smSpan: smStartSpan.span,
            $xsStart: xsStartSpan.start,
            $xsSpan: xsStartSpan.span,
            $xxsStart: xxsStartSpan.start,
            $xxsSpan: xxsStartSpan.span,
        };
    };

    return <StyledDiv ref={ref} {...getStyleProps()} {...otherProps} />;
};

export const ColDiv = React.forwardRef(Component);
