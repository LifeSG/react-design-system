import { Color } from "../color";
import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css } from "styled-components";
import { CalendarType } from "./types";
import { IconButton } from "../icon-button";
import { TextStyleHelper } from "../text";

interface ContainerStyleProps {
    $type: CalendarType;
    $isOpen?: boolean | undefined;
}

interface SideArrowButtonStyleProps {
    $direction: "left" | "right";
    $type: CalendarType;
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
// MAIN
// -----------------------------------------------------------------------------

export const Container = styled.div<ContainerStyleProps>`
    position: relative;
    display: flex;
    min-width: 28rem;
    width: 100%;
    max-width: 41rem;
    padding: 2rem 0.25rem;
    align-items: center;
    background: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.75rem;

    ${(props) => {
        const { $type } = props;

        switch ($type) {
            case "standalone":
                return css`
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
            case "input":
                return css`
                    min-width: unset;
                    position: absolute;
                    padding: 1.5rem 1.25rem;
                    left: 0;
                    top: 100%;
                    opacity: 0;
                    transition: top 350ms ease-in-out, opacity 350ms ease-in-out;
                    z-index: 1;

                    ${ArrowLeft},
                    ${ArrowRight} {
                        width: 1rem;
                        height: 1rem;
                    }
                `;
            default:
                break;
        }
    }}

    ${(props) => {
        if (props.$type === "input" && props.$isOpen) {
            return css`
                top: calc(100% + 0.5rem);
                opacity: 1;
            `;
        } else if (props.$type === "input" && !props.$isOpen) {
            return css`
                height: 24.8rem; // fake height for animation
                opacity: 0;
                pointer-events: none;
            `;
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

const BaseActionButton = styled(IconButton)`
    ${TextStyleHelper.getTextStyle("H5", "semibold")};
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
`;

export const CancelButton = styled(BaseActionButton)`
    background-color: ${Color.Neutral[8]};
    color: ${Color.Primary};
    border: 1px solid ${Color.Neutral[5]};
`;

export const DoneButton = styled(BaseActionButton)`
    background-color: ${Color.Primary};
    color: ${Color.Neutral[8]};
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

    ${(props) => {
        switch (props.$type) {
            case "input":
                return css`
                    display: none;
                `;
        }
    }}

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
    width: 1rem;
`;
