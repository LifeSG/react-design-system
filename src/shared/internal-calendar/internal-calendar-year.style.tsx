import styled, { css } from "styled-components";
import { v2_Color } from "../../v2_color";
import { V2_TextStyleHelper } from "../../v2_text/helper";
import { V2_Text } from "../../v2_text/text";
import { YearVariant } from "./internal-calendar-year";
import { CalendarType } from "./types";

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
                    box-shadow: 0px 0px 4px 1px ${v2_Color.Shadow.Accent};
                    border: 1px solid ${v2_Color.Accent.Light[1]};
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
            case "current-year":
                return css`
                    background: ${v2_Color.Accent.Light[6](props)};
                `;
            case "selected-year":
                return css`
                    background: ${v2_Color.Accent.Light[5](props)};
                    border: 1px solid ${v2_Color.Primary(props)};
                `;
            case "other-decade":
            case "default":
                break;
        }
    }};
`;

export const CellLabel = styled(V2_Text.H5)<StyleProps>`
    ${(props) => {
        if (props.$disabledDisplay) {
            return css`
                color: ${v2_Color.Neutral[4]};
            `;
        }

        switch (props.$variant) {
            case "current-year":
                return css`
                    color: ${v2_Color.Neutral[3](props)};
                `;
            case "selected-year":
                return css`
                    ${V2_TextStyleHelper.getTextStyle("H5", "semibold")}
                    color: ${v2_Color.Primary(props)};
                `;
            case "other-decade":
                return css`
                    color: ${v2_Color.Neutral[4](props)};
                `;
            case "default":
                break;
        }
    }}
`;
