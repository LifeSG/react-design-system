import styled from "styled-components";
import { Color } from "../color/color";
import { TextStyleHelper } from "../text";
import { Text } from "../text";
import { NotificationType } from "./types";
import { IconButton } from "../icon-button";
import { CrossIcon } from "@lifesg/react-icons/cross";
// import { Icon } from "src/icon";

interface StyleProps {
    $type: NotificationType;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div<StyleProps>`
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    // ${TextStyleHelper.getTextStyle("XSmall", "light")}

    ${(props) => {
        let backgroundColor: string;
        let borderColor: string;
        let textColor: string;
        let iconColor: string;
        switch (props.$type) {
            case "success":
                backgroundColor = Color.Validation.Green.Background(props);
                borderColor = Color.Validation.Green.Border(props);
                textColor = Color.Validation.Green.Text(props);
                iconColor = Color.Validation.Green.Icon(props);
                break;
            case "error":
                backgroundColor = Color.Validation.Red.Background(props);
                borderColor = Color.Validation.Red.Border(props);
                textColor = Color.Validation.Red.Text(props);
                iconColor = Color.Validation.Red.Icon(props);
                break;
            case "warning":
                backgroundColor = Color.Validation.Orange.Background(props);
                borderColor = Color.Validation.Orange.Border(props);
                textColor = Color.Validation.Orange.Text(props);
                iconColor = Color.Validation.Orange.Icon(props);
                break;
            case "info":
                backgroundColor = Color.Validation.Blue.Background(props);
                borderColor = Color.Validation.Blue.Border(props);
                textColor = Color.Validation.Blue.Text(props);
                break;
            default:
                backgroundColor = Color.Validation.Green.Background(props);
                borderColor = Color.Validation.Green.Border(props);
                textColor = Color.Validation.Green.Text(props);
                iconColor = Color.Validation.Green.Icon(props);
                break;
        }

        return `
			background: ${backgroundColor};
			border: 1pt solid ${borderColor};
            color: ${textColor};

          svg {
            color: ${iconColor};
            font-size: 24px;
            margin-right: 4px;
        }

        span {
            ${TextStyleHelper.getTextStyle("Body", "regular")}
            margin-left: 30px;
            margin-top: -32px;
            margin-right: 20px;
            color: ${textColor};
        }

        message {
            display: inline-block;
            margin-top: -2px;
            margin-left: 30px;
            margin-right: 60px !important;
            margin-top: -4rem;
            color: ${textColor};
        }

        H4 {
            ${TextStyleHelper.getTextStyle("Body", "semibold")}
            margin-top: -33px;
            margin-left: 30px;
            margin-right: 8px;
            color: ${textColor};
        }

        :focus,
        :active {
            background: transparent;
        }`;
    }}
`;

export const Container = styled.div`
    display: inline-block;
    width: 100%;
    padding: 0;
`;

export const Title = styled(Text.H4)`
    ${TextStyleHelper.getTextStyle("Body", "semibold")}
`;

export const Description = styled(Text.BodySmall && Text.Body)<StyleProps>`
    display: inline-block;
    // margin-top: -6px;
    // margin-left: 30px;
    // margin-right: 60px !important;
    // margin-top: -4rem;
`;

export const CloseIcon = styled(CrossIcon)`
    height: 20px;
    width: 20px;
    margin-top: -2px;
`;

export const StyledIconButton = styled(IconButton)<StyleProps>`
    background: transparent;
    padding: 0;
    padding-top: 3px;
    margin-right: -6px;
    margin-left: 8px;
    float: right;

    ${(props) => {
        let iconColor: string;
        switch (props.$type) {
            case "success":
                iconColor = Color.Validation.Green.Text(props);
                break;
            case "error":
                iconColor = Color.Validation.Red.Text(props);
                break;
            case "warning":
                iconColor = Color.Validation.Orange.Text(props);
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
            display: block;
        }

        :focus,
        :active {
            background: transparent;

        }`;
    }}
`;
