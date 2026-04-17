import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "badge";

    public readonly locators: {
        variantsRowDefault: Locator;
        variantsRowImportant: Locator;
        badgeCount1000: Locator;
        badgeCount2090: Locator;
        anchoredOffset: Locator;
        anchoredAvatar: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            variantsRowDefault: page.getByTestId("badge-dot-default"),
            variantsRowImportant: page.getByTestId("badge-dot-important"),
            badgeCount1000: page.getByTestId("badge-count-1000"),
            badgeCount2090: page.getByTestId("badge-count-2090"),
            anchoredOffset: page.getByTestId("badge-anchored-offset"),
            anchoredAvatar: page.getByTestId("badge-anchored-avatar"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, mountStory) => {
        const story = new StoryPage(page);
        await mountStory(story);
    },
});

test.describe("Badge", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("Variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { mode: "dark" });
        });

        test("Variants dark mode", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("count");
        });

        test("Count formatting", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("anchored");
        });

        test("Anchored positioning and offset", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
