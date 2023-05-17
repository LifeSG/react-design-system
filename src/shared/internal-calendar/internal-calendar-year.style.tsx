import styled, { css } from "styled-components";
import { Color } from "../../color";
import { TextStyleHelper } from "../../text/helper";
import { Text } from "../../text/text";
import { YearVariant } from "./internal-calendar-year";
import { CalendarType } from "./types";

interface StyleProps {
    $disabled: boolean;
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
                    gap: 0.5rem 2rem;
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
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        // if (props.$disabled) {
        //     return css`
        //         cursor: not-allowed;

        //         :hover {
        //             box-shadow: unset;
        //             border: unset;
        //         }
        //     `;
        // }

        switch (props.$variant) {
            case "current-year":
                return css`
                    background: ${Color.Accent.Light[6](props)};
                `;
            case "selected-year":
                return css`
                    background: ${Color.Accent.Light[5](props)};
                    border: 1px solid ${Color.Primary(props)};
                `;
            case "other-decade":
            case "default":
                break;
        }
    }};
`;

export const CellLabel = styled(Text.H5)<StyleProps>`
    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[4]};
            `;
        }

        switch (props.$variant) {
            case "current-year":
                return css`
                    color: ${Color.Neutral[3](props)};
                `;
            case "selected-year":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    color: ${Color.Primary(props)};
                `;
            case "other-decade":
                return css`
                    color: ${Color.Neutral[4](props)};
                `;
            case "default":
                break;
        }
    }}
`;
