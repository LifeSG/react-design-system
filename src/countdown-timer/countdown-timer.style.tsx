import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_TextStyleHelper } from "../v2_text";
import { v2_MediaQuery } from "../v2_media";

// =============================================================================
// STYLE TYPES
// =============================================================================

interface CountdownStyleProps {
    $warn: boolean;
    $visible?: boolean | undefined;
    $top?: number | undefined;
    $left?: number | undefined;
    $right?: number | undefined;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
    width: 100%;
`;

export const BaseCountdown = styled.div<CountdownStyleProps>`
    ${V2_TextStyleHelper.getTextStyle("H4", "semibold")}
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: ${V2_Color.Primary};
    border: 1px solid ${V2_Color.Primary};
    background-color: ${V2_Color.Neutral[8]};

    ${v2_MediaQuery.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${(props) => {
        if (props.$warn) {
            return css`
                color: ${V2_Color.Validation.Red.Text};
                border: 1px solid ${V2_Color.Validation.Red.Border};
            `;
        }
    }}
`;

export const Countdown = styled(BaseCountdown)`
    position: relative;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
`;

export const FixedCountdown = styled(BaseCountdown)`
    position: fixed;
    z-index: 10;

    ${(props) => {
        const { $top, $left, $right, $warn } = props;
        return css`
            /* style object will be converted to px */
            ${{ top: $top, left: $left, right: $right }}
            box-shadow: 0px 0px 4px 1px
                ${$warn
                ? V2_Color.Validation.Red.Border
                : V2_Color.Accent.Light[2]};

            ${v2_MediaQuery.MaxWidth.mobileL} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
            }
        `;
    }}
`;

export const TimeLeft = styled.div`
    ${V2_TextStyleHelper.getTextStyle("H4", "bold")}
    margin-left: 0.5rem;
    margin-right: 1.5rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        margin-right: 3rem;
    }
`;

export const Timer = styled.div`
    margin-left: auto;
`;
