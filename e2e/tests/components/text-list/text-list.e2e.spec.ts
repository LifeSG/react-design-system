import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "text-list";

    public readonly locators: {
        unorderedDefault: Locator;
        orderedDefault: Locator;
        orderedReversed: Locator;
        orderedStart: Locator;
        unorderedCustomBullet: Locator;
        advancedNestedCounter: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            unorderedDefault: page.getByTestId("text-list-unordered-default"),
            orderedDefault: page.getByTestId("text-list-ordered-default"),
            orderedReversed: page.getByTestId("text-list-ordered-reversed"),
            orderedStart: page.getByTestId("text-list-ordered-start"),
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
        await compareScreenshot(story, "mount");
    });

    test("Ordered default", async ({ story }) => {
        await story.init("ordered-default");
        await compareScreenshot(story, "mount");
    });

    test("Ordered reversed", async ({ story }) => {
        await story.init("ordered-reversed");
        await compareScreenshot(story, "mount");
    });

    test("Ordered custom start", async ({ story }) => {
        await story.init("ordered-start");
        await compareScreenshot(story, "mount");
    });

    test("Unordered with custom bullet icon", async ({ story }) => {
        await story.init("unordered-custom-bullet");
        await compareScreenshot(story, "mount");
    });

    test("Nested counter", async ({ story }) => {
        await story.init("nested-counter");
        await compareScreenshot(story, "mount");
    });
});
