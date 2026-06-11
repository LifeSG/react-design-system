import { css } from "@linaria/core";
import type { ReactRenderer } from "@storybook/react-webpack5";
import clsx from "clsx";
import type { CSSProperties } from "react";
import { Typography } from "src/typography";
import type { DecoratorFunction } from "storybook/internal/types";

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
            <div
                data-testid="full-width-story"
                className={clsx(fullWidthContainer, {
                    [fullWidthContainerFixedWidth]: viewMode === "story",
                    [fullWidthContainerHorizontalPadding]: !options?.fullWidth,
                    [fullWidthContainerVerticalPadding]: !options?.fullHeight,
                })}
            >
                <Story />
            </div>
        );
    };

const fullWidthContainer = css`
    width: 100%;
`;

const fullWidthContainerFixedWidth = css`
    width: 100vw;
`;

const fullWidthContainerHorizontalPadding = css`
    padding-left: 16px;
    padding-right: 16px;
`;

const fullWidthContainerVerticalPadding = css`
    padding-top: 16px;
    padding-bottom: 16px;
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
                <div
                    data-testid="story"
                    className={clsx(docsViewModeContainer, {
                        [docsViewModeContainerMaxWidth]: options?.maxWidth,
                    })}
                >
                    <Story />
                </div>
            );
        }

        return (
            <div
                data-testid="story"
                className={clsx(storyViewModeContainer, {
                    [storyViewModeContainerMaxWidth]: options?.maxWidth,
                })}
            >
                <Story />
            </div>
        );
    };

const storyViewModeContainer = css`
    min-width: min(500px, calc(100vw - 32px));
    width: fit-content;
    margin: auto;
`;

const storyViewModeContainerMaxWidth = css`
    max-width: 500px;
`;

const docsViewModeContainer = css`
    min-width: 500px;
    width: fit-content;
    margin: auto;

    @media screen and (max-width: 600px) {
        min-width: unset;
        width: 100%;
    }
`;

const docsViewModeContainerMaxWidth = css`
    max-width: 500px;
`;

// -----------------------------------------------------------------------------
// Row story
// -----------------------------------------------------------------------------

/** For displaying component variants in a column */
export const RowDecorator: () => DecoratorFunction<ReactRenderer> = () =>
    function Row(Story) {
        return (
            <div className={rowStoryContainer} data-testid="row-story">
                <Story />
            </div>
        );
    };

const rowStoryContainer = css`
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
            <div className={stackStoryContainer} data-testid="stack-story">
                <Story />
            </div>
        );
    };

const stackStoryContainer = css`
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
            <div
                data-testid="grid-story"
                className={clsx(gridStoryContainer, {
                    [gridStoryContainerWithRowHeaders]: !!rowHeaders,
                    [gridStoryContainerWithoutRowHeaders]: !rowHeaders,
                })}
                style={{ "--grid-columns": columns } as CSSProperties}
            >
                {rowHeaders && columnHeaders ? (
                    <div className={gridStoryColumnHeader} />
                ) : null}
                {columnHeaders
                    ? columnHeaders.map((header) => (
                          <Typography.BodySM
                              key={header}
                              className={gridStoryColumnHeader}
                              weight="semibold"
                          >
                              {header}
                          </Typography.BodySM>
                      ))
                    : null}
                {rowHeaders?.map((header) => (
                    <Typography.BodySM
                        key={header}
                        className={gridStoryRowHeader}
                        weight="semibold"
                    >
                        {header}
                    </Typography.BodySM>
                ))}
                <Story />
            </div>
        );
    };

const gridStoryContainer = css`
    display: grid;
    grid-auto-flow: dense;
    gap: 1rem;
    align-items: center;
    justify-items: center;
`;

const gridStoryContainerWithRowHeaders = css`
    grid-template-columns: auto repeat(
            var(--grid-columns),
            minmax(min-content, 1fr)
        );
`;

const gridStoryContainerWithoutRowHeaders = css`
    grid-template-columns: repeat(
        var(--grid-columns),
        minmax(min-content, 1fr)
    );
`;

const gridStoryColumnHeader = css`
    text-align: center;
`;

const gridStoryRowHeader = css`
    justify-self: end;
    text-align: right;
    grid-column: 1 / 2;
`;
