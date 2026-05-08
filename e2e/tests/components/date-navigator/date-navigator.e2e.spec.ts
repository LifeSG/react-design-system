import { test as base, expect, Locator, Page } from "@playwright/test";
import { fixedTimestamp } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "date-navigator";

    public readonly locators: {
        internal: (container: Locator) => {
            leftArrow: Locator;
            rightArrow: Locator;
            dateText: Locator;
            calendarDropdown: Locator;
        };
        dateNavigatorDefault: Locator;
        dateNavigatorShortForm: Locator;
        dateNavigatorShowToday: Locator;
        dateNavigatorWeekView: Locator;
        dateNavigatorAtMin: Locator;
        dateNavigatorAtMax: Locator;
        dateNavigatorLoading: Locator;
        dateNavigatorWithCalendar: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: (container) => ({
                leftArrow: container.getByTestId(
                    "date-navigator-left-arrow-btn"
                ),
                rightArrow: container.getByTestId(
                    "date-navigator-right-arrow-btn"
                ),
                dateText: container.getByTestId("date-navigator-date-text"),
                calendarDropdown: container.getByTestId("calendar-dropdown"),
            }),
            dateNavigatorDefault: page.getByTestId("date-navigator-default"),
            dateNavigatorShortForm: page.getByTestId(
                "date-navigator-short-form"
            ),
            dateNavigatorShowToday: page.getByTestId(
                "date-navigator-show-today"
            ),
            dateNavigatorWeekView: page.getByTestId("date-navigator-week-view"),
            dateNavigatorAtMin: page.getByTestId("date-navigator-at-min"),
            dateNavigatorAtMax: page.getByTestId("date-navigator-at-max"),
            dateNavigatorLoading: page.getByTestId("date-navigator-loading"),
            dateNavigatorWithCalendar: page.getByTestId(
                "date-navigator-with-calendar"
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

test.describe("DateNavigator", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("day-view", { mockedTimestamp: fixedTimestamp });
        });

        test("Day view", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.dateNavigatorDefault)
                .toMatchAriaSnapshot(`
                  - button "Previous day"
                  - button "8 April 2026, Wednesday"
                  - button "Next day"
            `);

            await expect(story.locators.dateNavigatorShortForm)
                .toMatchAriaSnapshot(`
                  - button "Previous day"
                  - button "8 Apr 2026, Wed"
                  - button "Next day"
            `);

            await expect(story.locators.dateNavigatorShowToday)
                .toMatchAriaSnapshot(`
                  - button "Previous day"
                  - button "8 April 2026, Today"
                  - button "Next day"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("day-view", {
                mockedTimestamp: fixedTimestamp,
                mode: "dark",
            });
        });

        test("Day view (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("day-view", {
                mockedTimestamp: fixedTimestamp,
                size: "xxs",
            });
        });

        test("Day view (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("week-view", { mockedTimestamp: fixedTimestamp });
        });

        test("Week view", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.dateNavigatorWeekView)
                .toMatchAriaSnapshot(`
                  - button "Previous week"
                  - button "5 Apr - 11 Apr, 2026"
                  - button "Next week"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("min-max-date", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Min and max date", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-calendar", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("With calendar", async ({ story }) => {
            const dateNavigator = story.locators.internal(
                story.locators.dateNavigatorWithCalendar
            );

            await compareScreenshot(story, "mount");

            await dateNavigator.dateText.hover();

            await compareScreenshot(story, "hover");

            await dateNavigator.dateText.click();

            await compareScreenshot(story, "calendar-open", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-calendar", {
                mockedTimestamp: fixedTimestamp,
                mode: "dark",
            });
        });

        test("With calendar (dark mode)", async ({ story }) => {
            const dateNavigator = story.locators.internal(
                story.locators.dateNavigatorWithCalendar
            );

            await compareScreenshot(story, "mount");

            await dateNavigator.dateText.hover();

            await compareScreenshot(story, "hover");

            await dateNavigator.dateText.click();

            await compareScreenshot(story, "calendar-open", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Loading state", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
