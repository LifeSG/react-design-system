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
    width: 100%;
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


         p {
                ${TextStyleHelper.getTextStyle("XSmall", "light")}
                margin-left: 34px;
                font-size: 14px;
                line-height: 18px;   
            }
            
         strong {
            ${TextStyleHelper.getTextStyle("Body", "semibold")}
            color:  ${textColor};
            margin-left: 5px;
          }  

          svg {
            color: ${iconColor};
            font-size: 24px;
            margin-right: 5px;
            margin-bottom: -7px;
        }
        
        :focus,
        :active {
            background: transparent;
        }`;
    }}
`;

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    display: inline-block;
    width: 100%;
    // padding-top: 2px;
    // margin-top: 4px;

    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
`;

export const StyledIconButton = styled(IconButton)<StyleProps>`
    background: transparent;
    margin-right: -1.7rem;
    margin-top: -1.2rem;
    padding-left: 3rem;
    height: 20px;

    ${(props) => {
        let iconColor: string;
        switch (props.$type) {
            case "success":
                iconColor = Color.Validation.Green.Icon(props);
                break;
            case "error":
                iconColor = Color.Validation.Red.Icon(props);
                break;
            case "warning":
                iconColor = Color.Validation.Orange.Icon(props);
                break;
            case "info":
                iconColor = Color.Validation.Blue.Icon(props);
                break;
            default:
                iconColor = Color.Validation.DarkMode.Icon(props);
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
