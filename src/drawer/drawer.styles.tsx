import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, MediaQuery, Motion, Radius, Spacing } from "../theme";
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
const VISIBILITY_STYLE = (show: boolean | undefined) => {
    if (show) {
        return css`
            right: 0;
            transition: all ${Motion["duration-800"]} ${Motion["ease-exit"]};
        `;
    }

    return css`
        right: -100%;
        transition: all ${Motion["duration-800"]} ${Motion["ease-default"]};
    `;
};

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
    box-shadow: 0px 2px 12px
        rgb(from ${Colour.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${(props) => (props.$show ? "visible" : "hidden")};
    ${(props) => VISIBILITY_STYLE(props.$show)}

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
        ${Spacing["spacing-16"]};
    background-color: ${Colour.bg};
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};

    ${MediaQuery.MaxWidth.lg} {
        gap: ${Spacing["spacing-8"]};
        padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]}
            ${Spacing["spacing-16"]};
    }
`;

export const CloseButton = styled(ClickableIcon)`
    color: ${Colour.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${Colour["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`;

export const Heading = styled(Typography.HeaderMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
`;
