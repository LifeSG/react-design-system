import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled, { css } from "styled-components";
import { Button } from "../../button";
import { Color } from "../../color";
import { TextStyleHelper } from "../../text";
import { ClickableIcon } from "../clickable-icon";
import { CalendarType } from "./types";

interface GeneralStyleProps {
    $type: CalendarType;
}

interface DropdownButtonStyleProps extends GeneralStyleProps {
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
export const Container = styled.div<GeneralStyleProps>`
    position: relative;
    width: 100%;
    padding: 1.5rem 1.5rem 2rem;
    display: flex;
    flex-direction: column;

    ${(props) => {
        if (props.$type === "input") {
            return css`
                border: 1px solid ${Color.Neutral[5]};
                border-radius: 8px;
                padding: 1.5rem 1.25rem;
            `;
        }
    }}
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

export const Header = styled.div<GeneralStyleProps>`
    display: flex;
    justify-content: space-between;
    margin: 0 0.5rem 1rem 0.5rem;

    ${(props) => {
        if (props.$type === "input") {
            return css`
                margin: 0 0 0.5rem 0;
            `;
        }
    }}
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

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${(props) => {
        if (props.$type === "input") {
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

export const DropdownText = styled.p<GeneralStyleProps>`
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

export const HeaderArrowButton = styled(ClickableIcon)`
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
