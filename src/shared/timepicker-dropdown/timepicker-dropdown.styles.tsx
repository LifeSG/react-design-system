import { animated } from "react-spring";
import styled from "styled-components";
import { Button } from "../../button";
import { Color } from "../../color";
import { IconButton } from "../../icon-button";
import { MediaQuery } from "../../media";
import { Text } from "../../text";
import { Toggle } from "../../toggle";
import { BasicInput } from "../input-wrapper/input-wrapper";

// =============================================================================
// STYLING
// =============================================================================

const BORDER_RADIUS = "4px";

// -----------------------------------------------------------------------------
// MAIN WRAPPER
// -----------------------------------------------------------------------------
export const AnimatedDiv = styled(animated.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Color.Neutral[8]};
    border-radius: ${BORDER_RADIUS};
    overflow: hidden;
    z-index: 1;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`;

export const InputSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.mobileS} {
        flex-direction: column;
    }
`;

export const ControlSection = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${MediaQuery.MaxWidth.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`;

// -----------------------------------------------------------------------------
// INPUT COMPONENTS
// -----------------------------------------------------------------------------
export const HourMinuteSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${MediaQuery.MaxWidth.mobileS} {
        margin-right: 0;
    }
`;

export const TimePeriodSection = styled.div`
    display: flex;
    gap: 0.5rem;

    ${MediaQuery.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SwitchButton = styled(IconButton)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Color.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Color.Primary};
    }
`;

export const DividerLabel = styled(Text.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${MediaQuery.MaxWidth.tablet} {
        margin: 0;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        margin: 0 0.25rem;
    }
`;

export const TimeInput = styled(BasicInput)`
    border-radius: ${BORDER_RADIUS};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Color.Neutral[5]};
    background: ${Color.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Color.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 6rem;
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

    ${MediaQuery.MaxWidth.mobileL} {
        flex: 1;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 100%;
    }
`;
