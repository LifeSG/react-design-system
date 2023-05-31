import styled, { css } from "styled-components";
import { Color } from "../../color";
import { Text, TextStyleHelper } from "../../text";
import { DayVariant } from "./internal-calendar-day";

export interface StyleProps {
    $disabled?: boolean;
    $overlap?: boolean;
    $hovered?: boolean;
    $selected?: boolean;
}

export interface DayLabelStyleProps extends StyleProps {
    $variant: DayVariant;
}

interface OverflowDisplayProps extends StyleProps {
    $position: "left" | "right";
}

interface InteractiveCircleProps extends DayLabelStyleProps {
    $enableSelection?: boolean | undefined;
}

// =============================================================================
// STYLING
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
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.625rem;
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

export const OverflowDisplay = styled.div<OverflowDisplayProps>`
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

    ${(props) => {
        const { $selected } = props;

        if ($selected) {
            return css`
                border-top: 1px solid ${Color.Accent.Light[4]};
                border-bottom: 1px solid ${Color.Accent.Light[4]};
                background-color: ${Color.Accent.Light[5]};
            `;
        }
    }}
    
    ${(props) => {
        const { $hovered, $overlap } = props;

        if ($hovered) {
            return css`
                border-top: 1px dashed ${Color.Accent.Light[4]};
                border-bottom: 1px dashed ${Color.Accent.Light[4]};
                background-color: ${Color.Accent.Light[6]};
            `;
        }

        if ($overlap) {
            return css`
                background-color: ${Color.Accent.Light[4]};
            `;
        }
    }}
`;

export const InteractiveCircle = styled.div<InteractiveCircleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    position: absolute;

    ${(props) => {
        const { $hovered, $selected } = props;

        if ($selected) {
            return css`
                background: ${Color.Accent.Light[5]};
                border: 1px solid ${Color.Primary};
            `;
        }

        if ($hovered) {
            return css`
                box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
                border: 1px solid ${Color.Accent.Light[1]};
                background-color: ${Color.Neutral[8]};
            `;
        }
    }}

    ${(props) => {
        const { $enableSelection = true } = props;

        if ($enableSelection) {
            return css`
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
                    border: 1px solid ${Color.Accent.Light[1]};
                    background-color: ${Color.Neutral[8]};
                }
            `;
        } else {
            return css`
                cursor: default;
            `;
        }
    }}

    ${(props) => {
        const { $disabled, $overlap, $variant } = props;

        if ($overlap) {
            return css`
                border: 1px solid ${Color.Accent.Light[1]};
                background: ${Color.Accent.Light[4]};

                :hover {
                    background: ${Color.Accent.Light[4]};
                }
            `;
        }

        if ($disabled) {
            return css`
                color: ${Color.Neutral[4]};
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                    background-color: unset;
                }
            `;
        }

        switch ($variant) {
            case "today":
                return css`
                    background: ${Color.Accent.Light[5]};
                `;
            default:
                break;
        }
    }}
`;

export const DayLabel = styled(Text.H5)<DayLabelStyleProps>`
    ${(props) => {
        const { $disabled, $selected, $variant } = props;

        if ($disabled && $selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                color: ${Color.Accent.Light[2]};
            `;
        }

        if ($disabled) {
            return css`
                color: ${Color.Neutral[4]};
            `;
        }

        if ($selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                color: ${Color.Primary};
            `;
        }

        switch ($variant) {
            case "other-month":
                return css`
                    color: ${Color.Neutral[4]};
                `;
            case "today":
                return css`
                    color: ${Color.Neutral[3]};
                `;
            case "default":
                return css`
                    color: ${Color.Neutral[1]};
                `;
        }
    }}
`;
