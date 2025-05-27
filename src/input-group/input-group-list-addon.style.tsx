import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css } from "styled-components";
import { Selector as DropdownSelector } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { Border, Colour, Font, Motion, Spacing } from "@/theme";
import { Typography } from "../typography";
import { InputGroupAddonPosition } from "./types";
import { lineClampCss } from "../shared/styles";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    disabled?: boolean;
    $readOnly?: boolean;
    $expanded?: boolean;
    $position?: InputGroupAddonPosition;
}

interface DividerStyleProps {
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}

// =============================================================================
// STYLING
// =============================================================================
export const DisplayContainer = styled.div<StyleProps>`
    position: relative;
    display: flex;
    align-items: center;
    ${(props) => {
        if (props.$expanded) {
            return css`
                border-bottom: ${Border["width-010"]} ${Border["solid"]}
                    ${Colour["border"]};
            `;
        }
    }}

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: 0;
                margin: 0;
            `;
        } else {
            switch (props.$position) {
                case "right":
                    return css`
                        flex-direction: row-reverse;
                        margin: 0 ${Spacing["spacing-16"]};
                    `;
                default:
                    return css`
                        flex-direction: row;
                        margin: 0 ${Spacing["spacing-16"]};
                    `;
            }
        }
    }}
`;

export const Selector = styled(DropdownSelector)`
    padding: 0;
    width: auto;
`;

export const SelectorReadOnly = styled.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Spacing["spacing-12"]};
`;

export const IconContainer = styled.div<StyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: ${Motion["duration-250"]} ${Motion["ease-default"]};
    margin: 0 ${Spacing["spacing-12"]};
    display: flex;
    align-items: center;
`;

export const StyledChevronIcon = styled(ChevronDownIcon)`
    color: ${Colour["icon"]};
    height: ${Font.Spec["body-size-baseline"]};
    width: ${Font.Spec["body-size-baseline"]};
`;

export const LabelContainer = styled.div`
    display: flex;
    flex: 1 1 auto;
`;

export const ValueLabel = styled(Typography.BodyBL)`
    text-align: left;
    ${lineClampCss(2)}
    text-overflow: ellipsis;
`;

export const PlaceholderLabel = styled(ValueLabel)`
    color: ${Colour["text-subtler"]};
`;

export const Divider = styled.div<DividerStyleProps>`
    width: 1px;
    background: ${Colour["border"]};
    flex-shrink: 0;
    height: 1.25rem;

    ${(props) => {
        if (props.$readOnly) {
            return css`
                display: none;
            `;
        }
    }}

    ${(props) => {
        switch (props.$position) {
            case "right":
                return css`
                    margin: 0 ${Spacing["spacing-12"]};
                `;
            default:
                return css`
                    margin: 0 ${Spacing["spacing-12"]} 0 0;
                `;
        }
    }}
`;
