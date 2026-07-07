import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "tag";

    public readonly locators: {
        solidTags: Locator;
        outlineTags: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            solidTags: page.getByTestId("solid-variants").getByRole("button"),
            outlineTags: page
                .getByTestId("outline-variants")
                .getByRole("button"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Tag", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("All type and color variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("All type and color variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interactive");
        });

        test("Interactive", async ({ story }) => {
            await compareScreenshot(story, "mount");

            const solidTags = await story.locators.solidTags.all();
            for (let i = 0; i < solidTags.length; i++) {
                const tag = solidTags[i];
                await tag.hover();
                await compareScreenshot(story, `solid-hover-${i}`, {
                    locator: tag,
                });
            }

            const outlineTags = await story.locators.outlineTags.all();
            for (let i = 0; i < outlineTags.length; i++) {
                const tag = outlineTags[i];
                await tag.hover();
                await compareScreenshot(story, `outline-hover-${i}`, {
                    locator: tag,
                });
            }
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interactive", { size: "tablet" });
        });

        test("Interactive (tablet)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
