import styled, { css } from "styled-components";
import {
    V3_Border,
    V3_Colour,
    V3_Radius,
    V3_Spacing,
    V3_ThemeStyleProps,
} from "../../v3_theme";
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
        | ((props: V3_ThemeStyleProps) => string)
        | undefined;
    $customAltColor?:
        | string
        | ((props: V3_ThemeStyleProps) => string)
        | undefined;
    $customHoverColor?:
        | string
        | ((props: V3_ThemeStyleProps) => string)
        | undefined;
    $customAltHoverColor?:
        | string
        | ((props: V3_ThemeStyleProps) => string)
        | undefined;
    $styleType?: "default" | "solid" | "stripes" | undefined;
}

interface BlockContainerProps {
    $isOnTheHour: boolean;
}

export const BlockContainer = styled.div<BlockContainerProps>`
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    ${(props) => {
        if (props.$isOnTheHour) {
            return css`
                box-shadow: inset -0.5px 0px ${V3_Colour["border-primary"]};
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
    border-radius: ${V3_Radius["sm"]};
    box-sizing: border-box;
    padding: ${V3_Spacing["spacing-4"]};
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
                mainColor?: string | ((props: V3_ThemeStyleProps) => string);
                altColor?: string | ((props: V3_ThemeStyleProps) => string);
                hoverColor?: string | ((props: V3_ThemeStyleProps) => string);
                defaultStyleType: "solid" | "stripes";
                nonClickablePointer?: "default" | "not-allowed";
            }
        > = {
            blocked: {
                mainColor: V3_Colour["bg-stronger"],
                altColor: V3_Colour["bg-strongest"],
                defaultStyleType: "stripes",
                nonClickablePointer: "not-allowed",
            },
            filled: {
                mainColor: $mainColor,
                defaultStyleType: "solid",
            },
            disabled: {
                mainColor: V3_Colour["bg-disabled"],
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
                hoverColor: V3_Colour["bg-hover-subtle"],
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
    color: ${V3_Colour["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
