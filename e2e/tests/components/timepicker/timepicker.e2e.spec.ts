import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "timepicker";

    public readonly locators: {
        defaultSelector: Locator;
        formDefaultSelector: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            defaultSelector: page.getByTestId("timepicker-default"),
            formDefaultSelector: page.getByTestId(
                "form-timepicker-default-base"
            ),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Timepicker", () => {
    test.describe("Standalone Timepicker", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("timepicker-variants-24hr");
        });

        test("Standalone mount", async ({ story }) => {
            await compareScreenshot(story, "mount");

            // Focus states
            await story.page
                .getByTestId("timepicker-default")
                .getByTestId("timepicker-selector")
                .focus();
            await compareScreenshot(story, "default-focus");

            await story.page
                .getByTestId("timepicker-readonly")
                .getByTestId("timepicker-selector")
                .focus();
            await compareScreenshot(story, "readonly-focus");

            await story.page
                .getByTestId("timepicker-error")
                .getByTestId("timepicker-selector")
                .focus();
            await compareScreenshot(story, "error-focus");
        });

        test("Standalone timepicker dropdown", async ({ story }) => {
            await test.step("Open dropdown", async () => {
                await story.locators.defaultSelector.click();
                await expect(story.locators.defaultSelector)
                    .toMatchAriaSnapshot(`
                    - combobox "HH:MM" [expanded=true]
                `);
            });

            await compareScreenshot(story, "dropdown-open", {
                fullscreen: true,
            });
        });
    });

    test.describe("Form Timepicker", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-timepicker-variants-24hr");
            });

            test("All form variants mount", async ({ story }) => {
                await compareScreenshot(story, "form-mount");
            });

            test("Form timepicker dropdown", async ({ story }) => {
                await test.step("Open dropdown", async () => {
                    await story.locators.formDefaultSelector.click();
                    await expect(story.locators.formDefaultSelector)
                        .toMatchAriaSnapshot(`
                        - combobox "Default State" [expanded=true]
                    `);
                });

                await compareScreenshot(story, "form-dropdown-open");
            });
        });
    });

    test.describe("Timepicker 12hr format", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("timepicker-12hr-default");
        });

        test("12hr default mount", async ({ story }) => {
            await compareScreenshot(story, "12hr-mount");
        });
    });

    test.describe("Form Timepicker Grid", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-timepicker-grid");
            });

            test("Form timepicker length variants mount", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Timepicker With Values", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("timepicker-with-values");
        });

        test("Standalone with values", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Form Timepicker With Values", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-timepicker-with-values");
        });

        test("Form with values", async ({ story }) => {
            await compareScreenshot(story, "form-with-values-mount");
        });
    });
});
