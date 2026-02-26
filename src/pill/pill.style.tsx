import styled, { css } from "styled-components";
import { V3_Border, V3_Colour, V3_Font, V3_Radius } from "../v3_theme";
import { V3_ThemeStyleProps } from "../v3_theme/types";
import { PillColorType, PillType } from "./types";

// =============================================================================
// STYLING
// =============================================================================
interface StyleProps {
    $type: PillType;
    $color: PillColorType;
}

export const Wrapper = styled.div<StyleProps>`
    border-radius: ${V3_Radius["full"]};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${V3_Font["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${(props) => {
        let backgroundColor: (props: V3_ThemeStyleProps) => string;
        let borderColor: ((props: V3_ThemeStyleProps) => string) | undefined;
        let color: (props: V3_ThemeStyleProps) => string;

        if (props.$type === "solid") {
            color = V3_Colour["text-inverse"];
            switch (props.$color) {
                case "grey":
                    backgroundColor = V3_Colour["bg-inverse-subtler"];
                    break;
                case "green":
                    backgroundColor = V3_Colour["bg-success-strong"];
                    break;
                case "yellow":
                    backgroundColor = V3_Colour["bg-warning-strong"];
                    break;
                case "red":
                    backgroundColor = V3_Colour["bg-error-strong"];
                    break;
                case "blue":
                    backgroundColor = V3_Colour["bg-info-strong"];
                    break;
                case "primary":
                    backgroundColor = V3_Colour["bg-primary"];
                    break;
                default:
                    backgroundColor = V3_Colour["bg-inverse"];
                    break;
            }
        } else {
            switch (props.$color) {
                case "grey":
                    backgroundColor = V3_Colour["bg-stronger"];
                    borderColor = V3_Colour["border-strong"];
                    color = V3_Colour["text-subtler"];
                    break;
                case "green":
                    backgroundColor = V3_Colour["bg-success"];
                    borderColor = V3_Colour["border-success"];
                    color = V3_Colour["text-success"];
                    break;
                case "yellow":
                    backgroundColor = V3_Colour["bg-warning"];
                    borderColor = V3_Colour["border-warning"];
                    color = V3_Colour["text-warning"];
                    break;
                case "red":
                    backgroundColor = V3_Colour["bg-error"];
                    borderColor = V3_Colour["border-error"];
                    color = V3_Colour["text-error"];
                    break;
                case "blue":
                    backgroundColor = V3_Colour["bg-info"];
                    borderColor = V3_Colour["border-info"];
                    color = V3_Colour["text-info"];
                    break;
                case "primary":
                    backgroundColor = V3_Colour["bg-primary-subtlest"];
                    borderColor = V3_Colour["border-primary"];
                    color = V3_Colour["text-primary"];
                    break;
                default:
                    backgroundColor = V3_Colour.bg;
                    borderColor = V3_Colour.border;
                    color = V3_Colour.text;
                    break;
            }
        }

        return css`
            background: ${backgroundColor};
            border: ${V3_Border["width-010"]} ${V3_Border.solid} ${borderColor};
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
