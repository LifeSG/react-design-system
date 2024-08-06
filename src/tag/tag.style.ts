import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color/color";
import { TagColorType, TagType } from "./types";
import { V2_TextStyleHelper } from "../v2_text";
import { V2_MediaQuery } from "../v2_media";

// =============================================================================
// STYLING
// =============================================================================
interface StyleProps {
    $type: TagType;
    $color: TagColorType;
    $interactive: boolean;
}

export const Wrapper = styled.div<StyleProps>`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${V2_TextStyleHelper.getTextStyle("XSmall", "semibold")}
    transition: all 200ms ease;
    cursor: ${({ $interactive }) => ($interactive ? "pointer" : "default")};
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
        let boxShadow: string;

        if (props.$type === "solid") {
            color = V2_Color.Neutral[8];
            boxShadow = `0px 0px 4px 1px ${V2_Color.Neutral[4](props)}`;
            switch (props.$color) {
                case "grey":
                    backgroundColor = V2_Color.Neutral[3];
                    borderColor = V2_Color.Neutral[3];
                    break;
                case "green":
                    backgroundColor = V2_Color.Validation.Green.Text;
                    borderColor = V2_Color.Validation.Green.Text;
                    break;
                case "yellow":
                    backgroundColor = V2_Color.Validation.Orange.Text;
                    borderColor = V2_Color.Validation.Orange.Text;
                    break;
                case "red":
                    backgroundColor = V2_Color.Validation.Red.Text;
                    borderColor = V2_Color.Validation.Red.Text;
                    break;
                case "blue":
                    backgroundColor = V2_Color.Validation.Blue.Text;
                    borderColor = V2_Color.Validation.Blue.Text;
                    break;
                default:
                    backgroundColor = V2_Color.Neutral[1];
                    borderColor = V2_Color.Neutral[1];
                    break;
            }
        } else {
            boxShadow = `0px 0px 4px 1px rgba(164, 164, 164, 0.70)`;
            switch (props.$color) {
                case "grey":
                    backgroundColor = V2_Color.Neutral[6];
                    borderColor = V2_Color.Neutral[4];
                    color = V2_Color.Neutral[3];
                    break;
                case "green":
                    backgroundColor = V2_Color.Validation.Green.Background;
                    borderColor = V2_Color.Validation.Green.Border;
                    color = V2_Color.Validation.Green.Text;
                    break;
                case "yellow":
                    backgroundColor = V2_Color.Validation.Orange.Background;
                    borderColor = V2_Color.Validation.Orange.Border;
                    color = V2_Color.Validation.Orange.Text;
                    break;
                case "red":
                    backgroundColor = V2_Color.Validation.Red.Background;
                    borderColor = V2_Color.Validation.Red.Border;
                    color = V2_Color.Validation.Red.Text;
                    break;
                case "blue":
                    backgroundColor = V2_Color.Validation.Blue.Background;
                    borderColor = V2_Color.Validation.Blue.Border;
                    color = V2_Color.Validation.Blue.Text;
                    break;
                default:
                    backgroundColor = V2_Color.Neutral[8];
                    borderColor = V2_Color.Neutral[5];
                    color = V2_Color.Neutral[1];
                    boxShadow = `0px 0px 4px 1px rgba(164, 164, 164, 0.50)`;
                    break;
            }
        }
        return css`
            background: ${backgroundColor};
            border: 1px solid ${borderColor};
            color: ${color};

            @media (hover: hover) {
                &:hover {
                    box-shadow: ${props.$interactive ? boxShadow : "none"};
                }
            }
        `;
    }}

    ${V2_MediaQuery.MaxWidth.tablet} {
        ${({ $interactive }) => {
            if ($interactive) {
                return css`
                    ${V2_TextStyleHelper.getTextStyle("H5", "semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `;
            }
        }}
    }
`;

export const Label = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;
