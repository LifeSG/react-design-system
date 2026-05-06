import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-slider";

    public readonly locators: {
        internal: {
            slider: Locator;
            thumb: Locator;
            track: Locator;
        };
        default: Locator;
        disabled: Locator;
        readonly: Locator;
        error: Locator;
        interaction: Locator;
        focusTargetBefore: Locator;
        focusTargetAfter: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                slider: page.getByRole("slider"),
                thumb: page.getByTestId("slider-thumb-0"),
                track: page.getByTestId("slider-track-0"),
            },
            default: page.getByTestId("slider-default"),
            disabled: page.getByTestId("slider-disabled"),
            readonly: page.getByTestId("slider-readonly"),
            error: page.getByTestId("slider-error"),
            interaction: page.getByTestId("slider-interaction"),
            focusTargetBefore: page.getByTestId("focus-target-before"),
            focusTargetAfter: page.getByTestId("focus-target-after"),
        };
    }

    async hasDescription(locator: Locator, description: string) {
        const slider = locator.getByRole("slider");
        await expect(slider).toBeVisible();
        await expect(slider).toHaveAccessibleDescription(description);
    }

    async validateSliderValue(expectedValue: number) {
        const thumbValue = await this.locators.internal.thumb.getAttribute(
            "aria-valuenow"
        );
        if (thumbValue === null) {
            throw new Error("Slider does not have a value");
        }

        const actualThumbValue = parseInt(thumbValue);
        expect(actualThumbValue).toBe(expectedValue);

        await expect(this.locators.internal.slider).toHaveValue(
            expectedValue.toString()
        );
    }

    async getSliderDelta(locator: Locator, range: number) {
        const slider = await locator.boundingBox();
        const step = slider?.width ? slider.width / range : 0;
        return step;
    }

    async dragSlider(deltaX: number) {
        const thumb = this.locators.internal.thumb;
        const boundingBox = await thumb.boundingBox();

        if (!boundingBox) {
            throw new Error("Slider does not have a bounding box");
        }

        await thumb.hover();
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

test.describe("InputSlider", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Form.Slider variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.layout).toMatchAriaSnapshot(`
                - group "Default":
                    - slider "Default" [disabled=false]: "0"
                - group "Disabled":
                    - slider "Disabled" [disabled]: "0"
                - group "Read-only":
                    - slider "Read-only" [disabled=false]: "0"
                - group "Error":
                    - slider "Error" [disabled=false]: "0"
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
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled");
        });

        test("Form.Slider variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.layout).toMatchAriaSnapshot(`
                - group "Default":
                    - slider "Default" [disabled=false]: "50"
                - group "Disabled":
                    - slider "Disabled" [disabled]: "50"
                - group "Read-only":
                    - slider "Read-only" [disabled=false]: "50"
                - group "Error":
                    - slider "Error" [disabled=false]: "50"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", { mode: "dark" });
        });

        test("Form.Slider variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", { size: "mobile" });
        });

        test("Form.Slider variants (mobile)", async ({ story }) => {
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
            await story.init("form-variants-prefilled");
        });

        test("Focus state", async ({ story }) => {
            await story.locators.default.getByRole("slider").focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.default,
            });

            await story.locators.disabled.getByRole("slider").focus();
            await compareScreenshot(story, "disabled", {
                locator: story.locators.disabled,
            });

            await story.locators.readonly.getByRole("slider").focus();
            await compareScreenshot(story, "readonly", {
                locator: story.locators.readonly,
            });

            await story.locators.error.getByRole("slider").focus();
            await compareScreenshot(story, "error", {
                locator: story.locators.error,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", { mode: "dark" });
        });

        test("Focus state (dark mode)", async ({ story }) => {
            await story.locators.default.getByRole("slider").focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.default,
            });

            await story.locators.disabled.getByRole("slider").focus();
            await compareScreenshot(story, "disabled", {
                locator: story.locators.disabled,
            });

            await story.locators.readonly.getByRole("slider").focus();
            await compareScreenshot(story, "readonly", {
                locator: story.locators.readonly,
            });

            await story.locators.error.getByRole("slider").focus();
            await compareScreenshot(story, "error", {
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

        test("Drag slider", async ({ story }) => {
            const step = await story.getSliderDelta(
                story.locators.interaction,
                10
            );
            await story.validateSliderValue(0);

            await test.step("Drag the slider to the right for 1 step", async () => {
                await story.dragSlider(step);

                await story.validateSliderValue(1);
            });

            await test.step("Drag the slider to the right for multiple steps", async () => {
                await story.dragSlider(step * 2);

                await story.validateSliderValue(3);
            });

            await test.step("Drag the slider to the minimum", async () => {
                await story.dragSlider(-step * 10);

                await story.validateSliderValue(0);
            });

            await test.step("Drag the slider to the maximum", async () => {
                await story.dragSlider(step * 10);

                await story.validateSliderValue(10);
            });
        });
    });

    test.describe("Keyboard navigation", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("interaction");
            await story.locators.focusTargetBefore.focus();
        });

        test("Tab to focus slider", async ({ story }) => {
            await story.page.keyboard.press("Tab");
            await expect(story.locators.internal.slider).toBeFocused();
        });

        test("Keyboard controls", async ({ story }) => {
            await story.validateSliderValue(0);

            await test.step("ArrowRight increases value by one step", async () => {
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("ArrowRight");
                await story.validateSliderValue(1);
            });

            await test.step("ArrowLeft decreases value by one step", async () => {
                await story.page.keyboard.press("ArrowLeft");
                await story.validateSliderValue(0);
            });

            await test.step("End sets value to maximum", async () => {
                await story.page.keyboard.press("End");
                await story.validateSliderValue(10);
            });

            await test.step("Home sets value to minimum", async () => {
                await story.page.keyboard.press("Home");
                await story.validateSliderValue(0);
            });
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
