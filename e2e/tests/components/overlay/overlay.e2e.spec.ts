import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "overlay";

    public readonly locators: {
        modalContent: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            modalContent: page.getByTestId("overlay-modal-content"),
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
});
