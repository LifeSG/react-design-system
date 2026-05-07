import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "histogram-slider";

    public readonly locators: {
        internal: {
            slider: (index: number) => Locator;
            thumb: (index: number) => Locator;
        };
        default: Locator;
        disabled: Locator;
        readonly: Locator;
        rangeLabels: Locator;
        interaction: Locator;
        focusTargetBefore: Locator;
        empty: Locator;
        emptyView: Locator;
        minValue: Locator;
        maxValue: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                slider: (index: number) => page.getByRole("slider").nth(index),
                thumb: (index: number) =>
                    page.getByTestId(`slider-thumb-${index}`),
            },
            default: page.getByTestId("histogram-slider-default"),
            disabled: page.getByTestId("histogram-slider-disabled"),
            readonly: page.getByTestId("histogram-slider-readonly"),
            rangeLabels: page.getByTestId("histogram-slider-range-labels"),
            interaction: page.getByTestId("histogram-slider-interaction"),
            focusTargetBefore: page.getByTestId("focus-target-before"),
            empty: page.getByTestId("histogram-slider-empty"),
            emptyView: page.getByTestId("empty-view"),
            minValue: page.getByTestId("histogram-slider-min-value"),
            maxValue: page.getByTestId("histogram-slider-max-value"),
        };
    }

    async getSliderValue(index: number) {
        const thumb = this.locators.internal.thumb(index);
        const value = await thumb.getAttribute("aria-valuenow");
        if (value === null) {
            throw new Error(`Slider at index ${index} does not have a value`);
        }
        return parseInt(value);
    }

    async getSliderDelta(locator: Locator, range: number) {
        const slider = await locator.boundingBox();
        return slider?.width ? slider.width / range : 0;
    }

    async dragSlider(index: number, deltaX: number) {
        const thumb = this.locators.internal.thumb(index);
        const boundingBox = await thumb.boundingBox();
        if (!boundingBox) {
            throw new Error(
                `Slider at index ${index} does not have a bounding box`
            );
        }
        await thumb.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(boundingBox.x + deltaX, boundingBox.y);
        await this.page.mouse.up();
    }

    async hasRangeDescription(locator: Locator) {
        const sliders = locator.getByRole("slider");
        for (const slider of await sliders.all()) {
            await expect(slider).toHaveAccessibleDescription(
                /\d+% of results available in the range you specified\./
            );
        }
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("HistogramSlider", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { size: "mobile" });
        });

        test("All variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("Bar colour states", async ({ story }) => {
            await test.step("Default — unselected and selected bars", async () => {
                await compareScreenshot(story, "bars-default", {
                    locator: story.locators.default,
                });

                await expect(story.locators.default).toMatchAriaSnapshot(`
                    - group:
                        - text: Use left and right arrow keys to adjust the slider. 68% of results available in the range you specified.Minimum value
                        - slider "Minimum value": "2"
                        - text: 68% of results available in the range you specified.Maximum value
                        - slider "Maximum value": "4"
                `);

                await story.hasRangeDescription(story.locators.default);
                await story.hasRangeDescription(story.locators.rangeLabels);
            });

            await test.step("Disabled — all bars use disabled colour", async () => {
                await compareScreenshot(story, "bars-disabled", {
                    locator: story.locators.disabled,
                });

                await expect(story.locators.disabled).toMatchAriaSnapshot(`
                    - group [disabled]:
                        - text: 68% of results available in the range you specified.Minimum value
                        - slider "Minimum value" [disabled]: "2"
                        - text: 68% of results available in the range you specified.Maximum value
                        - slider "Maximum value" [disabled]: "4"
                `);

                await story.hasRangeDescription(story.locators.disabled);
                await story.hasRangeDescription(story.locators.rangeLabels);
            });

            await test.step("ReadOnly — all bars use disabled colour", async () => {
                await compareScreenshot(story, "bars-readonly", {
                    locator: story.locators.readonly,
                });

                await expect(story.locators.readonly).toMatchAriaSnapshot(`
                    - group:
                        - text: 68% of results available in the range you specified.Minimum value
                        - slider "Minimum value": "2"
                        - text: 68% of results available in the range you specified.Maximum value
                        - slider "Maximum value": "4"
                `);

                await story.hasRangeDescription(story.locators.readonly);
                await story.hasRangeDescription(story.locators.rangeLabels);
            });
        });
    });

    // =========================================================================
    // FOCUS STATE
    // =========================================================================
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("Focus state", async ({ story }) => {
            await story.locators.default.getByRole("slider").first().focus();
            await compareScreenshot(story, "focus-default", {
                locator: story.locators.default,
            });
        });
    });

    // =========================================================================
    // MOUSE INTERACTION
    // =========================================================================
    test.describe("Mouse interaction", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("interaction");
        });

        test("Drag min thumb updates selection", async ({ story }) => {
            const step = await story.getSliderDelta(
                story.locators.interaction,
                5
            );
            expect(await story.getSliderValue(0)).toEqual(2);

            await test.step("Drag min thumb left by one step", async () => {
                await story.dragSlider(0, -step);
                expect(await story.getSliderValue(0)).toEqual(1);
                await expect(story.locators.minValue).toHaveText("1");
            });

            await test.step("Drag min thumb right by one step", async () => {
                await story.dragSlider(0, step);
                expect(await story.getSliderValue(0)).toEqual(2);
                await expect(story.locators.minValue).toHaveText("2");
            });
        });

        test("Drag max thumb updates selection", async ({ story }) => {
            const step = await story.getSliderDelta(
                story.locators.interaction,
                5
            );
            expect(await story.getSliderValue(1)).toEqual(4);

            await test.step("Drag max thumb right by one step", async () => {
                await story.dragSlider(1, step);
                expect(await story.getSliderValue(1)).toEqual(5);
                await expect(story.locators.maxValue).toHaveText("5");
            });

            await test.step("Drag max thumb left by one step", async () => {
                await story.dragSlider(1, -step);
                expect(await story.getSliderValue(1)).toEqual(4);
                await expect(story.locators.maxValue).toHaveText("4");
            });
        });

        test("Bars update highlight after drag", async ({ story }) => {
            const step = await story.getSliderDelta(
                story.locators.interaction,
                5
            );

            await test.step("Initial bar state with value [2, 4]", async () => {
                await compareScreenshot(story, "bars-interaction-initial", {
                    locator: story.locators.interaction,
                });
            });

            await test.step("After dragging min thumb to 1", async () => {
                await story.dragSlider(0, -step);
                await compareScreenshot(story, "bars-interaction-after-drag", {
                    locator: story.locators.interaction,
                });
            });
        });
    });

    // =========================================================================
    // KEYBOARD NAVIGATION
    // =========================================================================
    test.describe("Keyboard navigation", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("interaction");
            await story.locators.focusTargetBefore.focus();
        });

        test("Tab to focus thumbs", async ({ story }) => {
            await test.step("Tab focuses the min thumb", async () => {
                await story.page.keyboard.press("Tab");
                await expect(story.locators.internal.slider(0)).toBeFocused();
            });

            await test.step("Tab moves focus to the max thumb", async () => {
                await story.page.keyboard.press("Tab");
                await expect(story.locators.internal.slider(1)).toBeFocused();
            });
        });

        test("Min thumb keyboard adjustment", async ({ story }) => {
            expect(await story.getSliderValue(0)).toEqual(2);

            await story.page.keyboard.press("Tab");

            await test.step("ArrowLeft decreases min value by one step", async () => {
                await story.page.keyboard.press("ArrowLeft");
                expect(await story.getSliderValue(0)).toEqual(1);
                await expect(story.locators.minValue).toHaveText("1");
            });

            await test.step("ArrowRight increases min value by one step", async () => {
                await story.page.keyboard.press("ArrowRight");
                expect(await story.getSliderValue(0)).toEqual(2);
                await expect(story.locators.minValue).toHaveText("2");
            });

            await test.step("Home sets min value to minimum", async () => {
                await story.page.keyboard.press("Home");
                expect(await story.getSliderValue(0)).toEqual(1);
            });

            await test.step("End sets min value to max allowed", async () => {
                await story.page.keyboard.press("End");
                expect(await story.getSliderValue(0)).toEqual(3);
            });
        });

        test("Max thumb keyboard adjustment", async ({ story }) => {
            expect(await story.getSliderValue(1)).toEqual(4);

            await story.page.keyboard.press("Tab");
            await story.page.keyboard.press("Tab");

            await test.step("ArrowRight increases max value by one step", async () => {
                await story.page.keyboard.press("ArrowRight");
                expect(await story.getSliderValue(1)).toEqual(5);
                await expect(story.locators.maxValue).toHaveText("5");
            });

            await test.step("ArrowLeft decreases max value by one step", async () => {
                await story.page.keyboard.press("ArrowLeft");
                expect(await story.getSliderValue(1)).toEqual(4);
                await expect(story.locators.maxValue).toHaveText("4");
            });
        });
    });

    // =========================================================================
    // EMPTY VIEW
    // =========================================================================
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("empty-view");
        });

        test("Empty view", async ({ story }) => {
            await compareScreenshot(story, "mount");
            await expect(story.locators.emptyView).toBeVisible();
            await expect(story.locators.emptyView).toHaveText(
                "No data available"
            );
        });
    });
});
