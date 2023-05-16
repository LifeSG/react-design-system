import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Button } from "../../button";
import { Color } from "../../color";
import { IconButton } from "../../icon-button";
import { TextStyleHelper } from "../../text";
import { CalendarType } from "./types";

interface SideArrowButtonStyleProps {
    $direction: "left" | "right";
}

interface DropdownButtonStyleProps {
    $expandedDisplay: boolean;
    $visible?: boolean;
    $type: CalendarType;
}

interface DropdownTextStyleProps {
    $type: CalendarType;
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
    color: ${Color.Neutral[3]};
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
    margin-left: 0.625rem;
`;

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
export const AnimatedDiv = styled(animated.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 100%;
    max-width: 41rem;
    background: ${Color.Neutral[8]};
    overflow: hidden;
    z-index: 1;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 1.5rem 1.25rem;
    display: flex;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 8px;
`;

export const ContentBody = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const ToggleZone = styled.div`
    display: flex;
    flex: 1;
    position: relative;
`;

export const OptionsOverlay = styled.div<OverlayStyleProps>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Color.Neutral[8]};

    ${(props) => {
        if (!props.$visible) {
            return css`
                display: none;
            `;
        }
    }}
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`;

export const HeaderInputDropdown = styled.div`
    display: flex;
`;

export const HeaderDropdown = styled.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 1rem;
`;

export const DropdownButton = styled.button<DropdownButtonStyleProps>`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${(props) => {
        switch (props.$type) {
            case "input":
                return css`
                    :not(:last-of-type) {
                        margin-right: 0;
                    }
                `;
            case "standalone":
                return css`
                    ${IconChevronDown} {
                        width: 1.125rem;
                        height: 1.125rem;
                    }
                `;
        }
    }}

    ${(props) => {
        if (props.$visible === false) {
            return css`
                display: none;
            `;
        }

        if (props.$expandedDisplay) {
            return css`
                ${IconChevronDown} {
                    transform: rotate(180deg);
                }
            `;
        }
    }}
`;

export const DropdownText = styled.p<DropdownTextStyleProps>`
    ${(props) => {
        switch (props.$type) {
            case "standalone":
                return css`
                    ${TextStyleHelper.getTextStyle("H4", "regular")}
                `;
            case "input":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "regular")}
                `;
        }
    }}
`;

export const HeaderArrows = styled.div`
    display: flex;
`;

export const HeaderArrowButton = styled(IconButton)`
    background: transparent;
    margin: auto 0;
    padding: 0.5rem;

    :focus,
    :active {
        background: transparent;
    }
`;

export const ActionButtonSection = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 1.5rem;
`;

export const ActionButton = styled(Button.Small)`
    flex: 1;
`;

export const SideArrowButton = styled(IconButton)<SideArrowButtonStyleProps>`
    display: block;
    padding: 1rem;
    background: transparent;
    margin: auto 0;

    :focus,
    :active {
        background: transparent;
    }

    ${ArrowLeft},
    ${ArrowRight} {
        width: 1.5rem;
        height: 1.5rem;
    }

    ${(props) => {
        switch (props.$direction) {
            case "left":
                return css`
                    margin: auto 0.625rem auto 0; // to counter the padding
                `;
            case "right":
            default:
                return css`
                    margin: auto 0 auto 0.625rem; // to counter the padding
                `;
        }
    }}
`;
