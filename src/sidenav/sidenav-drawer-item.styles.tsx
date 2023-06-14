import styled, { css } from "styled-components";
import { Button } from "../button";
import { Color } from "../color";

interface StyleProp {
    $highlight?: boolean | undefined;
}

export const Container = styled.li``;

export const LinkButton = styled(Button.Default)<StyleProp>`
    width: 14rem;
    height: unset;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    justify-content: flex-start;

    span {
        width: 100%;
        font-size: 1rem !important;
        color: ${Color.Neutral[1]} !important;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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

export const ElementContainer = styled.div``;
