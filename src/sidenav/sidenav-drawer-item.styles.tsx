import styled, { css } from "styled-components";
import { Button } from "../button";
import { Color } from "../color";
import { TextStyleHelper } from "../text";

interface StyleProp {
    $highlight?: boolean | undefined;
}

export const Container = styled.li``;

export const LinkButton = styled(Button.Default)<StyleProp>`
    justify-content: flex-start;
    width: 14rem;
    height: unset;
    margin-left: 0.5rem;
    border-radius: 0.5rem;

    span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${TextStyleHelper.getFontFamily("H5", "semibold")}
        font-size: 1rem !important;
        color: ${Color.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${Color.Accent.Light[4]};
    }

    ${(props) =>
        props.$highlight &&
        css`
            background-color: ${Color.Accent.Light[4]};
        `}
`;

export const DrawerSubitemContainer = styled.ul`
    margin: 0.125rem 0.5rem 0.125rem 1rem;
`;

export const IconElement = styled.div`
    align-self: center;
`;

export const TextElement = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`;
