import styled, { css } from "styled-components";
import { Color } from "../../color";
import { TextStyleHelper } from "../../text/helper";
import { Text } from "../../text/text";
import { MonthVariant } from "./internal-calendar-month";
import { CalendarType } from "./types";

interface StyleProps {
    $variant: MonthVariant;
    $disabled?: boolean;
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
                    gap: 0.5rem 2rem;
                `;
        }
    }}
`;

export const MonthCell = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5rem;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        if (props.$disabled) {
            return css`
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;
        }

        switch (props.$variant) {
            case "current-month":
                return css`
                    background-color: ${Color.Accent.Light[6](props)};
                `;
            case "selected-month":
                return css`
                    background-color: ${Color.Accent.Light[5](props)};
                    border: 1px solid ${Color.Primary(props)};
                `;
            case "default":
                break;
        }
    }}
`;

export const CellLabel = styled(Text.H5)<StyleProps>`
    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[4]};
            `;
        }

        switch (props.$variant) {
            case "current-month":
                return css`
                    color: ${Color.Neutral[3](props)};
                `;
            case "selected-month":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    color: ${Color.Primary(props)};
                `;
            case "default":
                break;
        }
    }}
`;
