import { animated } from "react-spring";
import styled from "styled-components";
import { Color } from "../styles/theme";
import { TextStyleHelper } from "../text/helper";
import { Text } from "../text/text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListContainerProps {
    width?: string;
}

// =============================================================================
// STYLING
// =============================================================================

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
`;

export const ListItem = styled.li`
    :hover,
    :focus,
    :active {
        background: ${Color.Accent.Light[5]};
    }
`;

export const ListItemSelector = styled.button`
    display: flex;
    padding: 1rem;
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

export const AddOnContainer = styled.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Color.Neutral[8]};
`;

export const Label = styled(Text.Body)`
    text-align: left;
    line-height: 1.375rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Clickable = styled(Text.Hyperlink.Default)`
    color: ${Color.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Color.Accent.Light[3]};
        color: ${Color.Neutral[1]};
    }
`;

export const SearchInputContainer = styled.li`
    background: ${Color.Accent.Light[5]};
`;

export const SearchInput = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    height: 3.5rem;
    border: none;
    background: transparent;
    width: 100%;
    padding: 0 0.5rem;

    :focus,
    :active {
        outline: none;
    }
`;
