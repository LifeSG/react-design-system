import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "example";

    public readonly locators: {
        text: Locator;
        toggleButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            text: page.getByText("Hello world"),
            toggleButton: page.getByRole("button", { name: "click me" }),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Example", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.text).not.toBeVisible();
                await expect(story.locators.toggleButton).toBeVisible();

                await compareScreenshot(story, "mount");
            });

            await test.step("Text is visible after toggling the button", async () => {
                await story.locators.toggleButton.click();

                await expect(story.locators.text).toBeVisible();

                await compareScreenshot(story, "after-click");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { size: "mobile" });
        });

        test("Basic (mobile)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.text).not.toBeVisible();
                await expect(story.locators.toggleButton).toBeVisible();

                await compareScreenshot(story, "mount");
            });

            await test.step("Text is visible after toggling the button", async () => {
                await story.locators.toggleButton.click();

                await expect(story.locators.text).toBeVisible();

                await compareScreenshot(story, "after-click");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Basic (dark mode)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.text).not.toBeVisible();
                await expect(story.locators.toggleButton).toBeVisible();

                await compareScreenshot(story, "mount");
            });

            await test.step("Text is visible after toggling the button", async () => {
                await story.locators.toggleButton.click();

                await expect(story.locators.text).toBeVisible();

                await compareScreenshot(story, "after-click");
            });
        });
    });
});
