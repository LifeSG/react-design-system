import { test as base, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { fixedTimestamp } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "uneditable-section";

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

test.describe("UneditableSection", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-layout");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-layout", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-layout", { size: "mobile" });
        });

        test("Default mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-no-background");
        });

        test("Default no background", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-no-background", { mode: "dark" });
        });

        test("Default no background (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-full-width");
        });

        test("Default full width", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-full-width", {
                size: "mobile",
            });
        });

        test("Default full width (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        const now = new Date(fixedTimestamp).getTime();

        test.beforeEach(async ({ story }) => {
            await story.page.clock.install({ time: now - 10 * 1000 });
            await story.init("loading-variant");
        });

        test("Loading variant", async ({ story }) => {
            await story.page.clock.pauseAt(now);
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        const now = new Date(fixedTimestamp).getTime();

        test.beforeEach(async ({ story }) => {
            await story.page.clock.install({ time: now - 10 * 1000 });
            await story.init("loading-variant", { mode: "dark" });
        });

        test("Loading variant (dark mode)", async ({ story }) => {
            await story.page.clock.pauseAt(now);
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error-alert-variant");
        });

        test("Error and alert variant", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error-alert-variant", { mode: "dark" });
        });

        test("Error and alert variant (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("partial-custom-sections");
        });

        test("Partial custom sections", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("full-custom-sections");
        });

        test("Full custom sections", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
