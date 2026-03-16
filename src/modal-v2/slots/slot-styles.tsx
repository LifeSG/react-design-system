import styled, { css } from "styled-components";

import { ClickableIcon } from "../../shared/clickable-icon";
import {
    V3_Breakpoint,
    V3_Colour,
    V3_MediaQuery,
    V3_Radius,
    V3_Shadow,
    V3_Spacing,
} from "../../v3_theme";

// =============================================================================
// Card
// =============================================================================
export const ModalCard = styled.div`
    width: 40rem;
    margin: ${V3_Spacing["spacing-64"]} auto;
    background: ${V3_Colour.bg};
    box-shadow: ${V3_Shadow["xs-strong"]};
    border-radius: ${V3_Radius["lg"]};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${V3_Breakpoint["xxl-margin"]}px * 2);

    ${V3_MediaQuery.MaxWidth.xl} {
        max-width: calc(100% - ${V3_Breakpoint["xl-margin"]}px * 2);
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        max-width: calc(100% - ${V3_Breakpoint["lg-margin"]}px * 2);
    }

    ${V3_MediaQuery.MaxWidth.md} {
        max-width: calc(100% - ${V3_Breakpoint["md-margin"]}px * 2);
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        max-width: calc(100% - ${V3_Breakpoint["sm-margin"]}px * 2);
    }

    ${V3_MediaQuery.MaxWidth.xs} {
        max-width: calc(100% - ${V3_Breakpoint["xs-margin"]}px * 2);
    }

    ${V3_MediaQuery.MaxWidth.xxs} {
        max-width: calc(100% - ${V3_Breakpoint["xxs-margin"]}px * 2);
    }
`;

// =============================================================================
// Header
// =============================================================================
export const CloseButtonContainer = styled.div`
    margin-right: ${V3_Spacing["spacing-16"]};
    margin-left: auto;
    margin-top: ${V3_Spacing["spacing-16"]};
    margin-bottom: ${V3_Spacing["spacing-16"]};
`;

export const StyledClickableIcon = styled(ClickableIcon)`
    padding: 0;
    color: ${V3_Colour.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`;

// =============================================================================
// Content
// =============================================================================
export const ContentContainer = styled.div`
    margin-right: ${V3_Spacing["spacing-64"]};
    margin-left: ${V3_Spacing["spacing-64"]};

    ${V3_MediaQuery.MaxWidth.sm} {
        margin-right: ${V3_Spacing["spacing-20"]};
        margin-left: ${V3_Spacing["spacing-20"]};
    }
`;

// =============================================================================
// Footer
// =============================================================================
export const FooterContainer = styled.div`
    margin-right: ${V3_Spacing["spacing-64"]};
    margin-left: ${V3_Spacing["spacing-64"]};

    ${V3_MediaQuery.MaxWidth.sm} {
        margin-right: ${V3_Spacing["spacing-20"]};
        margin-left: ${V3_Spacing["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${V3_Spacing["spacing-32"]};
    row-gap: ${V3_Spacing["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${V3_MediaQuery.MaxWidth.md} {
        flex-direction: column;
    }
`;

// =============================================================================
// Spacer
// =============================================================================
interface SlotSpacerStyleProps {
    $hasCloseButton?: boolean;
}

export const SlotSpacer = styled.div<SlotSpacerStyleProps>`
    :where(& > ${ContentContainer}:last-child) {
        margin-bottom: ${V3_Spacing["spacing-64"]};
    }

    :where(& > ${FooterContainer}:not(:first-child)) {
        margin-top: ${V3_Spacing["spacing-32"]};
    }

    :where(& > ${FooterContainer}:last-child) {
        margin-bottom: ${V3_Spacing["spacing-64"]};
    }

    ${(props) =>
        props.$hasCloseButton
            ? css`
                  :where(& > ${ContentContainer}:first-child),
                  :where(& > ${FooterContainer}:first-child) {
                      margin-top: 0;
                  }
              `
            : css`
                  :where(& > ${ContentContainer}:first-child),
                  :where(& > ${FooterContainer}:first-child) {
                      margin-top: ${V3_Spacing["spacing-64"]};
                  }
              `}
`;
