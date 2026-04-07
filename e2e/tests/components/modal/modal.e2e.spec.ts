import { test as base, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "modal";

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

test.describe("Modal", () => {
    test.describe("stacked modal", () => {
        test("Stacked modals", async ({ story }) => {
            await story.init("stacked");
            await compareScreenshot(story, "desktop", {
                fullscreen: true,
            });
        });

        test("Stacked modals (mobile)", async ({ story }) => {
            await story.init("stacked", { size: "mobile" });

            await compareScreenshot(story, "mobile", {
                fullscreen: true,
            });
        });
    });

    test.describe("default modal", () => {
        test("Default", async ({ story }) => {
            await story.init("default");
            await compareScreenshot(story, "desktop", {
                fullscreen: true,
            });
        });

        test("Default (mobile)", async ({ story }) => {
            await story.init("default", { size: "mobile" });
            await compareScreenshot(story, "mobile", {
                fullscreen: true,
            });
        });

        test("Default (dark)", async ({ story }) => {
            await story.init("default", { mode: "dark" });
            await compareScreenshot(story, "dark", {
                fullscreen: true,
            });
        });
    });

    test.describe("custom-content modal", () => {
        test("Custom content modal", async ({ story }) => {
            await story.init("custom-content");

            await compareScreenshot(story, "desktop", {
                fullscreen: true,
            });
        });

        test("Custom content modal (mobile)", async ({ story }) => {
            await story.init("custom-content", { size: "mobile" });

            await compareScreenshot(story, "mobile", {
                fullscreen: true,
            });
        });
    });
});
