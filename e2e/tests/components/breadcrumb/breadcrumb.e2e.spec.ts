import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "breadcrumb";

    public readonly locators: {
        fadeLeft: Locator;
        fadeRight: Locator;
        fadeBoth: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            fadeLeft: this.page.getByTestId("breadcrumb-fade-left"),
            fadeRight: this.page.getByTestId("breadcrumb-fade-right"),
            fadeBoth: this.page.getByTestId("breadcrumb-fade-both"),
        };
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
                // already positioned, no scrolling needed
            });

            await test.step("Fade right", async () => {
                await story.locators.fadeRight.hover();
                await story.page.mouse.wheel(-1800, 0);
                await story.page.waitForTimeout(500);
            });

            await test.step("Fade both", async () => {
                await story.locators.fadeBoth.hover();
                await story.page.mouse.wheel(-100, 0);
                await story.page.waitForTimeout(500);
            });

            await compareScreenshot(story, "mount");
        });
    });
});
