import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { SquareIcon } from "@lifesg/react-icons/square";
import { SquareFillIcon } from "@lifesg/react-icons/square-fill";
import { TickIcon } from "@lifesg/react-icons/tick";
import styled, { css } from "styled-components";
import { Color } from "../../color";
import { MediaQuery } from "../../media";
import { TextStyleHelper } from "../../text";
import { DropdownVariantType } from "../dropdown-list/types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListStyleProps {
    $variant?: DropdownVariantType;
}

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN STYLES
// -----------------------------------------------------------------------------

export const Container = styled.div`
    overflow: hidden;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};

    width: 23rem;
    max-height: 27rem;
    overflow-y: auto;

    ${MediaQuery.MaxWidth.mobileL} {
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
        background: ${Color.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`;

export const List = styled.div`
    background: transparent;
    padding: 0.5rem;
    list-style-type: none;
`;

// -----------------------------------------------------------------------------
// LIST ITEM STYLES
// -----------------------------------------------------------------------------

export const ListItem = styled.li<ListStyleProps>`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Color.Accent.Light[3]};

    :hover,
    :focus,
    :active {
        background: ${Color.Accent.Light[5]};
    }
`;

export const SelectedIndicator = styled(TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Color.Primary};
`;

export const UnselectedIndicator = styled.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`;

export const CheckboxSelectedIndicator = styled(SquareFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Color.Primary};
`;

export const CheckboxUnselectedIndicator = styled(SquareIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Color.Accent.Light[2]};
`;

// -----------------------------------------------------------------------------
// ELEMENT STYLES
// -----------------------------------------------------------------------------

export const SelectAllContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`;

export const DropdownCommonButton = styled.button<ListStyleProps>`
    ${(props) =>
        TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            "semibold"
        )}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Color.Primary};
`;

export const ResultStateContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`;

export const ResultStateText = styled.div<ListStyleProps>`
    ${(props) =>
        TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            "regular"
        )}
`;

export const LabelIcon = styled(ExclamationCircleFillIcon)<ListStyleProps>`
    ${(props) => {
        const size = props.$variant === "small" ? 1 : 1.5;
        return css`
            height: ${size}rem;
            width: ${size}rem;
        `;
    }}
    margin-right: 0.625rem;
    color: ${Color.Validation.Red.Icon};
`;
