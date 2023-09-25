import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text";
import { MediaQuery } from "../media";

// =============================================================================
// STYLE TYPES
// =============================================================================

interface CountdownStyleProps {
    $isFixed: boolean;
    $opacity: boolean;
    $warn: boolean;
    $pinned: boolean;
    $top: number;
    $left: number;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
    width: 100%;
`;

export const Countdown = styled.div<CountdownStyleProps>`
    ${TextStyleHelper.getTextStyle("H4", "semibold")}
    display: inline-flex;
    align-items: center;
    opacity: ${(props) => (props.$opacity ? 0 : 1)};
    position: ${(props) => (props.$isFixed ? "fixed" : "relative")};
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: ${Color.Primary};
    border: 1px solid ${Color.Primary};

    ${MediaQuery.MaxWidth.mobileL} {
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

    ${(props) => {
        const { $top, $left, $warn } = props;
        if (props.$pinned) {
            return css`
                top: ${$top}px;
                left: ${$left}px;
                box-shadow: 0px 0px 4px 1px
                    ${$warn ? Color.Brand[2] : Color.Accent.Light[2]};

                ${MediaQuery.MaxWidth.mobileL} {
                    left: 0;
                    right: 0;
                    border-radius: 0;
                    border-left: none;
                    border-right: none;
                }
            `;
        }
    }}
`;

export const TimeLeft = styled.div`
    ${TextStyleHelper.getTextStyle("H4", "bold")}
    display: inline-block;
    margin-left: 0.5rem;
    margin-right: 1.75rem;

    ${MediaQuery.MaxWidth.mobileL} {
        margin-right: 3rem;
    }
`;

export const Time = styled.div`
    margin-left: auto;
`;
