import styled, { css } from "styled-components";
import { Input } from "../input";
import { LabelAddonContainer } from "../input-group/input-group.style";
import { Colour } from "@/theme";
import { Typography } from "../typography";

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
export const HashContainer = styled(LabelAddonContainer)`
    margin-right: 0.5rem;
`;

export const FloorInput = styled(Input)`
    width: 2.5rem;

    input {
        text-align: center;
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
                color: ${Colour["text-disabled"]};
            `;
        }
    }}
`;

export const ReadOnlyContainer = styled.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`;

export const ReadOnlyLabel = styled(Typography.BodyBL)<LabelStyleProps>``;
