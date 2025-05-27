import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { MinusIcon } from "@lifesg/react-icons/minus";
import { PlusIcon } from "@lifesg/react-icons/plus";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Border, Colour } from "@/theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ToggleStyleProps {
    $showMinimised: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const iconStyle = css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Colour["icon-primary"]};
`;

export const Container = styled.div`
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};
`;

export const ItemTitleDefault = styled(Typography.HeadingSM).attrs({
    as: "div",
})`
    color: ${Colour["text-primary"]};
    margin-bottom: 0.5rem;
`;

export const ItemTitleSmall = styled(Typography.HeadingXS).attrs({
    as: "div",
})`
    color: ${Colour["text-primary"]};
`;

export const ItemIcon = styled(ChevronRightIcon)`
    ${iconStyle}
`;

export const Item = styled.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    }

    :hover {
        ${ItemTitleDefault},
        ${ItemTitleSmall},
        ${ItemIcon} {
            color: ${Colour["text-hover"]};
        }
    }
`;

export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`;

export const Description = styled(Typography.BodyMD)`
    margin-top: 0.25rem;
`;

export const Expandable = styled(animated.div)`
    overflow: hidden;
`;

export const ExpandableChild = styled.div`
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
`;

export const ToggleButtonLabel = styled(Typography.BodyMD).attrs({
    as: "span",
})`
    color: ${Colour["text-primary"]};
    margin-right: 1rem;
`;

export const ViewMoreIcon = styled(PlusIcon)`
    ${iconStyle}
`;
export const ViewLessIcon = styled(MinusIcon)`
    ${iconStyle}
`;

export const ToggleButton = styled.button<ToggleStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};

    :hover {
        ${ToggleButtonLabel},
        ${ViewMoreIcon},
        ${ViewLessIcon} {
            color: ${Colour["text-hover"]};
        }
    }
`;
