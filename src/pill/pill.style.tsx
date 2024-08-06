import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color/color";
import { PillColorType, PillType } from "./types";
import { V2_TextStyleHelper } from "../v2_text";

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
    ${V2_TextStyleHelper.getTextStyle("XSmall", "semibold")}
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
            color = v2_Color.Neutral[8];
            switch (props.$color) {
                case "grey":
                    backgroundColor = v2_Color.Neutral[3];
                    borderColor = v2_Color.Neutral[3];
                    break;
                case "green":
                    backgroundColor = v2_Color.Validation.Green.Text;
                    borderColor = v2_Color.Validation.Green.Text;
                    break;
                case "yellow":
                    backgroundColor = v2_Color.Validation.Orange.Text;
                    borderColor = v2_Color.Validation.Orange.Text;
                    break;
                case "red":
                    backgroundColor = v2_Color.Validation.Red.Text;
                    borderColor = v2_Color.Validation.Red.Text;
                    break;
                case "blue":
                    backgroundColor = v2_Color.Validation.Blue.Text;
                    borderColor = v2_Color.Validation.Blue.Text;
                    break;
                default:
                    backgroundColor = v2_Color.Neutral[1];
                    borderColor = v2_Color.Neutral[1];
                    break;
            }
        } else {
            switch (props.$color) {
                case "grey":
                    backgroundColor = v2_Color.Neutral[6];
                    borderColor = v2_Color.Neutral[4];
                    color = v2_Color.Neutral[3];
                    break;
                case "green":
                    backgroundColor = v2_Color.Validation.Green.Background;
                    borderColor = v2_Color.Validation.Green.Border;
                    color = v2_Color.Validation.Green.Text;
                    break;
                case "yellow":
                    backgroundColor = v2_Color.Validation.Orange.Background;
                    borderColor = v2_Color.Validation.Orange.Border;
                    color = v2_Color.Validation.Orange.Text;
                    break;
                case "red":
                    backgroundColor = v2_Color.Validation.Red.Background;
                    borderColor = v2_Color.Validation.Red.Border;
                    color = v2_Color.Validation.Red.Text;
                    break;
                case "blue":
                    backgroundColor = v2_Color.Validation.Blue.Background;
                    borderColor = v2_Color.Validation.Blue.Border;
                    color = v2_Color.Validation.Blue.Text;
                    break;
                default:
                    backgroundColor = v2_Color.Neutral[8];
                    borderColor = v2_Color.Neutral[5];
                    color = v2_Color.Neutral[1];
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
