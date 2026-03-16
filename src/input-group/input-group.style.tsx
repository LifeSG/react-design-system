import styled, { css } from "styled-components";

import { Input } from "../input/input";
import type { InputWrapperStyleProps } from "../shared/input-wrapper";
import { InputBox } from "../shared/input-wrapper";
import { V3_Colour, V3_Font, V3_Spacing } from "../v3_theme";
import type { InputGroupAddonPosition } from "./types";

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
    $noBorder?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const AddonWrapper = styled(InputBox)<InputWrapperStyleProps>`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${(props) =>
            props.$readOnly || props.$noBorder
                ? "0"
                : V3_Spacing["spacing-16"]};
    flex-direction: ${(props) =>
        props.$position === "right" ? "row-reverse" : "row"};
`;

export const NoAddonWrapper = styled(InputBox)<AddonStyleProps>`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${(props) =>
            props.$readOnly || props.$noBorder
                ? "0"
                : V3_Spacing["spacing-16"]};
    flex-direction: ${(props) =>
        props.$position === "right" ? "row-reverse" : "row"};
`;

export const MainInput = styled(Input)``;

export const LabelAddonContainer = styled.div<AddonStyleProps>`
    position: relative;
    display: flex;
    align-items: center;

    ${V3_Font["body-baseline-regular"]}
    color: ${V3_Colour["text"]};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${V3_Colour["text-subtler"]};
            `;
        }
    }}

    ${(props) => {
        switch (props.$position) {
            case "right":
                return css`
                    margin-left: ${props.$readOnly
                        ? V3_Spacing["spacing-4"]
                        : V3_Spacing["spacing-12"]};
                `;
            case "left":
            default:
                return css`
                    margin-right: ${props.$readOnly
                        ? V3_Spacing["spacing-4"]
                        : V3_Spacing["spacing-12"]};
                `;
        }
    }};
`;
