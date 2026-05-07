import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-group";

    public readonly locators: {
        formCustomDefault: Locator;
        formCustomRight: Locator;
        formCustomDisabled: Locator;
        formCustomReadonly: Locator;
        formCustomError: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            formCustomDefault: page.getByTestId("form-input-group-custom-base"),
            formCustomRight: page.getByTestId(
                "form-input-group-custom-right-base"
            ),
            formCustomDisabled: page.getByTestId(
                "form-input-group-custom-disabled-base"
            ),
            formCustomReadonly: page.getByTestId(
                "form-input-group-custom-readonly-base"
            ),
            formCustomError: page.getByTestId(
                "form-input-group-custom-error-base"
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

test.describe("Input Group Custom", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-custom-variants");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus", async ({ story }) => {
            await test.step("Default input focus", async () => {
                await story.locators.formCustomDefault
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.formCustomDefault,
                });
            });

            await test.step("Disabled state focus", async () => {
                await story.locators.formCustomDisabled
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.formCustomDisabled,
                });
            });

            await test.step("Readonly state focus", async () => {
                await story.locators.formCustomReadonly
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.formCustomReadonly,
                });
            });

            await test.step("Error state focus", async () => {
                await story.locators.formCustomError
                    .getByTestId("input")
                    .focus();

                await compareScreenshot(story, "error", {
                    locator: story.locators.formCustomError,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-custom-variants", { mode: "dark" });
        });

        test("Dark mode visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Dark mode focus", async ({ story }) => {
            await test.step("Dark mode focus states", async () => {
                await story.locators.formCustomDefault
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.formCustomDefault,
                });
            });

            await test.step("Disabled state focus", async () => {
                await story.locators.formCustomDisabled
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.formCustomDisabled,
                });
            });

            await test.step("Readonly state focus", async () => {
                await story.locators.formCustomReadonly
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.formCustomReadonly,
                });
            });

            await test.step("Error state focus", async () => {
                await story.locators.formCustomError
                    .getByTestId("input")
                    .focus();

                await compareScreenshot(story, "error", {
                    locator: story.locators.formCustomError,
                });
            });
        });
    });

    test.describe(() => {
        test("Mobile", async ({ story }) => {
            await story.init("form-custom-variants", { size: "mobile" });
            await compareScreenshot(story, "mount-mobile");
        });
    });

    test.describe(() => {
        test("Prefilled", async ({ story }) => {
            await story.init("form-custom-variants-prefilled");
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test("Dark mode prefilled", async ({ story }) => {
            await story.init("form-custom-variants-prefilled", {
                mode: "dark",
            });
            await compareScreenshot(story, "mount");
        });
    });
});
