import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text";
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
    ${TextStyleHelper.getTextStyle("H4", "semibold")}
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: ${Color.Primary};
    border: 1px solid ${Color.Primary};
    background-color: ${Color.Neutral[8]};

    ${v2_MediaQuery.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${(props) => {
        if (props.$warn) {
            return css`
                color: ${Color.Validation.Red.Text};
                border: 1px solid ${Color.Validation.Red.Border};
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
                ${$warn ? Color.Validation.Red.Border : Color.Accent.Light[2]};

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
    ${TextStyleHelper.getTextStyle("H4", "bold")}
    margin-left: 0.5rem;
    margin-right: 1.5rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        margin-right: 3rem;
    }
`;

export const Timer = styled.div`
    margin-left: auto;
`;
