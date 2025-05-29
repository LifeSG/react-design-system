import styled, { css } from "styled-components";
import { Border, Colour, Font, ThemeStyleInterpolation } from "@/theme";
import { PillColorType, PillType } from "./types";

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
    ${Font["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${(props) => {
        let backgroundColor: ThemeStyleInterpolation;
        let borderColor: ThemeStyleInterpolation | undefined;
        let color: ThemeStyleInterpolation;

        if (props.$type === "solid") {
            color = Colour["text-inverse"];
            switch (props.$color) {
                case "grey":
                    backgroundColor = Colour["bg-inverse-subtler"];
                    break;
                case "green":
                    backgroundColor = Colour["bg-success-strong"];
                    break;
                case "yellow":
                    backgroundColor = Colour["bg-warning-strong"];
                    break;
                case "red":
                    backgroundColor = Colour["bg-error-strong"];
                    break;
                case "blue":
                    backgroundColor = Colour["bg-info-strong"];
                    break;
                default:
                    backgroundColor = Colour["bg-inverse"];
                    break;
            }
        } else {
            switch (props.$color) {
                case "grey":
                    backgroundColor = Colour["bg-stronger"];
                    borderColor = Colour["border-strong"];
                    color = Colour["text-subtler"];
                    break;
                case "green":
                    backgroundColor = Colour["bg-success"];
                    borderColor = Colour["border-success"];
                    color = Colour["text-success"];
                    break;
                case "yellow":
                    backgroundColor = Colour["bg-warning"];
                    borderColor = Colour["border-warning"];
                    color = Colour["text-warning"];
                    break;
                case "red":
                    backgroundColor = Colour["bg-error"];
                    borderColor = Colour["border-error"];
                    color = Colour["text-error"];
                    break;
                case "blue":
                    backgroundColor = Colour["bg-info"];
                    borderColor = Colour["border-info"];
                    color = Colour["text-info"];
                    break;
                default:
                    backgroundColor = Colour.bg;
                    borderColor = Colour.border;
                    color = Colour.text;
                    break;
            }
        }

        return css`
            background: ${backgroundColor};
            border: ${Border["width-010"]} ${Border.solid} ${borderColor};
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
