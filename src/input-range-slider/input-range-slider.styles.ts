import ReactSlider from "react-slider";
import styled, { css } from "styled-components";
import { Border, Colour, Radius, Spacing } from "../theme";
import { ThemeStyleProps } from "../theme/types";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface TrackStyleProps {
    $color: string | ((props: ThemeStyleProps) => string) | undefined;
}

interface ThumbStyleProps {
    $disabled: boolean | undefined;
    $readOnly: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    isolation: isolate;
`;

export const LabelContainer = styled.div`
    margin-top: ${Spacing["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Spacing["spacing-8"]};
`;

export const IndicatorLabelContainer = styled.div`
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const LabelText = styled(Typography.BodyBL)`
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

        background-color: ${Colour["bg"]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Border["width-010"]} ${Border["solid"]}
            ${(props) =>
                props.$disabled
                    ? Colour["border-selected-disabled"]
                    : Colour["border-strong"]};
        border-radius: 50%;
    }
`;

export const SliderThumb = styled.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${Knob}:after {
        outline-offset: -1px;
        outline: ${Border["width-040"]} ${Border["solid"]}
            ${Colour["border-selected"]};
    }
`;

export const SliderTrack = styled.div<TrackStyleProps>`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Radius["full"]};

    background: ${(props) => {
        if (props.$color && typeof props.$color === "function") {
            return props.$color(props);
        } else {
            return props.$color || Colour["border-strong"](props);
        }
    }};
`;
