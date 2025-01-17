import { ClockIcon } from "@lifesg/react-icons";
import styled, { css } from "styled-components";
import {
    Border,
    Colour,
    Font,
    FontSpec,
    MediaQuery,
    Radius,
    Spacing,
} from "../theme";

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
    ${Font["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    border-radius: ${Radius["sm"]};
    color: ${Colour["text-primary"]};
    border: ${Border["width-010"]} ${Border["solid"]};
    border-color: ${Colour["border-primary"]};
    background-color: ${Colour["bg"]};

    ${MediaQuery.MaxWidth.sm} {
        padding: ${Spacing["spacing-16"]};
    }

    ${(props) => {
        if (props.$warn) {
            return css`
                color: ${Colour["text-error"]};
                border-color: ${Colour["border-error"]};
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

            box-shadow: 0px 0px 4px 1px rgb(from ${$warn
                ? Colour["border-error"]
                : Colour["border-primary-subtle"]} r g b / 50%);

            ${MediaQuery.MaxWidth.sm} {
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
    font-weight: ${FontSpec["weight-bold"]};
    margin-left: ${Spacing["spacing-8"]};
    margin-right: ${Spacing["spacing-24"]};

    ${MediaQuery.MaxWidth.sm} {
        margin-right: ${Spacing["spacing-48"]};
    }
`;

export const Timer = styled.div`
    font-weight: ${FontSpec["weight-semibold"]};
    margin-left: auto;
`;

export const TimerIcon = styled(ClockIcon)<CountdownStyleProps>`
    color: ${(props) =>
        props.$warn ? Colour["icon-error"] : Colour["icon-primary"]};
`;
