import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Checkbox } from "../../checkbox";
import { Color } from "../../color";
import { MediaQuery } from "../../media";
import { Text, TextStyleHelper } from "../../text";
import { LabelDisplayType, TruncateType } from "./types";

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
}

interface LabelProps {
    $truncateType?: TruncateType;
    $maxLines?: number;
    $labelDisplayType?: LabelDisplayType;
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
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${(props) => props.width || "100%"};
    overflow-y: auto;
    padding: 0.5rem;

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

export const ListItem = styled.li<ListItemProps>`
    :hover,
    :focus,
    :active {
        background: ${Color.Accent.Light[5]};
    }
    ${(props) => {
        if (props.$checked) {
            return css`
                background: ${Color.Accent.Light[5]};
            `;
        }
    }}
`;

export const ListItemSelector = styled.button<ListItemSelectorProps>`
    display: flex;
    ${(props) => {
        if (props.$multiSelect) {
            return css`
                padding: 0.5rem 1rem;
            `;
        } else {
            return css`
                padding: 0 1rem;
                min-height: ${props.$hasNextLineLabel ? "4.255rem" : "3.5rem"};
                align-items: center;
            `;
        }
    }}
    margin: 0 -0.5rem;
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Color.Accent.Light[3]};
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
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${Color.Neutral[1]};
    width: 100%;

    ${(props) => props.$truncateType === "end" && lineClampCss}
`;

export const SecondaryText = styled.div<LabelProps>`
    color: ${Color.Neutral[4]};
    width: 100%;

    ${(props) => props.$truncateType === "end" && lineClampCss}

    ${(props) => {
        switch (props.$labelDisplayType) {
            case "next-line":
                return css`
                    ${TextStyleHelper.getTextStyle("BodySmall", "semibold")}
                `;
            case "inline":
            default:
                return css`
                    ${TextStyleHelper.getTextStyle("Body", "regular")}
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
                        margin-left: 0.5rem;
                    }
                `;
        }
    }}
`;

export const TruncateFirstLine = styled.div<LabelProps>`
    display: inline-block;
    width: ${(props) => (props.$maxLines === 1 ? 50 : 100)}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`;

export const TruncateSecondLine = styled.div<LabelProps>`
    display: inline-block;
    width: ${(props) => (props.$maxLines === 1 ? 50 : 100)}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;

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

export const DropdownCommonButton = styled.button`
    ${TextStyleHelper.getTextStyle("Body", "semibold")}
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

export const ResultStateText = styled(Text.Body)``;

export const LabelIcon = styled(ExclamationCircleFillIcon)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Color.Validation.Red.Icon};
`;
