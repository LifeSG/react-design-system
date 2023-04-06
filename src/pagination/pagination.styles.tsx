import styled, { css } from "styled-components";

import {
    ChevronLeftIcon,
    ChevronLineLeftIcon,
    ChevronLineRightIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
} from "@lifesg/react-icons";
import { Chevron2LeftIcon } from "@lifesg/react-icons/chevron-2-left";
import { Chevron2RightIcon } from "@lifesg/react-icons/chevron-2-right";

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
interface StylePropsIcon {
    $disabled: boolean;
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

export const LinkIcon = styled(Text.Hyperlink.Small)`
    color: ${Color.Neutral[1]};

    display: flex;
    min-width: 2rem;
    height: 2rem;
    margin: 0 0.5rem;
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
    margin: 0.25rem;

    cursor: pointer;

    :hover {
        color: ${(props) =>
            props.$selected ? Color.Neutral[8] : Color.Primary};
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
export const ArrowChevronLeftIcon = styled(ChevronLeftIcon)<StylePropsIcon>`
    height: 1.25rem;
    width: 1.25rem;
    color: ${(props) =>
        props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

    :hover {
        color: ${(props) =>
            props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    }
`;

export const ArrowChevronLineLeftIcon = styled(
    ChevronLineLeftIcon
)<StylePropsIcon>`
    height: 1.25rem;
    width: 1.25rem;
    color: ${(props) =>
        props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

    :hover {
        color: ${(props) =>
            props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    }
`;
export const ArrowChevronLineRightIcon = styled(
    ChevronLineRightIcon
)<StylePropsIcon>`
    height: 1.25rem;
    width: 1.25rem;

    color: ${(props) =>
        props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

    :hover {
        color: ${(props) =>
            props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    }
`;

export const ArrowChevronRightIcon = styled(ChevronRightIcon)<StylePropsIcon>`
    height: 1.25rem;
    width: 1.25rem;

    color: ${(props) =>
        props.$disabled ? Color.Accent.Light[2] : Color.Primary};

    :hover {
        color: ${(props) =>
            props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    }
`;

export const ArrowChevron2LeftIcon = styled(Chevron2LeftIcon)<StylePropsIcon>`
    height: 1.25rem;
    width: 1.25rem;

    color: ${(props) =>
        props.$disabled ? Color.Accent.Light[2] : Color.Primary};

    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

    :hover {
        color: ${(props) =>
            props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    }
`;

export const ArrowChevron2RightIcon = styled(Chevron2RightIcon)<StylePropsIcon>`
    height: 1.25rem;
    width: 1.25rem;

    color: ${(props) =>
        props.$disabled ? Color.Accent.Light[2] : Color.Primary};

    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

    :hover {
        color: ${(props) =>
            props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    }
`;

export const EllipsisHorizontal = styled(
    EllipsisHorizontalIcon
)<StylePropsIcon>`
    height: 1.25rem;
    width: 1.25rem;

    color: ${(props) =>
        props.$disabled ? Color.Accent.Light[2] : Color.Primary};

    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

    :hover {
        color: ${(props) =>
            props.$disabled ? Color.Accent.Light[2] : Color.Primary};
    }
`;
