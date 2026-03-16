import styled from "styled-components";

import { ClickableIcon } from "../shared/clickable-icon";
import {
    V3_Colour,
    V3_MediaQuery,
    V3_Radius,
    V3_Shadow,
    V3_Spacing,
} from "../v3_theme";

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
    background: ${V3_Colour.bg};
    box-shadow: ${V3_Shadow["lg-strong"]};
    border-radius: ${V3_Radius["lg"]};
    overflow: hidden;

    ${V3_MediaQuery.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`;

export const CloseButton = styled(ClickableIcon)<CloseButtonProps>`
    position: absolute;
    top: var(--close-button-top-inset, ${V3_Spacing["spacing-16"]});
    right: var(--close-button-right-inset, ${V3_Spacing["spacing-16"]});
    padding: 0;
    color: ${V3_Colour.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${V3_Spacing["spacing-20"]});
    }
`;
