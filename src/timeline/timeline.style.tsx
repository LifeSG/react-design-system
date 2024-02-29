import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text } from "../text";
import { Variant } from "./types";
import { Pill } from "../pill";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

interface TimelineWrapperStyleProps {
    $startCol?: number | undefined;
    $colSpan?: number | undefined;
}

interface VariantStyleProps {
    $variant: Variant;
}

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export const CircleIndicator = styled.div<VariantStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.5rem;
    border-radius: 50%;

    ${(props) => {
        switch (props.$variant) {
            case "current":
                return css`
                    background-color: ${Color.Accent.Light[1]};
                `;
            case "upcoming-active":
                return css`
                    border: 4px solid ${Color.Accent.Light[1]};
                `;
            case "upcoming-inactive":
                return css`
                    border: 4px solid ${Color.Neutral[4]};
                `;
            case "completed":
                return css`
                    background-color: ${Color.Validation.Green.Icon};
                    svg {
                        color: ${Color.Neutral[8]};
                    }
                `;
            case "error":
                return css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: 0.3rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Color.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `;
        }
    }}
`;

export const LineIndicator = styled.div<VariantStyleProps>`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;

    ${(props) => {
        switch (props.$variant) {
            case "current":
            case "upcoming-active":
                return css`
                    background-color: ${Color.Accent.Light[1]};
                `;
            case "upcoming-inactive":
                return css`
                    background-color: ${Color.Neutral[4]};
                `;
            case "completed":
                return css`
                    background-color: ${Color.Validation.Green.Icon};
                `;
            case "error":
                return css`
                    margin-left: -0.15rem;
                    background-color: ${Color.Validation.Red.Icon};
                `;
        }
    }}
`;

export const TimelineIndicators = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
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

export const TimelineItemTitle = styled(Text.H4)`
    margin-top: 0.375rem;
    margin-bottom: 0.5rem;
`;

// default is 2-8-2 on desktop
export const TimelineItem = styled.div`
    display: flex;

    :first-of-type ${CircleIndicator} {
        margin-top: 0;
    }

    :first-of-type ${TimelineItemTitle} {
        margin-top: -2px;
    }
`;

export const TimelineItemContent = styled.div`
    margin-bottom: 2rem;
    width: 100%;
`;

export const TimelinePills = styled(Text.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`;

export const TimelinePill = styled(Pill)`
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;
`;
