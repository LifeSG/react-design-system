import styled, { css } from "styled-components";

import { Chevron2LeftIcon } from "@lifesg/react-icons/chevron-2-left";
import { Chevron2RightIcon } from "@lifesg/react-icons/chevron-2-right";
import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { EllipsisHorizontalIcon } from "@lifesg/react-icons/ellipsis-horizontal";

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
interface IconStyleProps {
    $disabled: boolean;
}

export const PaginationWrapper = styled.div`
    display: flex;
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

export const LinkIcon = styled(Text.Hyperlink.Small)<IconStyleProps>`
    display: flex;
    min-width: 2rem;
    height: 2rem;
    margin: 0 0.25rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover,
    :active,
    :focus {
        color: ${(props) =>
            props.$disabled ? Color.Neutral[4] : Color.Primary};
        cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

        svg {
            color: ${(props) =>
                props.$disabled ? Color.Neutral[4] : Color.Primary};
            cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
        }
    }
`;

export const NavigationItem = styled(Text.Hyperlink.Default)<StyleProps>`
    background: ${(props) =>
        props.$selected ? Color.Primary : Color.Neutral[8]};
    border: 1px solid
        ${(props) => (props.$selected ? Color.Primary : Color.Neutral[5])};
    color: ${(props) =>
        props.$selected ? Color.Neutral[8] : Color.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.5rem;
    margin: 0.25rem;
    cursor: pointer;

    :hover,
    :active,
    :focus {
        color: ${(props) =>
            props.$selected ? Color.Neutral[8] : Color.Primary};

        svg {
            color: ${(props) =>
                props.$selected ? Color.Neutral[8] : Color.Primary};
        }
    }
`;

export const EllipsisItem = styled(Text.Hyperlink.Default)`
    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    cursor: not-allowed;
    color: ${Color.Neutral[1]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.5rem;
    white-space: nowrap;

    :hover,
    :active,
    :focus {
        cursor: not-allowed;

        svg {
            cursor: not-allowed;
        }
    }
`;

const IconStyle = css<IconStyleProps>`
    height: 1.25rem;
    width: 1.25rem;
    color: ${(props) => (props.$disabled ? Color.Neutral[4] : Color.Primary)};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

    :hover,
    :active,
    :focus {
        color: ${(props) =>
            props.$disabled ? Color.Neutral[4] : Color.Primary};
        cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    }
`;
export const ArrowChevronLeftIcon = styled(ChevronLeftIcon)<IconStyleProps>`
    ${IconStyle}
`;

export const ArrowChevronRightIcon = styled(ChevronRightIcon)<IconStyleProps>`
    ${IconStyle}
`;

export const ArrowChevron2LeftIcon = styled(Chevron2LeftIcon)<IconStyleProps>`
    ${IconStyle}
`;

export const ArrowChevron2RightIcon = styled(Chevron2RightIcon)<IconStyleProps>`
    ${IconStyle}
`;

export const EllipsisHorizontal = styled(
    EllipsisHorizontalIcon
)<IconStyleProps>`
    height: 1.25rem;
    width: 1.25rem;
    margin-top: 0.25rem;
    color: ${(props) => (props.$disabled ? Color.Neutral[4] : Color.Primary)};

    cursor: not-allowed;

    :hover {
        cursor: not-allowed;
    }
`;
