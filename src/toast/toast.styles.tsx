import { Button } from "../button";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { ToastType } from "./types";
import { Colour } from "../theme";
import { MediaQuery } from "../theme";
import { Typography } from "../typography/typography";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
interface StyleProps {
    $type: ToastType;
    $fixed?: boolean | undefined;
}

const getValidationColorAttributes = (props: StyleProps) => {
    const type = props.$type;

    const typeMapping = {
        success: {
            Background: `bg-success`,
            Border: `border-success`,
            Text: `text-success`,
            Icon: `icon-success`,
        },
        warning: {
            Background: `bg-warning`,
            Border: `border-warning`,
            Text: `text-warning`,
            Icon: `icon-warning`,
        },
        error: {
            Background: `bg-error`,
            Border: `border-error`,
            Text: `text-error`,
            Icon: `icon-error`,
        },
        info: {
            Background: `bg-info`,
            Border: `border-info`,
            Text: `text-info`,
            Icon: `icon-info`,
        },
    };

    const selectedTypeMapping = typeMapping[type];

    return {
        Background: Colour[selectedTypeMapping.Background],
        Border: Colour[selectedTypeMapping.Border],
        Text: Colour[selectedTypeMapping.Text],
        Icon: Colour[selectedTypeMapping.Icon],
    };
};

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled(animated.div)<StyleProps>`
    display: flex;
    flex-direction: row;
    position: ${(props) => (props.$fixed ? "fixed" : "relative")};
    margin: ${(props) => (props.$fixed ? "1rem" : 0)};
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    z-index: 10;
    align-items: center;
    gap: 2rem;

    ${MediaQuery.MaxWidth.lg} {
        left: 0;
    }

    ${(props) => {
        return css`
            background: ${getValidationColorAttributes(props).Background};
            border: 1px solid ${getValidationColorAttributes(props).Border};
            color: ${getValidationColorAttributes(props).Text};
        `;
    }};
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`;

export const TextIconWrapper = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${(props) => {
        return css`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${getValidationColorAttributes(props).Icon};
            }
        `;
    }};
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled(Typography.HeaderXS)<StyleProps>`
    display: flex;

    ${(props) => {
        return css`
            color: ${getValidationColorAttributes(props).Text};
        `;
    }}
`;

export const Description = styled.div<StyleProps>`
    ${(props) => {
        return css`
            p {
                color: ${getValidationColorAttributes(props).Text};
            }
        `;
    }}
`;

export const ActionButton = styled(Button.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${MediaQuery.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`;

export const DismissButton = styled(ClickableIcon)<StyleProps>`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${(props) => {
        return css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${getValidationColorAttributes(props).Text};
            }
            :hover {
                background: transparent;
            }
            ${MediaQuery.MaxWidth.sm} {
                align-self: center;
            }
        `;
    }};
`;
