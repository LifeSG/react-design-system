import React from "react";
import { ColDivProps, DivRef } from "./types";
import { StyledDiv } from "./col-div.style";
import { BreakpointValues } from "../theme/breakpoint/theme-helper";
import { ThemeSpec } from "../theme/types";
import { useTheme } from "styled-components";

const Component = (props: ColDivProps, ref: DivRef): JSX.Element => {
    const theme = useTheme() as ThemeSpec;

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

        // during development process to give wwarning
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
            const span = Math.min(end - start, maxCols);
            return { start, span };
        }

        return { start: undefined, span: Math.min(cols, maxCols) };
    };

    const getStyleProps = () => {
        const xxlColumnCount = BreakpointValues["xxl-column"]({ theme });
        const xlColumnCount = BreakpointValues["xl-column"]({ theme });
        const lgColumnCount = BreakpointValues["lg-column"]({ theme });
        const mdColumnCount = BreakpointValues["md-column"]({ theme });
        const smColumnCount = BreakpointValues["sm-column"]({ theme });
        const xsColumnCount = BreakpointValues["xs-column"]({ theme });
        const xxsColumnCount = BreakpointValues["xxs-column"]({ theme });

        const xxlStartSpan = getColSpan(xxlCols, xxlColumnCount, "xxl");
        const xlStartSpan = getColSpan(xlCols, xlColumnCount, "xl");
        const lgStartSpan = getColSpan(lgCols, lgColumnCount, "lg");
        const mdStartSpan = getColSpan(mdCols, mdColumnCount, "md");
        const smStartSpan = getColSpan(smCols, smColumnCount, "sm");
        const xsStartSpan = getColSpan(xsCols, xsColumnCount, "xs");
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

            $xxlMargin: BreakpointValues["xxl-margin"]({ theme }),
            $xxlGutter: BreakpointValues["xxl-gutter"]({ theme }),
            $xlMargin: BreakpointValues["xl-margin"]({ theme }),
            $xlGutter: BreakpointValues["xl-gutter"]({ theme }),
            $lgMargin: BreakpointValues["lg-margin"]({ theme }),
            $lgGutter: BreakpointValues["lg-gutter"]({ theme }),
            $mdMargin: BreakpointValues["md-margin"]({ theme }),
            $mdGutter: BreakpointValues["md-gutter"]({ theme }),
            $smMargin: BreakpointValues["sm-margin"]({ theme }),
            $smGutter: BreakpointValues["sm-gutter"]({ theme }),
            $xsMargin: BreakpointValues["xs-margin"]({ theme }),
            $xsGutter: BreakpointValues["xs-gutter"]({ theme }),
            $xxsMargin: BreakpointValues["xxs-margin"]({ theme }),
            $xxsGutter: BreakpointValues["xxs-gutter"]({ theme }),
        };
    };

    return <StyledDiv ref={ref} {...getStyleProps()} {...otherProps} />;
};

export const ColDiv = React.forwardRef(Component);
