import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "button";

    public readonly locators: {
        button: Locator;
        clickCount: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            button: page.getByTestId("e2e"),
            clickCount: page.getByTestId("click-count"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Button", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("style-variants");
        });

        test("All style variants (desktop)", async ({ story }) => {
            await compareScreenshot(story, "style-variants");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("style-variants", { size: "mobile" });
        });

        test("All style variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "style-variants-mobile");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("style-variants", { mode: "dark" });
        });

        test("All style variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "style-variants-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-variants");
        });

        test("Danger variants (desktop)", async ({ story }) => {
            await compareScreenshot(story, "danger-variants");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-variants", { size: "mobile" });
        });

        test("Danger variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "danger-variants-mobile");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-variants", { mode: "dark" });
        });

        test("Danger variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "danger-variants-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading");
        });

        test("Loading state (desktop)", async ({ story }) => {
            await compareScreenshot(story, "loading");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading", { mode: "dark" });
        });

        test("Loading state (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "loading-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled");
        });

        test("Disabled button does not fire click handler", async ({
            story,
        }) => {
            await expect(story.locators.clickCount).toHaveText(
                "Click count: 0"
            );

            await story.locators.button.click({ force: true });

            await expect(story.locators.clickCount).toHaveText(
                "Click count: 0"
            );
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("focusable-when-disabled");
        });

        test("focusableWhenDisabled button is focusable but does not fire click handler", async ({
            story,
        }) => {
            await test.step("Button can receive keyboard focus", async () => {
                await story.page.keyboard.press("Tab");
                await expect(story.locators.button).toBeFocused();
            });

            await test.step("Space does not invoke onClick", async () => {
                await expect(story.locators.clickCount).toHaveText(
                    "Click count: 0"
                );

                await story.page.keyboard.press("Space");

                await expect(story.locators.clickCount).toHaveText(
                    "Click count: 0"
                );
            });

            await test.step("Clicking does not invoke onClick", async () => {
                await expect(story.locators.clickCount).toHaveText(
                    "Click count: 0"
                );

                await story.locators.button.click({ force: true });

                await expect(story.locators.clickCount).toHaveText(
                    "Click count: 0"
                );
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("keyboard-activation");
        });

        test("Keyboard activation triggers click via Space and Enter", async ({
            story,
        }) => {
            await test.step("Button can receive keyboard focus", async () => {
                await story.page.keyboard.press("Tab");
                await expect(story.locators.button).toBeFocused();
            });

            await test.step("Space activates the button", async () => {
                await story.page.keyboard.press("Space");
                await expect(story.locators.clickCount).toHaveText(
                    "Click count: 1"
                );
            });

            await test.step("Enter activates the button", async () => {
                await story.page.keyboard.press("Enter");
                await expect(story.locators.clickCount).toHaveText(
                    "Click count: 2"
                );
            });
        });
    });
});
