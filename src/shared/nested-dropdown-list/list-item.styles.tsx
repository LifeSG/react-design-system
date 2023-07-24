import styled, { css } from "styled-components";
import { Color } from "../../color";
import { TextStyleHelper } from "../../text";
import { TruncateType } from "./types";
import { IconButton } from "../../icon-button";
import { TriangleForwardFillIcon } from "@lifesg/react-icons/triangle-forward-fill";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ArrowButtonProps {
    $expand: boolean;
}

interface ListItemSelectorProps {
    $selected?: boolean;
}

interface LabelProps {
    $truncateType?: TruncateType;
}

// =============================================================================
// STYLING
// =============================================================================

export const Category = styled.div`
    display: flex;
    cursor: pointer;
    padding: 0.5rem;
    min-height: 2.625rem;
`;

export const ListItemSelector = styled.button<ListItemSelectorProps>`
    display: flex;
    width: 100%;
    border: none;
    cursor: pointer;
    background: transparent;
    text-align: left;
    padding: 0.5rem;
    min-height: 2.625rem;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Color.Accent.Light[3]};
    }

    :hover {
        background-color: ${Color.Accent.Light[5]};
    }

    ${(props) => {
        if (props.$selected) {
            return css`
                background: ${Color.Accent.Light[5]};
            `;
        }
    }}
`;

export const Label = styled.div<LabelProps>`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    overflow: hidden;

    ${(props) => {
        switch (props.$truncateType) {
            case "middle":
                break;
            case "end":
            default:
                return css`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `;
        }
    }}
`;

export const TruncateContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TruncateFirstLine = styled.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`;

export const TruncateSecondLine = styled.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;

export const ArrowButton = styled(IconButton)<ArrowButtonProps>`
    border: none;
    background: transparent;
    cursor: pointer;
    width: 1.625rem;
    height: 1.625rem;
    transition: transform 250ms ease-in-out;

    :hover,
    :focus {
        box-shadow: unset;
    }

    ${(props) => {
        if (props.$expand) {
            return css`
                transform: rotate(90deg);
            `;
        }
    }}
`;

export const TriangleIcon = styled(TriangleForwardFillIcon)`
    color: ${Color.Primary};
`;

export const Title = styled.button`
    ${TextStyleHelper.getTextStyle("H4", "semibold")}
    color: ${Color.Neutral[1]};
    text-align: left;
    line-height: 1.625rem;
    margin-left: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    span {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-left: 2.625rem;
`;
