import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "avatar";

    public readonly locators: {
        defaultAvatars: Locator;
        smallAvatars: Locator;
        allAvatars: Locator;
        badges: Locator;
        importantBadges: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            defaultAvatars: page.getByTestId(/^avatar-default-important-/),
            smallAvatars: page.getByTestId(/^avatar-small-important-/),
            allAvatars: page.getByTestId(/^avatar-/),
            badges: page.getByTestId(/^badge-/),
            importantBadges: page.getByTestId(/^badge-.*-important-/),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Avatar", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("size-variants-text");
        });

        test("Size variants with text content", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("size-variants-text", { mode: "dark" });
        });

        test("Size variants with text content (dark mode)", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
