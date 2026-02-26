import ReactSlider from "react-slider";
import styled, { css } from "styled-components";
import {
    V3_Border,
    V3_Colour,
    V3_Radius,
    V3_Shadow,
    V3_Spacing,
} from "../v3_theme";
import { V3_ThemeStyleProps } from "../v3_theme/types";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface TrackStyleProps {
    $color: string | ((props: V3_ThemeStyleProps) => string) | undefined;
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
    margin-top: ${V3_Spacing["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${V3_Spacing["spacing-8"]};
`;

export const IndicatorLabelContainer = styled.div`
    margin-bottom: ${V3_Spacing["spacing-8"]};
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
                &:active {
                    cursor: grabbing;
                }
            `;
        }
    }}

    &:after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${V3_Colour["bg"]};
        box-shadow: ${V3_Shadow["sm-subtle"]};
        border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
            ${(props) =>
                props.$disabled
                    ? V3_Colour["border-selected-disabled"]
                    : V3_Colour["border-strong"]};
        border-radius: ${V3_Radius["full"]};
    }
`;

export const SliderThumb = styled.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${Knob}:after {
        outline-offset: -1px;
        outline: ${V3_Border["width-040"]} ${V3_Border["solid"]}
            ${V3_Colour["border-selected"]};
    }
`;

export const SliderTrack = styled.div<TrackStyleProps>`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${V3_Radius["full"]};

    background: ${(props) => {
        if (props.$color && typeof props.$color === "function") {
            return props.$color(props);
        } else {
            return props.$color || V3_Colour["border-strong"](props);
        }
    }};
`;
