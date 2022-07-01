import { animated } from "react-spring";
import { Color } from "../../styles/theme/color-theme";
import styled, { css } from "styled-components";
import { LinkListStyle } from "./types";
import { Text, TextStyleHelper } from "../../text";
import { Icon } from "../../icon";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    linkStyle: LinkListStyle;
}

interface ToggleStyleProps {
    showMinimised: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

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

export const ItemIcon = styled(Icon)`
    color: ${Color.Primary};
    font-weight: bold;
    font-size: 1.125rem;
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

export const ToggleButtonIcon = styled(Icon)`
    color: ${Color.Primary};
    font-weight: bold;
    font-size: 1.15rem;
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
        ${ToggleButtonIcon} {
            color: ${Color.PrimaryDark};
        }
    }
`;
