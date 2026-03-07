import { StarIcon } from "@lifesg/react-icons/star";
import { StarFillIcon } from "@lifesg/react-icons/star-fill";
import styled, { css } from "styled-components";
import { Border, Colour, MediaQuery, Radius, Spacing } from "../theme";

const starStyle = css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Colour["icon-primary"]};
`;

export const StarUnfilled = styled(StarIcon)`
    ${starStyle}
`;

export const StarFilled = styled(StarFillIcon)`
    ${starStyle}
`;

export const Label = styled.button`
    margin: 0 ${Spacing["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;

    ${MediaQuery.MaxWidth.md} {
        margin: 0 ${Spacing["spacing-8"]};
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    border-radius: ${Radius["sm"]};
    outline: none;

    &:focus-visible {
        outline: ${Border["width-020"]} ${Border["solid"]};
        ${Colour["icon-primary"]}
        outline-offset: 2px;
    }
`;
