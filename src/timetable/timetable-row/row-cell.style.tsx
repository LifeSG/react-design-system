import styled, { css } from "styled-components";
import { Border, Colour, Radius, Spacing, ThemeStyleProps } from "../../theme";
import { Typography } from "../../typography";
import { TimeTableCellType } from "../types";

interface BlockStyleProps {
    $width: number;
    $status: TimeTableCellType;
    $mainColor: string;
    $altColor: string;
    $isClickable?: boolean;
    $customMainColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    $customAltColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    $customHoverColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    $customAltHoverColor?: string | ((props: ThemeStyleProps) => string) | undefined;
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
    ${({
    $status,
    $mainColor,
    $isClickable,
    $altColor,
    $customMainColor,
    $customAltColor,
    $customHoverColor,
    $customAltHoverColor,
}) => {
        switch ($status) {
            case "blocked":
                return css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${$customMainColor || Colour["bg-stronger"]} 0px 6px,
                        ${$customAltColor || Colour["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        background: repeating-linear-gradient(
                            135deg,
                            ${$customHoverColor} 0px 6px,
                            ${$customAltHoverColor} 6px 12px
                        );
                        cursor: ${$isClickable ? "pointer" : "not-allowed"};
                    }
                `;
            case "filled":
                return css`
                    background: ${$customMainColor || $mainColor};
                    &:hover {
                        background-color: ${$customHoverColor || ""};
                        cursor: ${$isClickable ? "pointer" : "default"};
                    }
                `;
            case "disabled":
                return css`
                    background: ${$customMainColor || Colour["bg-disabled"]};
                    &:hover {
                        background-color: ${$customHoverColor || ""};
                        cursor: ${$isClickable ? "pointer" : "not-allowed"};
                    }
                `;
            case "pending":
                return css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${$customMainColor || $mainColor} 0px 6px,
                        ${$customAltColor || $altColor} 6px 12px
                    );
                    &:hover {
                        background: repeating-linear-gradient(
                            135deg,
                            ${$customHoverColor} 0px 6px,
                            ${$customAltHoverColor} 6px 12px
                        );
                        cursor: ${$isClickable ? "pointer" : "not-allowed"};
                    }
                `;
            default:
                return css`
                    background: ${$customMainColor || ''};
                    &:hover {
                        background-color: ${$isClickable
                        ? $customHoverColor || Colour["bg-hover-subtle"]
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
