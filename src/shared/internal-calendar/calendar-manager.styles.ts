import { css } from "@linaria/core";

import { Colour, Font } from "../../theme";
import { tokens as calendarDropdownTokens } from "../internal-calendar/calendar-dropdown.styles";

// =============================================================================
// STYLING
// =============================================================================
// -----------------------------------------------------------------------------
// ICONS
// -----------------------------------------------------------------------------
export const icon = css`
    width: 1rem;
    height: 1rem;
    color: ${Colour["icon"]};
`;

export const iconChevronDown = css`
    margin-left: 0.5rem;
    transition: transform 250ms ease-in-out;
`;

export const iconChevronDownExpanded = css`
    transform: rotate(180deg);
`;

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
export const container = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: var(${calendarDropdownTokens.verticalInset});
    padding-bottom: var(${calendarDropdownTokens.verticalInset});
`;

export const toggleZone = css`
    position: relative;
    display: flex;
    flex: 1;
`;

export const defaultView = css`
    width: 100%;
    padding-right: var(${calendarDropdownTokens.horizontalInset});
    padding-left: var(${calendarDropdownTokens.horizontalInset});
    isolation: isolate;
`;

export const optionsOverlay = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-right: var(${calendarDropdownTokens.horizontalInset});
    padding-left: var(${calendarDropdownTokens.horizontalInset});
    background: ${Colour["bg"]};
`;

// -----------------------------------------------------------------------------
// HEADER
// -----------------------------------------------------------------------------
export const header = css`
    display: flex;
    justify-content: space-between;
    padding: 0 var(${calendarDropdownTokens.horizontalInset}) var(${calendarDropdownTokens.headerBottomSpacing});
`;

export const headerInputDropdown = css`
    display: flex;
`;

export const dropdownButton = css`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    background: transparent;
    border: none;
`;

export const dropdownText = css`
    ${Font["body-md-regular"]}
    color: ${Colour["text"]};
`;

export const headerArrows = css`
    display: flex;
`;

export const headerArrowButton = css`
    padding: 0.75rem;
    margin: auto 0;

    &:disabled {
        cursor: not-allowed;
    }
`;

// -----------------------------------------------------------------------------
// COMMON
// -----------------------------------------------------------------------------
export const hidden = css`
    display: none;
`;

// -----------------------------------------------------------------------------
// ACTION BUTTONS
// -----------------------------------------------------------------------------
export const actionButtonSection = css`
    display: flex;
    gap: 0.5rem;
    padding: 0 var(${calendarDropdownTokens.horizontalInset});
    margin-top: 1.5rem;
`;

export const actionButton = css`
    flex: 1;
`;
