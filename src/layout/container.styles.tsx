import styled, { css } from "styled-components";

import { V3_Breakpoint, V3_MediaQuery } from "../v3_theme";
import type { ContainerType } from "./types";

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

    padding: 0 ${V3_Breakpoint["xxl-margin"]}px;

    ${V3_MediaQuery.MaxWidth.xl} {
        padding: 0 ${V3_Breakpoint["xl-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        padding: 0 ${V3_Breakpoint["lg-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.md} {
        padding: 0 ${V3_Breakpoint["md-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        padding: 0 ${V3_Breakpoint["sm-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.xs} {
        padding: 0 ${V3_Breakpoint["xs-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.xxs} {
        padding: 0 ${V3_Breakpoint["xxs-margin"]}px;
    }

    ${(props) => {
        if (!props.$stretch) {
            return css`
                max-width: 1440px;
            `;
        }
    }}

    ${(props) => {
        switch (props.$type) {
            case "grid":
                return css`
                    column-gap: ${V3_Breakpoint["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${V3_Breakpoint["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${V3_MediaQuery.MaxWidth.xl} {
                        column-gap: ${V3_Breakpoint["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${V3_Breakpoint["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${V3_MediaQuery.MaxWidth.lg} {
                        column-gap: ${V3_Breakpoint["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${V3_Breakpoint["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${V3_MediaQuery.MaxWidth.md} {
                        column-gap: ${V3_Breakpoint["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${V3_Breakpoint["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${V3_MediaQuery.MaxWidth.sm} {
                        column-gap: ${V3_Breakpoint["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${V3_Breakpoint["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${V3_MediaQuery.MaxWidth.xs} {
                        column-gap: ${V3_Breakpoint["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${V3_Breakpoint["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${V3_MediaQuery.MaxWidth.xxs} {
                        column-gap: ${V3_Breakpoint["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${V3_Breakpoint["xxs-column"]},
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
