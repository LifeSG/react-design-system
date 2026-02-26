import styled, { css } from "styled-components";
import { Button } from "../../button";
import { Checkbox } from "../../checkbox";
import { V3_Colour, V3_Font, V3_MediaQuery, V3_Spacing } from "../../v3_theme";
import { Toggle } from "../../toggle";
import { FilterItem } from "../filter-item";

export const StyledFilterItem = styled(FilterItem)`
    padding: 0 0 ${V3_Spacing["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-8"]} 0;

        ${V3_MediaQuery.MaxWidth.lg} {
            padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-20"]}
                ${V3_Spacing["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-20"]} 0;
    }
`;

export const Group = styled.div<{
    $isMobileToggleMode: boolean;
}>`
    display: flex;
    flex-direction: column;

    ${V3_MediaQuery.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${(props) =>
            props.$isMobileToggleMode ? V3_Spacing["spacing-16"] : 0};
    }
`;

export const Item = styled.label<{
    $visible: boolean;
    $selected: boolean;
    $level?: number;
}>`
    display: flex;
    align-items: flex-start;
    ${(props) => !props.$visible && "display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-12"]};
    ${(props) =>
        props.$level &&
        css`
            padding-left: calc(
                ${V3_Spacing["spacing-12"]} + ${props.$level} *
                    ${V3_Spacing["spacing-32"]}
            );
        `}

    cursor: pointer;
    ${V3_Font["body-md-regular"]}
    color: ${V3_Colour["text"]};
    ${(props) =>
        props.$selected &&
        css`
            color: ${V3_Colour["text-selected"]};
        `}
    ${V3_MediaQuery.MaxWidth.lg} {
        padding: ${V3_Spacing["spacing-8"]};
        ${(props) =>
            props.$level &&
            css`
                padding-left: calc(
                    ${V3_Spacing["spacing-8"]} + ${props.$level} *
                        ${V3_Spacing["spacing-32"]}
                );
            `}
    }
`;

export const StyledCheckbox = styled(Checkbox)`
    flex-shrink: 0;
    margin-right: ${V3_Spacing["spacing-8"]};
`;

export const StyledToggle = styled(Toggle)<{ $visible: boolean }>`
    ${(props) => !props.$visible && "visibility: hidden;"}
    min-width: 5rem;
`;

export const SelectAllButton = styled(Button.Small)`
    height: fit-content;
    padding: 0;
    margin: ${V3_Spacing["spacing-16"]} 0 ${V3_Spacing["spacing-8"]}
        ${V3_Spacing["spacing-12"]};

    ${V3_MediaQuery.MaxWidth.lg} {
        margin: 0 0 ${V3_Spacing["spacing-16"]} 0;
    }
`;
