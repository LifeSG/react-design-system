import { ClockIcon } from "@lifesg/react-icons";
import styled, { css } from "styled-components";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
    V3_Shadow,
    V3_Spacing,
} from "../v3_theme";

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
    ${V3_Font["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-16"]};
    border-radius: ${V3_Radius["sm"]};
    color: ${V3_Colour["text-primary"]};
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]};
    border-color: ${V3_Colour["border-primary"]};
    background-color: ${V3_Colour["bg"]};

    ${V3_MediaQuery.MaxWidth.sm} {
        padding: ${V3_Spacing["spacing-16"]};
    }

    ${(props) => {
        if (props.$warn) {
            return css`
                color: ${V3_Colour["text-error"]};
                border-color: ${V3_Colour["border-error"]};
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

            box-shadow: ${$warn
                ? V3_Shadow["xs-error-strong"]
                : V3_Shadow["xs-focus-strong"]};

            ${V3_MediaQuery.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `;
    }}
`;

export const TimeLeft = styled.div`
    font-weight: ${V3_Font.Spec["weight-bold"]};
    margin-left: ${V3_Spacing["spacing-8"]};
    margin-right: ${V3_Spacing["spacing-24"]};

    ${V3_MediaQuery.MaxWidth.sm} {
        margin-right: ${V3_Spacing["spacing-48"]};
    }
`;

export const Timer = styled.div`
    font-weight: ${V3_Font.Spec["weight-semibold"]};
    margin-left: auto;
`;

export const TimerIcon = styled(ClockIcon)<CountdownStyleProps>`
    color: ${(props) =>
        props.$warn ? V3_Colour["icon-error"] : V3_Colour["icon-primary"]};
`;
