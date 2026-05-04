import styled from "styled-components";

import { BasicButton } from "../shared/input-wrapper";
import { lineClampCss } from "../shared/styles";
import { V3_Colour, V3_Font, V3_Radius } from "../v3_theme";

//=============================================================================
// STYLING
//=============================================================================
export const Container = styled.li``;

export const LinkButton = styled(BasicButton)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${V3_Radius["md"]};

    ${V3_Font["body-md-regular"]}
    color: ${V3_Colour["text"]};
    ${lineClampCss(2)}
    text-align: left;

    &:hover,
    &:focus {
        background-color: ${V3_Colour["bg-hover"]};
        color: ${V3_Colour["text-hover"]};
    }
`;
