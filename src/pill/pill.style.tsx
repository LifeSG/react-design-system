import styled from "styled-components";
import { Color } from "../color/color";
import { PillColorType, PillType } from "./types";
import { TextStyleHelper } from "../text";

// =============================================================================
// STYLING
// =============================================================================
interface StyleProps {
    $type: PillType;
    $color: PillColorType;
}

export const Wrapper = styled.div<StyleProps>`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${TextStyleHelper.getTextStyle("XSmall", "semibold")}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${(props) => {
        let backgroundColor: string;
        let borderColor: string;
        let color: string;

        if (props.$type === "solid") {
            color = Color.Neutral[8](props);
            switch (props.$color) {
                case "grey":
                    backgroundColor = Color.Neutral[3](props);
                    borderColor = Color.Neutral[3](props);
                    break;
                case "green":
                    backgroundColor = Color.Validation.Green.Text(props);
                    borderColor = Color.Validation.Green.Text(props);
                    break;
                case "yellow":
                    backgroundColor = Color.Validation.Orange.Text(props);
                    borderColor = Color.Validation.Orange.Text(props);
                    break;
                case "red":
                    backgroundColor = Color.Validation.Red.Text(props);
                    borderColor = Color.Validation.Red.Text(props);
                    break;
                case "blue":
                    backgroundColor = Color.Validation.Blue.Text(props);
                    borderColor = Color.Validation.Blue.Text(props);
                    break;
                default:
                    backgroundColor = Color.Neutral[1](props);
                    borderColor = Color.Neutral[1](props);
                    break;
            }
        } else {
            switch (props.$color) {
                case "grey":
                    backgroundColor = Color.Neutral[6](props);
                    borderColor = Color.Neutral[4](props);
                    color = Color.Neutral[3](props);
                    break;
                case "green":
                    backgroundColor = Color.Validation.Green.Background(props);
                    borderColor = Color.Validation.Green.Border(props);
                    color = Color.Validation.Green.Text(props);
                    break;
                case "yellow":
                    backgroundColor = Color.Validation.Orange.Background(props);
                    borderColor = Color.Validation.Orange.Border(props);
                    color = Color.Validation.Orange.Text(props);
                    break;
                case "red":
                    backgroundColor = Color.Validation.Red.Background(props);
                    borderColor = Color.Validation.Red.Border(props);
                    color = Color.Validation.Red.Text(props);
                    break;
                case "blue":
                    backgroundColor = Color.Validation.Blue.Background(props);
                    borderColor = Color.Validation.Blue.Border(props);
                    color = Color.Validation.Blue.Text(props);
                    break;
                default:
                    backgroundColor = Color.Neutral[8](props);
                    borderColor = Color.Neutral[5](props);
                    color = Color.Neutral[1](props);
                    break;
            }
        }

        return `
			background: ${backgroundColor};
			border: 1px solid ${borderColor};
            color: ${color}
		`;
    }}
`;

export const Label = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;
