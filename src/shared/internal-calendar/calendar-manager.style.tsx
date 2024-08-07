import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled, { css } from "styled-components";
import { Button } from "../../button";
import { V2_Color } from "../../v2_color";
import { V2_TextStyleHelper } from "../../v2_text";
import { ClickableIcon } from "../clickable-icon";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface DropdownButtonStyleProps {
    $expanded: boolean;
    $visible?: boolean;
}

interface OverlayStyleProps {
    $visible?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
// -----------------------------------------------------------------------------
// ICONS
// -----------------------------------------------------------------------------
const iconStyle = css`
    color: ${V2_Color.Neutral[3]};
    height: 1rem;
    width: 1rem;
`;

export const ArrowLeft = styled(ChevronLeftIcon)`
    ${iconStyle}
`;

export const ArrowRight = styled(ChevronRightIcon)`
    ${iconStyle}
`;

export const IconChevronDown = styled(ChevronDownIcon)`
    ${iconStyle}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`;

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ToggleZone = styled.div`
    display: flex;
    flex: 1;
    position: relative;
`;

export const DefaultView = styled.div`
    isolation: isolate;
    width: 100%;
`;

export const OptionsOverlay = styled.div<OverlayStyleProps>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${V2_Color.Neutral[8]};

    ${(props) => {
        if (!props.$visible) {
            return css`
                display: none;
            `;
        }
    }}
`;

// -----------------------------------------------------------------------------
// HEADER
// -----------------------------------------------------------------------------
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`;

export const HeaderInputDropdown = styled.div`
    display: flex;
`;

export const DropdownButton = styled.button<DropdownButtonStyleProps>`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${(props) => {
        if (props.$visible === false) {
            return css`
                display: none;
            `;
        }

        if (props.$expanded) {
            return css`
                ${IconChevronDown} {
                    transform: rotate(180deg);
                }
            `;
        }
    }}
`;

export const DropdownText = styled.p`
    ${V2_TextStyleHelper.getTextStyle("H5", "regular")}
`;

export const HeaderArrows = styled.div`
    display: flex;
`;

export const HeaderArrowButton = styled(ClickableIcon)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`;

// -----------------------------------------------------------------------------
// ACTION BUTTONS
// -----------------------------------------------------------------------------
export const ActionButtonSection = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`;

export const ActionButton = styled(Button.Small)`
    flex: 1;
`;
