import { StarIcon } from "@lifesg/react-icons/star";
import { StarFillIcon } from "@lifesg/react-icons/star-fill";
import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color/color";

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

const starStyle = css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${v2_Color.Primary};
    ${Input}:focus-visible + & {
        outline: 0.125rem solid ${v2_Color.Primary};
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
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`;
