import styled, { css } from "styled-components";
import { Button } from "../button";
import { InputGroup } from "../input-group";
import { PhoneNumberInput } from "../phone-number-input";
import { InputWrapperStyleProps } from "../shared/input-wrapper";
import { Colour, Motion, Spacing } from "../theme";
import { ThemeButton } from "../theme/components/theme-helper";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContactInputWrapperStyleProps {
    $isMaxWidth?: boolean;
    $error?: boolean;
    $verified?: boolean;
}

interface ContactButtonWrapperStyleProps {
    $isVerified: boolean;
    $isCountdownRunning?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const ContactSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContactInputSectionWrapper = styled.div`
    display: flex;
`;

export const ContactInputWrapper = styled.div<ContactInputWrapperStyleProps>`
    display: flex;
    align-items: center;
    width: ${(props) => (props.$isMaxWidth ? "100%" : "auto")};
    border-radius: ${ThemeButton["button-radius"]} 0 0
        ${ThemeButton["button-radius"]};
    box-shadow: inset 1px 0 0 ${Colour["border"]},
        inset 0 1px 0 ${Colour["border"]}, inset 0 -1px 0 ${Colour["border"]};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${Colour["border-focus"]},
            inset 0 2px 0 ${Colour["border-focus"]},
            inset 0 -2px 0 ${Colour["border-focus"]};
    }

    ${(props) => {
        if (props.$error) {
            return css`
                box-shadow: inset 1px 0 0 ${Colour["border-error"]},
                    inset 0 1px 0 ${Colour["border-error"]},
                    inset 0 -1px 0 ${Colour["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${Colour["border-error-focus"]},
                        inset 0 2px 0 ${Colour["border-error-focus"]},
                        inset 0 -2px 0 ${Colour["border-error-focus"]};
                }
            `;
        }
    }}
`;

export const VerifiedIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${Spacing["spacing-12"]};
    color: ${Colour["icon-success"]};
    flex-shrink: 0;
    height: 100%;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export const ContactButton = styled(
    Button.Default
)<ContactButtonWrapperStyleProps>`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;

    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};

    ${(props) => {
        if (props.$isVerified) {
            return css`
                background-color: ${Colour["bg-disabled"]};
                cursor: not-allowed;
                &:hover {
                    box-shadow: none;
                }
                color: ${Colour["text-disabled"]};
            `;
        }
        if (props.$isCountdownRunning) {
            return css`
                background-color: ${Colour["bg-disabled"]};
            `;
        } else {
            return css`
                background-color: ${ThemeButton["button-default-colour-bg"]};
                &:hover,
                &:active {
                    @media (pointer: fine) {
                        background-color: ${ThemeButton[
                            "button-default-colour-bg-hover"
                        ]};
                    }
                }
            `;
        }
    }}
`;

const contactInputStyles = css<
    InputWrapperStyleProps & { $verified?: boolean }
>`
    border: none;
    border-radius: 0;
    position: relative;
    padding: 0 ${Spacing["spacing-16"]};
    background: transparent;

    ${(props) =>
        props.$verified &&
        css`
            padding-right: 0;
            input {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `}
`;

export const EmailContactInput = styled(InputGroup)<
    InputWrapperStyleProps & { $verified?: boolean }
>`
    ${contactInputStyles}
    width: 100%;
`;

export const PhoneContactInput = styled(PhoneNumberInput)<
    InputWrapperStyleProps & { $verified?: boolean }
>`
    ${contactInputStyles}
`;
