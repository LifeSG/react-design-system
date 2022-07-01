import styled from "styled-components";
import { Icon } from "../icon/icon";
import { Color } from "../styles/theme";
import { TextStyleHelper } from "../text";
import { Text } from "../text/text";
import { AlertBoxStyleProps } from "./types";

export const Wrapper = styled.div<AlertBoxStyleProps>`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}

    ${(props) => {
        let backgroundColor: string;
        let borderColor: string;
        switch (props.type) {
            case "error":
                backgroundColor = Color.Validation.Red.Background(props);
                borderColor = Color.Validation.Red.Border(props);
                break;
            case "success":
                backgroundColor = Color.Validation.Green.Background(props);
                borderColor = Color.Validation.Green.Border(props);
                break;
            case "warning":
                backgroundColor = Color.Validation.Orange.Background(props);
                borderColor = Color.Validation.Orange.Border(props);
                break;
            default:
                backgroundColor = Color.Validation.Green.Background(props);
                borderColor = Color.Validation.Green.Border(props);
                break;
        }

        return `
			background: ${backgroundColor};
			border-left: 2pt solid ${borderColor};
		`;
    }}
`;

export const ActionLinkText = styled(Text.Hyperlink.Small)`
    margin-bottom: 0;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
`;

export const ArrowImage = styled.img`
    margin-left: 0.25rem;
`;

export const DescriptionText = styled(Text.BodySmall)`
    display: inline-block;
`;
