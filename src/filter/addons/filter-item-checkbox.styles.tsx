import styled, { css } from "styled-components";
import { MinusSquareFillIcon } from "@lifesg/react-icons/minus-square-fill";
import { Button } from "../../button";
import { Checkbox } from "../../checkbox";
import { Colour, Font, MediaQuery, Spacing } from "../../theme";
import { Toggle } from "../../toggle";
import { FilterItem } from "../filter-item";

export const StyledFilterItem = styled(FilterItem)`
    padding: 0 0 ${Spacing["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Spacing["spacing-8"]} ${Spacing["spacing-8"]} 0;

        ${MediaQuery.MaxWidth.lg} {
            padding: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]}
                ${Spacing["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Spacing["spacing-8"]} ${Spacing["spacing-20"]} 0;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Spacing["spacing-16"]};
    }
`;

export const Item = styled.label<{
    $visible: boolean;
    $selected: boolean;
    $level?: number;
    $hasChildren?: boolean;
}>`
    display: flex;
    align-items: flex-start;
    ${(props) => !props.$visible && "display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-12"]};
    ${(props) =>
        props.$level && `padding-left: calc(12px + ${props.$level * 32}px);`}

    cursor: pointer;
    ${(props) =>
        props.$hasChildren ? Font["body-md-semibold"] : Font["body-md-regular"]}
    color: ${Colour["text"]};
    ${(props) =>
        props.$selected &&
        css`
            color: ${Colour["text-selected"]};
        `}

    /* Add subtle visual hierarchy */
    ${(props) =>
        props.$level &&
        props.$level > 0 &&
        css`
            position: relative;
            margin-top: 1px;
            &::before {
                content: "";
                position: absolute;
                left: calc(
                    ${Spacing["spacing-12"]} + ${(props.$level - 1) * 32 + 8}px
                );
                top: 0;
                bottom: 0;
                width: 1px;
                background-color: ${Colour["border"]};
                opacity: 0.2;
            }
        `}
    
    /* Parent items get subtle background */
    ${(props) =>
        props.$hasChildren &&
        css`
            background-color: rgba(0, 0, 0, 0.02);
            border-radius: 4px;
            margin-bottom: 4px;
            margin-top: ${props.$level === 0 ? "8px" : "2px"};
        `}

    ${MediaQuery.MaxWidth.lg} {
        padding: ${Spacing["spacing-8"]};
        ${(props) =>
            props.$level && `padding-left: calc(8px + ${props.$level * 28}px);`}
    }
`;

export const StyledCheckbox = styled(Checkbox)`
    flex-shrink: 0;
    margin-right: ${Spacing["spacing-8"]};
`;

export const PartialCheckboxIndicator = styled(MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1rem;
    width: 1rem;
    margin-right: ${Spacing["spacing-8"]};
    color: ${Colour["icon-selected"]};
`;

export const StyledToggle = styled(Toggle)<{
    $visible: boolean;
    $level?: number;
    $hasChildren?: boolean;
}>`
    ${(props) => !props.$visible && "visibility: hidden;"}
    min-width: 5rem;
    ${(props) => props.$hasChildren && "font-weight: 600;"}
    ${(props) => props.$level && `margin-left: ${props.$level * 28}px;`}
`;

export const SelectAllButton = styled(Button.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Spacing["spacing-16"]} 0 ${Spacing["spacing-8"]}
        ${Spacing["spacing-12"]};

    ${MediaQuery.MaxWidth.lg} {
        margin: 0 0 ${Spacing["spacing-16"]} 0;
    }
`;
