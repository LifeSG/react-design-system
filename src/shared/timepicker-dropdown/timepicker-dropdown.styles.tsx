import { animated } from "react-spring";
import styled from "styled-components";
import { Button } from "../../button";
import { V2_Color } from "../../v2_color";
import { v2_MediaQuery } from "../../v2_media";
import { V2_Text } from "../../v2_text";
import { Toggle } from "../../toggle";
import { ClickableIcon } from "../clickable-icon";
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
    background: ${V2_Color.Neutral[8]};
    border-radius: ${BORDER_RADIUS};
    overflow: hidden;
    z-index: 1;

    ${v2_MediaQuery.MaxWidth.mobileS} {
        max-width: 100%;
    }
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

    ${v2_MediaQuery.MaxWidth.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`;

export const ControlSection = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${v2_MediaQuery.MaxWidth.mobileS} {
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

    ${v2_MediaQuery.MaxWidth.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`;

export const TimePeriodSection = styled.div`
    display: flex;
    gap: 0.5rem;

    ${v2_MediaQuery.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${v2_MediaQuery.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${v2_MediaQuery.MaxWidth.mobileS} {
        width: 6rem;
    }
`;

export const SwitchButton = styled(ClickableIcon)`
    width: 5rem;
    padding: 1rem 0;
    color: ${V2_Color.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${V2_Color.Primary};
    }
`;

export const DividerLabel = styled(V2_Text.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${v2_MediaQuery.MaxWidth.tablet} {
        margin: 0;
    }

    ${v2_MediaQuery.MaxWidth.mobileS} {
        margin: 0 0.25rem;
    }
`;

export const TimeInput = styled(BasicInput)`
    border-radius: ${BORDER_RADIUS};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${V2_Color.Neutral[5]};
    background: ${V2_Color.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${V2_Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${V2_Color.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${v2_MediaQuery.MaxWidth.mobileS} {
        width: 100%;
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

    ${v2_MediaQuery.MaxWidth.mobileL} {
        flex: 1;
    }

    ${v2_MediaQuery.MaxWidth.mobileS} {
        width: 100%;
    }
`;
