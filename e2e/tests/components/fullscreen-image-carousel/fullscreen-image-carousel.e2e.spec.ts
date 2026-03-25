import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "fullscreen-image-carousel";

    public readonly locators: {
        modal: Locator;
        slideItem: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            modal: page.getByTestId("image-carousel-modal"),
            slideItem: page.getByTestId("slide-item").first(),
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
            await story.init("loading-and-error-states");
        });

        test("Placeholder (image error state)", async ({ story }) => {
            await test.step("Modal is visible", async () => {
                await expect(story.locators.modal).toBeVisible();
            });

            await test.step("Placeholder renders in slide", async () => {
                await expect(story.locators.slideItem).toBeVisible();

                await compareScreenshot(story, "placeholder", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading-and-error-states", { mode: "dark" });
        });

        test("Placeholder (dark mode)", async ({ story }) => {
            await test.step("Modal is visible", async () => {
                await expect(story.locators.modal).toBeVisible();
            });

            await test.step("Placeholder renders with dark mode colours", async () => {
                await expect(story.locators.slideItem).toBeVisible();

                await compareScreenshot(story, "placeholder-dark", {
                    fullscreen: true,
                });
            });
        });
    });
});
