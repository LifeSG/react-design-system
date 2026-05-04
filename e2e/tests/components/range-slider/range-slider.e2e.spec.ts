import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "range-slider";

    public readonly locators: {
        internal: {
            slider: (index: number) => Locator;
            thumb: (index: number) => Locator;
            track: (index: number) => Locator;
        };
        default: Locator;
        disabled: Locator;
        readonly: Locator;
        error: Locator;
        prefilled: Locator;
        interaction: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                slider: (index: number) => page.getByRole("slider").nth(index),
                thumb: (index: number) =>
                    page.getByTestId(`slider-thumb-${index}`),
                track: (index: number) =>
                    page.getByTestId(`slider-track-${index}`),
            },
            default: page.getByTestId("range-slider-default"),
            disabled: page.getByTestId("range-slider-disabled"),
            readonly: page.getByTestId("range-slider-readonly"),
            error: page.getByTestId("range-slider-error"),
            prefilled: page.getByTestId("range-slider-prefilled"),
            interaction: page.getByTestId("range-slider-interaction"),
        };
    }

    async hasDescription(locator: Locator, description: string) {
        const sliders = locator.getByRole("slider");
        await expect(sliders.first()).toBeVisible();

        for (const slider of await sliders.all()) {
            await expect(slider).toHaveAccessibleDescription(description);
        }
    }

    async getSliderValue(index: number) {
        const slider = this.locators.internal.thumb(index);
        const value = await slider.getAttribute("aria-valuenow");

        if (value === null) {
            throw new Error(`Slider at index ${index} does not have a value`);
        }

        return parseInt(value);
    }

    async getSliderDelta(locator: Locator, range: number) {
        const slider = await locator.boundingBox();
        const step = slider?.width ? slider.width / range : 0;
        return step;
    }

    async dragSlider(index: number, deltaX: number) {
        const slider = this.locators.internal.thumb(index);
        const boundingBox = await slider.boundingBox();

        if (!boundingBox) {
            throw new Error(
                `Slider at index ${index} does not have a bounding box`
            );
        }

        await slider.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(boundingBox.x + deltaX, boundingBox.y);
        await this.page.mouse.up();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("RangeSlider", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Form.RangeSlider variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.layout).toMatchAriaSnapshot(`
                - group "Default":
                    - slider "Default Minimum value slider": "0"
                    - slider "Default Maximum value slider": "1"
                - group "Disabled":
                    - slider "Disabled Minimum value slider" [disabled]: "0"
                    - slider "Disabled Maximum value slider" [disabled]: "1"
                - group "Read-only":
                    - slider "Read-only Minimum value slider": "0"
                    - slider "Read-only Maximum value slider": "1"
                - group "Error":
                    - slider "Error Minimum value slider": "0"
                    - slider "Error Maximum value slider": "1"
                - group "Pre-filled":
                    - slider "Pre-filled Minimum value slider": "3"
                    - slider "Pre-filled Maximum value slider": "6"
            `);

            await story.hasDescription(
                story.locators.default,
                "This is the subtitle Use left and right arrow keys to adjust the slider."
            );
            await story.hasDescription(
                story.locators.disabled,
                "This is the subtitle"
            );
            await story.hasDescription(
                story.locators.readonly,
                "This is the subtitle"
            );
            await story.hasDescription(
                story.locators.error,
                "Required This is the subtitle Use left and right arrow keys to adjust the slider."
            );
            await story.hasDescription(
                story.locators.prefilled,
                "This is the subtitle Use left and right arrow keys to adjust the slider."
            );
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("Form.RangeSlider variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { size: "mobile" });
        });

        test("Form.RangeSlider variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants");
        });

        test("Standalone variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Focus state", async ({ story }) => {
            await story.locators.default.getByRole("slider").first().focus();
            await compareScreenshot(story, "default-focus", {
                locator: story.locators.default,
            });

            await story.locators.disabled.getByRole("slider").first().focus();
            await compareScreenshot(story, "disabled-focus", {
                locator: story.locators.disabled,
            });

            await story.locators.readonly.getByRole("slider").first().focus();
            await compareScreenshot(story, "readonly-focus", {
                locator: story.locators.readonly,
            });

            await story.locators.error.getByRole("slider").first().focus();
            await compareScreenshot(story, "error-focus", {
                locator: story.locators.error,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("Focus state (dark mode)", async ({ story }) => {
            await story.locators.default.getByRole("slider").first().focus();
            await compareScreenshot(story, "default-focus", {
                locator: story.locators.default,
            });

            await story.locators.disabled.getByRole("slider").first().focus();
            await compareScreenshot(story, "disabled-focus", {
                locator: story.locators.disabled,
            });

            await story.locators.readonly.getByRole("slider").first().focus();
            await compareScreenshot(story, "readonly-focus", {
                locator: story.locators.readonly,
            });

            await story.locators.error.getByRole("slider").first().focus();
            await compareScreenshot(story, "error-focus", {
                locator: story.locators.error,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Mouse interaction", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("interaction");
        });

        test("Min slider", async ({ story }) => {
            const step = await story.getSliderDelta(
                story.locators.interaction,
                10
            );
            expect(await story.getSliderValue(0)).toEqual(0);

            await test.step("Drag the slider to the right for 1 step", async () => {
                await story.dragSlider(0, step);

                expect(await story.getSliderValue(0)).toEqual(1);
            });

            await test.step("Drag the slider to the right for multiple steps", async () => {
                await story.dragSlider(0, step * 2);

                expect(await story.getSliderValue(0)).toEqual(3);
            });

            await test.step("Drag the slider to the minimum", async () => {
                await story.dragSlider(0, -step * 10);

                expect(await story.getSliderValue(0)).toEqual(0);
            });

            await test.step("Drag the slider to the maximum", async () => {
                await story.dragSlider(0, step * 10);

                expect(await story.getSliderValue(0)).toEqual(7);
            });
        });

        test("Max slider", async ({ story }) => {
            const step = await story.getSliderDelta(
                story.locators.interaction,
                10
            );
            expect(await story.getSliderValue(1)).toEqual(10);

            await test.step("Drag the slider to the left for 1 step", async () => {
                await story.dragSlider(1, -step);

                expect(await story.getSliderValue(1)).toEqual(9);
            });

            await test.step("Drag the slider to the left for multiple steps", async () => {
                await story.dragSlider(1, -step * 2);

                expect(await story.getSliderValue(1)).toEqual(7);
            });

            await test.step("Drag the slider to the maximum", async () => {
                await story.dragSlider(1, step * 10);

                expect(await story.getSliderValue(1)).toEqual(10);
            });

            await test.step("Drag the slider to the minimum", async () => {
                await story.dragSlider(1, -step * 10);

                expect(await story.getSliderValue(1)).toEqual(3);
            });
        });
    });

    test.describe("Keyboard navigation", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("interaction");
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

        test("Min slider", async ({ story }) => {
            expect(await story.getSliderValue(0)).toEqual(0);

            await test.step("ArrowRight increases thumb value by one step", async () => {
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("ArrowRight");
                expect(await story.getSliderValue(0)).toEqual(1);
            });

            await test.step("ArrowLeft decreases thumb value by one step", async () => {
                await story.page.keyboard.press("ArrowLeft");
                expect(await story.getSliderValue(0)).toEqual(0);
            });

            await test.step("End sets thumb value to maximum", async () => {
                await story.page.keyboard.press("End");
                expect(await story.getSliderValue(0)).toEqual(7);
            });

            await test.step("Home sets thumb value to minimum", async () => {
                await story.page.keyboard.press("Home");
                expect(await story.getSliderValue(0)).toEqual(0);
            });
        });

        test("Max slider", async ({ story }) => {
            expect(await story.getSliderValue(1)).toEqual(10);

            await test.step("ArrowLeft decreases thumb value by one step", async () => {
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("ArrowLeft");
                expect(await story.getSliderValue(1)).toEqual(9);
            });

            await test.step("ArrowRight increases thumb value by one step", async () => {
                await story.page.keyboard.press("ArrowRight");
                expect(await story.getSliderValue(1)).toEqual(10);
            });

            await test.step("Home sets thumb value to minimum", async () => {
                await story.page.keyboard.press("Home");
                expect(await story.getSliderValue(1)).toEqual(3);
            });

            await test.step("End sets thumb value to maximum", async () => {
                await story.page.keyboard.press("End");
                expect(await story.getSliderValue(1)).toEqual(10);
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("multiple-thumbs");
        });

        test("Multiple thumbs", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.layout).toMatchAriaSnapshot(`
                - group:
                    - slider "Minimum value slider": "15"
                    - slider "Indeterminate value slider": "35"
                    - slider "Maximum value slider": "55"
                - group:
                    - slider "Custom start": "15"
                    - slider "Custom middle": "35"
                    - slider "Custom end": "55"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("labels");
        });

        test("Slider labels and indicator label", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("labels", { mode: "dark" });
        });

        test("Slider labels and indicator label (dark mode)", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
