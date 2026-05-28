import styled from "styled-components";

import { lineClampCss } from "../shared/styles";
import {
    Border,
    Breakpoint,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Spacing,
} from "../theme";

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
    color: ${Colour["text"]};
`;

export const ValueLabel = styled.div`
    ${Font["body-baseline-regular"]}
    text-align: left;
    overflow: hidden;

    &.valueLabelSmall {
        ${Font["body-md-regular"]}
    }

    &.valueLabelTruncateEnd {
        ${lineClampCss(1)}
    }
`;

export const PlaceholderLabel = styled(ValueLabel)`
    color: ${Colour["text-subtler"]};
`;
