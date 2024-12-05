import styled, { css } from "styled-components";
import { MonthVariant } from "./internal-calendar-month";
import { CalendarType } from "./types";
import { Border, Colour, Font, Radius } from "../../theme";
import { Typography } from "../../typography";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $variant: MonthVariant;
    $disabledDisplay?: boolean;
    $interactive?: boolean;
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${(props) => {
        switch (props.$type) {
            case "standalone":
                return css`
                    gap: 0.5rem 2.5rem;
                `;
            case "input":
                return css`
                    gap: 0.5rem 1rem;
                `;
        }
    }}
`;

export const MonthCell = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: ${Radius.md};
    margin: 0 0.5rem;

    ${(props) => {
        if (props.$interactive) {
            return css`
                cursor: pointer;
                &:hover {
                    background: ${Colour["bg-hover"]};
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
            case "selected-month":
                return css`
                    background-color: ${Colour["bg-selected"](props)};
                    border: 1px solid ${Colour["border-selected"](props)};

                    :hover {
                        background-color: ${Colour["bg-selected-hover"](props)};
                        border: ${Border["width-010"]} ${Border.solid}
                            ${Colour["border-selected-hover"](props)};
                        & > ${CellLabel} {
                            color: ${Colour["text-selected-hover"]};
                        }
                    }
                `;
            case "default":
                break;
        }
    }}
`;

export const CellLabel = styled(Typography.BodyMD)<StyleProps>`
    ${(props) => {
        if (props.$disabledDisplay) {
            return css`
                color: ${Colour["text-disabled-subtlest"]};
            `;
        }

        switch (props.$variant) {
            case "current-month":
                return css`
                    ${Font["body-md-semibold"]}
                    color: ${Colour["text-primary"](props)};
                `;
            case "selected-month":
                return css`
                    ${Font["body-md-semibold"]}
                    color: ${Colour["text-selected"](props)};
                `;
            case "default":
                break;
        }
    }}
`;
