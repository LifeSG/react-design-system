import styled, { css } from "styled-components";
import { ContainerType } from "./types";
import { MediaQuery } from "../theme/mediaquery/mediaquery-helper";
import { Breakpoint } from "../theme";

interface StyleProps {
    $type: ContainerType;
    $stretch: boolean;
}

export const StyledContainer = styled.div<StyleProps>`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${(props) => {
        if (props.$stretch) {
            return css`
                padding: 0 32px;
            `;
        } else {
            return css`
                padding: 0 32px;
                max-width: 1440px;
            `;
        }
    }}

    ${MediaQuery.MaxWidth.xl} {
        padding: 0 ${Breakpoint["xl-margin"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        padding: 0 ${Breakpoint["lg-margin"]};
    }

    ${MediaQuery.MaxWidth.md} {
        padding: 0 ${Breakpoint["md-margin"]};
    }

    ${MediaQuery.MaxWidth.sm} {
        padding: 0 ${Breakpoint["sm-margin"]};
    }

    ${MediaQuery.MaxWidth.xs} {
        padding: 0 ${Breakpoint["xs-margin"]};
    }

    ${MediaQuery.MaxWidth.xxs} {
        padding: 0 ${Breakpoint["xxs-margin"]};
    }

    /* add the mediquery breakpoint for margin for all */

    ${(props) => {
        switch (props.$type) {
            case "grid":
                return css`
                    column-gap: ${Breakpoint["xxl-gutter"]};
                    display: grid;
                    grid-template-columns: repeat(
                        ${Breakpoint["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${MediaQuery.MaxWidth.xl} {
                        column-gap: ${Breakpoint["xl-gutter"]};
                        grid-template-columns: repeat(
                            ${Breakpoint["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${MediaQuery.MaxWidth.lg} {
                        column-gap: ${Breakpoint["lg-gutter"]};
                        grid-template-columns: repeat(
                            ${Breakpoint["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${MediaQuery.MaxWidth.md} {
                        column-gap: ${Breakpoint["md-gutter"]};
                        grid-template-columns: repeat(
                            ${Breakpoint["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${MediaQuery.MaxWidth.sm} {
                        column-gap: ${Breakpoint["sm-gutter"]};
                        grid-template-columns: repeat(
                            ${Breakpoint["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${MediaQuery.MaxWidth.xs} {
                        column-gap: ${Breakpoint["xs-gutter"]};
                        grid-template-columns: repeat(
                            ${Breakpoint["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${MediaQuery.MaxWidth.xxs} {
                        column-gap: ${Breakpoint["xss-gutter"]};
                        grid-template-columns: repeat(
                            ${Breakpoint["xss-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;

            case "flex-column":
                return css`
                    display: flex;
                    flex-direction: column;
                `;
            case "flex":
            default:
                return css`
                    display: flex;
                `;
        }
    }}
`;
