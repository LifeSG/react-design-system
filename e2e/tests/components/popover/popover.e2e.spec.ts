import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "popover";

    public readonly locators: {
        triggerButton: Locator;
        popover: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            triggerButton: page.getByRole("button", {
                name: "Open popover",
            }),
            popover: page.getByTestId("basic-popover-content"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Popover", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic with click", async ({ story }) => {
            await test.step("Popover is not initially visible", async () => {
                await expect(story.locators.triggerButton).toBeVisible();
                await expect(story.locators.popover).not.toBeVisible();
            });

            await test.step("Popover is shown after clicking the trigger button", async () => {
                await story.locators.triggerButton.click();

                await expect(story.locators.popover).toBeVisible();

                await compareScreenshot(story, "after-click", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Basic with click (dark mode)", async ({ story }) => {
            await test.step("Popover is not initially visible", async () => {
                await expect(story.locators.triggerButton).toBeVisible();
                await expect(story.locators.popover).not.toBeVisible();
            });

            await test.step("Popover is shown after clicking the trigger button", async () => {
                await story.locators.triggerButton.click();

                await expect(story.locators.popover).toBeVisible();

                await compareScreenshot(story, "after-click", {
                    fullscreen: true,
                });
            });
        });
    });
});
