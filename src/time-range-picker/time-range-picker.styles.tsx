import styled, { css } from "styled-components";
import { Color } from "../color";
import { BookingSGColorSet } from "../spec/color-spec/bookingsg-color-set";
import { TextStyleHelper } from "../text/helper";
import { MediaQuery } from "../media";
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { DesignToken } from "src/design-token";

// =============================================================================
// STYLE INTERFACe
// =============================================================================
interface StyleProps {
    $focused?: boolean;
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
}

interface ContainerStyleProps {
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
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
    padding: 11px 16px;
    gap: 8px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid ${Color.Neutral[5]};
    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }
    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: 0;
                cursor: none;
                :focus,
                :focus-within {
                    border: 0px;
                    box-shadow: none;
                }
            `;
        } else if (props.$disabled) {
            return css`
                background: ${Color.Neutral[6](props)} !important;
                :hover {
                    cursor: not-allowed;
                }
                :focus-within {
                    border: 0px;
                    box-shadow: none;
                    //    border: 1px solid ${Color.Neutral[5](props)};
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

    ${MediaQuery.MaxWidth.mobileS} {
        width: 235px;
    }
`;

export const ArrowRangeContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
`;

export const ArrowRight = styled(ArrowRightIcon)`
    color: ${Color.Neutral[3]};
    cursor: pointer;
    width: 1.125rem;
    height: 1rem;
`;

export const BottomHighlightStartTime = styled.div`
    position: absolute;
    bottom: 0;
    height: 2px;
    left: 1rem;
    right: 23rem;
    background: ${BookingSGColorSet.Neutral[8]};
    background-color: ${Color.Accent.Light[1]};

    ${MediaQuery.MaxWidth.tablet} {
        width: 40%;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        /* width: 335px; */
        width: 40%;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        width: 40%;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 40%;
    }
`;

export const BottomHighlightEndTime = styled.div`
    position: absolute;
    bottom: 0;
    height: 2px;
    left: 16rem;
    right: 7rem;
    background: ${BookingSGColorSet.Neutral[8]};
    background-color: ${Color.Accent.Light[1]};

    ${MediaQuery.MaxWidth.tablet} {
        width: 8rem;
        left: 12rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        /* width: 335px; */
        width: 8rem;
        left: 10rem;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        width: 6rem;
        left: 10rem;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 5rem;
        left: 8rem;
    }
`;

export const InputSelectorStartTimeElement = styled.input<StyleProps>`
    ${TextStyleHelper.getTextStyle("Body", "regular")}

    display: block;
    width: 100%;
    height: 26px;
    background: ${BookingSGColorSet.Neutral[8]};
    color: ${BookingSGColorSet.Neutral[1]};
    border: 0px;
    :focus,
    :active {
        outline: none;
    }
    :disabled {
        background: ${Color.Neutral[6]} !important;
        :hover {
            cursor: not-allowed;
        }
    }
    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: none;
                cursor: none;
            `;
        }
        if (props.$disabled) {
            return css`
                background: ${Color.Neutral[6](props)} !important;
                :hover {
                    cursor: not-allowed;
                }
            `;
        }
    }}
`;

export const InputSelectorEndTimeElement = styled.input<StyleProps>`
    ${TextStyleHelper.getTextStyle("Body", "regular")}

    display: block;
    width: 100%;
    height: 26px;
    margin-left: 1rem;
    background: ${BookingSGColorSet.Neutral[8]};
    color: ${BookingSGColorSet.Neutral[1]};
    border: 0px;
    :focus,
    :active {
        outline: none;
    }
    :disabled {
        background: ${Color.Neutral[6]} !important;
        :hover {
            cursor: not-allowed;
        }
    }

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: none;
                cursor: none;
            `;
        }
        if (props.$disabled) {
            return css`
                background: ${Color.Neutral[6](props)} !important;
                :hover {
                    cursor: not-allowed;
                }
            `;
        }
    }}
`;
