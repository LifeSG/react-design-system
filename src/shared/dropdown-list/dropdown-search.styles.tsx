import styled from "styled-components";
import { Color } from "../../color";
import { Icon } from "../../icon";
import { TextStyleHelper } from "../../text";

export const Container = styled.li`
    background: ${Color.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`;

export const SearchInput = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    height: 3.5rem;
    border: none;
    background: transparent;
    width: 100%;
    padding: 0 0.5rem 0 0;

    :focus,
    :active {
        outline: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[3]};
    }
`;

export const SearchIcon = styled(Icon)`
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.5rem;
    color: ${Color.Neutral[3]};
`;

export const CancelIcon = styled(Icon)`
    height: 1.125rem;
    width: 1.125rem;
    margin: 0 0.5rem;
    color: ${Color.Neutral[3]};
    cursor: pointer;
`;
