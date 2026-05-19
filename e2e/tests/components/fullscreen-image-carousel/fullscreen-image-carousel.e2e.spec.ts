import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "fullscreen-image-carousel";

    public readonly locators: {
        modal: Locator;
        slideItem: Locator;
        prevBtn: Locator;
        forwardBtn: Locator;
        thumbnailItems: Locator;
        counter: Locator;
        fileInfoName: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            modal: page.getByTestId("image-carousel-modal"),
            slideItem: page.getByTestId("slide-item").first(),
            prevBtn: page.getByTestId("prev-btn"),
            forwardBtn: page.getByTestId("forward-btn"),
            thumbnailItems: page.getByTestId("thumbnail-item"),
            counter: page
                .locator('[aria-hidden="true"]')
                .filter({ hasText: /\d+\/\d+/ })
                .first(),
            fileInfoName: page.getByTestId("file-info-name"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("FullscreenImageCarousel", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error-state");
        });

        test("Placeholder (image error state)", async ({ story }) => {
            await test.step("Modal is visible", async () => {
                await expect(story.locators.modal).toBeVisible();
            });

            await test.step("Placeholder renders in slide", async () => {
                await expect(story.locators.slideItem).toBeVisible();

                await compareScreenshot(story, "mount", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error-state", { mode: "dark" });
        });

        test("Placeholder (dark mode)", async ({ story }) => {
            await expect(story.locators.slideItem).toBeVisible();

            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe("Default", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic-carousel");
            await story.page.waitForLoadState("networkidle");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });

        test("Thumbnail (current)", async ({ story }) => {
            await story.locators.thumbnailItems.nth(0).hover();
            await compareScreenshot(story, "hover", {
                fullscreen: true,
            });
        });

        test("Thumbnail (next)", async ({ story }) => {
            await story.locators.thumbnailItems.nth(1).hover();
            await compareScreenshot(story, "hover", {
                fullscreen: true,
            });
        });
    });

    test.describe("Default (dark mode)", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic-carousel", { mode: "dark" });
            await story.page.waitForLoadState("networkidle");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount-dark", {
                fullscreen: true,
            });
        });

        test("Thumbnail (current)", async ({ story }) => {
            await story.locators.thumbnailItems.nth(0).hover();
            await compareScreenshot(story, "hover", {
                fullscreen: true,
            });
        });

        test("Thumbnail (next)", async ({ story }) => {
            await story.locators.thumbnailItems.nth(1).hover();
            await compareScreenshot(story, "hover", {
                fullscreen: true,
            });
        });
    });

    test.describe("Mobile", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic-carousel", { size: "mobile" });
            await story.page.waitForLoadState("networkidle");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe("Navigation", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic-carousel");
            await story.page.waitForLoadState("networkidle");
        });

        test("Navigate by button click", async ({ story }) => {
            await story.locators.forwardBtn.click();
            await expect(story.locators.counter).toHaveText("2/4");
            await expect(story.locators.fileInfoName).toHaveText("image-2.jpg");

            await story.locators.prevBtn.click();
            await expect(story.locators.counter).toHaveText("1/4");
            await expect(story.locators.fileInfoName).toHaveText("image-1.jpg");
        });

        test("Navigate by thumbnail click", async ({ story }) => {
            await story.locators.thumbnailItems.nth(2).click();
            await expect(story.locators.counter).toHaveText("3/4");
            await expect(story.locators.fileInfoName).toHaveText("image-3.jpg");
        });

        test("Navigate by keyboard", async ({ story }) => {
            await story.page.keyboard.press("ArrowRight");
            await expect(story.locators.counter).toHaveText("2/4");
            await expect(story.locators.fileInfoName).toHaveText("image-2.jpg");

            await story.page.keyboard.press("ArrowLeft");
            await expect(story.locators.counter).toHaveText("1/4");
            await expect(story.locators.fileInfoName).toHaveText("image-1.jpg");
        });

        test("Navigate wraps around at end", async ({ story }) => {
            await story.locators.thumbnailItems.nth(3).click();
            await expect(story.locators.counter).toHaveText("4/4");

            await story.locators.forwardBtn.click();
            await expect(story.locators.counter).toHaveText("1/4");
            await expect(story.locators.fileInfoName).toHaveText("image-1.jpg");
        });

        test("Navigate wraps around at start", async ({ story }) => {
            await story.locators.prevBtn.click();
            await expect(story.locators.counter).toHaveText("4/4");
            await expect(story.locators.fileInfoName).toHaveText("image-4.jpg");
        });
    });

    test.describe("Configurable", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("configurable-carousel");
            await story.page.waitForLoadState("networkidle");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe("Long file name", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("long-file-name");
            await story.page.waitForLoadState("networkidle");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe("Custom content", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-content");
            await story.page.waitForLoadState("networkidle");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });
});
