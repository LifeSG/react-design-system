import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "@storybook/types";
import { MediaWidths } from "src/spec/media-spec";
import { Typography } from "src/typography";
import { V2_MediaQuery } from "src/v2_media";
import styled from "styled-components";

const MINIMUM_SIDE_PADDING = 48;
const SIDEBAR_WIDTH = 210;
const SPACER = 600;

/** @deprecated */
export const StoryContainer = styled.div`
    min-width: 500px;
    margin: auto;
    width: calc(
        ${MediaWidths.desktopM}px -
            ${MINIMUM_SIDE_PADDING + SIDEBAR_WIDTH + SPACER}px
    );

    ${V2_MediaQuery.MaxWidth.tablet} {
        min-width: 400px;
        width: calc(
            ${MediaWidths.tablet}px -
                ${MINIMUM_SIDE_PADDING + SIDEBAR_WIDTH + SPACER}px
        );
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
        min-width: 350px;
        width: calc(
            ${MediaWidths.mobileL}px - ${MINIMUM_SIDE_PADDING + SPACER}px
        );
    }

    ${V2_MediaQuery.MaxWidth.mobileM} {
        min-width: 0;
        width: calc(${MediaWidths.mobileM}px - ${MINIMUM_SIDE_PADDING}px);
    }

    ${V2_MediaQuery.MaxWidth.mobileS} {
        width: calc(${MediaWidths.mobileS}px - ${MINIMUM_SIDE_PADDING}px);
    }
`;

/** @deprecated */
export const FullWidthStoryContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
`;

/** @deprecated */
export const FlexStoryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 1.25rem;
    gap: 2rem;
`;

// =============================================================================
// STYLE INTERFACES
// =============================================================================

interface StoryStyleProps {
    $fullscreen?: boolean;
}

interface FullscreenStoryStyleProps {
    $fullWidth?: boolean;
    $fullHeight?: boolean;
    $fixedWidth?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const FullWidthContainer = styled.div<FullscreenStoryStyleProps>`
    ${(props) => props.$fixedWidth && "width: 100vw;"}
    ${(props) =>
        !props.$fullWidth && "padding-left: 16px; padding-right: 16px;"}
    ${(props) =>
        !props.$fullHeight && "padding-top: 16px; padding-bottom: 16px;"}
`;

/** For components that need to be full-screen, typically navigation elements */
export const FullWidthStoryDecorator: (options?: {
    fullWidth?: boolean;
    fullHeight?: boolean;
}) => DecoratorFunction<ReactRenderer> = (options) =>
    function StoryWrapper(Story, { viewMode, parameters }) {
        parameters.layout = "fullscreen";
        return (
            <FullWidthContainer
                $fullHeight={options?.fullHeight}
                $fullWidth={options?.fullWidth}
                $fixedWidth={viewMode === "story"}
            >
                <Story />
            </FullWidthContainer>
        );
    };

const StoryViewModeContainer = styled.div<StoryStyleProps>`
    min-width: min(500px, calc(100vw - 32px));
    width: fit-content;
    margin: auto;
    ${(props) => !props.$fullscreen && "padding: 16px;"}
`;

const DocsViewModeContainer = styled.div<StoryStyleProps>`
    min-width: 500px;
    width: fit-content;
    margin: auto;
    ${(props) => !props.$fullscreen && "padding: 16px;"}

    @media screen and (max-width: 600px) {
        min-width: unset;
        width: 100%;
    }
`;

/** For general components */
export const StoryDecorator: () => DecoratorFunction<ReactRenderer> = () =>
    function StoryWrapper(Story, { viewMode }) {
        if (viewMode === "docs") {
            return (
                <DocsViewModeContainer>
                    <Story />
                </DocsViewModeContainer>
            );
        }

        return (
            <StoryViewModeContainer>
                <Story />
            </StoryViewModeContainer>
        );
    };

const StackStoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

/** For displaying component variants in a column */
export const StackDecorator: () => DecoratorFunction<ReactRenderer> = () =>
    function Stack(Story) {
        return (
            <StackStoryContainer>
                <Story />
            </StackStoryContainer>
        );
    };

const GridStoryContainer = styled.div<{ $grid: number; $rowHeader: boolean }>`
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns:
        ${(props) => (props.$rowHeader ? "auto " : "")}
        repeat(${(props) => props.$grid}, 1fr);
    gap: 1rem;
    align-items: center;
    justify-items: center;
`;

export const GridStoryColumnHeader = styled(Typography.BodySM)`
    text-align: center;
    color: #282828;
`;

export const GridStoryRowHeader = styled(Typography.BodySM)`
    justify-self: end;
    text-align: right;
    color: #282828;

    grid-column: 1 / 2;
`;

/** For displaying component variants in a grid */
export const GridDecorator: (options: {
    columns: number;
    columnHeaders?: string[];
    rowHeaders?: string[];
}) => DecoratorFunction<ReactRenderer> = ({
    columns,
    columnHeaders,
    rowHeaders,
}) =>
    function Grid(Story) {
        return (
            <GridStoryContainer $grid={columns} $rowHeader={!!rowHeaders}>
                {rowHeaders && columnHeaders ? <GridStoryRowHeader /> : null}
                {columnHeaders
                    ? columnHeaders.map((header) => (
                          <GridStoryColumnHeader key={header} weight="semibold">
                              {header}
                          </GridStoryColumnHeader>
                      ))
                    : null}
                {rowHeaders?.map((header) => (
                    <GridStoryRowHeader key={header} weight="semibold">
                        {header}
                    </GridStoryRowHeader>
                ))}
                <Story />
            </GridStoryContainer>
        );
    };
