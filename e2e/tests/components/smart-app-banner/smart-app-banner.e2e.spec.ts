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
                story.page.getByRole("group", {
                    name: "A rating of 4.5 out of 5 stars",
                })
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
                    story.page.getByRole("group", {
                        name: "A rating of 5 out of 5 stars",
                    })
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
                    story.page.getByRole("group", {
                        name: "A rating of 3.5 out of 5 stars",
                    })
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
                    story.page.getByRole("group", {
                        name: "A rating of 0 out of 5 stars",
                    })
                ).toBeVisible();
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("star-rating-none");
            });

            test("No rating shown for invalid value", async ({ story }) => {
                await compareScreenshot(story, "mount", { fullscreen: true });

                await expect(story.page.getByRole("group")).not.toBeVisible();
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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("animated");
        });

        test("Animation applied on mount", async ({ story }) => {
            const bannerContainer =
                story.locators.proceedContainer.locator("..");

            const animationName = await bannerContainer.evaluate(
                (el) => getComputedStyle(el).animationName
            );
            expect(animationName).not.toBe("none");

            await waitForAnimationEnd(bannerContainer);
            await compareScreenshot(story, "after-animation", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("dismiss-interaction");
        });

        test("Dismiss button triggers onDismiss", async ({ story }) => {
            await expect(story.locators.dismissCount).toHaveText("0");

            await story.locators.dismissButton.click();
            await expect(story.locators.dismissCount).toHaveText("1");

            await story.locators.dismissButton.click();
            await expect(story.locators.dismissCount).toHaveText("2");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("cta-interaction");
        });

        test("CTA click triggers onClick and opens URL in new tab", async ({
            story,
        }) => {
            await expect(story.locators.clickCount).toHaveText("0");

            const popupPromise = story.page.waitForEvent("popup");
            await story.locators.ctaButton.click();
            const popup = await popupPromise;

            await expect(story.locators.clickCount).toHaveText("1");
            await expect(popup).toHaveURL("https://example.com");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("keyboard-nav");
        });

        test("Keyboard navigation", async ({ story }) => {
            await test.step("Tab from focus-start focuses CTA button", async () => {
                await story.locators.focusStart.focus();
                await story.page.keyboard.press("Tab");

                await expect(story.locators.ctaButton).toBeFocused();
            });

            await test.step("Enter on CTA button triggers onClick and opens new tab", async () => {
                await expect(story.locators.clickCount).toHaveText("0");

                const popupPromise = story.page.waitForEvent("popup");
                await story.page.keyboard.press("Enter");
                await popupPromise;

                await expect(story.locators.clickCount).toHaveText("1");
            });

            await test.step("Tab from CTA button focuses dismiss button", async () => {
                await story.page.keyboard.press("Tab");

                await expect(story.locators.dismissButton).toBeFocused();
            });

            await test.step("Enter on dismiss button triggers onDismiss", async () => {
                await expect(story.locators.dismissCount).toHaveText("0");

                await story.page.keyboard.press("Enter");

                await expect(story.locators.dismissCount).toHaveText("1");
            });
        });
    });
});
