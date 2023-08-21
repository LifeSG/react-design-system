import styled, { css } from "styled-components";
import { Color } from "../../color";
import { Checkbox } from "../../checkbox";
import { TextStyleHelper } from "../../text";
import { TruncateType } from "./types";
import { IconButton } from "../../icon-button";
import { TriangleForwardFillIcon } from "@lifesg/react-icons/triangle-forward-fill";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

interface ListProps {
    $expanded: boolean;
    $multiSelect: boolean;
}

interface ListItemSelectorProps {
    $selected: boolean;
    $multiSelect: boolean;
}

interface LabelProps {
    $truncateType?: TruncateType;
}

interface ItemProps {
    $level: number;
    $multiSelect: boolean;
}

interface CheckboxInputProps {
    $type: "category" | "label";
}

interface ArrowButtonProps extends Pick<ListProps, "$expanded"> {}
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
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Color.Accent.Light[3]};
    }

    :hover {
        background-color: ${(props) =>
            props.$multiSelect ? "transparent" : Color.Accent.Light[5]};
    }

    ${(props) => {
        const { $selected, $multiSelect } = props;
        if (!$multiSelect && $selected) {
            return css`
                background: ${Color.Accent.Light[5]};
            `;
        }
    }}
`;

export const Item = styled.li<ItemProps>`
    ${(props) => {
        switch (props.$level) {
            case 2:
            case 3:
                if (props.$multiSelect) {
                    return css`
                        margin-left: 2.125rem;
                    `;
                }
                break;
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

export const Bold = styled.span`
    ${TextStyleHelper.getTextStyle("Body", "semibold")}
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

export const ButtonSection = styled.div`
    display: flex;
`;

export const CheckboxInput = styled(Checkbox)<CheckboxInputProps>`
    min-width: 1.5rem;
    max-width: 1.5rem;

    ${(props) => {
        switch (props.$type) {
            case "category":
                return css`
                    margin-left: 0.5rem;
                `;
            case "label":
                return css`
                    margin-right: 0.5rem;
                `;
        }
    }};
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
        if (props.$expanded) {
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
    width: 100%;
    padding: 0;
    overflow-wrap: anywhere;

    span {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;

export const List = styled.ul<ListProps>`
    display: ${(props) => (props.$expanded ? "flex" : "none")};
    flex-direction: column;
    margin-left: 2.125rem;
`;
