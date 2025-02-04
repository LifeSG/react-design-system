import styled, { css } from "styled-components";
import { Input } from "../input/input";
import { InputBox, InputWrapperStyleProps } from "../shared/input-wrapper";
import { Colour, Font, Spacing } from "../theme";
import { InputGroupAddonPosition } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

// Need to export since the component could be extended
export interface AddonStyleProps {
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}

// =============================================================================
// STYLING
// =============================================================================
export const AddonWrapper = styled(InputBox)<InputWrapperStyleProps>`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]};
    flex-direction: ${(props) =>
        props.$position === "right" ? "row-reverse" : "row"};
`;

export const NoAddonWrapper = styled(InputBox)<AddonStyleProps>`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]};
    flex-direction: ${(props) =>
        props.$position === "right" ? "row-reverse" : "row"};
`;

export const MainInput = styled(Input)``;

export const LabelAddonContainer = styled.div<AddonStyleProps>`
    position: relative;
    display: flex;
    align-items: center;

    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Colour["text-subtler"]};
            `;
        }
    }}

    ${(props) => {
        switch (props.$position) {
            case "right":
                return css`
                    margin-left: ${props.$readOnly
                        ? Spacing["spacing-4"]
                        : Spacing["spacing-12"]};
                `;
            case "left":
            default:
                return css`
                    margin-right: ${props.$readOnly
                        ? Spacing["spacing-4"]
                        : Spacing["spacing-12"]};
                `;
        }
    }};
`;
