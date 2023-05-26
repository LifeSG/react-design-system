import styled, { css } from "styled-components";
import { Color } from "../color/color";

interface StyleProps {
    $outline: "none" | "browser";
    $highlight: boolean;
}

export const Main = styled.button<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img,
    svg {
        height: 1rem;
        width: 1rem;
    }

    &:active,
    &:focus {
        ${({ $outline }) => $outline === "none" && "outline: none;"}

        ${({ $highlight }) =>
            $highlight &&
            css`
                background-color: ${Color.Neutral[7]};
            `}
    }
`;
