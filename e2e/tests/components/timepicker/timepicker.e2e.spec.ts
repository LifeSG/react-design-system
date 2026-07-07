import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "timepicker";

    public readonly locators: {
        defaultSelector: Locator;
        disabledSelector: Locator;
        readonlySelector: Locator;
        errorSelector: Locator;
        formDefaultSelector: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            defaultSelector: page.getByTestId("timepicker-default"),
            disabledSelector: page.getByTestId("timepicker-disabled"),
            readonlySelector: page.getByTestId("timepicker-readonly"),
            errorSelector: page.getByTestId("timepicker-error"),
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
    test.describe("Standalone", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("timepicker-variants-24hr");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus", async ({ story }) => {
            await test.step("Default state", async () => {
                await story.locators.defaultSelector
                    .getByTestId("timepicker-selector")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.defaultSelector,
                });
            });

            await test.step("Disabled state", async () => {
                await story.locators.disabledSelector
                    .getByTestId("timepicker-selector")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.disabledSelector,
                });
            });

            await test.step("Readonly state", async () => {
                await story.locators.readonlySelector
                    .getByTestId("timepicker-selector")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.readonlySelector,
                });
            });

            await test.step("Error state", async () => {
                await story.locators.errorSelector
                    .getByTestId("timepicker-selector")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.errorSelector,
                });
            });
        });

        test("Dropdown", async ({ story }) => {
            await test.step("Open dropdown", async () => {
                await story.locators.defaultSelector.click();
                await expect(story.locators.defaultSelector)
                    .toMatchAriaSnapshot(`
                    - combobox "HH:MM" [expanded=true]
                `);
            });

            await compareScreenshot(story, "open", {
                fullscreen: true,
            });

            await test.step("Fill value", async () => {
                await story.page.getByTestId("hour-increment-button").click();
                await story.page.getByTestId("minute-increment-button").click();
            });

            await compareScreenshot(story, "selected", {
                fullscreen: true,
            });
        });
    });

    test.describe("Standalone dark", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("timepicker-variants-24hr", { mode: "dark" });
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus", async ({ story }) => {
            await test.step("Default state", async () => {
                await story.locators.defaultSelector
                    .getByTestId("timepicker-selector")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.defaultSelector,
                });
            });

            await test.step("Disabled state", async () => {
                await story.locators.disabledSelector
                    .getByTestId("timepicker-selector")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.disabledSelector,
                });
            });

            await test.step("Readonly state", async () => {
                await story.locators.readonlySelector
                    .getByTestId("timepicker-selector")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.readonlySelector,
                });
            });

            await test.step("Error state", async () => {
                await story.locators.errorSelector
                    .getByTestId("timepicker-selector")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.errorSelector,
                });
            });
        });

        test("Dropdown", async ({ story }) => {
            await test.step("Open dropdown", async () => {
                await story.locators.defaultSelector.click();
                await expect(story.locators.defaultSelector)
                    .toMatchAriaSnapshot(`
                    - combobox "HH:MM" [expanded=true]
                `);
            });

            await compareScreenshot(story, "open", {
                fullscreen: true,
            });

            await test.step("Fill value", async () => {
                await story.page.getByTestId("hour-increment-button").click();
                await story.page.getByTestId("minute-increment-button").click();
            });

            await compareScreenshot(story, "selected", {
                fullscreen: true,
            });
        });
    });

    test.describe("Standalone mobile", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("timepicker-variants-24hr", {
                size: "mobile",
            });
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Form", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-timepicker-variants-24hr");
            });

            test("Visual", async ({ story }) => {
                await compareScreenshot(story, "form-mount");
            });

            test("Dropdown", async ({ story }) => {
                await test.step("Open dropdown", async () => {
                    await story.locators.formDefaultSelector.click();
                    await expect(story.locators.formDefaultSelector)
                        .toMatchAriaSnapshot(`
                        - combobox "Default State" [expanded=true]
                    `);
                });

                await compareScreenshot(story, "open");
            });
        });
    });

    test.describe("Form dark", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-timepicker-variants-24hr", {
                    mode: "dark",
                });
            });

            test("Visual", async ({ story }) => {
                await compareScreenshot(story, "form-mount");
            });
        });
    });

    test.describe("Form mobile", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-timepicker-variants-24hr", {
                size: "mobile",
            });
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Timepicker 12hr format", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("timepicker-12hr-variants");
        });

        test("12hr default mount", async ({ story }) => {
            await compareScreenshot(story, "12hr-mount");
        });
    });

    test.describe(() => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-timepicker-grid");
            });

            test("Grid", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("timepicker-with-values");
        });

        test("Standalone with values", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-timepicker-with-values");
        });

        test("Form with values", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
