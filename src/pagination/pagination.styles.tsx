import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Input } from "../input/input";
import { Text, TextStyleHelper } from "../text";
// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}

export const PaginationWrapper = styled.div`
    display: flex;
`;

export const StyledButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
`;

export const Page = styled.div`
    background: none;
`;

export const PaginationList = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${MediaQuery.MaxWidth.tablet} {
        align-self: center;
    }
`;

export const PaginationMenu = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 1rem;
`;

export const Link = styled(Text.Hyperlink.Small)`
    color: ${Color.Neutral[1]};

    display: flex;
    min-width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const PaginationJumper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Color.Neutral[1]};

    display: flex;
    justify-content: center;
`;

export const Label = styled(Text.XSmall)`
    ${TextStyleHelper.getTextStyle("Body", 400)};
    white-space: nowrap;
`;

export const InputView = styled(Input)`
    ${TextStyleHelper.getTextStyle("Body", 400)};

    margin: 0 0.5rem;
    width: 3.125rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${Color.Neutral[5]};
    padding: 0.5rem 0.5rem;
    text-align: center;
`;

export const Item = styled(Text.Hyperlink.Default)<StyleProps>`
    ${(props) => {
        if (props.$selected) {
            return css`
                ${TextStyleHelper.getTextStyle("Body", 700)};
            `;
        } else {
            return css`
                ${TextStyleHelper.getTextStyle("Body", 400)};
            `;
        }
    }}

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    color: ${(props) =>
        props.$selected ? Color.Neutral[8] : Color.Neutral[1]};
    padding: 0.4rem 0.5rem;

    background: ${(props) =>
        props.$selected ? Color.Primary : Color.Neutral[8]};

    border: 1px solid
        ${(props) => (props.$selected ? Color.Primary : Color.Neutral[5])};
    border-radius: 0.5rem;

    cursor: pointer;

    :hover {
        color: ${(props) =>
            props.$selected ? Color.Neutral[8] : Color.Neutral[1]};
    }
`;

export const EllipsisItem = styled(Text.Hyperlink.Small)`
    ${TextStyleHelper.getTextStyle("Body", 400)};
    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    cursor: not-allowed;
    color: ${Color.Neutral[1]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.5rem;
    white-space: nowrap;
`;
