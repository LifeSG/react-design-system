import styled, { css } from "styled-components";
import { Border, Colour, Font, Motion, Spacing } from "../theme";
import { ThemeButton } from "../theme/components/theme-helper";
import { InputGroup } from "../input-group";
import { Button } from "../button";
import { PhoneNumberInput } from "../phone-number-input";
import { InputWrapperStyleProps } from "../shared/input-wrapper";

interface ContactInputWrapperStyleProps {
    $isMaxWidth?: boolean;
}

interface ContactButtonWrapperStyleProps {
    $isVerified: boolean;
    $isCountdownRunning?: boolean;
}

export const ContactSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContactLabel = styled.label`
    color: ${Colour["text-subtle"]};
    display: inline-block;
    ${Font["form-label"]}
    font-weight: ${Font.Spec["weight-semibold"]};
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const ContactInputSectionWrapper = styled.div`
    display: flex;
`;

export const ContactInputWrapper = styled.div<ContactInputWrapperStyleProps>`
    display: flex;
    align-items: center;
    width: ${(props) => (props.$isMaxWidth ? "100%" : "auto")};

    &:focus-within .verified-icon-wrapper {
        border-color: ${Colour["border-focus"]};
    }
`;

export const VerifiedIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    color: ${Colour["icon-success"]};
    flex-shrink: 0;
    height: 100%;
    border: ${Border["width-020"]} ${Border["solid"]} ${Colour["border"]};
    border-inline: none;
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
    &:focus-within {
        border-color: ${Colour["border-focus"]};
        outline: none;
    }
`;
