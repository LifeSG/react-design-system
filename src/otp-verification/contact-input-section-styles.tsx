import styled, { css } from "styled-components";
import { Button } from "../button";
import { InputGroup } from "../input-group";
import { PhoneNumberInput } from "../phone-number-input";
import { InputWrapperStyleProps } from "../shared/input-wrapper";
import { Colour, Spacing } from "../theme";
import { ThemeButton } from "../theme/components/theme-helper";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContactInputWrapperStyleProps {
    $isMaxWidth?: boolean;
    $error?: boolean;
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
`;

export const EmailContactInput = styled(InputGroup)<InputWrapperStyleProps>`
    padding: 0 ${Spacing["spacing-16"]};
    width: 100%;
    background: transparent;
`;

export const PhoneContactInput = styled(
    PhoneNumberInput
)<InputWrapperStyleProps>`
    padding: 0 ${Spacing["spacing-16"]};
    background: transparent;
`;
