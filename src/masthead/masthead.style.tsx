import styled, { css } from "styled-components";
import { Breakpoint, MediaQuery } from "../theme";

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
    ${(props) => {
        if (props.$stretch) {
            return css`
                --sgds-mainnav-padding-x: ${Breakpoint["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${Breakpoint["xxl-margin"]}px;
            `;
        } else {
            return css`
                --sgds-mainnav-max-width: 1440px;

                --sgds-mainnav-padding-x: ${Breakpoint["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${Breakpoint["xxl-margin"]}px;

                ${MediaQuery.MaxWidth.xl} {
                    --sgds-mainnav-padding-x: ${Breakpoint["xl-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Breakpoint[
                        "xl-margin"
                    ]}px;
                }

                ${MediaQuery.MaxWidth.lg} {
                    --sgds-mainnav-padding-x: ${Breakpoint["lg-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Breakpoint[
                        "lg-margin"
                    ]}px;
                }

                ${MediaQuery.MaxWidth.md} {
                    --sgds-mainnav-padding-x: ${Breakpoint["md-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Breakpoint[
                        "md-margin"
                    ]}px;
                }

                ${MediaQuery.MaxWidth.sm} {
                    --sgds-mainnav-padding-x: ${Breakpoint["sm-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Breakpoint[
                        "sm-margin"
                    ]}px;
                }

                ${MediaQuery.MaxWidth.xs} {
                    --sgds-mainnav-padding-x: ${Breakpoint["xs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Breakpoint[
                        "xs-margin"
                    ]}px;
                }

                ${MediaQuery.MaxWidth.xxs} {
                    --sgds-mainnav-padding-x: ${Breakpoint["xxs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Breakpoint[
                        "xxs-margin"
                    ]}px;
                }
            `;
        }
    }}
`;
