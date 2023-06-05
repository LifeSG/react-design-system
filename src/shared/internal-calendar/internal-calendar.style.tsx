import styled, { css } from "styled-components";
import { Color } from "../../color";
import { CalendarType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface GeneralStyleProps {
    $type: CalendarType;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<GeneralStyleProps>`
    width: 100%;
    padding: 1.5rem 2rem;

    ${(props) => {
        if (props.$type === "input") {
            return css`
                border: 1px solid ${Color.Neutral[5]};
                border-radius: 8px;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `;
        }
    }}
`;
