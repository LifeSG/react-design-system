import styled, { css } from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { ThemeStyleInterpolation, TypographySizeType } from "@/theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContainerStyleProps {
    $textSize?: TypographySizeType | undefined;
    $textColor?: string | ThemeStyleInterpolation | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    ${(props) => applyHtmlContentStyle({ textSize: props.$textSize })}
    ${(props) =>
        props.color &&
        css`
            color: ${props.color};
        `}
`;
