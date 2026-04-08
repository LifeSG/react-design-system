import { test as base, type Page, type TestInfo } from "@playwright/test";
import { AbstractStoryPage } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "animations";

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

const annotateDynamicAnimation = (testInfo: TestInfo) => {
    testInfo.annotations.push({
        type: "non-visual",
        description:
            "Animation has dynamic state. Visual baseline snapshots are informational only.",
    });
};

test.describe("Animations", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading-dots");
        });

        test("LoadingDots renders @non-visual", async ({}, testInfo) => {
            annotateDynamicAnimation(testInfo);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading-spinner");
        });

        test("LoadingSpinner renders @non-visual", async ({}, testInfo) => {
            annotateDynamicAnimation(testInfo);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading-dots-spinner-custom-colour");
        });

        test("LoadingDotsSpinner supports custom color @non-visual", async ({}, testInfo) => {
            annotateDynamicAnimation(testInfo);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("themed-loading-spinner");
        });

        test("ThemedLoadingSpinner renders in both theme scopes @non-visual", async ({}, testInfo) => {
            annotateDynamicAnimation(testInfo);
        });
    });
});
