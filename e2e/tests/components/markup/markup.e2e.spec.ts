import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "markup";

    public readonly locators: {
        link: Locator;
        strong: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            link: page.getByRole("link", { name: /inline link/i }),
            strong: page.getByText("bold phrase"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Markup", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic", async ({ story }) => {
            await expect(story.locators.link).toBeVisible();
            await expect(story.locators.strong).toBeVisible();

            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-text-size");
        });

        test("With textSize", async ({ story }) => {
            await expect(story.locators.link).toBeVisible();
            await expect(story.locators.strong).toBeVisible();

            await compareScreenshot(story, "mount");
        });
    });
});
