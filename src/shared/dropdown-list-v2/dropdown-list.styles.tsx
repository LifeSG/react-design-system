import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import styled, { css } from "styled-components";
import { Checkbox } from "../../checkbox";
import { Color } from "../../color";
import { MediaQuery } from "../../media";
import { TextStyleHelper } from "../../text";
import {
    DropdownVariantType,
    LabelDisplayType,
    TruncateType,
} from "../dropdown-list/types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListContainerStyleProps {
    $width?: string;
}

interface ListItemStyleProps {
    $checked?: boolean;
    $multiSelect?: boolean;
    $hasNextLineLabel?: boolean;
    $variant?: DropdownVariantType;
}

interface LabelStyleProps {
    $truncateType?: TruncateType;
    $maxLines?: number;
    $labelDisplayType?: LabelDisplayType;
    $variant?: DropdownVariantType;
}

interface ResultStateProps {
    $variant?: DropdownVariantType;
}

interface IconProps {
    $variant?: DropdownVariantType | undefined;
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
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Color.Neutral[8]};
`;

export const List = styled.div<ListContainerStyleProps>`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${(props) => props.$width || "100%"};
    overflow-y: auto;
    padding: 0.5rem;
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Color.Neutral[4]};
        border-right: 5px solid ${Color.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        max-height: 15rem;
    }
`;

const getMinHeight = (props: ListItemStyleProps) => {
    if (props.$variant === "small") {
        return 3.25;
    }

    if (props.$hasNextLineLabel) {
        return 4.255;
    }

    return 3.5;
};

export const ListItem = styled.li<ListItemStyleProps>`
    display: flex;
    align-items: center;
    min-height: ${(props) => getMinHeight(props)}rem;
    cursor: pointer;

    ${(props) => {
        if (props.$multiSelect) {
            return css`
                padding: 0.5rem 1rem;
            `;
        } else {
            return css`
                padding: 0 1rem;
            `;
        }
    }}

    ${(props) => {
        if (props.$checked) {
            return css`
                background: ${Color.Accent.Light[5]};
            `;
        }
    }}

    outline-color: ${Color.Accent.Light[3]};

    :hover,
    :focus,
    :active {
        background: ${Color.Accent.Light[5]};
    }
`;

// -----------------------------------------------------------------------------
// LIST ITEM LABEL STYLES
// -----------------------------------------------------------------------------

export const ListCheckbox = styled(Checkbox)`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
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

export const DropdownCommonButton = styled.button<LabelStyleProps>`
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
    ${(props) => {
        return `
			color: ${Color.Primary(props)};
		`;
    }}
`;

export const ResultStateContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`;

export const ResultStateText = styled.div<ResultStateProps>`
    ${(props) =>
        TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            "regular"
        )}
`;

export const LabelIcon = styled(ExclamationCircleFillIcon)<IconProps>`
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
