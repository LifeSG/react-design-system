import styled, { css } from "styled-components";
import { ClickableIcon as ClickableIcon } from "../../shared/clickable-icon";
import {
    Breakpoint,
    Colour,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../../theme";

// =============================================================================
// Card
// =============================================================================
export const ModalCard = styled.div`
    width: 40rem;
    margin: ${Spacing["spacing-64"]} auto;
    background: ${Colour.bg};
    box-shadow: ${Shadow["xs-strong"]};
    border-radius: ${Radius["lg"]};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${Breakpoint["xxl-margin"]}px * 2);

    ${MediaQuery.MaxWidth.xl} {
        max-width: calc(100% - ${Breakpoint["xl-margin"]}px * 2);
    }

    ${MediaQuery.MaxWidth.lg} {
        max-width: calc(100% - ${Breakpoint["lg-margin"]}px * 2);
    }

    ${MediaQuery.MaxWidth.md} {
        max-width: calc(100% - ${Breakpoint["md-margin"]}px * 2);
    }

    ${MediaQuery.MaxWidth.sm} {
        max-width: calc(100% - ${Breakpoint["sm-margin"]}px * 2);
    }

    ${MediaQuery.MaxWidth.xs} {
        max-width: calc(100% - ${Breakpoint["xs-margin"]}px * 2);
    }

    ${MediaQuery.MaxWidth.xxs} {
        max-width: calc(100% - ${Breakpoint["xxs-margin"]}px * 2);
    }
`;

// =============================================================================
// Header
// =============================================================================
export const CloseButtonContainer = styled.div`
    margin-right: ${Spacing["spacing-16"]};
    margin-left: auto;
    margin-top: ${Spacing["spacing-16"]};
    margin-bottom: ${Spacing["spacing-16"]};
`;

export const StyledClickableIcon = styled(ClickableIcon)`
    padding: 0;
    color: ${Colour.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`;

// =============================================================================
// Content
// =============================================================================
export const ContentContainer = styled.div`
    margin-right: ${Spacing["spacing-64"]};
    margin-left: ${Spacing["spacing-64"]};

    ${MediaQuery.MaxWidth.sm} {
        margin-right: ${Spacing["spacing-20"]};
        margin-left: ${Spacing["spacing-20"]};
    }
`;

// =============================================================================
// Footer
// =============================================================================
export const FooterContainer = styled.div`
    margin-right: ${Spacing["spacing-64"]};
    margin-left: ${Spacing["spacing-64"]};

    ${MediaQuery.MaxWidth.sm} {
        margin-right: ${Spacing["spacing-20"]};
        margin-left: ${Spacing["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${Spacing["spacing-32"]};
    row-gap: ${Spacing["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${MediaQuery.MaxWidth.md} {
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
        margin-bottom: 64px;
    }

    :where(& > ${FooterContainer}:not(:first-child)) {
        margin-top: 32px;
    }

    :where(& > ${FooterContainer}:last-child) {
        margin-bottom: 64px;
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
                      margin-top: 64px;
                  }
              `}
`;
