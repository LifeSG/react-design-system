import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "breadcrumb";

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

test.describe("Breadcrumb", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("separator-styles");
        });

        test("All separator styles", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("link-vs-non-link");
        });

        test("Link vs non-link items display", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("fade-gradients", { size: "mobile" });
        });

        test("Fade gradients on overflow", async ({ story }) => {
            // Wait for breadcrumbs to render and auto-scroll
            await story.page.waitForTimeout(500);

            await test.step("Fade left", async () => {
                const fadeLeft = story.page.getByTestId("breadcrumb-fade-left");
                await fadeLeft.hover();
                await story.page.mouse.wheel(100, 0);
                await story.page.waitForTimeout(500);
            });

            await test.step("Fade right", async () => {
                const fadeRight = story.page.getByTestId(
                    "breadcrumb-fade-right"
                );
                await fadeRight.hover();
                await story.page.mouse.wheel(-200, 0);
                await story.page.waitForTimeout(500);
            });

            await test.step("Fade both", async () => {
                const fadeBoth = story.page.getByTestId("breadcrumb-fade-both");
                await fadeBoth.hover();
                await story.page.mouse.wheel(-150, 0);
                await story.page.waitForTimeout(500);
            });

            await compareScreenshot(story, "mount");
        });
    });
});
