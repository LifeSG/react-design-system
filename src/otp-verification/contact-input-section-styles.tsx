import styled, { css } from "styled-components";

import { Button } from "../button";
import { InputGroup } from "../input-group";
import { PhoneNumberInput } from "../phone-number-input";
import { V3_Colour, V3_MediaQuery, V3_Radius, V3_Spacing } from "../v3_theme";

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
    border-radius: ${V3_Radius["sm"]} 0 0 ${V3_Radius["sm"]};
    box-shadow: inset 1px 0 0 ${V3_Colour["border"]},
        inset 0 1px 0 ${V3_Colour["border"]},
        inset 0 -1px 0 ${V3_Colour["border"]};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${V3_Colour["border-focus"]},
            inset 0 2px 0 ${V3_Colour["border-focus"]},
            inset 0 -2px 0 ${V3_Colour["border-focus"]};
    }

    ${(props) => {
        if (props.$error) {
            return css`
                box-shadow: inset 1px 0 0 ${V3_Colour["border-error"]},
                    inset 0 1px 0 ${V3_Colour["border-error"]},
                    inset 0 -1px 0 ${V3_Colour["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${V3_Colour["border-error-focus"]},
                        inset 0 2px 0 ${V3_Colour["border-error-focus"]},
                        inset 0 -2px 0 ${V3_Colour["border-error-focus"]};
                }
            `;
        } else if (props.$disabled) {
            return css`
                box-shadow: inset 0 0 0 1px ${V3_Colour["border"]};
                border-radius: ${V3_Radius["sm"]};
                background: ${V3_Colour["bg-disabled"]};
                color: ${V3_Colour["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${V3_Colour["border"]};
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
                    ${V3_MediaQuery.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `;
        } else if (props.$readonly) {
            return css`
                box-shadow: none;
                border-radius: ${V3_Radius["sm"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${V3_Colour["border-focus"]};
                }
            `;
        }
    }}
`;

export const VerifiedIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${V3_Spacing["spacing-12"]};
    color: ${V3_Colour["icon-success"]};
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
    ${V3_MediaQuery.MaxWidth.sm} {
        width: fit-content;
    }
`;

export const EmailContactInput = styled(InputGroup)`
    padding: 0 ${V3_Spacing["spacing-16"]};
    width: 100%;
    background: transparent;

    ${(props) =>
        props.disabled &&
        css`
            input {
                color: ${V3_Colour["text-disabled"]};
            }
        `}

    ${(props) =>
        props.readOnly &&
        css`
            padding: 0;
        `}
`;

export const PhoneContactInput = styled(PhoneNumberInput)`
    padding: 0 ${V3_Spacing["spacing-16"]};
    background: transparent;

    ${(props) =>
        props.disabled &&
        css`
            input {
                color: ${V3_Colour["text-disabled"]};
            }
        `}

    ${(props) =>
        props.readOnly &&
        css`
            padding: 0;
            input {
                margin-left: ${V3_Spacing["spacing-12"]};
            }
        `}
`;
