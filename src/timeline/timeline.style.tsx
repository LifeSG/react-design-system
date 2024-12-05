import styled, { css } from "styled-components";
import { Variant } from "./types";
import { Pill } from "../pill";
import { Colour, MediaQuery } from "../theme";
import { Typography } from "../typography";

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
                    background-color: ${Colour["icon-primary-subtle"]};
                `;
            case "upcoming-active":
                return css`
                    border: 4px solid ${Colour["icon-subtle"]};
                `;
            case "upcoming-inactive":
                return css`
                    border: 4px solid ${Colour["icon-success"]};
                `;
            case "completed":
                return css`
                    background-color: ${Colour["icon-primary-subtle"]};
                    svg {
                        color: ${Colour["icon-primary-subtle"]};
                    }
                `;
            case "error":
                return css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Colour["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `;
            case "disabled":
                return css`
                    background-color: ${Colour["icon-disabled-subtle"]};
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
                    background-color: ${Colour["icon-subtle"]};
                `;
            case "upcoming-inactive":
            case "disabled":
                return css`
                    background-color: ${Colour["icon-disabled-subtle"]};
                `;
            case "completed":
                return css`
                    background-color: ${Colour["icon-primary-subtle"]};
                `;
            case "error":
                return css`
                    margin-left: -0.15rem;
                    background-color: ${Colour["icon-error"]};
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

    ${MediaQuery.MaxWidth.xl} {
        grid-column: span 8;
    }

    ${MediaQuery.MaxWidth.sm} {
        grid-column: span 4;
    }
`;

export const TimelineTitle = styled(Typography.HeaderSM)`
    margin-bottom: 1rem;

    ${MediaQuery.MaxWidth.md} {
        margin-bottom: 1.5rem;
    }
`;

export const TimelineItemTitle = styled(Typography.HeaderXS)`
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

export const TimelinePills = styled(Typography.HeaderSM)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`;

export const TimelinePill = styled(Pill)`
    padding: 0.125rem 0.5rem;
`;
