import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "modal";

    public readonly locators: {
        firstModalContent: Locator;
        secondModalContent: Locator;
        visualDefaultContent: Locator;
        visualCustomContent: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            firstModalContent: page.getByTestId("first-modal-content"),
            secondModalContent: page.getByTestId("second-modal-content"),
            visualDefaultContent: page.getByTestId("visual-default-content"),
            visualCustomContent: page.getByTestId("visual-custom-content"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Modal", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("stacked");
        });

        test("Stacked modals", async ({ story }) => {
            await compareScreenshot(story, "stacked", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default modal", async ({ story }) => {
            await compareScreenshot(story, "visual-default", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-content");
        });

        test("Custom content modal", async ({ story }) => {
            await compareScreenshot(story, "visual-custom-content", {
                fullscreen: true,
            });
        });
    });
});
