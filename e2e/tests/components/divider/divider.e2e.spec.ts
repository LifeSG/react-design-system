import { test as base, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "divider";
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

test.describe("Divider", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Basic (dark mode)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await compareScreenshot(story, "dark-mode-mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid layout – desktop viewport", async ({ story }) => {
            await compareScreenshot(story, "grid-layout-desktop");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout", { mode: "dark" });
        });

        test("Grid layout – desktop dark mode", async ({ story }) => {
            await compareScreenshot(story, "grid-layout-desktop-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout", { size: "mobile" });
        });

        test("Grid layout – mobile viewport", async ({ story }) => {
            await compareScreenshot(story, "grid-layout-mobile");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout", { size: "mobile", mode: "dark" });
        });

        test("Grid layout – mobile dark mode", async ({ story }) => {
            await compareScreenshot(story, "grid-layout-mobile-dark");
        });
    });
});
