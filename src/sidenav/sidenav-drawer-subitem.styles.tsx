import styled from "styled-components";
import { Colour, Font, Radius } from "../theme";
import { BasicButton } from "../shared/input-wrapper";
import { lineClampCss } from "../shared/styles";

//=============================================================================
// STYLING
//=============================================================================
export const Container = styled.li``;

export const LinkButton = styled(BasicButton)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Radius["md"]};

    ${Font["body-md-regular"]}
    color: ${Colour["text"]};
    ${lineClampCss(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${Colour["bg-hover"]};
        color: ${Colour["text-hover"]};
    }
`;
