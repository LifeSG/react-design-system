import { Color } from "../color";
import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css } from "styled-components";
import { CalendarType } from "./types";
import { IconButton } from "../icon-button";

interface ContainerStyleProps {
    $type: CalendarType;
}

interface SideArrowButtonStyleProps {
    $direction: "left" | "right";
}

interface DropdownButtonStyleProps {
    $expandedDisplay: boolean;
    $visible?: boolean;
}

interface OverlayStyleProps {
    $visible?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------

export const Container = styled.div<ContainerStyleProps>`
    position: relative;
    display: flex;
    min-width: 28rem;
    max-width: 41rem;
    padding: 2rem 0.25rem;
    align-items: center;
    background: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 12px;

    ${(props) => {
        const { $type } = props;

        switch ($type) {
            // control standalone calender style
            // element style itself that use in input calendar
            case "standalone":
                return css`
                    width: 41rem;

                    ${ArrowLeft},
                    ${ArrowRight} {
                        width: 1.5rem;
                        height: 1.5rem;
                    }

                    ${IconChevronDown} {
                        width: 1.125rem;
                        height: 1.125rem;
                    }
                `;
            default:
                break;
        }
    }}
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

export const SideArrowButton = styled(IconButton)<SideArrowButtonStyleProps>`
    padding: 1rem;
    background: transparent;
    margin: auto 0;

    :focus,
    :active {
        background: transparent;
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

// -----------------------------------------------------------------------------
// ICONS
// -----------------------------------------------------------------------------
const directionalIconStyle = css`
    color: ${Color.Neutral[3]};
`;

export const ArrowLeft = styled(ChevronLeftIcon)`
    ${directionalIconStyle}
`;

export const ArrowRight = styled(ChevronRightIcon)`
    ${directionalIconStyle}
`;

export const IconChevronDown = styled(ChevronDownIcon)`
    color: ${Color.Neutral[3]};
    transition: transform 250ms ease-in-out;
    margin-left: 0.625rem;
`;
