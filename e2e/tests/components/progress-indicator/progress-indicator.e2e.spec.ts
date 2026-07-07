import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "progress-indicator";

    public readonly locators: {
        first: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            first: page.getByTestId("progress-indicator-first"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("ProgressIndicator", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("All step states", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.first).toMatchAriaSnapshot(`
                - paragraph: One Current step
                - paragraph: Two Upcoming step
                - paragraph: Three Upcoming step
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { mode: "dark" });
        });

        test("All step states (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { size: "lg" });
        });

        test("Tablet layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { size: "lg", mode: "dark" });
        });

        test("Tablet layout (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
