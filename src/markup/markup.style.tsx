import styled, { css } from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { V3_TypographySizeType } from "../v3_theme/font/types";
import { V3_ThemeStyleProps } from "../v3_theme/types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContainerStyleProps {
    $textSize?: V3_TypographySizeType | undefined;
    $textColor?: string | ((props: V3_ThemeStyleProps) => string) | undefined;
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
