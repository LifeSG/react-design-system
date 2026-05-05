import { test as base, expect, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { THEME_TYPES } from "../../../../src/theme/types";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "footer";

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

test.describe("Footer", () => {
    test.describe(() => {
        for (const theme of THEME_TYPES) {
            test(`${theme} theme`, async ({ story }) => {
                await story.page.goto(
                    `/components/footer/default-layout?theme=${theme}`
                );
                await compareScreenshot(story, "mount");
            });
        }
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("minimal");
        });

        test("Minimal layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("mylegacy-footer");
        });

        test("MyLegacy layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-content");
        });

        test("Custom content layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("stretch-layout");
        });

        test("Stretch layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hidden-logo");
        });

        test("Hidden logo layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-copyright");
        });

        test("Custom copyright info", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
