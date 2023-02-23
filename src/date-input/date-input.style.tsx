import styled, { css } from "styled-components";
import { Color } from "../color";
import { DesignToken } from "../design-token";
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { DateInputVariant } from "./types";
import { MediaQuery } from "../media";
import { IconButton } from "../icon-button";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ContainerStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $variant?: DateInputVariant;
}

interface IndicateBarStyleProps {
    $position: "start" | "end" | "none";
}

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled.div<ContainerStyleProps>`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.25rem;
    background: ${Color.Neutral[8]};
    height: 3rem;
    min-width: 20.75rem;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${(props) => {
        if (props.$readOnly) {
            return css`
                ${ArrowRangeIcon} {
                    left: 43%;
                }
            `;
        }
    }}

    ${MediaQuery.MaxWidth.mobileM} {
        ${(props) => {
            if (props.$variant === "range") {
                return css`
                    min-width: unset;
                    max-width: 23.25rem;
                    height: 5.125rem;

                    ${ArrowRangeIcon} {
                        transform: unset;
                        left: ${props.$readOnly ? "48%" : "57%"};
                        top: 1rem;
                    }
                `;
            } else if (props.$variant === "single") {
                return css`
                    min-width: unset;
                `;
            }
        }}
    }

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.disabled) {
            return css`
                background: ${Color.Neutral[6](props)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Color.Neutral[5](props)};
                    box-shadow: none;
                }
            `;
        } else if (props.$error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(props)};
                }
            `;
        }
    }}
`;

export const ArrowRangeIcon = styled(IconButton)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;

    ${MediaQuery.MaxWidth.mobileS} {
        left: 71% !important;
    }
`;

export const ArrowRight = styled(ArrowRightIcon)`
    color: ${Color.Neutral[3]};
    cursor: pointer;
    width: 1.125rem;
    height: 1.125rem;
`;

export const IndicateBar = styled.div<IndicateBarStyleProps>`
    position: absolute;
    background-color: ${Color.Primary};
    height: 0.125rem;
    width: calc(100% - 50% - 2rem); // 2rem is paddingX,
    transition: left 350ms ease-in-out;
    left: 1rem;
    bottom: -0.1rem;

    ${(props) => {
        switch (props.$position) {
            case "start":
                return css`
                    left: 1rem;
                    opacity: 1;
                `;
            case "end":
                return css`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;
            case "none":
                return css`
                    left: 1rem;
                    opacity: 0;
                `;
        }
    }}
`;
