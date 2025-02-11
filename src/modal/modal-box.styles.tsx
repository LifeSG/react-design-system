import styled from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Colour, MediaQuery, Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface CloseButtonProps {
    $insetTop?: string | undefined;
    $insetRight?: string | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Colour.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${MediaQuery.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`;

export const CloseButton = styled(ClickableIcon)<CloseButtonProps>`
    position: absolute;
    top: var(--close-button-top-inset, ${Spacing["spacing-16"]});
    right: var(--close-button-right-inset, ${Spacing["spacing-16"]});
    padding: 0;
    color: ${Colour.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Spacing["spacing-20"]});
    }
`;
