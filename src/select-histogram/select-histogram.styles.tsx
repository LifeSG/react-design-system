import styled, { css } from "styled-components";
import { ValueLabelStyleProps } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { lineClampCss } from "../shared/styles";
import {
    Border,
    Breakpoint,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Spacing,
} from "@/theme";

export const HistogramSliderDropdownContainer = styled.div`
    overflow: hidden;
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};
    padding: ${Spacing["spacing-16"]};
    min-width: 23rem;

    ${MediaQuery.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Breakpoint["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${MediaQuery.MaxWidth.xs} {
        width: calc(100vw - ${Breakpoint["xs-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.xxs} {
        width: calc(100vw - ${Breakpoint["xxs-margin"]} * 2);
    }
`;

export const Label = styled.div`
    display: flex;
    align-items: baseline;
`;

export const Separator = styled.div`
    margin: 0 0.5rem;
`;

export const ValueLabel = styled.div<ValueLabelStyleProps>`
    ${(props) =>
        props.$variant === "small"
            ? Font["body-md-regular"]
            : Font["body-baseline-regular"]}
    text-align: left;
    ${(props) => {
        switch (props.truncateType) {
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
    color: ${Colour["text-subtler"]};
`;
