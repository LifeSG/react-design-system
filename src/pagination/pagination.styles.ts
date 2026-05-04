import styled, { css } from "styled-components";

import { Input } from "../input";
import { ClickableIcon } from "../shared/clickable-icon";
import { Typography } from "../typography";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";
// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}
interface ButtonProps {
    $position: string;
}

// =============================================================================
// STYLING
// =============================================================================
export const PaginationWrapper = styled.nav`
    display: flex;
`;

export const PaginationList = styled.div`
    align-self: flex-start;

    display: flex;
    align-items: center;

    ${V3_MediaQuery.MaxWidth.lg} {
        align-self: center;
    }
`;

export const PaginationMenu = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const EllipsisButton = styled(ClickableIcon)`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border-radius: ${V3_Radius["sm"]};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${V3_Spacing["spacing-8"]};

    color: ${V3_Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${V3_Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${V3_Colour["bg-hover"]};
    }
`;

export const NavigationButton = styled(ClickableIcon)<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    margin: ${V3_Spacing["spacing-4"]};
    border-radius: ${V3_Radius["sm"]};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${V3_Spacing["spacing-8"]};

    color: ${V3_Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${V3_Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${V3_Colour["bg-hover"]};
    }
`;

export const PageItem = styled.button<StyleProps>`
    outline: none;
    margin: ${V3_Spacing["spacing-4"]};
    box-shadow: none;
    border: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${(props) =>
            css`
                ${props.$selected ? V3_Colour["bg-primary"] : V3_Colour.border}
            `};
    border-radius: ${V3_Radius["sm"]};
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0 ${V3_Spacing["spacing-8"]};

    background: ${(props) =>
        props.$selected ? V3_Colour["bg-primary"] : V3_Colour.bg};
    cursor: pointer;

    ${V3_Font["body-baseline-regular"]};
    text-align: center;
    color: ${(props) =>
        props.$selected ? V3_Colour["text-inverse"] : V3_Colour.text};

    ${(props) =>
        props.$selected
            ? css`
                  font-weight: ${V3_Font.Spec["weight-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${V3_Colour["bg-selected-strongest-hover"]};
                      background: ${V3_Colour["bg-selected-strongest-hover"]};
                      color: ${V3_Colour["text-inverse"]};
                  }
              `
            : css`
                  &:hover,
                  &:focus-visible {
                      border-color: ${V3_Colour["bg-hover"]};
                      background: ${V3_Colour["bg-hover"]};
                      color: ${V3_Colour["text-hover"]};
                      font-weight: ${V3_Font.Spec["weight-semibold"]};
                  }
              `}
`;

export const EllipsisContainer = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${V3_Spacing["spacing-4"]};
    border-radius: ${V3_Radius["sm"]};
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
`;

export const PaginationMobileInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${V3_Spacing["spacing-4"]};

    color: ${V3_Colour.text};
`;

export const Label = styled(Typography.BodyBL)`
    white-space: nowrap;
`;

export const LabelDivider = styled(Typography.BodyBL)`
    margin: 0 ${V3_Spacing["spacing-16"]};
    white-space: nowrap;
`;

export const InputView = styled(Input)`
    width: 3.5rem;
    height: 2.5rem;
    ${V3_Font["body-baseline-regular"]};

    input {
        padding: 0 ${V3_Spacing["spacing-8"]};
        text-align: center;
    }
`;

export const Hover = styled.div`
    position: absolute;
    top: -${V3_Spacing["spacing-8"]};
    transform: translateY(-100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${V3_Radius["sm"]};
    width: max-content;
    padding: ${V3_Spacing["spacing-4"]} ${V3_Spacing["spacing-12"]};

    background-color: ${V3_Colour["bg-hover"]};

    ${V3_Font["body-xs-regular"]}
    color: ${V3_Colour["text-hover"]};
`;

export const InputSelectWrapper = styled.div`
    margin-left: ${V3_Spacing["spacing-4"]};
    width: 10rem;
`;
