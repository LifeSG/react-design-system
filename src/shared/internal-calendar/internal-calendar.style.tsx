import styled, { css } from "styled-components";
import { V2_Color } from "../../v2_color";
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
    background: ${V2_Color.Neutral[8]};

    ${(props) => {
        if (props.$type === "input") {
            return css`
                border: 1px solid ${V2_Color.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `;
        }
    }}
`;
