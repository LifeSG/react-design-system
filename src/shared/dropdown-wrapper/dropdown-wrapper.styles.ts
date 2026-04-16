import { css } from "@linaria/core";

import { Colour, Font } from "../../theme";
import { lineClampCss } from "../styles";

export const labelContainer = css`
    display: flex;
    flex: 1;
    word-break: break-all;

    &[data-disabled="true"] {
        color: ${Colour["text-disabled"]};
    }
`;

export const valueLabel = css`
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

export const placeholderLabel = css`
    color: ${Colour["text-subtler"]};
`;
