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
        thumbnailContainer: Locator;
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
            thumbnailContainer: page.getByTestId("thumbnail-container"),
            counter: page.getByTestId("carousel-counter"),
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
            await story.init("default");
            await story.page.waitForLoadState("networkidle");
        });

        test("Default", async ({ story }) => {
            await test.step("Initial render", async () => {
                await compareScreenshot(story, "mount", {
                    fullscreen: true,
                });
            });

            await test.step("Hover on current thumbnail", async () => {
                await story.locators.thumbnailItems.nth(0).hover();
                await compareScreenshot(story, "thumbnail-current-hover", {
                    locator: story.locators.thumbnailContainer,
                });
            });

            await test.step("Hover on next thumbnail", async () => {
                await story.locators.thumbnailItems.nth(1).hover();
                await compareScreenshot(story, "thumbnail-next-hover", {
                    locator: story.locators.thumbnailContainer,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
            await story.page.waitForLoadState("networkidle");
        });

        test("Default (dark mode)", async ({ story }) => {
            await test.step("Initial render", async () => {
                await compareScreenshot(story, "mount", {
                    fullscreen: true,
                });
            });

            await test.step("Hover on current thumbnail", async () => {
                await story.locators.thumbnailItems.nth(0).hover();
                await compareScreenshot(story, "thumbnail-current-hover", {
                    locator: story.locators.thumbnailContainer,
                });
            });

            await test.step("Hover on next thumbnail", async () => {
                await story.locators.thumbnailItems.nth(1).hover();
                await compareScreenshot(story, "thumbnail-next-hover", {
                    locator: story.locators.thumbnailContainer,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "mobile" });
            await story.page.waitForLoadState("networkidle");
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("configurable-carousel");
            await story.page.waitForLoadState("networkidle");
        });

        test("Configurable", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-content");
            await story.page.waitForLoadState("networkidle");
        });

        test("Custom content", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-file-data");
            await story.page.waitForLoadState("networkidle");
        });

        test("Carousel with file data", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-file-data", { mode: "dark" });
            await story.page.waitForLoadState("networkidle");
        });

        test("Carousel with file data (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("long-file-name");
            await story.page.waitForLoadState("networkidle");
        });

        test("Long file name", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });
});
