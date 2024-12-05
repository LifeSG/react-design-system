import styled, { css } from "styled-components";
import { Border, Colour, Font } from "../../theme";
import { V2_Color } from "../../v2_color";
import { YearVariant } from "./internal-calendar-year";
import { CalendarType } from "./types";
import { Typography } from "../../typography";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $disabledDisplay: boolean;
    $interactive: boolean;
    $variant: YearVariant;
}

interface WrapperStyleProps {
    $type: CalendarType;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<WrapperStyleProps>`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${(props) => {
        switch (props.$type) {
            case "standalone":
                return css`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;
            case "input":
                return css`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `;
        }
    }}
`;

export const YearCell = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${(props) => {
        if (props.$interactive) {
            return css`
                cursor: pointer;
                &:hover {
                    background: ${Colour["bg-hover"]};
                    color: ${Colour["text-hover"]};
                }
            `;
        }

        if (props.$disabledDisplay) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}

    ${(props) => {
        switch (props.$variant) {
            case "selected-year":
                return css`
                    background: ${Colour["bg-selected"](props)};
                    border: ${Border["width-010"]} ${Border.solid}
                        ${Colour["border-selected"](props)};

                    :hover {
                        background-color: ${Colour["bg-selected-hover"](props)};
                        border: ${Border["width-010"]} ${Border.solid}
                            ${Colour["border-selected-hover"](props)};
                        & > ${CellLabel} {
                            color: ${Colour["text-selected-hover"]};
                        }
                    }
                `;
            case "other-decade":
            case "default":
                break;
        }
    }};
`;

export const CellLabel = styled(Typography.BodyMD)<StyleProps>`
    ${(props) => {
        if (props.$disabledDisplay) {
            return css`
                color: ${Colour["text-disabled-subtlest"]};
            `;
        }

        switch (props.$variant) {
            case "current-year":
                return css`
                    ${Font["body-md-semibold"]}
                    color: ${Colour["text-primary"](props)};
                `;
            case "selected-year":
                return css`
                    ${Font["body-md-semibold"]}
                    color: ${Colour["text-selected"](props)};
                `;
            case "other-decade":
                return css`
                    color: ${V2_Color.Neutral[4](props)};
                `;
            case "default":
                break;
        }
    }}
`;
