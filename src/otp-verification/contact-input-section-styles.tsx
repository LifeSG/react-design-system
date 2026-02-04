import styled, { css } from "styled-components";
import { Button } from "../button";
import { InputGroup } from "../input-group";
import { PhoneNumberInput } from "../phone-number-input";
import { Colour, MediaQuery, Spacing } from "../theme";
import { ThemeButton } from "../theme/components/theme-helper";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContactInputWrapperStyleProps {
    $isMaxWidth?: boolean;
    $error?: boolean;
    $disabled?: boolean;
    $readonly?: boolean;
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
        } else if (props.$disabled) {
            return css`
                box-shadow: inset 0 0 0 1px ${Colour["border"]};
                border-radius: ${ThemeButton["button-radius"]};
                background: ${Colour["bg-disabled"]};
                color: ${Colour["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 1px ${Colour["border"]};
                }

                /* Spacer to maintain width when disabled */
                ${!props.$isMaxWidth &&
                css`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${MediaQuery.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `;
        } else if (props.$readonly) {
            return css`
                box-shadow: none;
                border-radius: 0;
                &:focus-within {
                    box-shadow: none;
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

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export const ContactButton = styled(Button.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${MediaQuery.MaxWidth.sm} {
        width: fit-content;
    }
`;

export const EmailContactInput = styled(InputGroup)`
    padding: 0 ${Spacing["spacing-16"]};
    width: 100%;
    background: transparent;

    ${(props) =>
        props.disabled &&
        css`
            input {
                color: ${Colour["text-disabled"]};
            }
        `}

    ${(props) =>
        props.readOnly &&
        css`
            padding: 0;
        `}
`;

export const PhoneContactInput = styled(PhoneNumberInput)`
    padding: 0 ${Spacing["spacing-16"]};
    background: transparent;

    ${(props) =>
        props.disabled &&
        css`
            input {
                color: ${Colour["text-disabled"]};
            }
        `}

    ${(props) =>
        props.readOnly &&
        css`
            padding: 0;
            input {
                margin-left: ${Spacing["spacing-12"]};
            }
        `}
`;
