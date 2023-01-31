import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { MinusIcon } from "@lifesg/react-icons/minus";
import { PlusIcon } from "@lifesg/react-icons/plus";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { Text } from "../text";

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
    color: ${Color.Primary};
`;

export const Container = styled.div`
    border-top: 1px solid ${Color.Neutral[5]};
    border-bottom: 1px solid ${Color.Neutral[5]};
`;

export const ItemTitleDefault = styled(Text.H3)`
    color: ${Color.Primary};
    margin-bottom: 0.5rem;
`;
export const ItemTitleSmall = styled(Text.Body)`
    color: ${Color.Primary};
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
        border-bottom: 1px solid ${Color.Neutral[5]};
    }

    :hover {
        ${ItemTitleDefault},
        ${ItemTitleSmall},
        ${ItemIcon} {
            color: ${Color.PrimaryDark};
        }
    }
`;

export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`;

export const Description = styled(Text.BodySmall)`
    margin-top: 0.25rem;
`;

export const Expandable = styled(animated.div)`
    overflow: hidden;
`;

export const ExpandableChild = styled.div`
    border-top: 1px solid ${Color.Neutral[5]};
`;

export const ToggleButtonLabel = styled(Text.H5)`
    color: ${Color.Primary};
    margin-right: 0.5rem;
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
    transition: border-width 300ms linear;
    border-top: 1px solid ${Color.Neutral[5]};

    :hover {
        ${ToggleButtonLabel},
        ${ViewMoreIcon},
        ${ViewLessIcon} {
            color: ${Color.PrimaryDark};
        }
    }
`;
