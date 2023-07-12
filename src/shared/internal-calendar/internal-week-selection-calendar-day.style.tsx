import styled, { css } from "styled-components";
import { Color } from "../../color";
import { View } from "./types";
import {
    BaseInteractiveCircle,
    BaseOverflowDisplay,
    DayLabel,
    DayLabelStyleProps,
    StyleProps,
} from "./internal-calendar-day.style";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface OverflowDisplayProps extends StyleProps {
    $position: "left" | "right";
}

export interface WeekDayLabelStyleProps extends DayLabelStyleProps {
    $view: View;
}

export interface OverflowCircleProps extends Partial<OverflowDisplayProps> {}

interface WeekInteractiveCircleProps
    extends Omit<WeekDayLabelStyleProps, "$view">,
        OverflowCircleProps {}

// =============================================================================
// STYLING
// =============================================================================
export const WeekOverflowDisplay = styled(BaseOverflowDisplay)`
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
                box-shadow: 4px 0px 4px 0px ${Color.Shadow.Accent};
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

    ::before {
        content: "";
        display: block;
        position: absolute;
        width: 1.75rem; // width must larger than half original width to cover middle border curve and border shadow
        pointer-events: none;
        height: 100%;
        top: 0;
    }

    ${(props) => {
        if (props.$hovered) {
            return css`
                border: 1px dashed ${Color.Accent.Light[4]};

                ::before {
                    background-color: ${Color.Accent.Light[6]};
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
                }
            `;
        }
    }}

    ${(props) => {
        if (props.$overlap) {
            return css`
                ::before {
                    background-color: ${Color.Neutral[8]};
                }
            `;
        }
    }}

    ${(props) => {
        if (props.$overlap && props.$position === "left") {
            return css`
                box-shadow: -1px 0px 4px 0px ${Color.Shadow.Accent};
            `;
        } else if (props.$overlap && props.$position === "right") {
            return css`
                box-shadow: 1px 0px 4px 0px ${Color.Shadow.Accent};
            `;
        }
    }}

    ${(props) => {
        switch (props.$position) {
            case "left":
                return css`
                    display: block;

                    ::before {
                        left: 50%;
                    }
                `;
            case "right":
                return css`
                    display: block;

                    ::before {
                        right: 50%;
                    }
                `;
        }
    }}
`;

export const WeekInteractiveCircle = styled(
    BaseInteractiveCircle
)<WeekInteractiveCircleProps>`
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
                `;
            } else if ($position === "right") {
                return css`
                    background-color: ${Color.Neutral[8]};
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

export const WeekDayLabel = styled(DayLabel)<WeekDayLabelStyleProps>`
    ${(props) => {
        if (props.$view === "default") {
            return css`
                z-index: 1;
            `;
        }
    }}
`;
