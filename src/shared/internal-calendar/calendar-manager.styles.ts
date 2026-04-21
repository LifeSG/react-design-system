import { css } from "@linaria/core";

import { Colour, Font } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
// -----------------------------------------------------------------------------
// ICONS
// -----------------------------------------------------------------------------
export const arrowLeft = css`
    color: ${Colour["icon"]};
    height: 1rem;
    width: 1rem;
`;

export const arrowRight = css`
    color: ${Colour["icon"]};
    height: 1rem;
    width: 1rem;
`;

export const iconChevronDown = css`
    color: ${Colour["icon"]};
    height: 1rem;
    width: 1rem;
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

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`;

export const toggleZone = css`
    display: flex;
    flex: 1;
    position: relative;
`;

export const defaultView = css`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`;

export const optionsOverlay = css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Colour["bg"]};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`;

export const optionsOverlayHidden = css`
    display: none;
`;

// -----------------------------------------------------------------------------
// HEADER
// -----------------------------------------------------------------------------
export const header = css`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
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

export const dropdownButtonHidden = css`
    display: none;
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

// -----------------------------------------------------------------------------
// ACTION BUTTONS
// -----------------------------------------------------------------------------
export const actionButtonSection = css`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`;

export const actionButton = css`
    flex: 1;
`;
