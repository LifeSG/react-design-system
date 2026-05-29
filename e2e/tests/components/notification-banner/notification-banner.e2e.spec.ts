import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "notification-banner";

    public readonly locators: {
        bannerNonSticky: Locator;
        bannerSticky: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            bannerNonSticky: page.getByTestId("banner-non-sticky"),
            bannerSticky: page.getByTestId("banner-sticky"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("NotificationBanner", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("all-variants");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("all-variants", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("all-variants", { size: "mobile" });
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("long-content");
        });

        test("Long content", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-content");
        });

        test("Custom content", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("text-styling");
        });

        test("Text styling", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("non-sticky");
        });

        test("Non-sticky banner scrolls out of view", async ({ story }) => {
            await test.step("Verify non-sticky banner is visible initially", async () => {
                await expect(story.locators.bannerNonSticky).toBeInViewport();
            });

            await test.step("Scroll down the page", async () => {
                await story.page.mouse.wheel(0, 100);
                await story.page.waitForTimeout(300);
            });

            await test.step("Verify non-sticky banner scrolled out of view", async () => {
                await expect(
                    story.locators.bannerNonSticky
                ).not.toBeInViewport();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sticky");
        });

        test("Sticky banner behaviour", async ({ story }) => {
            await test.step("Verify sticky banner is visible initially", async () => {
                await expect(story.locators.bannerSticky).toBeInViewport();
                await compareScreenshot(story, "mount");
            });

            await test.step("Scroll down the page", async () => {
                await story.page.mouse.wheel(0, 100);
                await story.page.waitForTimeout(300);
            });

            await test.step("Verify sticky banner remains in view", async () => {
                await expect(story.locators.bannerSticky).toBeInViewport();
                await compareScreenshot(story, "after-scroll");
            });
        });
    });
});
