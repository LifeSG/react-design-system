import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color";
import { v2_MediaQuery } from "../v2_media";
import { v2_Text } from "../v2_text";
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
    border-radius: 50%;

    ${(props) => {
        switch (props.$variant) {
            case "current":
                return css`
                    background-color: ${v2_Color.Accent.Light[1]};
                `;
            case "upcoming-active":
                return css`
                    border: 4px solid ${v2_Color.Accent.Light[1]};
                `;
            case "upcoming-inactive":
                return css`
                    border: 4px solid ${v2_Color.Neutral[4]};
                `;
            case "completed":
                return css`
                    background-color: ${v2_Color.Validation.Green.Icon};
                    svg {
                        color: ${v2_Color.Neutral[8]};
                    }
                `;
            case "error":
                return css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${v2_Color.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `;
            case "disabled":
                return css`
                    background-color: ${v2_Color.Neutral[4]};
                `;
        }
    }}
`;

export const LineIndicator = styled.div<VariantStyleProps>`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${(props) => {
        switch (props.$variant) {
            case "current":
            case "upcoming-active":
                return css`
                    background-color: ${v2_Color.Accent.Light[1]};
                `;
            case "upcoming-inactive":
            case "disabled":
                return css`
                    background-color: ${v2_Color.Neutral[4]};
                `;
            case "completed":
                return css`
                    background-color: ${v2_Color.Validation.Green.Icon};
                `;
            case "error":
                return css`
                    margin-left: -0.15rem;
                    background-color: ${v2_Color.Validation.Red.Icon};
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

    ${v2_MediaQuery.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`;

export const TimelineTitle = styled(v2_Text.H3)`
    margin-bottom: 1rem;

    ${v2_MediaQuery.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`;

export const TimelineItemTitle = styled(v2_Text.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`;

// default is 2-8-2 on desktop
export const TimelineItem = styled.div`
    display: flex;

    :last-of-type ${LineIndicator} {
        margin-bottom: 0;
    }
`;

export const TimelineItemContent = styled.div`
    margin-bottom: 2rem;
    width: 100%;
`;

export const TimelinePills = styled(v2_Text.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`;

export const TimelinePill = styled(Pill)`
    padding: 0.125rem 0.5rem;
`;
