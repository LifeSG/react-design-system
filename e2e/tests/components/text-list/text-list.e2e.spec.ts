import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "text-list";

    public readonly locators: {
        unorderedDefault: Locator;
        orderedDefault: Locator;
        orderedReversedStart: Locator;
        unorderedCustomBullet: Locator;
        advancedNestedCounter: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            unorderedDefault: page.getByTestId("text-list-unordered-default"),
            orderedDefault: page.getByTestId("text-list-ordered-default"),
            orderedReversedStart: page.getByTestId(
                "text-list-ordered-reversed-start"
            ),
            unorderedCustomBullet: page.getByTestId(
                "text-list-unordered-custom-bullet"
            ),
            advancedNestedCounter: page.getByTestId(
                "text-list-advanced-nested-counter"
            ),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("TextList", () => {
    test("Unordered default", async ({ story }) => {
        await story.init("unordered-default");
        await expect(story.locators.unorderedDefault).toBeVisible();
        await compareScreenshot(story, "mount");
    });

    test("Ordered default", async ({ story }) => {
        await story.init("ordered-default");
        await expect(story.locators.orderedDefault).toBeVisible();
        await compareScreenshot(story, "mount");
    });

    test("Ordered reversed with custom start", async ({ story }) => {
        await story.init("ordered-reversed-start");
        await expect(story.locators.orderedReversedStart).toBeVisible();
        await compareScreenshot(story, "mount");
    });

    test("Unordered with custom bullet icon", async ({ story }) => {
        await story.init("unordered-custom-bullet");
        await expect(story.locators.unorderedCustomBullet).toBeVisible();
        await compareScreenshot(story, "mount");
    });

    test("Nested counter", async ({ story }) => {
        await story.init("nested-counter");
        await expect(story.locators.advancedNestedCounter).toBeVisible();
        await compareScreenshot(story, "mount");
    });
});
