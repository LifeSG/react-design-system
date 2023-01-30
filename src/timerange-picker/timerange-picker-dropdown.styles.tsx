import { animated } from "react-spring";
import styled from "styled-components";
import { Button } from "../button";
import { Color } from "../color";
import { IconButton } from "../icon-button";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";
import { ToggleButton } from "../toggle-button";

// =============================================================================
// STYLING
// =============================================================================

const BORDER_RADIUS = "4px";

// -----------------------------------------------------------------------------
// MAIN WRAPPER
// -----------------------------------------------------------------------------
export const AnimatedDiv = styled(animated.div)`
    /* position: absolute;
    top: 3.5rem;
    left: 0;
    width: 27rem; */
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    //  background: ${Color.Neutral[8]};
    //border-radius: ${BORDER_RADIUS};
    overflow: hidden;
    z-index: 1;

    position: absolute;
    width: 432px;
    height: 232px;
    left: 20px;
    top: 20px;

    /* N8 #FFFFFF */

    background: #ffffff;
    /* N5 #E0E4E5 */

    border: 1px solid #e0e4e5;
    border-radius: 8px;

    ${MediaQuery.MaxWidth.tablet} {
        width: 100%;
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

    ${MediaQuery.MaxWidth.mobileS} {
        flex-direction: column;
    }
`;

export const ControlSection = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    ${MediaQuery.MaxWidth.mobileS} {
        border-top: 1px solid ${Color.Neutral[5]};
        margin-top: 2rem;
        padding-top: 1.5rem;
    }
`;

// -----------------------------------------------------------------------------
// INPUT COMPONENTS
// -----------------------------------------------------------------------------
export const HourMinuteSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${MediaQuery.MaxWidth.mobileM} {
        margin-right: 0;
    }
`;

export const TimePeriodSection = styled.div`
    display: flex;

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
`;

export const DividerLabel = styled(Text.Body)`
    margin: 0 0.75rem;

    ${MediaQuery.MaxWidth.tablet} {
        margin: 0 0.5rem;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        margin: 0 0.75rem;
    }
`;

export const TimeInput = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    border-radius: ${BORDER_RADIUS};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Color.Neutral[5]};
    background: ${Color.Neutral[8]};
    color: ${Color.Neutral[1]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    :focus::placeholder {
        color: transparent;
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;

    ${MediaQuery.MaxWidth.mobileS} {
        width: 6rem;
    }
`;

export const TimePeriodToggle = styled(ToggleButton)`
    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 0.5rem;
        }
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 50%;
        :not(:last-of-type) {
            margin-right: 0.5rem;
            margin-bottom: 0;
        }
    }
`;

// -----------------------------------------------------------------------------
// CONTROL COMPONENTS
// -----------------------------------------------------------------------------
export const ControlButton = styled(Button.Small)`
    width: 7rem;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        width: 50%;
    }
`;
