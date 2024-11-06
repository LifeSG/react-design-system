import styled, { css } from "styled-components";
import { Input } from "../input";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, Font, MediaQuery, Radius } from "../theme";
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
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${MediaQuery.MaxWidth.lg} {
        align-self: center;
    }
`;

export const PaginationMenu = styled.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`;

export const NavigationItem = styled(ClickableIcon)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Radius.sm};
    color: ${Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    :hover {
        background-color: ${Colour["bg-hover"]};
    }
`;

export const NavigationButton = styled(ClickableIcon)<ButtonProps>`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Radius.sm};
    color: ${Colour["icon-primary"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Colour["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${Colour["bg-hover"]};
    }

    ${(props) => {
        if (props.$position === "left") {
            return css`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `;
        } else {
            return css`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `;
        }
    }}

    ${MediaQuery.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`;

export const PageItem = styled.button<StyleProps>`
    background: ${(props) =>
        props.$selected ? Colour["bg-primary"] : Colour.bg};
    border: ${Border["width-010"]} solid
        ${(props) => (props.$selected ? Colour["bg-primary"] : Colour.border)};
    color: ${(props) =>
        props.$selected ? Colour["text-inverse"] : Colour.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${Radius.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;

    ${(props) =>
        props.$selected
            ? css`
                  ${Font["body-baseline-bold"]};

                  &:hover {
                      border-color: ${Colour["bg-selected-strongest-hover"]};
                      background-color: ${Colour[
                          "bg-selected-strongest-hover"
                      ]};
                      color: ${Colour["text-inverse"]};
                  }
              `
            : css`
                  ${Font["body-baseline-regular"]};

                  &:hover {
                      border-color: ${Colour["bg-hover"]};
                      background-color: ${Colour["bg-hover"]};
                      color: ${Colour["text-hover"]};
                      ${Font["body-baseline-semibold"]};
                  }
              `}
`;

export const EllipsisItem = styled(ClickableIcon)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colour["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${Radius.sm};
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${Colour["icon-hover"]};
        }
    }
`;

export const EllipsisContainer = styled.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${Radius.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const PaginationMobileInput = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Colour.text};

    display: flex;
    justify-content: center;
`;

export const Label = styled(Typography.BodyBL)`
    white-space: nowrap;
`;

export const LabelDivider = styled(Typography.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`;

export const InputView = styled(Input)`
    ${Font["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${Radius.sm};
    border: ${Border["width-010"]} solid ${Colour.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Font["body-xs-regular"]}
        }
    }
`;

export const Hover = styled.div`
    ${Font["body-xs-regular"]}
    background-color: ${Colour["bg-hover"]};
    border: none;
    border-radius: ${Radius.sm};
    color: ${Colour["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`;

export const InputSelectWrapper = styled.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`;
