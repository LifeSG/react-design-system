import styled, { css } from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { TypographySizeType } from "../v3_theme/font/types";
import { ThemeStyleProps } from "../v3_theme/types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContainerStyleProps {
    $textSize?: TypographySizeType | undefined;
    $textColor?: string | ((props: ThemeStyleProps) => string) | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    ${(props) => applyHtmlContentStyle({ textSize: props.$textSize })}
    ${(props) =>
        props.$textColor &&
        css`
            color: ${props.$textColor};
        `}
`;
