import styled, { css } from "styled-components";
import { Color } from "../../color/color";
import { MediaQuery } from "../../media/media";
import { TextStyleHelper } from "../../text/helper";
import { ToggleIcon } from "../../shared/toggle-icon/toggle-icon";
import { FilterItem } from "../filter-item";

export const StyledFilterItem = styled(FilterItem)`
    padding: 0.5rem;

    [data-id="minimise-button"] {
        margin: 0.5rem;
    }
`;

export const Group = styled.div`
    position: relative; // to get the item position relative to this parent
    display: flex;
    flex-direction: column;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const Item = styled.label<{ $visible: boolean; $selected: boolean }>`
    display: flex;
    align-items: center;
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
            ${TextStyleHelper.getTextStyle("BodySmall", "semibold")}
        `}
`;

export const Input = styled.input`
    appearance: none;
`;

export const Icon = styled(ToggleIcon)`
    height: 1.5rem;
    width: 1.5rem;

    ${Input}:focus-visible + & {
        outline: 2px solid ${Color.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`;
