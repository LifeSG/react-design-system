import styled, { css } from "styled-components";
import { Border, Colour, Font, Radius, Spacing } from "../../theme";
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
    padding: ${Spacing["spacing-4"]};
    position: absolute;
    top: ${(props) => props.$offsetTop || 0}px;
    margin-top: 0;

    border-radius: ${Radius["sm"]};

    background: ${(props) => {
        switch (props.$status) {
            case "pending":
                return css`
                    repeating-linear-gradient(
                        135deg,
                        ${Colour["bg-warning"]},
                        ${Colour["bg-warning"]} 5px,
                        ${Colour["bg-warning-hover"]} 5px,
                        ${Colour["bg-warning-hover"]} 10px
                    )
                `;
            case "blocked":
                return Colour["bg-inverse-subtle"];
            case "available":
                return Colour["bg-success-hover"];
            case "booked":
                return Colour["bg-primary-subtler"];
            default:
                return Colour["bg"];
        }
    }};

    color: ${(props) =>
        props.$status === "blocked" ? Colour["text-inverse"] : "inherit"};

    border-left: ${Border["width-040"]} solid
        ${(props) =>
            props.$status === "available" ? Colour["icon-success"] : "none"};
`;

export const SlotServiceName = styled.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${Font.Spec["weight-regular"]};
`;

export const SlotAvailability = styled.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-weight: ${Font.Spec["weight-semibold"]};
`;
