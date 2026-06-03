import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { fixedTimestamp } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "time-slot-bar-week";

    public readonly locators: {
        internal: {
            columnHeader: Locator;
            navigationHeader: {
                monthButton: Locator;
                yearButton: Locator;
            };
            expandCollapseButton: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                columnHeader: page.getByRole("columnheader"),
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
            },
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
            await story.locators.internal.navigationHeader.monthButton.click();
            await compareScreenshot(story, "expanded");
        });

        test("Year dropdown", async ({ story }) => {
            await story.locators.internal.navigationHeader.yearButton.click();
            await compareScreenshot(story, "expanded");
        });

        test("Hover", async ({ story }) => {
            await test.step("Hover over first column header", async () => {
                await story.locators.internal.columnHeader.first().hover();
                await compareScreenshot(story, "unselected");
            });

            await test.step("Select first column header", async () => {
                await story.locators.internal.columnHeader.first().click();
                await story.page.mouse.move(0, 0);
                await compareScreenshot(story, "selected");
            });

            await test.step("Hover over selected column header", async () => {
                await story.locators.internal.columnHeader.first().hover();
                await compareScreenshot(story, "selected-hover");
            });
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
            await story.locators.internal.navigationHeader.monthButton.click();
            await compareScreenshot(story, "expanded");
        });

        test("Year dropdown (dark mode)", async ({ story }) => {
            await story.locators.internal.navigationHeader.yearButton.click();
            await compareScreenshot(story, "expanded");
        });

        test("Hover (dark mode)", async ({ story }) => {
            await test.step("Hover over first column header", async () => {
                await story.locators.internal.columnHeader.first().hover();
                await compareScreenshot(story, "unselected");
            });

            await test.step("Select first column header", async () => {
                await story.locators.internal.columnHeader.first().click();
                await story.page.mouse.move(0, 0);
                await compareScreenshot(story, "selected");
            });

            await test.step("Hover over selected column header", async () => {
                await story.locators.internal.columnHeader.first().hover();
                await compareScreenshot(story, "selected-hover");
            });
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
                await compareScreenshot(story, "collapsed");
            });

            await test.step("Click 'Show later times' button", async () => {
                await story.locators.internal.expandCollapseButton.click();
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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("min-max-date", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Min and Max Date", async ({ story }) => {
            await story.locators.internal.navigationHeader.monthButton.click();
            await compareScreenshot(story, "dropdown");
        });
    });
});
