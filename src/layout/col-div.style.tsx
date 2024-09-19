import styled, { css } from "styled-components";
import { MediaQuery } from "../theme/mediaquery/mediaquery-helper";

export interface StyledDivStyleProps {
    $xxsStart?: number | undefined;
    $xxsSpan?: number | undefined;
    $xsStart?: number | undefined;
    $xsSpan?: number | undefined;
    $smStart?: number | undefined;
    $smSpan?: number | undefined;
    $mdStart?: number | undefined;
    $mdSpan?: number | undefined;
    $lgStart?: number | undefined;
    $lgSpan?: number | undefined;
    $xlStart?: number | undefined;
    $xlSpan?: number | undefined;
    $xxlStart?: number | undefined;
    $xxlSpan?: number | undefined;

    $xxsMargin?: string | number;
    $xxsGutter?: string | number;
    $xsMargin?: string | number;
    $xsGutter?: string | number;
    $smMargin?: string | number;
    $smGutter?: string | number;
    $mdMargin?: string | number;
    $mdGutter?: string | number;
    $lgMargin?: string | number;
    $lgGutter?: string | number;
    $xlMargin?: string | number;
    $xlGutter?: string | number;
    $xxlMargin?: string | number;
    $xxlGutter?: string | number;
}

export const StyledDiv = styled.div<StyledDivStyleProps>`
    position: relative;

    ${(props) => {
        const {
            $xxlStart,
            $xxlSpan,
            $xxlMargin,
            $xxlGutter,

            $xlStart,
            $xlSpan,
            $xlMargin,
            $xlGutter,

            $lgStart,
            $lgSpan,
            $lgMargin,
            $lgGutter,

            $mdStart,
            $mdSpan,
            $mdMargin,
            $mdGutter,

            $smStart,
            $smSpan,
            $smMargin,
            $smGutter,

            $xsStart,
            $xsSpan,
            $xsMargin,
            $xsGutter,

            $xxsStart,
            $xxsSpan,
            $xxsMargin,
            $xxsGutter,
        } = props;

        return css`
            grid-column: ${$xxlStart || "auto"} / span ${$xxlSpan || 1};
            margin: ${$xxlMargin}px;
            padding: ${$xxlGutter}px;

            ${MediaQuery.MaxWidth.xl} {
                grid-column: ${$xlStart || "auto"} / span ${$xlSpan || 1};
                margin: ${$xlMargin}px;
                padding: ${$xlGutter}px;
            }

            ${MediaQuery.MaxWidth.lg} {
                grid-column: ${$lgStart || "auto"} / span ${$lgSpan || 1};
                margin: ${$lgMargin}px;
                padding: ${$lgGutter}px;
            }

            ${MediaQuery.MaxWidth.md} {
                grid-column: ${$mdStart || "auto"} / span ${$mdSpan || 1};
                margin: ${$mdMargin}px;
                padding: ${$mdGutter}px;
            }

            ${MediaQuery.MaxWidth.sm} {
                grid-column: ${$smStart || "auto"} / span ${$smSpan || 1};
                margin: ${$smMargin}px;
                padding: ${$smGutter}px;
            }

            ${MediaQuery.MaxWidth.xs} {
                grid-column: ${$xsStart || "auto"} / span ${$xsSpan || 1};
                margin: ${$xsMargin}px;
                padding: ${$xsGutter}px;
            }

            ${MediaQuery.MaxWidth.xxs} {
                grid-column: ${$xxsStart || "auto"} / span ${$xxsSpan || 1};
                margin: ${$xxsMargin}px;
                padding: ${$xxsGutter}px;
            }
        `;
    }}
`;
