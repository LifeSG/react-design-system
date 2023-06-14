import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { ClickableIcon } from "../shared/clickable-icon";
import { Text } from "../text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface IStyleProps {
    $show: boolean;
}

// =============================================================================
// STYLING HELPERS
// =============================================================================
const VISIBILITY_STYLE = (show: boolean | undefined) => {
    if (show) {
        return css`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `;
    }

    return css`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `;
};

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<IStyleProps>`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${Color.Neutral[8]};
    box-shadow: 0px 2px 12px rgba(104, 104, 104, 0.25);

    visibility: ${(props) => (props.$show ? "visible" : "hidden")};
    ${(props) => VISIBILITY_STYLE(props.$show)}

    width: 40%;

    ${MediaQuery.MaxWidth.desktopL} {
        width: 50%;
        min-width: 700px;
    }

    ${MediaQuery.MaxWidth.tablet} {
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
    gap: 1rem;
    height: 5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${Color.Neutral[8]};
    border-bottom: 1px solid ${Color.Neutral[5]};

    ${MediaQuery.MaxWidth.tablet} {
        gap: 0.5rem;
    }
`;

export const CloseButton = styled(ClickableIcon)`
    color: ${Color.Neutral[1]};
    padding: 0;

    :active,
    :focus {
        color: ${Color.Primary};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`;

export const Heading = styled(Text.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
`;
