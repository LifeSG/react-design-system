import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { fixedTimestamp } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "time-slot-bar-week";

    public readonly locators: {
        navigationHeader: {
            monthButton: Locator;
            yearButton: Locator;
        };
        expandCollapseButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            navigationHeader: {
                monthButton: page.getByRole("button", {
                    name: /Select month/,
                }),
                yearButton: page.getByRole("button", {
                    name: /Select year/,
                }),
            },
            expandCollapseButton: page.getByTestId(
                "time-bar-expand-collapse-button"
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

test.describe("TimeSlotBarWeek", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mockedTimestamp: fixedTimestamp });
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Month dropdown", async ({ story }) => {
            await story.locators.navigationHeader.monthButton.click();
            await compareScreenshot(story, "expanded");
        });

        test("Year dropdown", async ({ story }) => {
            await story.locators.navigationHeader.yearButton.click();
            await compareScreenshot(story, "expanded");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", {
                mode: "dark",
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Month dropdown (dark mode)", async ({ story }) => {
            await story.locators.navigationHeader.monthButton.click();
            await compareScreenshot(story, "expanded");
        });

        test("Year dropdown (dark mode)", async ({ story }) => {
            await story.locators.navigationHeader.yearButton.click();
            await compareScreenshot(story, "expanded");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", {
                size: "mobile",
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("fixed-variant", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Fixed variant", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-prefilled");
        });

        test("Default prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("fixed-variant-prefilled");
        });

        test("Fixed variant prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("max-height", { mockedTimestamp: fixedTimestamp });
        });

        test("Max height", async ({ story }) => {
            await test.step("Initial render", async () => {
                await compareScreenshot(story, "mount");
            });

            await test.step("Click 'Show later times' button", async () => {
                await story.locators.expandCollapseButton.click();
                await compareScreenshot(story, "expanded");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-header", { mockedTimestamp: fixedTimestamp });
        });

        test("No header", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
