import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "histogram-slider";

    public readonly locators: {
        internal: {
            slider: (index: number) => Locator;
            thumb: (index: number) => Locator;
        };
        formDefault: Locator;
        formDefaultBase: Locator;
        formDisabled: Locator;
        formDisabledBase: Locator;
        formReadonly: Locator;
        formReadonlyBase: Locator;
        standaloneDefault: Locator;
        standaloneDisabled: Locator;
        standaloneReadonly: Locator;
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
            formDefault: page.getByTestId("form-histogram-slider-default"),
            formDefaultBase: page.getByTestId(
                "form-histogram-slider-default-base"
            ),
            formDisabled: page.getByTestId("form-histogram-slider-disabled"),
            formDisabledBase: page.getByTestId(
                "form-histogram-slider-disabled-base"
            ),
            formReadonly: page.getByTestId("form-histogram-slider-readonly"),
            formReadonlyBase: page.getByTestId(
                "form-histogram-slider-readonly-base"
            ),
            standaloneDefault: page.getByTestId("histogram-slider-default"),
            standaloneDisabled: page.getByTestId("histogram-slider-disabled"),
            standaloneReadonly: page.getByTestId("histogram-slider-readonly"),
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
    test.describe("Form variants", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants");
            });

            test("Form.HistogramSlider variants", async ({ story }) => {
                await compareScreenshot(story, "mount");

                await story.hasRangeDescription(story.locators.formDefault);
                await story.hasRangeDescription(story.locators.formDisabled);
                await story.hasRangeDescription(story.locators.formReadonly);

                await expect(
                    story.locators.formDefault.getByRole("slider").first()
                ).toBeEnabled();
                await expect(
                    story.locators.formDisabled.getByRole("slider").first()
                ).toBeDisabled();
                await expect(
                    story.locators.formReadonly.getByRole("slider").first()
                ).toBeEnabled();
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants", { size: "mobile" });
            });

            test("Form.HistogramSlider variants (mobile)", async ({
                story,
            }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants", { mode: "dark" });
            });

            test("Form.HistogramSlider variants (dark mode)", async ({
                story,
            }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Form variants prefilled", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants-prefilled");
            });

            test("Form.HistogramSlider variants prefilled", async ({
                story,
            }) => {
                await compareScreenshot(story, "mount");

                await story.hasRangeDescription(story.locators.formDefault);
                await story.hasRangeDescription(story.locators.formDisabled);
                await story.hasRangeDescription(story.locators.formReadonly);
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants-prefilled", { mode: "dark" });
            });

            test("Form.HistogramSlider variants prefilled (dark mode)", async ({
                story,
            }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Standalone variants", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("standalone-variants");
            });

            test("Standalone variants", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Focus states", async ({ story }) => {
                await story.locators.standaloneDefault
                    .getByRole("slider")
                    .first()
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.standaloneDefault,
                });

                await story.locators.standaloneReadonly
                    .getByRole("slider")
                    .first()
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.standaloneReadonly,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("standalone-variants", { mode: "dark" });
            });

            test("Focus states (dark mode)", async ({ story }) => {
                await story.locators.standaloneDefault
                    .getByRole("slider")
                    .first()
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.standaloneDefault,
                });

                await story.locators.standaloneReadonly
                    .getByRole("slider")
                    .first()
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.standaloneReadonly,
                });
            });
        });
    });

    test.describe("Grid layout", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Bar colour states", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled");
        });

        test("Bar colour states", async ({ story }) => {
            await test.step("Default — unselected and selected bars", async () => {
                await compareScreenshot(story, "bars-default", {
                    locator: story.locators.formDefault,
                });

                await expect(story.locators.formDefaultBase)
                    .toMatchAriaSnapshot(`
                        - group:
                            - group "Default":
                                - text: Use left and right arrow keys to adjust the slider. 68% of results available in the range you specified.Minimum value
                                - slider "Default Minimum value": "2"
                                - text: 68% of results available in the range you specified.Maximum value
                                - slider "Default Maximum value": "4"
                    `);

                await story.hasRangeDescription(story.locators.formDefault);
            });

            await test.step("Disabled — all bars use disabled colour", async () => {
                await compareScreenshot(story, "bars-disabled", {
                    locator: story.locators.formDisabled,
                });

                await expect(story.locators.formDisabledBase)
                    .toMatchAriaSnapshot(`
                        - group:
                            - group "Disabled" [disabled]:
                                - text: 68% of results available in the range you specified.Minimum value
                                - slider "Disabled Minimum value" [disabled]: "2"
                                - text: 68% of results available in the range you specified.Maximum value
                                - slider "Disabled Maximum value" [disabled]: "4"
                    `);

                await story.hasRangeDescription(story.locators.formDisabled);
            });

            await test.step("Readonly — all bars use disabled colour", async () => {
                await compareScreenshot(story, "bars-readonly", {
                    locator: story.locators.formReadonly,
                });

                await expect(story.locators.formReadonlyBase)
                    .toMatchAriaSnapshot(`
                        - group:
                            - group "Readonly":
                                - text: 68% of results available in the range you specified.Minimum value
                                - slider "Readonly Minimum value": "2"
                                - text: 68% of results available in the range you specified.Maximum value
                                - slider "Readonly Maximum value": "4"
                    `);

                await story.hasRangeDescription(story.locators.formReadonly);
            });
        });
    });

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

    test.describe("Empty view", () => {
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
