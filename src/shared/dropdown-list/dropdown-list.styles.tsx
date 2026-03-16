import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";

import { Checkbox } from "../../checkbox";
import {
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";
import { ComponentLoadingSpinner } from "../component-loading-spinner";
import type {
    DropdownVariantType,
    IconProps,
    LabelDisplayType,
    TruncateType,
} from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListContainerProps {
    $width?: string;
}

interface ListItemProps {
    $checked?: boolean;
}

interface ListItemSelectorProps {
    $multiSelect?: boolean;
    $hasNextLineLabel?: boolean;
    $variant?: DropdownVariantType;
}

interface LabelProps {
    $truncateType?: TruncateType;
    $maxLines?: number;
    $labelDisplayType?: LabelDisplayType;
    $variant?: DropdownVariantType;
}

interface ResultStateProps {
    $variant?: DropdownVariantType;
}

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN STYLES
// -----------------------------------------------------------------------------

export const Container = animated(styled.div`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`);

export const List = styled.ul<ListContainerProps>`
    border-bottom-left-radius: ${V3_Radius["sm"]};
    border-bottom-right-radius: ${V3_Radius["sm"]};
    background: transparent;
    max-height: 20rem;
    width: ${(props) => props.$width || "100%"};
    overflow-y: auto;
    padding: ${V3_Spacing["spacing-8"]};
    list-style-type: none;

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${V3_Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${V3_Radius["full"]};
        background-clip: padding-box;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        max-height: 15rem;
    }
`;

export const ListItem = styled.li<ListItemProps>`
    &:hover,
    &:focus,
    &:active {
        background: ${V3_Colour["bg-hover"]};
    }
    ${(props) => {
        if (props.$checked) {
            return css`
                background: ${V3_Colour["bg-selected"]};
                &:hover,
                &:focus,
                &:active {
                    background: ${V3_Colour["bg-selected-hover"]};
                }
            `;
        }
    }}
`;

export const ListItemSelector = styled.button<ListItemSelectorProps>`
    display: flex;
    ${(props) => {
        if (props.$multiSelect) {
            return css`
                padding: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-16"]};
            `;
        } else {
            return css`
                padding: 15px ${V3_Spacing["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `;
        }
    }}
    margin: 0 -${V3_Spacing["spacing-8"]};
    border: none;
    border-radius: ${V3_Radius["none"]};
    background: transparent;
    width: 100%;
    cursor: pointer;

    &:hover,
    &:visited,
    &:focus,
    &:active {
        outline-color: ${V3_Colour["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`;

// -----------------------------------------------------------------------------
// LIST ITEM LABEL STYLES
// -----------------------------------------------------------------------------

const lineClampCss = css<LabelProps>`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${(props) => props.$maxLines || 2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`;

export const PrimaryText = styled.div<LabelProps>`
    ${(props) =>
        props.$variant === "small"
            ? V3_Font["body-md-regular"]
            : V3_Font["body-baseline-regular"]}
    color: ${V3_Colour["text"]};
    width: 100%;

    ${(props) => props.$truncateType === "end" && lineClampCss}
`;

export const SecondaryText = styled.div<LabelProps>`
    color: ${V3_Colour["text-subtlest"]};
    width: 100%;

    ${(props) => props.$truncateType === "end" && lineClampCss}

    ${(props) => {
        switch (props.$labelDisplayType) {
            case "next-line":
                return css`
                    ${V3_Font["body-md-semibold"]}
                `;
            case "inline":
            default:
                return css`
                    ${V3_Font["body-baseline-regular"]}
                `;
        }
    }}
`;

export const Label = styled.div<LabelProps>`
    text-align: left;
    width: 100%;

    ${(props) => {
        switch (props.$labelDisplayType) {
            case "next-line":
                return css`
                    display: flex;
                    flex-direction: column;
                `;
            case "inline":
                return css`
                    ${PrimaryText} {
                        display: inline;
                    }

                    ${SecondaryText} {
                        display: inline;
                        margin-left: ${V3_Spacing["spacing-8"]};
                    }
                `;
        }
    }}
`;

export const TruncateFirstLine = styled.div<LabelProps>`
    display: inline-block;
    width: ${(props) => (props.$maxLines === 1 ? 50 : 100)}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`;

export const TruncateSecondLine = styled.div<LabelProps>`
    display: inline-block;
    width: ${(props) => (props.$maxLines === 1 ? 50 : 100)}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;

export const ListCheckbox = styled(Checkbox)`
    flex-shrink: 0;
    margin-right: ${V3_Spacing["spacing-16"]};
`;

// -----------------------------------------------------------------------------
// ELEMENT STYLES
// -----------------------------------------------------------------------------

export const SelectAllContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${V3_Spacing["spacing-16"]} 0 ${V3_Spacing["spacing-8"]} 0;
`;

export const DropdownCommonButton = styled.button<LabelProps>`
    ${(props) =>
        props.$variant === "small"
            ? V3_Font["body-md-semibold"]
            : V3_Font["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${V3_Colour["text-primary"]};
`;

export const ResultStateContainer = styled.div<ResultStateProps>`
    width: 100%;
    display: flex;
    padding: 15px ${V3_Spacing["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${(props) =>
        props.$variant === "small"
            ? V3_Font["body-md-regular"]
            : V3_Font["body-baseline-regular"]}
`;

export const LabelIcon = styled(ExclamationCircleFillIcon)<IconProps>`
    height: 1em;
    width: 1em;
    margin-right: ${V3_Spacing["spacing-4"]};
    color: ${V3_Colour["icon-error"]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: ${V3_Spacing["spacing-4"]};
    color: ${V3_Colour["icon"]};
`;
