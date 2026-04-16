import styled from "styled-components";

import { Colour, Font } from "../../theme";
import { lineClampCss } from "../styles";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list

    &[data-variant="small"] {
        min-height: 2.5rem;
        height: 2.5rem;
    }
`;

export const LabelContainer = styled.div`
    display: flex;
    flex: 1;
    word-break: break-all;

    &[data-disabled="true"] {
        color: ${Colour["text-disabled"]};
    }
`;

export const ValueLabel = styled.div`
    ${Font["body-baseline-regular"]}
    text-align: left;
    overflow: hidden;

    &[data-variant="small"] {
        ${Font["body-md-regular"]}
    }

    &:not([data-truncate="middle"]) {
        ${lineClampCss(1)}
    }
`;

export const PlaceholderLabel = styled(ValueLabel)`
    color: ${Colour["text-subtler"]};
`;
