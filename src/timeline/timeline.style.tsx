import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text } from "../text";
import { TimelineStatusProps } from "./types";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

interface CircleIndicatorStyleProps {
    $filled?: boolean | undefined;
}

interface TimelineWrapperStyleProps {
    $startCol?: number | undefined;
    $colSpan?: number | undefined;
}

// =============================================================================
// STYLE INTERFACES
// =============================================================================

export const CircleIndicator = styled.div<CircleIndicatorStyleProps>`
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    border-radius: 50%;
    ${(props) => {
        if (props.$filled) {
            return css`
                border: none;
                background-color: ${Color.Accent.Light[1]};
            `;
        }

        return css`
            border: 3.2px solid ${Color.Accent.Light[1]};
            background-color: transparent;
        `;
    }}
`;

export const LineIndicator = styled.div`
    width: 0.25rem;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;
    background-color: ${Color.Accent.Light[1]};
`;

export const TimelineIndicators = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
`;

export const TimelineWrapper = styled.div<TimelineWrapperStyleProps>`
    grid-column: ${(props) => (props.$startCol ? props.$startCol : 3)} / span
        ${(props) => (props.$colSpan ? props.$colSpan : 8)};

    ${MediaQuery.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`;

export const TimelineTitle = styled(Text.H3)`
    margin-bottom: 1rem;

    ${MediaQuery.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`;

// default is 2-8-2 on desktop
export const TimelineItem = styled.div`
    display: flex;
`;

export const TimelineItemContent = styled.div`
    margin-bottom: 2rem;
    width: 100%;
`;

export const TimelineItemTitle = styled(Text.H4)`
    margin-bottom: 0.5rem;
`;

export const TimelinePills = styled(Text.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`;

export const TimelinePill = styled.div<TimelineStatusProps>`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${(props) => {
        if (props.type === "dark") {
            return css`
                background-color: ${Color.Neutral[1]};

                & > span {
                    color: ${Color.Neutral[8]};
                }
            `;
        }

        return css`
            background-color: ${Color.Neutral[8]};
            border: 1px solid ${Color.Neutral[5]};

            & > span {
                color: ${Color.Neutral[1]};
            }
        `;
    }}
`;
