import styled, { css } from "styled-components";

import type { V3_ThemeStyleProps } from "../v3_theme/types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ContainerStyleProps {
    $textColor?: string | ((props: V3_ThemeStyleProps) => string) | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    ${(props) =>
        props.$textColor &&
        css`
            color: ${props.$textColor};
        `}
`;
