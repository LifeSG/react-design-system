import styled, { css } from "styled-components";
import { Button } from "../../button/button";
import { Color } from "../../color/color";
import { MediaQuery } from "../../media/media";
import { ToggleIcon } from "../../shared/toggle-icon/toggle-icon";
import { TextStyleHelper } from "../../text/helper";
import { Toggle } from "../../toggle";
import { FilterItem } from "../filter-item";

export const StyledFilterItem = styled(FilterItem)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${MediaQuery.MaxWidth.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${MediaQuery.MaxWidth.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;

    ${MediaQuery.MaxWidth.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`;

export const Item = styled.label<{ $visible: boolean; $selected: boolean }>`
    display: flex;
    align-items: flex-start;
    ${(props) => !props.$visible && "display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
    ${(props) =>
        props.$selected &&
        css`
            color: ${Color.Primary};
        `}
`;

export const Input = styled.input`
    appearance: none;
`;

export const StyledToggleIcon = styled(ToggleIcon)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${Input}:focus-visible + & {
        outline: 2px solid ${Color.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`;

export const StyledToggle = styled(Toggle)<{ $visible: boolean }>`
    ${(props) => !props.$visible && "visibility: hidden;"}
`;

export const SelectAllButton = styled(Button.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${MediaQuery.MaxWidth.tablet} {
        margin: 0 0 1rem 0;
    }
`;
