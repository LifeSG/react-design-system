import styled, { css } from "styled-components";

import { V3_MediaQuery } from "../v3_theme/breakpoint/media-query-helper";

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
}

export const StyledDiv = styled.div<StyledDivStyleProps>`
    position: relative;

    ${(props) => {
        const {
            $xxlStart,
            $xxlSpan,

            $xlStart,
            $xlSpan,

            $lgStart,
            $lgSpan,

            $mdStart,
            $mdSpan,

            $smStart,
            $smSpan,

            $xsStart,
            $xsSpan,

            $xxsStart,
            $xxsSpan,
        } = props;

        return css`
            grid-column: ${$xxlStart || "auto"} / span ${$xxlSpan || 1};

            ${V3_MediaQuery.MaxWidth.xl} {
                grid-column: ${$xlStart || "auto"} / span ${$xlSpan || 1};
            }

            ${V3_MediaQuery.MaxWidth.lg} {
                grid-column: ${$lgStart || "auto"} / span ${$lgSpan || 1};
            }

            ${V3_MediaQuery.MaxWidth.md} {
                grid-column: ${$mdStart || "auto"} / span ${$mdSpan || 1};
            }

            ${V3_MediaQuery.MaxWidth.sm} {
                grid-column: ${$smStart || "auto"} / span ${$smSpan || 1};
            }

            ${V3_MediaQuery.MaxWidth.xs} {
                grid-column: ${$xsStart || "auto"} / span ${$xsSpan || 1};
            }

            ${V3_MediaQuery.MaxWidth.xxs} {
                grid-column: ${$xxsStart || "auto"} / span ${$xxsSpan || 1};
            }
        `;
    }}
`;
