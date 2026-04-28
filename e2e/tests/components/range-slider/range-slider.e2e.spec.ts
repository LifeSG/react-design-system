import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "range-slider";

    public readonly locators: {
        default: Locator;
        disabled: Locator;
        readonly: Locator;
        error: Locator;
        prefilled: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            default: page.getByTestId("range-slider-default"),
            disabled: page.getByTestId("range-slider-disabled"),
            readonly: page.getByTestId("range-slider-readonly"),
            error: page.getByTestId("range-slider-error"),
            prefilled: page.getByTestId("range-slider-prefilled"),
        };
    }

    async hasDescription(locator: Locator, description: string) {
        const sliders = locator.getByRole("slider");
        await expect(sliders.first()).toBeVisible();

        for (const slider of await sliders.all()) {
            await expect(slider).toHaveAccessibleDescription(description);
        }
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
});
