import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { SquareIcon } from "@lifesg/react-icons/square";
import { SquareFillIcon } from "@lifesg/react-icons/square-fill";
import { SquareTickFillIcon } from "@lifesg/react-icons/square-tick-fill";
import { TickIcon } from "@lifesg/react-icons/tick";
import styled, { css } from "styled-components";

import {
    V3_Border,
    V3_Breakpoint,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";
import { ComponentLoadingSpinner } from "../component-loading-spinner";
import { applyHtmlContentStyle } from "../html-content/html-content";
import { BasicButton } from "../input-wrapper/input-wrapper";
import type { DropdownVariantType } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ContainerStyleProps {
    $width?: number;
    $customWidth?: string;
    $variant: DropdownVariantType;
}

interface ListItemStyleProps {
    $active: boolean;
    $selected: boolean;
    $disabled: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN STYLES
// -----------------------------------------------------------------------------
export const Container = styled.div<ContainerStyleProps>`
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};
    background: ${V3_Colour["bg"]};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${V3_MediaQuery.MaxWidth.sm} {
        --x-spacing: ${V3_Breakpoint["sm-margin"]}px;
        max-height: 15rem;
    }

    ${V3_MediaQuery.MaxWidth.xs} {
        --x-spacing: ${V3_Breakpoint["xs-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.xxs} {
        --x-spacing: ${V3_Breakpoint["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${(props) => {
        if (props.$customWidth) return `width: ${props.$customWidth};`;
        if (props.$width)
            return `width: ${props.$width}px; min-width: min(23rem, var(--available-width));`;

        return "min-width: min(23rem, var(--available-width));";
    }}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${(props) =>
        props.$variant === "small"
            ? V3_Font["body-md-regular"]
            : V3_Font["body-baseline-regular"]}

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
`;
export const List = styled.div`
    background: transparent;
    padding: ${V3_Spacing["spacing-8"]};
`;

export const Listbox = styled.ul`
    list-style-type: none;
`;

// -----------------------------------------------------------------------------
// LIST ITEM STYLES
// -----------------------------------------------------------------------------

export const ListItem = styled.li<ListItemStyleProps>`
    display: flex;
    align-items: flex-start;
    gap: ${V3_Spacing["spacing-8"]};
    padding: ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${V3_Radius["none"]};
    outline: none;

    ${(props) => {
        if (props.$disabled) {
            return css`
                cursor: not-allowed;
            `;
        } else if (props.$active && props.$selected) {
            return css`
                background: ${V3_Colour["bg-hover"]};
            `;
        } else if (props.$active) {
            return css`
                background: ${V3_Colour["bg-hover-subtle"]};
            `;
        }
    }}
`;

export const SelectedIndicator = styled(TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${V3_Colour["icon-selected"]};
`;

export const UnselectedIndicator = styled.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`;

export const CheckboxSelectedIndicator = styled(SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${V3_Colour["icon-selected"]};
`;

export const CheckboxUnselectedIndicator = styled(SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${V3_Colour["icon-primary-subtlest"]};
`;

export const CheckboxDisabledIndicator = styled(SquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${V3_Colour["icon-disabled-subtle"]};
`;

// -----------------------------------------------------------------------------
// ELEMENT STYLES
// -----------------------------------------------------------------------------

export const SelectAllContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const DropdownCommonButton = styled(BasicButton)`
    cursor: pointer;
    overflow: hidden;
    color: ${V3_Colour["text-primary"]};
    font-size: inherit;
`;

export const TryAgainButton = styled(DropdownCommonButton)`
    ${V3_Font["body-baseline-semibold"]}
`;

export const SelectAllButton = styled(DropdownCommonButton)`
    ${V3_Font["body-md-semibold"]}
    padding: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-8"]};
`;

export const ResultStateContainer = styled.div`
    width: 100%;
    display: flex;
    padding: ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-16"]};
    align-items: center;
`;

export const LabelIcon = styled(ExclamationCircleFillIcon)`
    margin-right: ${V3_Spacing["spacing-4"]};
    color: ${V3_Colour["icon-error"]};
    height: 1em;
    width: 1em;
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: ${V3_Spacing["spacing-8"]};
    color: ${V3_Colour["icon"]};
`;

export const NoResultDescContainer = styled.div`
    ${applyHtmlContentStyle()}
    color: ${V3_Colour["text-subtle"]};
    padding: 0 ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-12"]}
        ${V3_Spacing["spacing-16"]};
`;
