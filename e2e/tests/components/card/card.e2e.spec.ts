import { test as base, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "card";

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

test.describe("Card", () => {
    test("Default content renders (light mode)", async ({ story }) => {
        await story.init("basic");

        await test.step("Component mounts", async () => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test("Default content renders (dark mode)", async ({ story }) => {
            await story.init("basic", { mode: "dark" });

            await compareScreenshot(story, "mount");
        });
    });
});
