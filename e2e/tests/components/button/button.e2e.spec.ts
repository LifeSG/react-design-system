import { test as base, expect, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "button";

    constructor(page: Page) {
        super(page);
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Button", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("style-variants");
        });

        test("All style variants (desktop)", async ({ story }) => {
            await compareScreenshot(story, "style-variants");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("style-variants", { size: "mobile" });
        });

        test("All style variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "style-variants-mobile");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("style-variants", { mode: "dark" });
        });

        test("All style variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "style-variants-dark");
        });
    });
});
