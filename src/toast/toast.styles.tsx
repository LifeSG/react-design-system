import { Button } from "../button";
import { animated } from "react-spring";
import { v2_ValidationElementAttributes } from "src/v2_color";
import { PropertiesToType } from "src/util/utility-types";
import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color/color";
import { v2_MediaQuery } from "../v2_media";
import { ClickableIcon } from "../shared/clickable-icon";
import { V2_Text } from "../v2_text";
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
): PropertiesToType<v2_ValidationElementAttributes, (props) => string> => {
    switch (props.$type) {
        case "success":
            return v2_Color.Validation.Green;
        case "warning":
            return v2_Color.Validation.Orange;
        case "error":
            return v2_Color.Validation.Red;
        case "info":
            return v2_Color.Validation.Blue;
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

    ${v2_MediaQuery.MaxWidth.tablet} {
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

    ${v2_MediaQuery.MaxWidth.mobileL} {
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

export const Title = styled(V2_Text.H4)<StyleProps>`
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

    ${v2_MediaQuery.MaxWidth.mobileL} {
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
            ${v2_MediaQuery.MaxWidth.mobileL} {
                align-self: center;
            }
        `;
    }};
`;
