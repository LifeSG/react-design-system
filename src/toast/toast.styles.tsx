import styled from "styled-components";
import { Color } from "../color/color";
import { NotificationType } from "./types";
import { IconButton } from "../icon-button";
import { TextStyleHelper } from "../text";
import { Text } from "../text";
import { CrossIcon } from "@lifesg/react-icons/cross";

interface StyleProps {
    $type: NotificationType;
}

export const Wrapper = styled.div<StyleProps>`
    width: 100%;
    padding: 16px;
    border-radius: 8px;

    ${(props) => {
        switch (props.$type) {
            case "success":
                return `
                    background: ${Color.Validation.Green.Background(props)};
                    border: 1pt solid ${Color.Validation.Green.Border(props)};
                    color: ${Color.Validation.Green.Text(props)};
                    svg {
                        font-size: 24px !important;
                        color: ${Color.Validation.Green.Icon(props)}
                    }
                `;
            case "warning":
                return `
                    background: ${Color.Validation.Orange.Background(props)};
                    border: 1pt solid ${Color.Validation.Orange.Border(props)};
                    color: ${Color.Validation.Orange.Text(props)};
                    svg {
                        font-size: 24px !important;
                        color: ${Color.Validation.Orange.Icon(props)}
                    }
                `;
            case "error":
                return `
                background: ${Color.Validation.Red.Background(props)};
                border: 1pt solid ${Color.Validation.Red.Border(props)};
                color: ${Color.Validation.Red.Text(props)};
                svg {
                    font-size: 24px !important;
                    color: ${Color.Validation.Red.Icon(props)}
                }
            `;
            case "info":
                return `
                background: ${Color.Validation.Blue.Background(props)};
                border: 1pt solid ${Color.Validation.Blue.Border(props)};
                color: ${Color.Validation.Blue.Text(props)};
                svg {
                    font-size: 24px !important;
                    color: ${Color.Validation.Blue.Icon(props)}
                }
            `;
            default:
                return `
                    background: ${Color.Validation.Green.Background(props)};
                    border: 1pt solid ${Color.Validation.Green.Border(props)};
                    color: ${Color.Validation.Green.Text(props)};
                    svg {
                        font-size: 24px !important;
                        color: ${Color.Validation.Green.Icon(props)}
                    }
                `;
        }
    }}
`;

export const Container = styled.div`
    display: flex;
`;

export const IconContainer = styled.div`
    max-width: 48px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 8px;
    flex-grow: 2;
`;

export const Title = styled(Text.H4)<StyleProps>`
    display: flex;

    ${TextStyleHelper.getTextStyle("Body", "semibold")};
    ${(props) => {
        switch (props.$type) {
            case "success":
                return `
                color: ${Color.Validation.Green.Text(props)};
                `;
            case "warning":
                return `
                color: ${Color.Validation.Orange.Text(props)};
                `;
            case "error":
                return `
                color: ${Color.Validation.Red.Text(props)};
                `;
            case "info":
                return `
                color: ${Color.Validation.Blue.Text(props)};
                `;
            default:
                return `
                color: ${Color.Validation.Green.Text(props)};
                `;
        }
    }}
`;

export const Description = styled(Text.Body)<StyleProps>`
    display: flex;
`;

export const CloseIcon = styled(CrossIcon)`
    height: 18px;
    width: 18px;
    margin-top: 8px;
`;

export const StyledIconButton = styled(IconButton)<StyleProps>`
    padding: 0;
    height: 20px;
    width: 20px;

    ${(props) => {
        let iconColor: string;
        switch (props.$type) {
            case "success":
                iconColor = Color.Validation.Green.Text(props);
                break;
            case "warning":
                iconColor = Color.Validation.Orange.Text(props);
                break;
            case "error":
                iconColor = Color.Validation.Red.Text(props);
                break;
            case "info":
                iconColor = Color.Validation.Blue.Text(props);
                break;
            default:
                iconColor = Color.Validation.Green.Text(props);
                break;
        }
        return `

        svg {
            color: ${iconColor};
        }`;
    }}
`;
