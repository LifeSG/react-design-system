import styled, { css } from "styled-components";
import { Button } from "../button";
import { InputGroup } from "../input-group";
import { PhoneNumberInput } from "../phone-number-input";
import { InputWrapperStyleProps } from "../shared/input-wrapper";
import { Border, Colour, Motion, Spacing } from "../theme";
import { ThemeButton } from "../theme/components/theme-helper";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContactInputWrapperStyleProps {
    $isMaxWidth?: boolean;
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

    &:focus-within .contact-verified-icon {
        border: ${Border["width-020"]} ${Border["solid"]}
            ${Colour["border-focus"]};
        border-left: 0;
        border-right: 0;
    }
`;

export const VerifiedIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${Spacing["spacing-12"]};
    color: ${Colour["icon-success"]};
    flex-shrink: 0;
    height: 100%;
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-inline: none;
    position: relative;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export const ContactButtonWrapper = styled.div<ContactButtonWrapperStyleProps>`
    border-radius: 0 ${ThemeButton["button-radius"]}
        ${ThemeButton["button-radius"]} 0;
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

export const ContactButton = styled(Button.Default)`
    min-width: 120px;
`;

const contactInputStyles = css<
    InputWrapperStyleProps & { $verified?: boolean }
>`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${ThemeButton["button-radius"]} 0 0
        ${ThemeButton["button-radius"]};
    border-right: none;
    position: relative;
    padding: 0 ${Spacing["spacing-16"]};

    &:focus-within {
        border-color: ${Colour["border-focus"]};
        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: -2px;
            bottom: 0;
            border-top-left-radius: ${ThemeButton["button-radius"]};
            border-bottom-left-radius: ${ThemeButton["button-radius"]};
            outline: ${Border["width-020"]} ${Border["solid"]}
                ${Colour["border-focus"]};
            outline-offset: -1px;
            clip-path: inset(-2px 2px -2px -2px);
            pointer-events: none;
        }
    }

    ${(props) =>
        props.$verified &&
        css`
            padding-right: 0;
            input {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &:focus-within {
                &:after {
                    right: -2.5px;
                }
            }
        `}

    ${(props) => {
        if (props.$error) {
            return css`
                border-color: ${Colour["border-error"]};

                &:focus-within {
                    outline-color: ${Colour["border-error-focus"]};
                }
                ${props.$focused &&
                css`
                    outline-color: ${Colour["border-error-focus"]};
                `}
            `;
        }
    }}
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
