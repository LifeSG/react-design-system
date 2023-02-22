import styled, { css } from "styled-components";
import { Color } from "../color";
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

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled.div<ContainerStyleProps>`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};
    height: 3rem;
    width: 21rem;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
    }

    @media screen and (max-width: 374px) {
        ${(props) => {
            if (props.$variant === "range") {
                return css`
                    width: unset;
                    max-width: 374px;
                    height: 82px;

                    ${ArrowRangeIcon} {
                        transform: unset;
                        left: 57%;
                        top: 1rem;
                    }
                `;
            } else if (props.$variant === "single") {
                return css`
                    width: unset;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
