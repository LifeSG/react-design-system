import styled, { css } from "styled-components";
import { TagColorType, TagType } from "./types";
import { Border, Colour, Font, MediaQuery } from "../theme";

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
    ${Font["body-xs-semibold"]}
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
            color = Colour["text-inverse"];
            switch (props.$color) {
                case "grey":
                    backgroundColor = Colour["bg-inverse-subtler"];
                    hoverBackgroundColor = Colour["bg-inverse-hover"];
                    break;
                case "green":
                    backgroundColor = Colour["bg-success-strong"];
                    hoverBackgroundColor = Colour["bg-success-strong-hover"];
                    break;
                case "yellow":
                    backgroundColor = Colour["bg-warning-strong"];
                    hoverBackgroundColor = Colour["bg-warning-strong-hover"];
                    break;
                case "red":
                    backgroundColor = Colour["bg-error-strong"];
                    hoverBackgroundColor = Colour["bg-error-strong-hover"];
                    break;
                case "blue":
                    backgroundColor = Colour["bg-info-strong"];
                    hoverBackgroundColor = Colour["bg-info-strong-hover"];
                    break;
                default:
                    backgroundColor = Colour["bg-inverse"];
                    hoverBackgroundColor = Colour["bg-inverse-hover"];
                    break;
            }
        } else {
            switch (props.$color) {
                case "grey":
                    backgroundColor = Colour["bg-strong"];
                    borderColor = Colour["border-strong"];
                    color = Colour["text-subtle"];
                    hoverBackgroundColor = Colour["bg-hover-neutral-strong"];
                    break;
                case "green":
                    backgroundColor = Colour["bg-success"];
                    borderColor = Colour["border-success"];
                    color = Colour["text-success"];
                    hoverBackgroundColor = Colour["bg-success-hover"];
                    break;
                case "yellow":
                    backgroundColor = Colour["bg-warning"];
                    borderColor = Colour["border-warning"];
                    color = Colour["text-warning"];
                    hoverBackgroundColor = Colour["bg-warning-hover"];
                    break;
                case "red":
                    backgroundColor = Colour["bg-error"];
                    borderColor = Colour["border-error"];
                    color = Colour["text-error"];
                    hoverBackgroundColor = Colour["bg-error-hover"];
                    break;
                case "blue":
                    backgroundColor = Colour["bg-info"];
                    borderColor = Colour["border-info"];
                    color = Colour["text-info"];
                    hoverBackgroundColor = Colour["bg-info-hover"];
                    break;
                default:
                    backgroundColor = Colour.bg;
                    borderColor = Colour.border;
                    color = Colour.text;
                    hoverBackgroundColor = Colour["bg-hover-neutral"];
                    break;
            }
        }
        return css`
            background: ${backgroundColor};
            border: ${Border["width-010"]} ${Border.solid} ${borderColor};
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

    ${MediaQuery.MaxWidth.lg} {
        ${({ $interactive }) => {
            if ($interactive) {
                return css`
                    ${Font["body-md-semibold"]}
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
