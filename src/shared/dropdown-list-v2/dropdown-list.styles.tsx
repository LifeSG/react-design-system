import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { SquareIcon } from "@lifesg/react-icons/square";
import { SquareTickFillIcon } from "@lifesg/react-icons/square-tick-fill";
import { TickIcon } from "@lifesg/react-icons/tick";
import styled, { css } from "styled-components";
import { V2_Color } from "../../v2_color";
import { V2_MediaQuery } from "../../v2_media";
import { V2_TextStyleHelper } from "../../v2_text";
import { ComponentLoadingSpinner } from "../component-loading-spinner/component-loading-spinner";
import { DropdownVariantType } from "../dropdown-list/types";
import { BasicButton } from "../input-wrapper/input-wrapper";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ContainerStyleProps {
    $width?: number;
}

interface ListStyleProps {
    $variant?: DropdownVariantType;
}

interface ListItemStyleProps {
    $active?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN STYLES
// -----------------------------------------------------------------------------

export const Container = styled.div<ContainerStyleProps>`
    overflow: hidden;
    border: 1px solid ${V2_Color.Neutral[5]};
    border-radius: 4px;
    background: ${V2_Color.Neutral[8]};

    min-width: 23rem;
    ${(props) => props.$width && `width: ${props.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${V2_Color.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`;

export const List = styled.div`
    background: transparent;
    padding: 0.5rem;
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
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${V2_Color.Accent.Light[3]};

    ${(props) =>
        props.$active &&
        css`
            background: ${V2_Color.Accent.Light[5]};
        `}
`;

export const SelectedIndicator = styled(TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${V2_Color.Primary};
`;

export const UnselectedIndicator = styled.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`;

export const CheckboxSelectedIndicator = styled(SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${V2_Color.Primary};
`;

export const CheckboxUnselectedIndicator = styled(SquareIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${V2_Color.Accent.Light[2]};
`;

// -----------------------------------------------------------------------------
// ELEMENT STYLES
// -----------------------------------------------------------------------------

export const SelectAllContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const DropdownCommonButton = styled(BasicButton)<ListStyleProps>`
    ${(props) =>
        V2_TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            "semibold"
        )}
    cursor: pointer;
    overflow: hidden;
    color: ${V2_Color.Primary};
`;

export const TryAgainButton = styled(DropdownCommonButton)`
    outline-offset: 0.25rem;
`;

export const SelectAllButton = styled(DropdownCommonButton)`
    padding: 0.5rem 1rem;
`;

export const ResultStateContainer = styled.div<ListStyleProps>`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;

    ${(props) =>
        V2_TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            "regular"
        )}
`;

export const LabelIcon = styled(ExclamationCircleFillIcon)<ListStyleProps>`
    ${(props) => {
        const size = props.$variant === "small" ? 1 : 1.125;
        return css`
            height: ${size}rem;
            width: ${size}rem;
        `;
    }}
    margin-right: 0.625rem;
    color: ${V2_Color.Validation.Red.Icon};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: 0.625rem;
    color: ${V2_Color.Primary};
`;
