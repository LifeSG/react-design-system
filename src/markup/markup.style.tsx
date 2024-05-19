import styled from "styled-components";
import {
    HtmlContentStyleOptions,
    applyHtmlContentStyle,
} from "../shared/html-content/html-content";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContainerStyleProps {
    $options?: HtmlContentStyleOptions | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    ${(props) => applyHtmlContentStyle(props.$options)}
`;
