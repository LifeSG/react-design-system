import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "html-content";

    public readonly locators: {
        root: Locator;
        markup: Locator;
        link: Locator;
        strong: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            root: page.getByTestId("html-content-root"),
            markup: page.getByTestId("html-content-markup"),
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

test.describe("HtmlContent", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.root).toBeVisible();
                await expect(story.locators.markup).toBeVisible();
                await expect(story.locators.link).toBeVisible();
                await expect(story.locators.strong).toBeVisible();

                await compareScreenshot(story, "mount");
            });
        });
    });
});
