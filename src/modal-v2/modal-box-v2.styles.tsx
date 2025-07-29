import styled from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Colour, MediaQuery, Radius, Spacing } from "../theme";

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
    width: 40rem;
    background: ${Colour.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: ${Radius["lg"]};
    overflow: hidden;

    display: flex;
    flex-direction: column-reverse;

    > div {
        /* minus the space taken up by the block CloseButton */
        margin-top: calc(
            0px - 32px - var(--close-button-top-inset, ${Spacing["spacing-16"]})
        );
    }

    ${MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`;

export const CloseButton = styled(ClickableIcon)<CloseButtonProps>`
    margin-top: var(--close-button-top-inset, ${Spacing["spacing-16"]});
    margin-right: var(--close-button-right-inset, ${Spacing["spacing-16"]});
    margin-left: auto;
    padding: 0;
    color: ${Colour.icon};

    z-index: 2; // since it's column-reverse display, this would naturally get covered by ModalBox contents

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Spacing["spacing-20"]});
    }
`;
