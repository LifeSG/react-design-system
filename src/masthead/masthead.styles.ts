import styled, { css } from "styled-components";

import { V3_Breakpoint, V3_MediaQuery } from "../v3_theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface WrapperStyleProps {
    $stretch: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<WrapperStyleProps>`
    // matches Layout.Container
    --sgds-mainnav-padding-x: ${V3_Breakpoint["xxl-margin"]}px;
    --sgds-mainnav-mobile-padding-x: ${V3_Breakpoint["xxl-margin"]}px;

    ${V3_MediaQuery.MaxWidth.xl} {
        --sgds-mainnav-padding-x: ${V3_Breakpoint["xl-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${V3_Breakpoint["xl-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        --sgds-mainnav-padding-x: ${V3_Breakpoint["lg-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${V3_Breakpoint["lg-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.md} {
        --sgds-mainnav-padding-x: ${V3_Breakpoint["md-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${V3_Breakpoint["md-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        --sgds-mainnav-padding-x: ${V3_Breakpoint["sm-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${V3_Breakpoint["sm-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.xs} {
        --sgds-mainnav-padding-x: ${V3_Breakpoint["xs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${V3_Breakpoint["xs-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.xxs} {
        --sgds-mainnav-padding-x: ${V3_Breakpoint["xxs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${V3_Breakpoint["xxs-margin"]}px;
    }

    ${(props) => {
        if (props.$stretch) {
            return css`
                --sgds-mainnav-max-width: calc(infinity * 1px);
            `;
        } else {
            return css`
                --sgds-mainnav-max-width: 1440px;
            `;
        }
    }}
`;
