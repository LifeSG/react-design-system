import { css } from "@linaria/core";

import { Colour, Font } from "../theme";

export const counterLabel = css`
    text-align: right;
    ${Font["body-sm-semibold"]}
    color: ${Colour["text-subtler"]};
`;
