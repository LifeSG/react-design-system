import styled, { css } from "styled-components";
import { ClickableIcon as _ClickableIcon } from "../../shared/clickable-icon";
import { Breakpoint, Colour, MediaQuery, Radius, Spacing } from "../../theme";

// =============================================================================
// Card
// =============================================================================
interface ModalCardProps {
    $hasCloseButton?: boolean;
}
export const ModalCard = styled.div<ModalCardProps>`
    width: 40rem;
    margin: 0 auto;
    background: ${Colour.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: ${Radius["lg"]};

    display: flex;
    flex-direction: column-reverse;

    ${MediaQuery.MaxWidth.md} {
        width: calc(100% - ${Breakpoint["md-margin"]}px);
    }

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
`;

// =============================================================================
// Close Button
// =============================================================================
export const ClickableContainer = styled.div`
    margin-top: calc(
        var(--close-button-top-inset, ${Spacing["spacing-16"]}) * -1
    );
    margin-right: calc(
        var(--close-button-top-inset, ${Spacing["spacing-16"]}) * -1
    );
    margin-left: auto;

    ${MediaQuery.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Spacing["spacing-20"]});
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
