import { css } from "@linaria/core";

import { lineClampCss } from "../shared/styles";
import { Colour, Font, Radius } from "../theme";

//=============================================================================
// STYLING
//=============================================================================
export const linkButton = css`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Radius["md"]};

    ${Font["body-md-regular"]}
    color: ${Colour["text"]};
    ${lineClampCss(2)}
    text-align: left;

    &:hover,
    &:focus {
        background-color: ${Colour["bg-hover"]};
        color: ${Colour["text-hover"]};
    }
`;
