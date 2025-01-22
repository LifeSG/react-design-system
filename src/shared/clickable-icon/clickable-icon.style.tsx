import styled, { css } from "styled-components";
import { Colour, Spacing } from "../../theme";

interface StyleProps {
    $outline: "none" | "browser";
    $highlight: boolean;
}

export const Main = styled.button<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Spacing["spacing-32"]};
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
                background-color: ${Colour["bg-hover-neutral"]};
            `}
    }
`;
