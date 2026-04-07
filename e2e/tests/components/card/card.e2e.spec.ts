import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "card";

    public readonly locators: {
        customContentCard: Locator;
        customButton: Locator;
        customCount: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            customContentCard: page.getByTestId("card-custom-content"),
            customButton: page.getByTestId("card-custom-button"),
            customCount: page.getByTestId("card-custom-count"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Card", () => {
    test("Default content renders (light mode)", async ({ story }) => {
        await story.init("basic");

        await test.step("Component mounts", async () => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test("Default content renders (dark mode)", async ({ story }) => {
            await story.init("basic", { mode: "dark" });

            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test("Custom content interaction works", async ({ story }) => {
            await story.init("custom-content");

            await test.step("Component mounts", async () => {
                await expect(story.locators.customContentCard).toBeVisible();
                await expect(story.locators.customCount).toHaveText("Count: 0");

                await compareScreenshot(story, "mount");
            });

            await test.step("Child interaction works inside card", async () => {
                await story.locators.customButton.click();

                await expect(story.locators.customCount).toHaveText("Count: 1");

                await compareScreenshot(story, "after-click");
            });
        });
    });
});
