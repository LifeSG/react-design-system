import { Button } from "../button";
import { animated } from "react-spring";
import { ValidationElementAttributes } from "src/color";
import { PropertiesToType } from "src/util/utility-types";
import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { MediaQuery } from "../media";
import { ClickableIcon } from "../shared/clickable-icon";
import { Text } from "../text";
import { ToastType } from "./types";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
interface StyleProps {
    $type: ToastType;
    $fixed?: boolean | undefined;
}

const getValidationColorAttributes = (
    props: any
): PropertiesToType<ValidationElementAttributes, (props) => string> => {
    switch (props.$type) {
        case "success":
            return Color.Validation.Green;
        case "warning":
            return Color.Validation.Orange;
        case "error":
            return Color.Validation.Red;
        case "info":
            return Color.Validation.Blue;
        default:
            return;
    }
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

    ${MediaQuery.MaxWidth.tablet} {
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

    ${MediaQuery.MaxWidth.mobileL} {
        display: flex;
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

export const Title = styled(Text.H4)<StyleProps>`
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
    overflow-wrap: anywhere;
    margin-left: auto;
    height: auto;

    ${MediaQuery.MaxWidth.mobileL} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`;

export const DismissButton = styled(ClickableIcon)<StyleProps>`
    padding: 0.75rem;
    margin: -0.75rem;

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
            ${MediaQuery.MaxWidth.mobileL} {
                align-self: center;
            }
        `;
    }};
`;
