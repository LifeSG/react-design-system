import styled, { css } from "styled-components";
import { Color } from "../../color";
import { Text, TextStyleHelper } from "../../text";
import { DayVariant } from "./internal-calendar-day";

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

export interface OverflowCircleProps extends Partial<OverflowDisplayProps> {}

interface OverflowDisplayProps extends StyleProps {
    $position: "left" | "right";
}

interface InteractiveCircleProps
    extends DayLabelStyleProps,
        OverflowCircleProps {}

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
        const { $hovered, $selected } = props;

        if ($hovered) {
            return css`
                border-top: 1px dashed ${Color.Accent.Light[4]};
                border-bottom: 1px dashed ${Color.Accent.Light[4]};
                background-color: ${Color.Accent.Light[6]};
            `;
        }

        if ($selected) {
            return css`
                border-top: 1px solid ${Color.Primary};
                border-bottom: 1px solid ${Color.Primary};
                background-color: ${Color.Accent.Light[5]};
            `;
        }
    }}


    ${(props) => {
        if (props.$overlap) {
            return css`
                border-top: 1px solid ${Color.Primary};
                border-bottom: 1px solid ${Color.Primary};
                background-color: ${Color.Neutral[8]};
                box-shadow: 4px 1px 4px 0px ${Color.Shadow.Accent};
            `;
        }
    }}
`;

export const OverflowCircle = styled.div<OverflowCircleProps>`
    display: none;
    position: absolute;
    pointer-events: none;
    background-color: transparent;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    ::before,
    ::after {
        content: "";
        display: block;
        position: absolute;
        width: calc(2.5rem / 2);
        pointer-events: none;
        height: 0.5rem;
    }

    ${(props) => {
        if (props.$hovered) {
            return css`
                border: 1px dashed ${Color.Accent.Light[4]};

                ::before {
                    background-color: ${Color.Accent.Light[6]};
                    top: 0;
                }

                ::after {
                    background-color: ${Color.Accent.Light[6]};
                    bottom: 0;
                }
            `;
        }
    }}

    ${(props) => {
        if (props.$selected) {
            return css`
                border: 1px solid ${Color.Primary};

                ::before {
                    background-color: ${Color.Accent.Light[5]};
                    top: 0;
                }

                ::after {
                    background-color: ${Color.Accent.Light[5]};
                    bottom: 0;
                }
            `;
        }
    }}

    ${(props) => {
        if (props.$overlap) {
            return css`
                ::before {
                    background-color: ${Color.Neutral[8]};
                    top: 0;
                }

                ::after {
                    background-color: ${Color.Neutral[8]};
                    bottom: 0;
                }
            `;
        }
    }}

    ${(props) => {
        switch (props.$position) {
            case "left":
                return css`
                    display: block;
                    border-right-color: transparent;

                    ::before,
                    ::after {
                        right: 0;
                    }
                `;
            case "right":
                return css`
                    display: block;
                    border-left-color: transparent;

                    ::before,
                    ::after {
                        left: 0;
                    }
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
    cursor: default;
    position: absolute;

    ${(props) => {
        const { $hovered, $selected, $position } = props;

        if ($selected) {
            if ($position === "left") {
                return css`
                    background: ${Color.Accent.Light[5]};
                `;
            }

            if ($position === "right") {
                return css`
                    background: ${Color.Accent.Light[5]};
                `;
            }
        }

        if ($hovered) {
            return css`
                background-color: ${Color.Accent.Light[6]};
            `;
        }
    }}

    ${(props) => {
        const { $overlap, $position } = props;

        if ($overlap) {
            if ($position === "left") {
                return css`
                    background-color: ${Color.Neutral[8]};
                    box-shadow: -4px 0 4px -1px ${Color.Shadow.Accent};
                `;
            } else if ($position === "right") {
                return css`
                    background-color: ${Color.Neutral[8]};
                    box-shadow: 4px 0 4px -1px ${Color.Shadow.Accent};
                `;
            }
        }
    }}

    ${(props) => {
        const { $interactive, $disabledDisplay } = props;

        if ($interactive) {
            return css`
                cursor: pointer;
            `;
        } else if ($disabledDisplay) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}
    ${(props) => {
        const { $disabledDisplay, $overlap, $selected, $variant } = props;

        if ($disabledDisplay) {
            return css`
                color: ${Color.Neutral[4]};
            `;
        }

        if ($variant === "today") {
            if ($overlap) {
                return css`
                    background: ${Color.Neutral[8]};
                    height: 2.35rem;
                `;
            } else if ($selected) {
                return css`
                    height: 2.35rem;
                `;
            } else {
                return css`
                    background: ${Color.Accent.Light[5]};
                `;
            }
        }
    }}
`;

export const DayLabel = styled(Text.H5)<DayLabelStyleProps>`
    ${(props) => {
        const { $disabledDisplay, $selected, $variant } = props;

        if ($disabledDisplay && $selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                color: ${Color.Accent.Light[2]};
            `;
        }

        if ($disabledDisplay) {
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
