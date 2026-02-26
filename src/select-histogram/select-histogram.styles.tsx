import styled, { css } from "styled-components";
import { ValueLabelStyleProps } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { lineClampCss } from "../shared/styles";
import {
    V3_Border,
    V3_Breakpoint,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";

export const HistogramSliderDropdownContainer = styled.div`
    overflow: hidden;
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};
    background: ${V3_Colour["bg"]};
    padding: ${V3_Spacing["spacing-16"]};
    min-width: 23rem;

    ${V3_MediaQuery.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${V3_Breakpoint["sm-margin"]}px * 2);
    }

    ${V3_MediaQuery.MaxWidth.xs} {
        width: calc(100vw - ${V3_Breakpoint["xs-margin"]}px * 2);
    }

    ${V3_MediaQuery.MaxWidth.xxs} {
        width: calc(100vw - ${V3_Breakpoint["xxs-margin"]}px * 2);
    }
`;

export const Label = styled.div`
    display: flex;
    align-items: baseline;
`;

export const Separator = styled.div`
    margin: 0 0.5rem;
    color: ${V3_Colour["text"]};
`;

export const ValueLabel = styled.div<ValueLabelStyleProps>`
    ${(props) =>
        props.$variant === "small"
            ? V3_Font["body-md-regular"]
            : V3_Font["body-baseline-regular"]}
    text-align: left;
    ${(props) => {
        switch (props.$truncateType) {
            case "middle":
                break;
            case "end":
            default:
                return css`
                    ${lineClampCss(1)}
                `;
        }
    }}
    overflow: hidden;
`;

export const PlaceholderLabel = styled(ValueLabel)`
    color: ${V3_Colour["text-subtler"]};
`;
