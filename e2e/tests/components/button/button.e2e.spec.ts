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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-variants");
        });

        test("Danger variants (desktop)", async ({ story }) => {
            await compareScreenshot(story, "danger-variants");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-variants", { size: "mobile" });
        });

        test("Danger variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "danger-variants-mobile");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-variants", { mode: "dark" });
        });

        test("Danger variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "danger-variants-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading");
        });

        test("Loading state (desktop)", async ({ story }) => {
            await compareScreenshot(story, "loading");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading", { mode: "dark" });
        });

        test("Loading state (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "loading-dark");
        });
    });
});
