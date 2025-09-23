import styled, { css } from "styled-components";
import { ClickableIcon as _ClickableIcon } from "../../shared/clickable-icon";
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
interface ModalCardProps {
    $hasCloseButton?: boolean;
}
export const ModalCard = styled.div<ModalCardProps>`
    width: 40rem;
    margin: ${Spacing["spacing-64"]} auto;
    background: ${Colour.bg};
    box-shadow: ${Shadow["xs-strong"]};
    border-radius: ${Radius["lg"]};

    display: flex;
    flex-direction: column-reverse;

    padding: ${(props) =>
        props.$hasCloseButton
            ? css`
                  ${Spacing["spacing-32"]} ${Spacing["spacing-32"]} ${Spacing[
                      "spacing-48"
                  ]};
              `
            : css`
                  ${Spacing["spacing-32"]};
              `};

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
// Close Button
// =============================================================================
export const ClickableContainer = styled.div`
    margin-top: calc(${Spacing["spacing-16"]} * -1);
    margin-right: calc(${Spacing["spacing-16"]} * -1);
    margin-left: auto;

    ${MediaQuery.MaxWidth.sm} {
        right: ${Spacing["spacing-20"]};
    }
`;

export const StyledClickableIcon = styled(_ClickableIcon)`
    padding: 0;
    color: ${Colour.icon};

    z-index: 2; // since it's column-reverse display, this would naturally get covered by ModalBox contents

    svg {
        height: 2rem;
        width: 2rem;
    }
`;
