import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { ToastType } from "./types";
import { IconButton } from "../icon-button";
import { Text } from "../text";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { ValidationElementAttributes } from "src/color";
import { PropertiesToType } from "src/util/utility-types";
import { animated } from "react-spring";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
interface StyleProps {
    $type: ToastType;
}
interface StylePropsWrapper {
    $type: ToastType;
    $autoDismiss: boolean;
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
export const Wrapper = styled(animated.div)<StylePropsWrapper>`
    display: flex;
    position: relative;
    padding: 1rem;
    border-radius: 0.5rem;
    line-height: 0;
    z-index: 10;

    ${(props) => {
        return css`
            background: ${getValidationColorAttributes(props)["Background"]};
            border: 1px solid ${getValidationColorAttributes(props)["Border"]};
            color: ${getValidationColorAttributes(props)["Text"]};
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${getValidationColorAttributes(props)["Icon"]};
            }
        `;
    }};
`;

export const IconContainer = styled.div`
    max-width: 3rem;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 0 0.5rem;
    flex-grow: 2;
`;

export const Title = styled(Text.H4)<StyleProps>`
    display: flex;

    ${(props) => {
        return css`
            color: ${getValidationColorAttributes(props)["Text"]};
        `;
    }}
`;

export const Description = styled.div<StyleProps>`
    display: flex;

    ${(props) => {
        return css`
            p {
                color: ${getValidationColorAttributes(props)["Text"]};
            }
        `;
    }}
`;

export const CloseIcon = styled(CrossIcon)`
    margin-top: 0.2rem;
`;

export const DismissButton = styled(IconButton)<StyleProps>`
    padding: 0;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;

    ${(props) => {
        return css`
            svg {
                color: ${getValidationColorAttributes(props)["Text"]};
            }
        `;
    }};
`;
