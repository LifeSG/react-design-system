import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Checkbox } from "../../checkbox";
import { Colour, Font, MediaQuery, Radius, Spacing } from "../../theme";
import { ComponentLoadingSpinner } from "../component-loading-spinner/component-loading-spinner";
import {
    DropdownVariantType,
    IconProps,
    LabelDisplayType,
    TruncateType,
} from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListContainerProps {
    width?: string;
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

export const Container = styled(animated.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`;

export const List = styled.ul<ListContainerProps>`
    border-bottom-left-radius: ${Radius["sm"]};
    border-bottom-right-radius: ${Radius["sm"]};
    background: transparent;
    max-height: 20rem;
    width: ${(props) => props.width || "100%"};
    overflow-y: auto;
    padding: ${Spacing["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${MediaQuery.MaxWidth.sm} {
        max-height: 15rem;
    }
`;

export const ListItem = styled.li<ListItemProps>`
    :hover,
    :focus,
    :active {
        background: ${Colour["bg-hover"]};
    }
    ${(props) => {
        if (props.$checked) {
            return css`
                background: ${Colour["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${Colour["bg-selected-hover"]};
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
                padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
            `;
        } else {
            return css`
                padding: 15px ${Spacing["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `;
        }
    }}
    margin: 0 -${Spacing["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Colour["border-focus"]};
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
            ? Font["body-md-regular"]
            : Font["body-baseline-regular"]}
    color: ${Colour["text"]};
    width: 100%;

    ${(props) => props.$truncateType === "end" && lineClampCss}
`;

export const SecondaryText = styled.div<LabelProps>`
    color: ${Colour["text-subtlest"]};
    width: 100%;

    ${(props) => props.$truncateType === "end" && lineClampCss}

    ${(props) => {
        switch (props.$labelDisplayType) {
            case "next-line":
                return css`
                    ${Font["body-md-semibold"]}
                `;
            case "inline":
            default:
                return css`
                    ${Font["body-baseline-regular"]}
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
                        margin-left: ${Spacing["spacing-8"]};
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
    margin-right: ${Spacing["spacing-16"]};
`;

// -----------------------------------------------------------------------------
// ELEMENT STYLES
// -----------------------------------------------------------------------------

export const SelectAllContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Spacing["spacing-16"]} 0 ${Spacing["spacing-8"]} 0;
`;

export const DropdownCommonButton = styled.button<LabelProps>`
    ${(props) =>
        props.$variant === "small"
            ? Font["body-md-semibold"]
            : Font["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Colour["text-primary"]};
`;

export const ResultStateContainer = styled.div<ResultStateProps>`
    width: 100%;
    display: flex;
    padding: 15px ${Spacing["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${(props) =>
        props.$variant === "small"
            ? Font["body-md-regular"]
            : Font["body-baseline-regular"]}
`;

export const LabelIcon = styled(ExclamationCircleFillIcon)<IconProps>`
    height: 1em;
    width: 1em;
    margin-right: ${Spacing["spacing-4"]};
    color: ${Colour["icon-error"]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: ${Spacing["spacing-4"]};
    color: ${Colour["icon"]};
`;
