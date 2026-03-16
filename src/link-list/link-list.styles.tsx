import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { MinusIcon } from "@lifesg/react-icons/minus";
import { PlusIcon } from "@lifesg/react-icons/plus";
import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";
import { V3_Border, V3_Colour } from "../v3_theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ExpandableChildStyleProps {
    $border?: boolean;
}

interface ToggleButtonStyleProps {
    $loading?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const iconStyle = css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${V3_Colour["icon-primary"]};
`;

export const Container = styled.div`
    border-top: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour.border};
    border-bottom: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour.border};
`;

export const ItemTitleDefault = styled(Typography.HeadingSM)`
    color: ${V3_Colour["text-primary"]};
    margin-bottom: 0.5rem;
`;

export const ItemTitleSmall = styled(Typography.HeadingXS)`
    color: ${V3_Colour["text-primary"]};
`;

export const ItemIcon = styled(ChevronRightIcon)`
    ${iconStyle}
`;

export const ItemContainer = styled.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    &:not(:last-of-type) {
        border-bottom: ${V3_Border["width-010"]} ${V3_Border.solid}
            ${V3_Colour.border};
    }

    &:hover {
        ${ItemTitleDefault},
        ${ItemTitleSmall},
        ${ItemIcon} {
            color: ${V3_Colour["text-hover"]};
        }
    }
`;

export const ItemContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`;

export const Description = styled(Typography.BodyMD)`
    margin-top: 0.25rem;
`;

export const Expandable = animated(styled.div`
    overflow: hidden;
`);

export const ExpandableChild = styled.div<ExpandableChildStyleProps>`
    ${(props) =>
        props.$border &&
        css`
            border-top: ${V3_Border["width-010"]} ${V3_Border.solid}
                ${V3_Colour.border};
        `}
`;

export const ToggleButtonLabel = styled(Typography.BodyMD)`
    color: ${V3_Colour["text-primary"]};
`;

export const ViewMoreIcon = styled(PlusIcon)`
    ${iconStyle}
`;
export const ViewLessIcon = styled(MinusIcon)`
    ${iconStyle}
`;

export const ToggleButton = styled.button<ToggleButtonStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour.border};
    gap: 1rem;

    ${(props) =>
        props.$loading &&
        css`
            cursor: default;
            flex-direction: row-reverse;

            ${ToggleButtonLabel},
            ${ViewMoreIcon},
            ${ViewLessIcon} {
                color: ${V3_Colour["text-disabled"]};
                text-decoration: none;
            }
        `}

    ${(props) =>
        !props.$loading &&
        css`
            &:hover {
                ${ToggleButtonLabel},
                ${ViewMoreIcon},
                ${ViewLessIcon} {
                    color: ${V3_Colour["text-hover"]};
                    text-decoration: underline;
                }
            }
        `}
`;
