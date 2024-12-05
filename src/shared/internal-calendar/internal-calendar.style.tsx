import styled, { css } from "styled-components";
import { CalendarType } from "./types";
import { Colour } from "../../theme";

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
    background: ${Colour.bg};

    ${(props) => {
        if (props.$type === "input") {
            return css`
                border: 1px solid ${Colour.border};
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
