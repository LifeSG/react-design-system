import { CrossIcon } from "@lifesg/react-icons/cross";
import { animated } from "react-spring";
import { ValidationElementAttributes } from "src/color";
import { PropertiesToType } from "src/util/utility-types";
import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { ClickableIcon } from "../shared/clickable-icon";
import { Text } from "../text";
import { ToastType } from "./types";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
interface StyleProps {
    $type: ToastType;
    $sticky?: boolean;
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
    position: ${(props) => (props.$sticky ? "fixed" : "relative")};
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    line-height: 0;
    z-index: 10;

    ${(props) => {
        return css`
            background: ${getValidationColorAttributes(props).Background};
            border: 1px solid ${getValidationColorAttributes(props).Border};
            color: ${getValidationColorAttributes(props).Text};
            svg {
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.5rem;
                color: ${getValidationColorAttributes(props).Icon};
            }
        `;
    }};
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 0 0;
    padding-right: 2rem;
    flex: 1;
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
    display: flex;

    ${(props) => {
        return css`
            p {
                color: ${getValidationColorAttributes(props).Text};
            }
        `;
    }}
`;

export const CloseIcon = styled(CrossIcon)`
    margin-top: 0.2rem;
`;

export const DismissButton = styled(ClickableIcon)<StyleProps>`
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 5px;
    margin-right: -1rem;
    height: max-content;

    ${(props) => {
        return css`
            svg {
                color: ${getValidationColorAttributes(props).Text};
                margin-right: -0.5rem !important;
            }
            :hover {
                background: transparent;
            }
        `;
    }};
`;
