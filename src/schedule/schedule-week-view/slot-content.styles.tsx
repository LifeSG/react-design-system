import styled, { css } from "styled-components";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";
import { Typography } from "../../typography";
import { CELL_HEIGHT } from "../const";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface SlotContentContainerStyleProps {
    $status: string;
    $duration: number;
    $offsetTop: number;
}

// =============================================================================
// STYLING
// =============================================================================
export const SlotContentContainer = styled(
    Typography.BodyXS
)<SlotContentContainerStyleProps>`
    width: calc(100% - 1px);
    height: ${(props) =>
        props.$duration
            ? `${(props.$duration / 30) * CELL_HEIGHT - 1}px`
            : `${CELL_HEIGHT - 1}px`};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${V3_Spacing["spacing-4"]};
    position: absolute;
    top: ${(props) => props.$offsetTop || 0}px;
    border-radius: ${V3_Radius["sm"]};

    background: ${(props) => {
        switch (props.$status) {
            case "pending":
                return css`
                    repeating-linear-gradient(
                        135deg,
                        ${V3_Colour["bg-warning"]},
                        ${V3_Colour["bg-warning"]} 5px,
                        ${V3_Colour["bg-warning-hover"]} 5px,
                        ${V3_Colour["bg-warning-hover"]} 10px
                    )
                `;
            case "blocked":
                return V3_Colour["bg-inverse-subtle"];
            case "available":
                return V3_Colour["bg-success-hover"];
            case "booked":
                return V3_Colour["bg-primary-subtler"];
            default:
                return V3_Colour["bg"];
        }
    }};

    color: ${(props) =>
        props.$status === "blocked" ? V3_Colour["text-inverse"] : "inherit"};

    border-left: ${V3_Border["width-040"]} solid
        ${(props) =>
            props.$status === "available" ? V3_Colour["icon-success"] : "none"};
`;

export const SlotServiceName = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${V3_Font.Spec["weight-regular"]};
`;

export const SlotAvailability = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${V3_Font.Spec["weight-semibold"]};
`;
