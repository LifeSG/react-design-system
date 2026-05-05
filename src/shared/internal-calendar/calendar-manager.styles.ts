import { css } from "@linaria/core";

import { Colour, Font } from "../../theme";
import * as calendarDropdownStyles from "../internal-calendar/calendar-dropdown.styles";

// =============================================================================
// STYLING
// =============================================================================
// -----------------------------------------------------------------------------
// ICONS
// -----------------------------------------------------------------------------
export const icon = css`
    color: ${Colour["icon"]};
    height: 1rem;
    width: 1rem;
`;

export const iconChevronDown = css`
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`;

export const iconChevronDownExpanded = css`
    transform: rotate(180deg);
`;

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
export const container = css`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(${calendarDropdownStyles.tokens.verticalInset});
    padding-bottom: var(${calendarDropdownStyles.tokens.verticalInset});
`;

export const toggleZone = css`
    display: flex;
    flex: 1;
    position: relative;
`;

export const defaultView = css`
    isolation: isolate;
    width: 100%;

    padding-left: var(${calendarDropdownStyles.tokens.horizontalInset});
    padding-right: var(${calendarDropdownStyles.tokens.horizontalInset});
`;

export const optionsOverlay = css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Colour["bg"]};

    padding-left: var(${calendarDropdownStyles.tokens.horizontalInset});
    padding-right: var(${calendarDropdownStyles.tokens.horizontalInset});
`;

// -----------------------------------------------------------------------------
// HEADER
// -----------------------------------------------------------------------------
export const header = css`
    display: flex;
    justify-content: space-between;

    padding-left: var(
        ${calendarDropdownStyles.tokens.horizontalInset},
        var(${calendarDropdownStyles.tokens.horizontalInset})
    );
    padding-right: var(
        ${calendarDropdownStyles.tokens.horizontalInset},
        var(${calendarDropdownStyles.tokens.horizontalInset})
    );
    padding-bottom: var(${calendarDropdownStyles.tokens.headerBottomSpacing});
`;

export const headerInputDropdown = css`
    display: flex;
`;

export const dropdownButton = css`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;
`;

export const dropdownText = css`
    ${Font["body-md-regular"]}
    color: ${Colour["text"]};
`;

export const headerArrows = css`
    display: flex;
`;

export const headerArrowButton = css`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`;

export const dropdownHidden = css`
    display: none;
`;

// -----------------------------------------------------------------------------
// ACTION BUTTONS
// -----------------------------------------------------------------------------
export const actionButtonSection = css`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(${calendarDropdownStyles.tokens.horizontalInset});
    padding-right: var(${calendarDropdownStyles.tokens.horizontalInset});
`;

export const actionButton = css`
    flex: 1;
`;
