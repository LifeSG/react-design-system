import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { SquareIcon } from "@lifesg/react-icons/square";
import { SquareFillIcon } from "@lifesg/react-icons/square-fill";
import { SquareTickFillIcon } from "@lifesg/react-icons/square-tick-fill";
import { TickIcon } from "@lifesg/react-icons/tick";
import styled, { css } from "styled-components";
import {
    Border,
    Breakpoint,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Spacing,
} from "../../theme";
import { ComponentLoadingSpinner } from "../component-loading-spinner";
import { DropdownVariantType } from "../dropdown-list/types";
import { applyHtmlContentStyle } from "../html-content/html-content";
import { BasicButton } from "../input-wrapper/input-wrapper";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ContainerStyleProps {
    $width?: number;
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
    overflow: hidden;
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};

    min-width: 23rem;
    ${(props) => props.$width && `width: ${props.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${(props) =>
        props.$variant === "small"
            ? Font["body-md-regular"]
            : Font["body-baseline-regular"]}

    ${MediaQuery.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Breakpoint["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${MediaQuery.MaxWidth.xs} {
        width: calc(100vw - ${Breakpoint["xs-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.xxs} {
        width: calc(100vw - ${Breakpoint["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Radius["full"]};
        background-clip: padding-box;
    }
`;

export const List = styled.div`
    background: transparent;
    padding: ${Spacing["spacing-8"]};
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
    gap: ${Spacing["spacing-8"]};
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]};
    cursor: pointer;
    border-radius: ${Radius["none"]};
    outline: none;

    ${(props) => {
        if (props.$disabled) {
            return css`
                cursor: not-allowed;
            `;
        } else if (props.$active && props.$selected) {
            return css`
                background: ${Colour["bg-hover"]};
            `;
        } else if (props.$active) {
            return css`
                background: ${Colour["bg-hover-subtle"]};
            `;
        }
    }}
`;

export const SelectedIndicator = styled(TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Colour["icon-selected"]};
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
    color: ${Colour["icon-selected"]};
`;

export const CheckboxUnselectedIndicator = styled(SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Colour["icon-primary-subtlest"]};
`;

export const CheckboxDisabledIndicator = styled(SquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Colour["icon-disabled-subtle"]};
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
    color: ${Colour["text-primary"]};
    font-size: inherit;
`;

export const TryAgainButton = styled(DropdownCommonButton)`
    ${Font["body-baseline-semibold"]}
`;

export const SelectAllButton = styled(DropdownCommonButton)`
    ${Font["body-md-semibold"]}
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-8"]};
`;

export const ResultStateContainer = styled.div`
    width: 100%;
    display: flex;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    align-items: center;
`;

export const LabelIcon = styled(ExclamationCircleFillIcon)`
    margin-right: ${Spacing["spacing-4"]};
    color: ${Colour["icon-error"]};
    height: 1em;
    width: 1em;
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: ${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
`;

export const NoResultDescContainer = styled.div`
    ${applyHtmlContentStyle()}
    color: ${Colour["text-subtle"]};
    padding: 0 ${Spacing["spacing-16"]} ${Spacing["spacing-12"]}
        ${Spacing["spacing-16"]};
`;
