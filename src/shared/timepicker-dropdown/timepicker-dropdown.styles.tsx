import { animated } from "react-spring";
import styled from "styled-components";
import { Button } from "../../button";
import { Border, Colour, MediaQuery, Radius, Spacing } from "@/theme";
import { Toggle } from "../../toggle";
import { Typography } from "../../typography";
import { ClickableIcon } from "../clickable-icon";
import { BasicInput, InputBox } from "../input-wrapper/input-wrapper";

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN WRAPPER
// -----------------------------------------------------------------------------
export const AnimatedDiv = styled(animated.div)`
    position: absolute;
    top: calc(3rem + ${Spacing["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${MediaQuery.MaxWidth.xxs} {
        max-width: 100%;
    }
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-20"]}
        ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
`;

export const InputSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`;

export const ControlSection = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Spacing["spacing-16"]};
    gap: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Spacing["spacing-32"]};
    }
`;

// -----------------------------------------------------------------------------
// INPUT COMPONENTS
// -----------------------------------------------------------------------------
export const HourMinuteSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-32"]};

    ${MediaQuery.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`;

export const TimePeriodSection = styled.div`
    display: flex;
    gap: ${Spacing["spacing-8"]};

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
    }

    ${MediaQuery.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${MediaQuery.MaxWidth.xxs} {
        width: 6rem;
    }
`;

export const SwitchButton = styled(ClickableIcon)`
    width: 5rem;
    padding: ${Spacing["spacing-16"]} 0;
    color: ${Colour["icon"]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Colour["icon-hover"]};
    }
`;

export const DividerLabel = styled(Typography.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`;

export const TimeInputBox = styled(InputBox)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${MediaQuery.MaxWidth.xxs} {
        width: 100%;
    }
`;

export const TimeInput = styled(BasicInput)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`;

export const TimePeriodToggle = styled(Toggle)`
    min-width: 5rem;
    flex: 1;
`;

// -----------------------------------------------------------------------------
// CONTROL COMPONENTS
// -----------------------------------------------------------------------------
export const ControlButton = styled(Button.Small)`
    width: 7rem;

    ${MediaQuery.MaxWidth.sm} {
        flex: 1;
    }

    ${MediaQuery.MaxWidth.xxs} {
        width: 100%;
    }
`;
