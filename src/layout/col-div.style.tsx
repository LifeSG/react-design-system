import styled, { css } from "styled-components";
import { v2_MediaQuery } from "../v2_media/media";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export interface StyledDivStyleProps {
    $desktopStart?: number | undefined;
    $desktopSpan?: number | undefined;
    $tabletStart?: number | undefined;
    $tabletSpan?: number | undefined;
    $mobileStart?: number | undefined;
    $mobileSpan?: number | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const StyledDiv = styled.div<StyledDivStyleProps>`
    position: relative;
    ${(props) => {
        const {
            $desktopStart,
            $desktopSpan,
            $tabletStart,
            $tabletSpan,
            $mobileStart,
            $mobileSpan,
        } = props;

        return css`
            grid-column: ${$desktopStart || "auto"} / span ${$desktopSpan || 1};

            ${v2_MediaQuery.MaxWidth.tablet} {
                grid-column: ${$tabletStart || "auto"} / span
                    ${$tabletSpan || 1};
            }

            ${v2_MediaQuery.MaxWidth.mobileL} {
                grid-column: ${$mobileStart || "auto"} / span
                    ${$mobileSpan || 1};
            }
        `;
    }}
`;
