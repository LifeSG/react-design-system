import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "uneditable-section";

    public readonly locators: {
        uneditableSection: Locator;
        title: Locator;
        description: Locator;
        items: Locator;
        spinner: Locator;
        loadingLabel: Locator;
        errorLabel: Locator;
        tryAgainButton: Locator;
        topSection: Locator;
        bottomSection: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            uneditableSection: page.getByTestId("uneditable-section"),
            title: page.getByRole("heading", { level: 2 }),
            description: page.locator("p").first(),
            items: page.locator("li"),
            spinner: page.locator('svg[data-testid="spinner"]'),
            loadingLabel: page.getByText("Retrieving..."),
            errorLabel: page.getByText("Error"),
            tryAgainButton: page.getByRole("button", { name: /Try again/i }),
            topSection: page.locator('[data-id="top-section"]'),
            bottomSection: page.locator('[data-id="bottom-section"]'),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("UneditableSection", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-layout");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-layout", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-layout", { size: "mobile" });
        });

        test("Default mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-no-background");
        });

        test("Default no background", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-no-background", { mode: "dark" });
        });

        test("Default no background (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-full-width");
        });

        test("Default full width", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("masked-variants");
        });

        test("Masked variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading-variant");
        });

        test("Loading variant", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading-variant", { mode: "dark" });
        });

        test("Loading variant (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error-alert-variant");
        });

        test("Error and alert variant", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error-alert-variant", { mode: "dark" });
        });

        test("Error and alert variant (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("partial-custom-sections");
        });

        test("Partial custom sections", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("full-custom-sections");
        });

        test("Full custom sections", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
