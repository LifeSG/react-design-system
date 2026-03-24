import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "theme";

    public readonly locators: {
        colourMain: Locator;
        breakpointMain: Locator;
        colourNested: Locator;
        breakpointNested: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            colourMain: page.getByTestId("main").getByTestId("colour"),
            breakpointMain: page.getByTestId("main").getByTestId("breakpoint"),
            colourNested: page.getByTestId("nested").getByTestId("colour"),
            breakpointNested: page
                .getByTestId("nested")
                .getByTestId("breakpoint"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Theme", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("theme-provider");
        });

        test("Themes are loaded correctly", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("theme-provider", { mode: "dark" });
        });

        test("Themes are loaded correctly in dark mode", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("use-design-token");
        });

        test("useDesignToken can run safely on server and client", async ({
            story,
        }) => {
            await expect(story.locators.colourMain).toHaveText("#1768BE", {
                ignoreCase: true,
            });
            await expect(story.locators.breakpointMain).toHaveText("1200");
            await expect(story.locators.colourNested).toHaveText("#7654BC", {
                ignoreCase: true,
            });
            await expect(story.locators.breakpointNested).toHaveText("1200");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("use-apply-style");
        });

        test("useApplyStyle can run safely on server and client", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("use-inherited-theme-scope");
        });

        test("useInheritedThemeScope extracts the correct theme and mode from the current theme", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
