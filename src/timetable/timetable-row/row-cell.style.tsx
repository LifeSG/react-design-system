import styled, { css } from "styled-components";
import { Border, Colour, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { TimeTableCellType } from "../types";

interface BlockStyleProps {
    $width: number;
    $status: TimeTableCellType;
    $bgColour: string;
    $isClickable?: boolean;
}

interface BlockContainerProps {
    $isOnTheHour: boolean;
}

export const BlockContainer = styled.div<BlockContainerProps>`
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    ${(props) => {
        if (props.$isOnTheHour) {
            return css`
                box-shadow: inset -0.5px 0px ${Colour["border-primary"]};
            `;
        }
    }}
`;

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`;

export const Gap = styled.div`
    width: 2px;
    height: 100%;
`;

export const Block = styled.div<BlockStyleProps>`
    height: 100%;
    width: ${({ $width }) => `${$width}px`};
    border-radius: ${Radius["sm"]};
    box-sizing: border-box;
    padding: ${Spacing["spacing-4"]};
    ${({ $status, $bgColour, $isClickable }) => {
        switch ($status) {
            case "blocked":
                return css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${Colour["bg-stronger"]} 0px 6px,
                        ${Colour["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        cursor: ${$isClickable ? "pointer" : "not-allowed"};
                    }
                `;
            case "filled":
                return css`
                    background: ${$bgColour};
                    &:hover {
                        cursor: ${$isClickable ? "pointer" : "default"};
                    }
                `;
            case "disabled":
                return css`
                    background: ${Colour["bg-disabled"]};
                    &:hover {
                        cursor: ${$isClickable ? "pointer" : "not-allowed"};
                    }
                `;
            default:
                return css`
                    &:hover {
                        background-color: ${$isClickable
                            ? Colour["bg-hover-subtle"]
                            : ""};
                        cursor: ${$isClickable ? "pointer" : "default"};
                    }
                `;
        }
    }}
`;

export const BlockTitle = styled(Typography.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const BlockDescription = styled(Typography.BodyXS)`
    color: ${Colour["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
