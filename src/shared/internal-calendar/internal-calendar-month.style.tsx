import styled, { css } from "styled-components";
import { V2_Color } from "../../v2_color";
import { V2_TextStyleHelper } from "../../v2_text/helper";
import { V2_Text } from "../../v2_text/text";
import { MonthVariant } from "./internal-calendar-month";
import { CalendarType } from "./types";

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
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${(props) => {
        if (props.$interactive) {
            return css`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${V2_Color.Shadow.Accent};
                    border: 1px solid ${V2_Color.Accent.Light[1]};
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
            case "current-month":
                return css`
                    background-color: ${V2_Color.Accent.Light[6](props)};
                `;
            case "selected-month":
                return css`
                    background-color: ${V2_Color.Accent.Light[5](props)};
                    border: 1px solid ${V2_Color.Primary(props)};
                `;
            case "default":
                break;
        }
    }}
`;

export const CellLabel = styled(V2_Text.H5)<StyleProps>`
    ${(props) => {
        if (props.$disabledDisplay) {
            return css`
                color: ${V2_Color.Neutral[4]};
            `;
        }

        switch (props.$variant) {
            case "current-month":
                return css`
                    color: ${V2_Color.Neutral[3](props)};
                `;
            case "selected-month":
                return css`
                    ${V2_TextStyleHelper.getTextStyle("H5", "semibold")}
                    color: ${V2_Color.Primary(props)};
                `;
            case "default":
                break;
        }
    }}
`;
