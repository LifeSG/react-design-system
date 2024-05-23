import styled, { css } from "styled-components";
import {
    HtmlContentStyleOptions,
    applyHtmlContentStyle,
} from "../shared/html-content/html-content";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContainerStyleProps {
    $textSize?: HtmlContentStyleOptions["textSize"] | undefined;
    $textColor?: string | ((props: unknown) => string) | undefined;
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
