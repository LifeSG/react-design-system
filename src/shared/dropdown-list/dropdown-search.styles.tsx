import { CrossIcon } from "@lifesg/react-icons/cross";
import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import styled from "styled-components";
import { Color } from "../../color";
import { IconButton } from "../../icon-button";
import { TextStyleHelper } from "../../text";

export const Container = styled.li`
    background: ${Color.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`;

export const SearchInput = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    height: 3rem;
    border: none;
    background: transparent;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;

    :focus,
    :active {
        outline: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[3]};
    }
`;

export const SearchIcon = styled(MagnifierIcon)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Color.Neutral[3]};
`;

export const CancelButton = styled(IconButton)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Color.Neutral[3]};
    cursor: pointer;
`;

export const CancelIcon = styled(CrossIcon)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Color.Neutral[3]};
`;
