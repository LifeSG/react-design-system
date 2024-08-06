import styled, { css } from "styled-components";
import { v2_Color } from "../../../v2_color";
import { Text, TextStyleHelper } from "../../../text";
import { DayVariant } from "./standard-calendar-day-view";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
export interface StyleProps {
    $disabledDisplay?: boolean;
    $interactive?: boolean;
    $overlap?: boolean;
    $hovered?: boolean;
    $selected?: boolean;
}

export interface DayLabelStyleProps extends StyleProps {
    $variant: DayVariant;
}

export interface BaseOverflowDisplayProps extends StyleProps {
    $position: "left" | "right";
}

export interface BaseInteractiveCircleProps extends DayLabelStyleProps {}

// =============================================================================
// COMMON STYLING for DAY CELL
// =============================================================================
export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`;

export const HeaderCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`;

export const RowDayCell = styled.div`
    grid-column: 1 / -1;
    display: flex;
`;

export const GrowDayCell = styled.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const BaseOverflowDisplay = styled.div<BaseOverflowDisplayProps>`
    position: absolute;
    width: 50%;
    height: 100%;

    ${(props) => {
        switch (props.$position) {
            case "left":
                return css`
                    left: 0;
                `;
            case "right":
                return css`
                    right: 0;
                `;
        }
    }}
`;

export const BaseInteractiveCircle = styled.div<BaseInteractiveCircleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;

export const DayLabel = styled(Text.H5)<DayLabelStyleProps>`
    ${(props) => {
        const { $disabledDisplay, $selected, $variant } = props;

        if ($disabledDisplay && $selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                color: ${v2_Color.Accent.Light[2]};
            `;
        }

        if ($disabledDisplay) {
            return css`
                color: ${v2_Color.Neutral[4]};
            `;
        }

        if ($selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                color: ${v2_Color.Primary};
            `;
        }

        switch ($variant) {
            case "other-month":
                return css`
                    color: ${v2_Color.Neutral[4]};
                `;
            case "today":
                return css`
                    color: ${v2_Color.Neutral[3]};
                `;
            case "default":
                return css`
                    color: ${v2_Color.Neutral[1]};
                `;
        }
    }}
`;

// =============================================================================
// STYLING for Regular
// =============================================================================
export const OverflowDisplay = styled(BaseOverflowDisplay)`
    ${(props) => {
        const { $selected } = props;

        if ($selected) {
            return css`
                border-top: 1px solid ${v2_Color.Accent.Light[4]};
                border-bottom: 1px solid ${v2_Color.Accent.Light[4]};
                background-color: ${v2_Color.Accent.Light[5]};
            `;
        }
    }}

    ${(props) => {
        const { $hovered, $overlap } = props;

        if ($hovered) {
            return css`
                border-top: 1px dashed ${v2_Color.Accent.Light[4]};
                border-bottom: 1px dashed ${v2_Color.Accent.Light[4]};
                background-color: ${v2_Color.Accent.Light[6]};
            `;
        }

        if ($overlap) {
            return css`
                background-color: ${v2_Color.Accent.Light[4]};
            `;
        }
    }}
`;

export const InteractiveCircle = styled(BaseInteractiveCircle)`
    ${(props) => {
        const { $hovered, $selected } = props;

        if ($selected) {
            return css`
                background: ${v2_Color.Accent.Light[5]};
                border: 1px solid ${v2_Color.Primary};
            `;
        }

        if ($hovered) {
            return css`
                box-shadow: 0px 0px 4px 1px ${v2_Color.Shadow.Accent};
                border: 1px solid ${v2_Color.Accent.Light[1]};
                background-color: ${v2_Color.Neutral[8]};
            `;
        }
    }}

    ${(props) => {
        const { $interactive, $disabledDisplay } = props;

        if ($interactive) {
            return css`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${v2_Color.Shadow.Accent};
                    border: 1px solid ${v2_Color.Accent.Light[1]};
                    background-color: ${v2_Color.Neutral[8]};
                }
            `;
        } else if ($disabledDisplay) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}

    ${(props) => {
        const { $disabledDisplay, $overlap, $variant } = props;

        if ($overlap) {
            return css`
                border: 1px solid ${v2_Color.Accent.Light[1]};
                background: ${v2_Color.Accent.Light[4]};

                :hover {
                    background: ${v2_Color.Accent.Light[4]};
                }
            `;
        }

        if ($disabledDisplay) {
            return css`
                color: ${v2_Color.Neutral[4]};
            `;
        }

        switch ($variant) {
            case "today":
                return css`
                    background: ${v2_Color.Accent.Light[5]};
                `;
            default:
                break;
        }
    }}
`;
