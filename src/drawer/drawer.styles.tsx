import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Motion,
    Radius,
    Shadow,
    Spacing,
} from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $show?: boolean | undefined;
}

// =============================================================================
// STYLING HELPERS
// =============================================================================
// FloatingUI transition styles
const FLOATING_TRANSITION_STYLES = css`
    transition-property: right, visibility;

    &[data-status="open"],
    &[data-status="close"] {
        transition-duration: ${Motion["duration-800"]};
    }

    &[data-status="initial"],
    &[data-status="close"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        right: 0;
        visibility: visible;
    }
`;

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<StyleProps>`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${Colour.bg};
    box-shadow: ${Shadow["lg-subtle"]};

    ${FLOATING_TRANSITION_STYLES}

    width: 40%;
    border-top-left-radius: ${Radius["md"]};
    border-bottom-left-radius: ${Radius["md"]};
    overflow: hidden;

    ${MediaQuery.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

export const Header = styled.div`
    top: 0;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
    padding: ${Spacing["spacing-32"]} ${Spacing["spacing-16"]}
        ${Spacing["spacing-16"]}
        calc(${Font.Spec["heading-lh-md"]} + ${Spacing["spacing-32"]});
    background-color: ${Colour.bg};
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};

    ${MediaQuery.MaxWidth.lg} {
        gap: ${Spacing["spacing-8"]};
        padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]}
            ${Spacing["spacing-16"]}
            calc(${Font.Spec["heading-lh-md"]} + ${Spacing["spacing-24"]});
    }
`;

export const CloseButton = styled(ClickableIcon)`
    color: ${Colour.icon};
    padding: 0;
    position: absolute;
    top: ${Spacing["spacing-32"]};
    left: ${Spacing["spacing-16"]};
    &:active,
    &:focus {
        color: ${Colour["icon-hover"]};
    }

    svg {
        height: ${Font.Spec["heading-lh-md"]};
        width: ${Font.Spec["heading-lh-md"]};
    }
`;

export const Heading = styled(Typography.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
`;
