import styled, { css } from "styled-components";
import { TagColorType, TagType } from "./types";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
} from "../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
interface StyleProps {
    $type: TagType;
    $color: TagColorType;
    $interactive: boolean;
}

export const Wrapper = styled.div<StyleProps>`
    border-radius: ${V3_Radius["sm"]};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${V3_Font["body-xs-semibold"]}
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
        let borderColor: ((props: any) => string) | undefined;
        let color: (props: any) => string;
        let hoverBackgroundColor: (props: any) => string;
        let hoverBorderColor: ((props: any) => string) | undefined;

        if (props.$type === "solid") {
            color = V3_Colour["text-inverse"];
            switch (props.$color) {
                case "grey":
                    backgroundColor = V3_Colour["bg-inverse-subtler"];
                    hoverBackgroundColor = V3_Colour["bg-inverse-hover"];
                    break;
                case "green":
                    backgroundColor = V3_Colour["bg-success-strong"];
                    hoverBackgroundColor = V3_Colour["bg-success-strong-hover"];
                    break;
                case "yellow":
                    backgroundColor = V3_Colour["bg-warning-strong"];
                    hoverBackgroundColor = V3_Colour["bg-warning-strong-hover"];
                    break;
                case "red":
                    backgroundColor = V3_Colour["bg-error-strong"];
                    hoverBackgroundColor = V3_Colour["bg-error-strong-hover"];
                    break;
                case "blue":
                    backgroundColor = V3_Colour["bg-info-strong"];
                    hoverBackgroundColor = V3_Colour["bg-info-strong-hover"];
                    break;
                case "primary":
                    backgroundColor = V3_Colour["bg-primary"];
                    hoverBackgroundColor = V3_Colour["bg-primary-hover"];
                    break;
                default:
                    backgroundColor = V3_Colour["bg-inverse"];
                    hoverBackgroundColor = V3_Colour["bg-inverse-hover"];
                    break;
            }
        } else {
            switch (props.$color) {
                case "grey":
                    backgroundColor = V3_Colour["bg-strong"];
                    borderColor = V3_Colour["border-strong"];
                    color = V3_Colour["text-subtle"];
                    hoverBackgroundColor = V3_Colour["bg-hover-neutral-strong"];
                    break;
                case "green":
                    backgroundColor = V3_Colour["bg-success"];
                    borderColor = V3_Colour["border-success"];
                    color = V3_Colour["text-success"];
                    hoverBackgroundColor = V3_Colour["bg-success-hover"];
                    break;
                case "yellow":
                    backgroundColor = V3_Colour["bg-warning"];
                    borderColor = V3_Colour["border-warning"];
                    color = V3_Colour["text-warning"];
                    hoverBackgroundColor = V3_Colour["bg-warning-hover"];
                    break;
                case "red":
                    backgroundColor = V3_Colour["bg-error"];
                    borderColor = V3_Colour["border-error"];
                    color = V3_Colour["text-error"];
                    hoverBackgroundColor = V3_Colour["bg-error-hover"];
                    break;
                case "blue":
                    backgroundColor = V3_Colour["bg-info"];
                    borderColor = V3_Colour["border-info"];
                    color = V3_Colour["text-info"];
                    hoverBackgroundColor = V3_Colour["bg-info-hover"];
                    break;
                case "primary":
                    backgroundColor = V3_Colour["bg-primary-subtlest"];
                    borderColor = V3_Colour["border-primary"];
                    color = V3_Colour["text-primary"];
                    hoverBackgroundColor = V3_Colour["bg-primary-hover"];
                    break;
                default:
                    backgroundColor = V3_Colour.bg;
                    borderColor = V3_Colour.border;
                    color = V3_Colour.text;
                    hoverBackgroundColor = V3_Colour["bg-hover-neutral"];
                    break;
            }
        }
        return css`
            background: ${backgroundColor};
            border: ${V3_Border["width-010"]} ${V3_Border.solid} ${borderColor};
            color: ${color};
            @media (hover: hover) {
                &:hover {
                    ${props.$interactive &&
                    hoverBackgroundColor &&
                    `background: ${hoverBackgroundColor(props)};`}
                    ${props.$interactive &&
                    hoverBorderColor &&
                    `border-color: ${hoverBorderColor(props)};`}
                }
            }
        `;
    }}

    ${V3_MediaQuery.MaxWidth.lg} {
        ${({ $interactive }) => {
            if ($interactive) {
                return css`
                    ${V3_Font["body-md-semibold"]}
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
