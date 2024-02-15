import ReactSlider from "react-slider";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { Text } from "../text";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface TrackStyleProps {
    $color: string | ((props: unknown) => string);
}

interface ThumbStyleProps {
    $disabled: boolean;
    $readOnly: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    isolation: isolate;
`;

export const LabelContainer = styled.div`
    margin-top: 0.25rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

export const LabelText = styled(Text.BodySmall)`
    overflow-wrap: anywhere;
`;

export const Slider = styled(ReactSlider)`
    height: 0.875rem;
`;

export const Knob = styled.div<ThumbStyleProps>`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${(props) => {
        if (props.$disabled) {
            return css`
                cursor: not-allowed;
            `;
        }
        if (!props.$readOnly) {
            return css`
                cursor: grab;
                :active {
                    cursor: grabbing;
                }
            `;
        }
    }}

    :after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${Color.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${Color.Neutral[4]};
        border-radius: 50%;
    }
`;

export const SliderThumb = styled.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${Knob}:after {
        border: 1px solid ${Color.Primary};
    }
`;

export const SliderTrack = styled.div<TrackStyleProps>`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${(props) => {
        if (props.$color && typeof props.$color === "function") {
            return props.$color(props);
        } else {
            return props.$color || Color.Neutral[4](props);
        }
    }};
`;
