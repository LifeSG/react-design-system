import { test as base, expect, Locator, Page } from "@playwright/test";
import { fixedTimestamp } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "date-range-input";

    public readonly locators: {
        dateRangeInput: Locator;
        calendarContainer: Locator;
        calendarContent: Locator;
        doneButton: Locator;
        selectedStart: Locator;
        selectedEnd: Locator;
        startField: Locator;
        endField: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            dateRangeInput: page.getByTestId("date-range-input"),
            calendarContainer: page.getByTestId("calendar-container"),
            calendarContent: page.getByTestId("calendar-content"),
            doneButton: page.getByTestId("done-button"),
            selectedStart: page.getByTestId("selected-start"),
            selectedEnd: page.getByTestId("selected-end"),
            startField: page.locator(
                '[data-id="range-container-elem1-container"]'
            ),
            endField: page.locator(
                '[data-id="range-container-elem2-container"]'
            ),
        };
    }

    public getDayCell(day: number) {
        return this.page
            .getByRole("gridcell", {
                name: new RegExp(`^${day} .*Available$`),
            })
            .first();
    }

    public getWeekCell(index: number) {
        return this.page
            .getByRole("button", {
                name: /^From .* to .*, (Available|Unavailable)$/,
            })
            .nth(index);
    }

    public getFixedRangeCell(day: number) {
        return this.locators.calendarContent
            .locator('[role="gridcell"][aria-label^="From "]')
            .filter({ hasText: new RegExp(`^${day}$`) })
            .first();
    }

    public async openCalendar() {
        await this.locators.dateRangeInput.click();
        await expect(this.locators.calendarContainer).toBeVisible();
        await expect(this.locators.calendarContent).toBeVisible();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("DateRangeInput", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mockedTimestamp: fixedTimestamp });
        });

        test("Range calendar states", async ({ story }) => {
            await test.step("Range calendar without selected dates", async () => {
                await expect(
                    story.locators.calendarContainer
                ).not.toBeVisible();

                await story.openCalendar();
                await expect(story.locators.selectedStart).toHaveText("none");
                await expect(story.locators.selectedEnd).toHaveText("none");

                await compareScreenshot(story, "range-no-selection", {
                    fullscreen: true,
                });
            });

            await test.step("Range with selected end date and hovered start date", async () => {
                await story.init("default", {
                    mockedTimestamp: fixedTimestamp,
                });
                await story.openCalendar();

                await story.locators.endField.click();
                await story.getDayCell(20).click();
                await story.getDayCell(15).hover();

                await compareScreenshot(
                    story,
                    "range-end-selected-start-hover",
                    {
                        fullscreen: true,
                    }
                );
            });

            await test.step("Range with selected start date and hovered end date", async () => {
                await story.init("default", {
                    mockedTimestamp: fixedTimestamp,
                });
                await story.openCalendar();

                await story.getDayCell(10).click();
                await story.getDayCell(15).hover();

                await compareScreenshot(
                    story,
                    "range-start-selected-end-hover",
                    {
                        fullscreen: true,
                    }
                );
            });

            await test.step("Range with selected start and end dates", async () => {
                await story.getDayCell(15).click();

                await compareScreenshot(story, "range-start-end-selected", {
                    fullscreen: true,
                });
            });

            await test.step("Range with selected start and end dates, hovered end date", async () => {
                await story.locators.endField.click();

                await story.getDayCell(12).hover();
                await compareScreenshot(story, "range-hover-end-in-between", {
                    fullscreen: true,
                });

                await story.getDayCell(15).hover();
                await compareScreenshot(story, "range-hover-end-on-end", {
                    fullscreen: true,
                });

                await story.getDayCell(20).hover();
                await compareScreenshot(story, "range-hover-end-after-end", {
                    fullscreen: true,
                });

                await story.getDayCell(8).hover();
                await compareScreenshot(story, "range-hover-end-before-start", {
                    fullscreen: true,
                });
            });

            await test.step("Range with selected start and end dates, hovered start date", async () => {
                await story.locators.startField.click();

                await story.getDayCell(12).hover();
                await compareScreenshot(story, "range-hover-start-in-between", {
                    fullscreen: true,
                });

                await story.getDayCell(10).hover();
                await compareScreenshot(story, "range-hover-start-on-start", {
                    fullscreen: true,
                });

                await story.getDayCell(8).hover();
                await compareScreenshot(
                    story,
                    "range-hover-start-before-start",
                    {
                        fullscreen: true,
                    }
                );

                await story.getDayCell(18).hover();
                await compareScreenshot(story, "range-hover-start-after-end", {
                    fullscreen: true,
                });
            });

            await test.step("Commit selected range", async () => {
                await story.locators.doneButton.click();
                await expect(story.locators.selectedStart).toHaveText(
                    /^\d{4}-\d{2}-\d{2}$/
                );
                await expect(story.locators.selectedEnd).toHaveText(
                    /^\d{4}-\d{2}-\d{2}$/
                );
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("week-default", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Week range with hover", async ({ story }) => {
            await story.openCalendar();
            await story.getWeekCell(1).hover();

            await compareScreenshot(story, "week-hover", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("week-selected", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Week range selected and hover states", async ({ story }) => {
            await story.openCalendar();

            await compareScreenshot(story, "week-selected", {
                fullscreen: true,
            });

            await story.getWeekCell(2).hover();
            await compareScreenshot(story, "week-selected-hover-other", {
                fullscreen: true,
            });

            await story.getWeekCell(1).hover();
            await compareScreenshot(story, "week-selected-hover-same", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("fixed-range-default", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Fixed range with hover", async ({ story }) => {
            await story.openCalendar();
            await story.getFixedRangeCell(10).hover();

            await compareScreenshot(story, "day-hover", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("fixed-range-selected", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Fixed range selected and hover overlap states", async ({
            story,
        }) => {
            await story.openCalendar();

            await compareScreenshot(story, "fixed-range-selected", {
                fullscreen: true,
            });

            await story.getFixedRangeCell(8).hover();
            await compareScreenshot(story, "fixed-range-hover-overlap-before", {
                fullscreen: true,
            });

            await story.getFixedRangeCell(12).hover();
            await compareScreenshot(story, "fixed-range-hover-overlap-after", {
                fullscreen: true,
            });

            await story.getFixedRangeCell(10).hover();
            await compareScreenshot(story, "fixed-range-hover-same-date", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled", { mockedTimestamp: fixedTimestamp });
        });

        test("Disabled state", async ({ story }) => {
            await expect(story.locators.dateRangeInput).toHaveAttribute(
                "aria-disabled",
                "true"
            );
            await expect(story.locators.calendarContainer).not.toBeVisible();

            await compareScreenshot(story, "disabled-on-mount");

            await story.locators.dateRangeInput.click({ force: true });
            await expect(story.locators.calendarContainer).not.toBeVisible();
        });
    });
});
