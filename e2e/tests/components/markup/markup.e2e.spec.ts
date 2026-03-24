import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "markup";

    public readonly locators: {
        root: Locator;
        markup: Locator;
        link: Locator;
        strong: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            root: page.getByTestId("markup-root"),
            markup: page.getByTestId("markup-markup"),
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

const scenarios = [
    {
        story: "basic",
        title: "Basic",
    },
    {
        story: "with-text-size",
        title: "With textSize",
    },
] as const;

test.describe("Markup", () => {
    scenarios.forEach((scenario) => {
        test.describe(scenario.title, () => {
            test.beforeEach(async ({ story }) => {
                await story.init(scenario.story);
            });

            test(scenario.title, async ({ story }) => {
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
});
