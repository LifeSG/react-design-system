import { StarIcon } from "@lifesg/react-icons/star";
import { StarFillIcon } from "@lifesg/react-icons/star-fill";
import styled, { css } from "styled-components";
import {
    V3_Border,
    V3_Colour,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

const starStyle = css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${V3_Colour["icon-primary"]};
    ${Input}:focus-visible + & {
        outline: ${V3_Border["width-020"]} ${V3_Border["solid"]}
            ${V3_Colour["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${V3_Radius["sm"]};
    }
`;

export const StarUnfilled = styled(StarIcon)`
    ${starStyle}
`;

export const StarFilled = styled(StarFillIcon)`
    ${starStyle}
`;

export const Label = styled.label`
    margin: 0 ${V3_Spacing["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${V3_MediaQuery.MaxWidth.md} {
        margin: 0 ${V3_Spacing["spacing-8"]};
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-16"]};
`;
