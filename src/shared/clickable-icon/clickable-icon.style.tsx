import styled, { css } from "styled-components";
import { v2_Color } from "../../v2_color/color";

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

    img {
        height: 1rem;
        width: 1rem;
    }

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({ $outline }) => $outline === "none" && "outline: none;"}

        ${({ $highlight }) =>
            $highlight &&
            css`
                background-color: ${v2_Color.Neutral[7]};
            `}
    }
`;
