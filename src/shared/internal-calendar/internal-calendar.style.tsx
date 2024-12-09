import styled, { css } from "styled-components";
import { Border, Colour, Radius } from "../../theme";
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
    background: ${Colour.bg};

    ${(props) => {
        if (props.$type === "input") {
            return css`
                border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
                border-radius: ${Radius["lg"]};
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="calendar-header"] {
                    margin: 0 0 0.25rem 0;
                }
            `;
        }
    }}
`;
