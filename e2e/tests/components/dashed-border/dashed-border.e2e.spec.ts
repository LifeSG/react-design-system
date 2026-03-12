import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "dashed-border";

    public readonly locators: {
        enabled: Locator;
        disabled: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            enabled: page.getByTestId("dashed-border-enabled"),
            disabled: page.getByTestId("dashed-border-disabled"),
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
                await expect(story.locators.enabled).toBeVisible();
                await expect(story.locators.disabled).toBeVisible();

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
                await expect(story.locators.enabled).toBeVisible();
                await expect(story.locators.disabled).toBeVisible();

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
                await expect(story.locators.enabled).toBeVisible();
                await expect(story.locators.disabled).toBeVisible();

                await compareScreenshot(story, "mount");
            });
        });
    });
});
