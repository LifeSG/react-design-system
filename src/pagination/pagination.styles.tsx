import styled, { css } from "styled-components";
import { Input } from "../input";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../theme";
import { Typography } from "../typography";
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

    ${MediaQuery.MaxWidth.lg} {
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
    border-radius: ${Radius["sm"]};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${Spacing["spacing-8"]};

    color: ${Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${Colour["bg-hover"]};
    }
`;

export const NavigationButton = styled(ClickableIcon)<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    margin: ${Spacing["spacing-4"]};
    border-radius: ${Radius["sm"]};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0 ${Spacing["spacing-8"]};

    color: ${Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${Colour["bg-hover"]};
    }
`;

export const PageItem = styled.button<StyleProps>`
    outline: none;
    margin: ${Spacing["spacing-4"]};
    box-shadow: none;
    border: ${Border["width-010"]} ${Border.solid}
        ${(props) =>
            css`
                ${props.$selected ? Colour["bg-primary"] : Colour.border}
            `};
    border-radius: ${Radius["sm"]};
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0 ${Spacing["spacing-8"]};

    background: ${(props) =>
        props.$selected ? Colour["bg-primary"] : Colour.bg};
    cursor: pointer;

    ${Font["body-baseline-regular"]};
    text-align: center;
    color: ${(props) =>
        props.$selected ? Colour["text-inverse"] : Colour.text};

    ${(props) =>
        props.$selected
            ? css`
                  font-weight: ${Font.Spec["weight-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${Colour["bg-selected-strongest-hover"]};
                      background: ${Colour["bg-selected-strongest-hover"]};
                      color: ${Colour["text-inverse"]};
                  }
              `
            : css`
                  &:hover,
                  &:focus-visible {
                      border-color: ${Colour["bg-hover"]};
                      background: ${Colour["bg-hover"]};
                      color: ${Colour["text-hover"]};
                      font-weight: ${Font.Spec["weight-semibold"]};
                  }
              `}
`;

export const EllipsisContainer = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${Spacing["spacing-4"]};
    border-radius: ${Radius["sm"]};
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
`;

export const PaginationMobileInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${Spacing["spacing-4"]};

    color: ${Colour.text};
`;

export const Label = styled(Typography.BodyBL)`
    white-space: nowrap;
`;

export const LabelDivider = styled(Typography.BodyBL)`
    margin: 0 ${Spacing["spacing-16"]};
    white-space: nowrap;
`;

export const InputView = styled(Input)`
    width: 3.5rem;
    height: 2.5rem;
    ${Font["body-baseline-regular"]};

    input {
        padding: 0 ${Spacing["spacing-8"]};
        text-align: center;
    }
`;

export const Hover = styled.div`
    position: absolute;
    top: -${Spacing["spacing-8"]};
    transform: translateY(-100%);

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${Radius["sm"]};
    width: max-content;
    padding: ${Spacing["spacing-4"]} ${Spacing["spacing-12"]};

    background-color: ${Colour["bg-hover"]};

    ${Font["body-xs-regular"]}
    color: ${Colour["text-hover"]};
`;

export const InputSelectWrapper = styled.div`
    margin-left: ${Spacing["spacing-4"]};
    width: 9.75rem;
`;
