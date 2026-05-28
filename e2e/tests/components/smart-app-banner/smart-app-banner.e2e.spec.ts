import { test as base, expect, Locator, Page } from "@playwright/test";
import {
    AbstractStoryPage,
    compareScreenshot,
    waitForAnimationEnd,
} from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "smart-app-banner";

    public readonly locators: {
        proceedContainer: Locator;
        dismissContainer: Locator;
        dismissButton: Locator;
        ctaButton: Locator;
        focusStart: Locator;
        dismissCount: Locator;
        clickCount: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            proceedContainer: page.getByTestId(
                "smart-app-banner-proceed-container"
            ),
            dismissContainer: page.getByTestId(
                "smart-app-banner-dismiss-container"
            ),
            dismissButton: page.getByRole("button", { name: "Close banner" }),
            ctaButton: page.getByRole("button", { name: "Get" }),
            focusStart: page.getByTestId("focus-start"),
            dismissCount: page.getByTestId("dismiss-count"),
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

test.describe("SmartAppBanner", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default appearance", async ({ story }) => {
            await compareScreenshot(story, "mount", { fullscreen: true });

            await expect(story.locators.dismissButton).toMatchAriaSnapshot(`
                - button "Close banner"
            `);
            await expect(story.locators.ctaButton).toMatchAriaSnapshot(`
                - button "Get"
            `);
            await expect(
                story.page.getByTestId("smart-app-banner-star-rating")
            ).toBeVisible();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default appearance (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "xs" });
        });

        test("Default appearance (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-message");
        });

        test("No message", async ({ story }) => {
            await compareScreenshot(story, "mount", { fullscreen: true });
        });
    });

    test.describe("Star rating", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("star-rating-full");
            });

            test("All stars filled", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });

                await expect(
                    story.page.getByTestId("smart-app-banner-star-rating")
                ).toBeVisible();
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("star-rating-partial");
            });

            test("Partial stars with half star", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });

                await expect(
                    story.page.getByTestId("smart-app-banner-star-rating")
                ).toBeVisible();
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("star-rating-zero");
            });

            test("Zero stars (all empty)", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });

                await expect(
                    story.page.getByTestId("smart-app-banner-star-rating")
                ).toBeVisible();
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("star-rating-none");
            });

            test("No rating shown for invalid value", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });

                await expect(
                    story.page.getByTestId("smart-app-banner-star-rating")
                ).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hidden");
        });

        test("Banner not rendered when show is false", async ({ story }) => {
            await expect(story.locators.proceedContainer).not.toBeVisible();
            await expect(story.locators.dismissContainer).not.toBeVisible();
        });
    });
});
