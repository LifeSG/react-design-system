import styled, { css } from "styled-components";

import { ClickableIcon } from "../shared/clickable-icon";
import { Typography } from "../typography";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Motion,
    V3_Radius,
    V3_Shadow,
    V3_Spacing,
} from "../v3_theme";

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

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        transition-duration: ${V3_Motion["duration-800"]};
        transition-timing-function: ${V3_Motion["ease-entrance"]};
        right: 0;
        visibility: visible;
    }

    &[data-status="close"] {
        transition-duration: ${V3_Motion["duration-800"]};
        transition-timing-function: ${V3_Motion["ease-exit"]};
        right: -100%;
        visibility: hidden;
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

    background-color: ${V3_Colour.bg};
    box-shadow: ${V3_Shadow["lg-subtle"]};

    ${FLOATING_TRANSITION_STYLES}

    width: 40%;
    border-top-left-radius: ${V3_Radius["md"]};
    border-bottom-left-radius: ${V3_Radius["md"]};
    overflow: hidden;

    ${V3_MediaQuery.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${V3_MediaQuery.MaxWidth.lg} {
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
    gap: ${V3_Spacing["spacing-16"]};
    padding: ${V3_Spacing["spacing-32"]} ${V3_Spacing["spacing-16"]}
        ${V3_Spacing["spacing-16"]}
        calc(${V3_Font.Spec["heading-lh-md"]} + ${V3_Spacing["spacing-32"]});
    background-color: ${V3_Colour.bg};
    border-bottom: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour.border};

    ${V3_MediaQuery.MaxWidth.lg} {
        gap: ${V3_Spacing["spacing-8"]};
        padding: ${V3_Spacing["spacing-32"]} ${V3_Spacing["spacing-20"]}
            ${V3_Spacing["spacing-16"]}
            calc(${V3_Font.Spec["heading-lh-md"]} + ${V3_Spacing["spacing-24"]});
    }
`;

export const CloseButton = styled(ClickableIcon)`
    color: ${V3_Colour.icon};
    padding: 0;
    position: absolute;
    top: ${V3_Spacing["spacing-32"]};
    left: ${V3_Spacing["spacing-16"]};
    &:active,
    &:focus {
        color: ${V3_Colour["icon-hover"]};
    }

    svg {
        height: ${V3_Font.Spec["heading-lh-md"]};
        width: ${V3_Font.Spec["heading-lh-md"]};
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
