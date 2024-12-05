import styled, { css } from "styled-components";
import { AddOnContainer } from "../input-group/input-group.style";
import { Input } from "../input/input";
import { Typography } from "../typography/typography";
import { Colour } from "../theme";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface LabelStyleProps {
    $inactive?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const HashContainer = styled(AddOnContainer)`
    margin-right: 0.25rem;
`;

export const FloorInput = styled(Input)`
    // overwrite default styles
    background: transparent;
    border: none;
    /* border: 1px dotted red; */
    padding: 0;
    width: 2.5rem;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    input {
        text-align: center;
        // Chrome, Safari, Edge, Opera
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        // Firefox
        -moz-appearance: textfield;
    }
`;

export const UnitInput = styled(FloorInput)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`;

export const UnitNumberDivider = styled(Typography.BodyBL)<LabelStyleProps>`
    margin: 0 0.25rem;
    ${(props) => {
        if (props.$inactive) {
            return css`
                color: ${Colour["text-subtle"]};
            `;
        }
    }}
`;

export const ReadOnlyContainer = styled.div`
    display: flex;
`;

export const ReadOnlyLabel = styled(Typography.BodyBL)<LabelStyleProps>`
    ${(props) => {
        if (props.$inactive) {
            return css`
                color: ${Colour["text-subtle"]};
            `;
        }
    }}
`;
