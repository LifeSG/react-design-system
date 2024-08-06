import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color/color";
import { TagColorType, TagType } from "./types";
import { v2_TextStyleHelper } from "../v2_text";
import { v2_MediaQuery } from "../v2_media";

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
    ${v2_TextStyleHelper.getTextStyle("XSmall", "semibold")}
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
            color = v2_Color.Neutral[8];
            boxShadow = `0px 0px 4px 1px ${v2_Color.Neutral[4](props)}`;
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
            boxShadow = `0px 0px 4px 1px rgba(164, 164, 164, 0.70)`;
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

    ${v2_MediaQuery.MaxWidth.tablet} {
        ${({ $interactive }) => {
            if ($interactive) {
                return css`
                    ${v2_TextStyleHelper.getTextStyle("H5", "semibold")};
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
