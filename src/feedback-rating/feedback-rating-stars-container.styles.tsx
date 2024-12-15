import { StarIcon } from "@lifesg/react-icons/star";
import { StarFillIcon } from "@lifesg/react-icons/star-fill";
import styled, { css } from "styled-components";
import { Border, Colour, MediaQuery } from "../theme";

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

const starStyle = css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Colour["icon-primary"]};
    ${Input}:focus-visible + & {
        outline: ${Border["width-020"]} ${Border["solid"]}
            ${Colour["icon-primary"]};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`;

export const StarUnfilled = styled(StarIcon)`
    ${starStyle}
`;

export const StarFilled = styled(StarFillIcon)`
    ${starStyle}
`;

export const Label = styled.label`
    margin: 0 0.5rem;
    line-height: 0;
    display: flex;
    align-items: center;
    ${MediaQuery.MaxWidth.md} {
        margin: 0 0.5rem;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`;
