import styled, { css } from "styled-components";
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
        let backgroundColor: (props: any) => string;
        let borderColor: (props: any) => string;
        let color: (props: any) => string;

        if (props.$type === "solid") {
            color = Color.Neutral[8];
            switch (props.$color) {
                case "grey":
                    backgroundColor = Color.Neutral[3];
                    borderColor = Color.Neutral[3];
                    break;
                case "green":
                    backgroundColor = Color.Validation.Green.Text;
                    borderColor = Color.Validation.Green.Text;
                    break;
                case "yellow":
                    backgroundColor = Color.Validation.Orange.Text;
                    borderColor = Color.Validation.Orange.Text;
                    break;
                case "red":
                    backgroundColor = Color.Validation.Red.Text;
                    borderColor = Color.Validation.Red.Text;
                    break;
                case "blue":
                    backgroundColor = Color.Validation.Blue.Text;
                    borderColor = Color.Validation.Blue.Text;
                    break;
                default:
                    backgroundColor = Color.Neutral[1];
                    borderColor = Color.Neutral[1];
                    break;
            }
        } else {
            switch (props.$color) {
                case "grey":
                    backgroundColor = Color.Neutral[6];
                    borderColor = Color.Neutral[4];
                    color = Color.Neutral[3];
                    break;
                case "green":
                    backgroundColor = Color.Validation.Green.Background;
                    borderColor = Color.Validation.Green.Border;
                    color = Color.Validation.Green.Text;
                    break;
                case "yellow":
                    backgroundColor = Color.Validation.Orange.Background;
                    borderColor = Color.Validation.Orange.Border;
                    color = Color.Validation.Orange.Text;
                    break;
                case "red":
                    backgroundColor = Color.Validation.Red.Background;
                    borderColor = Color.Validation.Red.Border;
                    color = Color.Validation.Red.Text;
                    break;
                case "blue":
                    backgroundColor = Color.Validation.Blue.Background;
                    borderColor = Color.Validation.Blue.Border;
                    color = Color.Validation.Blue.Text;
                    break;
                default:
                    backgroundColor = Color.Neutral[8];
                    borderColor = Color.Neutral[5];
                    color = Color.Neutral[1];
                    break;
            }
        }

        return css`
            background: ${backgroundColor};
            border: 1px solid ${borderColor};
            color: ${color};
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
