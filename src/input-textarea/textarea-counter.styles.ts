import { css } from "@linaria/core";

import { Colour, Font } from "../theme";

export const counterLabel = css`
    ${Font["body-sm-semibold"]}
    color: ${Colour["text-subtler"]};
    text-align: right;
`;
