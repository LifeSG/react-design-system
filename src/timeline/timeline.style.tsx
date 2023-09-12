import styled, { css } from "styled-components";
import { TickCircleFillIcon } from "@lifesg/react-icons";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text } from "../text";
import { TimelineStatusProps, Variant } from "./types";

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
    overflow: hidden;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 4px;
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
                    svg {
                        display: block;
                    }
                `;
        }
    }}
`;

export const TickCircleIcon = styled(TickCircleFillIcon)`
    display: none;
    width: 100%;
    height: 100%;
    transform: scale(1.2);

    path {
        fill: ${Color.Validation.Green.Icon};
    }
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

// default is 2-8-2 on desktop
export const TimelineItem = styled.div`
    display: flex;

    :first-of-type ${CircleIndicator} {
        margin-top: 0;
    }
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
