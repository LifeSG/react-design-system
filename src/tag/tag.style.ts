import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { TagColorType, TagType } from "./types";
import { TextStyleHelper } from "../text";
import { MediaQuery } from "../media";

// =============================================================================
// STYLING
// =============================================================================
interface StyleProps {
    $type: TagType;
    $color: TagColorType;
    $interactive: boolean;
}

export const Wrapper = styled.div<StyleProps>`
    border-radius: 0.25rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${TextStyleHelper.getTextStyle("XSmall", "semibold")}
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
            color = Color.Neutral[8];
            boxShadow = `0px 0px 4px 1px ${Color.Neutral[4](props)}`;
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
            boxShadow = `0px 0px 4px 1px rgba(164, 164, 164, 0.70)`;
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

    ${MediaQuery.MaxWidth.tablet} {
        ${({ $interactive }) => {
            if ($interactive) {
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "semibold")};
                    padding: 0.438rem 1rem;
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
