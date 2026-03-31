import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "overlay";

    public readonly locators: {
        overlayWrapper: Locator;
        modalContent: Locator;
        modalContentFirst: Locator;
        modalContentSecond: Locator;
        toggleOverlayButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            overlayWrapper: page.getByTestId("overlay-wrapper"),
            modalContent: page.getByTestId("overlay-modal-content"),
            modalContentFirst: page.getByTestId("overlay-modal-content-first"),
            modalContentSecond: page.getByTestId(
                "overlay-modal-content-second"
            ),
            toggleOverlayButton: page.getByTestId("toggle-overlay-button"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Overlay", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("blur-enabled");
        });

        test("With background blur enabled", async ({ story }) => {
            await expect(story.locators.modalContent).toBeVisible();

            await compareScreenshot(story, "blur-enabled", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("blur-disabled");
        });

        test("With background blur disabled", async ({ story }) => {
            await expect(story.locators.modalContent).toBeVisible();

            await compareScreenshot(story, "blur-disabled", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("stacked");
        });

        test("Stacked overlays with background blur disabled", async ({
            story,
        }) => {
            await expect(story.locators.modalContentFirst).toBeVisible();
            await expect(story.locators.modalContentSecond).toBeVisible();

            await compareScreenshot(story, "stacked", {
                fullscreen: true,
            });
        });
    });

    const scrollLockScenarios = [
        {
            name: "iOS",
            size: "mobile" as const,
            userAgent:
                "Mozilla/5.0 (iPhone17,3; CPU iPhone OS 18_3_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 FireKeepers/1.6.1",
        },
        {
            name: "desktop",
        },
    ];

    scrollLockScenarios.forEach(({ name, size, userAgent }) => {
        test.describe(() => {
            test.use({ userAgent });

            test.beforeEach(async ({ story }) => {
                await story.init("scroll-lock", { size });
            });

            test(`Prevents page scrolling when overlay is open (${name})`, async ({
                story,
            }) => {
                const pageHeight = await story.page.evaluate(
                    () => document.body.scrollHeight
                );

                await test.step("Scroll to end of page", async () => {
                    await story.page.mouse.wheel(0, pageHeight);
                    await story.page.waitForTimeout(500); // Wait for scroll to complete

                    await expect(
                        story.locators.toggleOverlayButton
                    ).toBeInViewport();
                });

                const beforeOpen = (await story.page.screenshot()).toString(
                    "base64"
                );

                await test.step("Open the overlay", async () => {
                    await story.locators.toggleOverlayButton.click();
                    await expect(story.locators.modalContent).toBeVisible();
                    await story.page.waitForTimeout(500); // Wait for modal animation to complete
                });

                await test.step("Verify that page cannot be scrolled while overlay is open", async () => {
                    const beforeScroll = (
                        await story.page.screenshot()
                    ).toString("base64");

                    await story.page.mouse.wheel(0, -pageHeight);
                    await story.page.waitForTimeout(500); // Wait for scroll to complete

                    const afterScroll = (
                        await story.page.screenshot()
                    ).toString("base64");
                    expect(afterScroll).toEqual(beforeScroll);
                });

                await test.step("Close the overlay", async () => {
                    await story.locators.overlayWrapper.click();
                    await expect(story.locators.modalContent).not.toBeVisible();
                    await story.page.waitForTimeout(500); // Wait for modal animation to complete

                    await expect(
                        story.locators.toggleOverlayButton
                    ).toBeInViewport();
                });

                const afterOpen = (await story.page.screenshot()).toString(
                    "base64"
                );

                await test.step("Verify that page is on original scroll position", async () => {
                    expect(afterOpen).toEqual(beforeOpen);
                });
            });
        });
    });
});
