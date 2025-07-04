import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "@storybook/types";
import { Colour } from "src/theme";
import { Typography } from "src/typography";
import styled from "styled-components";

// =============================================================================
// STYLE INTERFACES
// =============================================================================

interface StoryStyleProps {
    $maxWidth?: boolean;
}

interface FullscreenStoryStyleProps {
    $fullWidth?: boolean;
    $fullHeight?: boolean;
    $fixedWidth?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// Full width story
// -----------------------------------------------------------------------------

/** For components that need to be full-screen, typically navigation elements */
export const FullWidthStoryDecorator: (options?: {
    fullWidth?: boolean;
    fullHeight?: boolean;
}) => DecoratorFunction<ReactRenderer> = (options) =>
    function StoryWrapper(Story, { viewMode, parameters }) {
        parameters.layout = "fullscreen";
        return (
            <FullWidthContainer
                data-testid="full-width-story"
                $fullHeight={options?.fullHeight}
                $fullWidth={options?.fullWidth}
                $fixedWidth={viewMode === "story"}
            >
                <Story />
            </FullWidthContainer>
        );
    };

const FullWidthContainer = styled.div<FullscreenStoryStyleProps>`
    ${(props) => props.$fixedWidth && "width: 100vw;"}
    ${(props) =>
        !props.$fullWidth && "padding-left: 16px; padding-right: 16px;"}
    ${(props) =>
        !props.$fullHeight && "padding-top: 16px; padding-bottom: 16px;"}
`;

// -----------------------------------------------------------------------------
// Default story
// -----------------------------------------------------------------------------

/** For general components */
export const StoryDecorator: (options?: {
    maxWidth?: boolean;
}) => DecoratorFunction<ReactRenderer> = (options) =>
    function StoryWrapper(Story, { viewMode }) {
        if (viewMode === "docs") {
            return (
                <DocsViewModeContainer
                    data-testid="story"
                    $maxWidth={options?.maxWidth}
                >
                    <Story />
                </DocsViewModeContainer>
            );
        }

        return (
            <StoryViewModeContainer
                data-testid="story"
                $maxWidth={options?.maxWidth}
            >
                <Story />
            </StoryViewModeContainer>
        );
    };

const StoryViewModeContainer = styled.div<StoryStyleProps>`
    min-width: min(500px, calc(100vw - 32px));
    width: fit-content;
    ${(props) => props.$maxWidth && "max-width: 500px;"}
    margin: auto;
`;

const DocsViewModeContainer = styled.div<StoryStyleProps>`
    min-width: 500px;
    width: fit-content;
    ${(props) => props.$maxWidth && "max-width: 500px;"}
    margin: auto;

    @media screen and (max-width: 600px) {
        min-width: unset;
        width: 100%;
    }
`;

// -----------------------------------------------------------------------------
// Row story
// -----------------------------------------------------------------------------

/** For displaying component variants in a column */
export const RowDecorator: () => DecoratorFunction<ReactRenderer> = () =>
    function Row(Story) {
        return (
            <RowStoryContainer data-testid="row-story">
                <Story />
            </RowStoryContainer>
        );
    };

const RowStoryContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
`;

// -----------------------------------------------------------------------------
// Stack story
// -----------------------------------------------------------------------------

/** For displaying component variants in a column */
export const StackDecorator: () => DecoratorFunction<ReactRenderer> = () =>
    function Stack(Story) {
        return (
            <StackStoryContainer data-testid="stack-story">
                <Story />
            </StackStoryContainer>
        );
    };

const StackStoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

// -----------------------------------------------------------------------------
// Grid story
// -----------------------------------------------------------------------------

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
            <GridStoryContainer
                data-testid="grid-story"
                $grid={columns}
                $rowHeader={!!rowHeaders}
            >
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
    color: ${Colour["text"]};
`;

export const GridStoryRowHeader = styled(Typography.BodySM)`
    justify-self: end;
    text-align: right;
    color: ${Colour["text"]};

    grid-column: 1 / 2;
`;
