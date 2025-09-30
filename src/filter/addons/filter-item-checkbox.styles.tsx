import styled, { css } from "styled-components";
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

export const Group = styled.div<{
    $isMobileToggleMode: boolean;
    $isNested: boolean;
}>`
    display: flex;
    flex-direction: column;

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${(props) =>
            props.$isMobileToggleMode && !props.$isNested
                ? Spacing["spacing-16"]
                : 0};
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
    ${Font["body-md-regular"]}
    color: ${Colour["text"]};
    ${(props) =>
        props.$selected &&
        css`
            color: ${Colour["text-selected"]};
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

export const StyledToggle = styled(Toggle)<{ $visible: boolean }>`
    ${(props) => !props.$visible && "visibility: hidden;"}
    min-width: 5rem;
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
