import styled, { css } from "styled-components";
import { Border, Colour, Font, Motion, Spacing } from "../theme";
import { ThemeButton } from "../theme/components/theme-helper";
import { InputGroup } from "../input-group";
import { Button } from "../button";
import { PhoneNumberInput } from "../phone-number-input";
import { InputWrapperStyleProps } from "../shared/input-wrapper";
import { InternalOtpState } from "./types";

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

export const ContactInputWrapper = styled.div`
    position: relative;
    .verified-icon {
        position: absolute;
        right: 15.67px;
        top: 50%;
        transform: translateY(-50%);
        width: 16.7px;
        height: 16.7px;
        color: ${Colour["icon-success"]};
    }
`;

export const IconWrapper = styled.div`
    width: 16.7px;
    height: 16.7px;
`;

export const ContactButtonWrapper = styled.div<{
    internalState: InternalOtpState;
    isCountdownRunning?: boolean;
}>`
    border-radius: 0 ${ThemeButton["button-radius"]}
        ${ThemeButton["button-radius"]} 0;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};

    ${(props) => {
        switch (props.internalState) {
            case InternalOtpState.VERIFIED:
                return css`
                    background-color: ${Colour["bg-disabled"]};
                    cursor: not-allowed;
                    &:hover {
                        box-shadow: none;
                    }
                    color: ${Colour["text-disabled"]};
                `;
            default:
                break;
        }
        if (props.isCountdownRunning) {
            return css`
                border: ${Border["width-010"]} ${Border["solid"]}
                    ${Colour["bg-disabled"]};
                background-color: ${Colour["bg-disabled"]};
            `;
        } else {
            return css`
                border: ${Border["width-010"]} ${Border["solid"]}
                    ${ThemeButton["button-default-colour-bg"]};
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
export const EmailContactInput = styled(InputGroup)<
    InputWrapperStyleProps & { $verified?: boolean }
>`
    border: ${Border["width-020"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${ThemeButton["button-radius"]} 0 0
        ${ThemeButton["button-radius"]};
    border-right: none;
    &:focus-within {
        border-color: ${Colour["border-focus"]};
    }
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]};
    position: relative;
    ${(props) =>
        props.$verified &&
        css`
            padding-right: ${Spacing["spacing-40"]};
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

export const PhoneContactInput = styled(
    PhoneNumberInput
)<InputWrapperStyleProps>`
    border: ${Border["width-020"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${ThemeButton["button-radius"]} 0 0
        ${ThemeButton["button-radius"]};
    border-right: none;
    &:focus-within {
        border-color: ${Colour["border-focus"]};
    }
    max-width: 310px;
    position: relative;

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
