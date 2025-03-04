import styled, { css } from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { TypographySizeType } from "../theme/font/types";
import { ThemeStyleProps } from "../theme/types";

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
        props.color &&
        css`
            color: ${props.color};
        `}
`;
