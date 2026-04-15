import { test as base, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "typography";

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

test.describe("Typography", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("Variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("paragraph");
        });

        test("Paragraph style", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("clamping");
        });

        test("Text clamping styles", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("links");
        });

        test("Link styles", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
