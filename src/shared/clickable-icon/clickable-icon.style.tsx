import styled, { css } from "styled-components";
import { V3_Colour, V3_Spacing } from "../../v3_theme";

interface StyleProps {
    $outline: "none" | "browser";
    $highlight: boolean;
}

export const Main = styled.button<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${V3_Spacing["spacing-24"]};
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
                background-color: ${V3_Colour["bg-hover-neutral"]};
            `}
    }
`;
