import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { DesignToken } from "src/design-token";

// =============================================================================
// STYLE INTERFACE
// =============================================================================

interface ContainerStyleProps {
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
}

interface IndicatorStyleProps {
    $position: "start" | "end" | "none";
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
`;

export const TimeContainer = styled.div<ContainerStyleProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid ${Color.Neutral[5]};
    padding: 11px 16px;

    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: 0;
                padding: 0;
                :focus,
                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.$disabled) {
            return css`
                background: ${Color.Neutral[6]};
                :hover {
                    cursor: not-allowed;
                }
                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.$error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};
                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(props)};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `;
        }
    }}
`;

export const ArrowRight = styled(ArrowRightIcon)`
    color: ${Color.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
`;

export const Indicator = styled.div<IndicatorStyleProps>`
    position: absolute;
    background-color: ${Color.Primary};
    height: 0.125rem;
    width: calc(100% - 50% - 2rem); // paddingX is 2rem
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 1rem;
    bottom: 0;

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

export const SelectorInput = styled.input`
    /* reset default styles */
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${Color.Neutral[1]};
    background-color: transparent;
    border: none;
    outline: none;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    display: block;
    width: 100%;
    flex: 1;
`;
