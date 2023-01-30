import styled from "styled-components";
import { Color } from "../color/color";
import { TextStyleHelper } from "../text";
import { NotificationToast } from "./types";
import { IconButton } from "../icon-button";

interface StyleProps {
    $type: NotificationToast;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div<StyleProps>`
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    ${TextStyleHelper.getTextStyle("XSmall", "light")}

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
            case "successDark":
                backgroundColor = Color.Validation.DarkMode.Background(props);
                borderColor = Color.Validation.DarkMode.Border(props);
                textColor = Color.Validation.DarkMode.Text(props);
                iconColor = Color.Validation.Green.Icon(props);
                break;
            case "errorDark":
                backgroundColor = Color.Validation.DarkMode.Background(props);
                borderColor = Color.Validation.DarkMode.Border(props);
                textColor = Color.Validation.DarkMode.Text(props);
                iconColor = Color.Validation.Red.Border(props);
                break;
            case "warningDark":
                backgroundColor = Color.Validation.DarkMode.Background(props);
                borderColor = Color.Validation.DarkMode.Border(props);
                textColor = Color.Validation.DarkMode.Text(props);
                iconColor = Color.Validation.Orange.Icon(props);
                break;
            case "infoDark":
                backgroundColor = Color.Validation.DarkMode.Background(props);
                borderColor = Color.Validation.DarkMode.Border(props);
                textColor = Color.Validation.DarkMode.Text(props);
                iconColor = Color.Validation.Blue.Icon(props);
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

        p {
            ${TextStyleHelper.getTextStyle("Body", "regular")}
            margin-left: 30px;
            margin-top: -34px;
            margin-right: 20px;
        }
        
        :focus,
        :active {
            background: transparent;
        }`;
    }}
`;

export const Container = styled.div`
    display: flex;
    padding: 0;
`;

export const Content = styled.div`
    display: inline-block;
    width: 100%;
    padding: 0;

    ${TextStyleHelper.getTextStyle("Body", "regular")}
`;

export const Title = styled.div`
    ${TextStyleHelper.getTextStyle("Body", "semibold")}
    margin-top: -33px;
    margin-left: 30px;
    margin-bottom: 5px;
    margin-right: 8px;
`;

export const Description = styled.div`
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
    margin-top: -6px;
    margin-left: 30px;
    margin-right: 60px;
`;

export const StyledIconButton = styled(IconButton)<StyleProps>`
    background: transparent;
    padding: 0;
    padding-top: 5px;
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
            case "successDark":
            case "errorDark":
            case "warningDark":
            case "infoDark":
                iconColor = Color.Validation.DarkMode.Text(props);
                break;
            default:
                iconColor = Color.Validation.Green.Text(props);
                break;
        }
        return `

        svg {
            color: ${iconColor};
        }

        :focus,
        :active {
            background: transparent;

        }`;
    }}
`;
