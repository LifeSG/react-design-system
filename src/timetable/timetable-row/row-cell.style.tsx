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
    $customMainColor?:
        | string
        | ((props: ThemeStyleProps) => string)
        | undefined;
    $customAltColor?: string | ((props: ThemeStyleProps) => string) | undefined;
    $customHoverColor?:
        | string
        | ((props: ThemeStyleProps) => string)
        | undefined;
    $customAltHoverColor?:
        | string
        | ((props: ThemeStyleProps) => string)
        | undefined;
    $styleType?: "default" | "solid" | "stripes" | undefined;
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
        $styleType,
    }) => {
        // Map status to default colors, cursor behavior, and style type
        const statusDefaults: Record<
            TimeTableCellType,
            {
                mainColor?: string | ((props: ThemeStyleProps) => string);
                altColor?: string | ((props: ThemeStyleProps) => string);
                hoverColor?: string | ((props: ThemeStyleProps) => string);
                defaultStyleType: "solid" | "stripes";
                nonClickablePointer?: "default" | "not-allowed";
            }
        > = {
            blocked: {
                mainColor: Colour["bg-stronger"],
                altColor: Colour["bg-strongest"],
                defaultStyleType: "stripes",
                nonClickablePointer: "not-allowed",
            },
            filled: {
                mainColor: $mainColor,
                defaultStyleType: "solid",
            },
            disabled: {
                mainColor: Colour["bg-disabled"],
                defaultStyleType: "solid",
                nonClickablePointer: "not-allowed",
            },
            pending: {
                mainColor: $mainColor,
                altColor: $altColor,
                defaultStyleType: "stripes",
                nonClickablePointer: "not-allowed",
            },
            default: {
                hoverColor: Colour["bg-hover-subtle"],
                defaultStyleType: "solid",
            },
        };

        const defaults = statusDefaults[$status];
        const effectiveStyleType =
            $styleType === "default" || !$styleType
                ? defaults.defaultStyleType
                : $styleType;
        const cursor = $isClickable
            ? "pointer"
            : defaults.nonClickablePointer || "default";

        if (effectiveStyleType === "stripes") {
            return css`
                background: repeating-linear-gradient(
                    135deg,
                    ${$customMainColor || defaults.mainColor || ""} 0px 6px,
                    ${$customAltColor || defaults.altColor || ""} 6px 12px
                );
                &:hover {
                    ${$isClickable &&
                    css`
                        background: repeating-linear-gradient(
                            135deg,
                            ${$customHoverColor || ""} 0px 6px,
                            ${$customAltHoverColor || ""} 6px 12px
                        );
                    `}
                    cursor: ${cursor};
                }
            `;
        } else {
            return css`
                background: ${$customMainColor || defaults.mainColor};
                &:hover {
                    background-color: ${$isClickable
                        ? $customHoverColor || defaults.hoverColor
                        : ""};
                    cursor: ${cursor};
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
