import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "dashed-border";

    public readonly locators: {
        defaultEnabled: Locator;
        defaultDisabled: Locator;
        customEnabled: Locator;
        customDisabled: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            defaultEnabled: page.getByTestId("dashed-border-default-enabled"),
            defaultDisabled: page.getByTestId("dashed-border-default-disabled"),
            customEnabled: page.getByTestId("dashed-border-custom-enabled"),
            customDisabled: page.getByTestId("dashed-border-custom-disabled"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("DashedBorder", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.defaultEnabled).toBeVisible();
                await expect(story.locators.defaultDisabled).toBeVisible();
                await expect(story.locators.customEnabled).toBeVisible();
                await expect(story.locators.customDisabled).toBeVisible();

                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { size: "mobile" });
        });

        test("Basic (mobile)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.defaultEnabled).toBeVisible();
                await expect(story.locators.defaultDisabled).toBeVisible();
                await expect(story.locators.customEnabled).toBeVisible();
                await expect(story.locators.customDisabled).toBeVisible();

                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Basic (dark mode)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.defaultEnabled).toBeVisible();
                await expect(story.locators.defaultDisabled).toBeVisible();
                await expect(story.locators.customEnabled).toBeVisible();
                await expect(story.locators.customDisabled).toBeVisible();

                await compareScreenshot(story, "mount");
            });
        });
    });
});
