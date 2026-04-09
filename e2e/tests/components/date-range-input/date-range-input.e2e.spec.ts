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

        test("Range no selection", async ({ story }) => {
            await expect(story.locators.calendarContainer).not.toBeVisible();

            await story.openCalendar();
            await expect(story.locators.selectedStart).toHaveText("none");
            await expect(story.locators.selectedEnd).toHaveText("none");

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range end selected and start hovered", async ({ story }) => {
            await story.openCalendar();
            await story.locators.endField.click();
            await story.getDayCell(20).click();
            await story.getDayCell(15).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range start selected and end hovered", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range start and end selected", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range hover end in-between", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.endField.click();
            await story.getDayCell(12).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range hover end on end", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.endField.click();
            await story.getDayCell(15).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range hover end after end", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.endField.click();
            await story.getDayCell(20).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range hover end before start", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.endField.click();
            await story.getDayCell(8).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range hover start in-between", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.startField.click();
            await story.getDayCell(12).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range hover start on start", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.startField.click();
            await story.getDayCell(10).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range hover start before start", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.startField.click();
            await story.getDayCell(8).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range hover start after end", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.startField.click();
            await story.getDayCell(18).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Range commit with Done", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.doneButton.click();
            await expect(story.locators.selectedStart).toHaveText(
                /^\d{4}-\d{2}-\d{2}$/
            );
            await expect(story.locators.selectedEnd).toHaveText(
                /^\d{4}-\d{2}-\d{2}$/
            );
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

            await compareScreenshot(story, "state", {
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

        test("Week selected", async ({ story }) => {
            await story.openCalendar();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Week selected and hover other", async ({ story }) => {
            await story.openCalendar();
            await story.getWeekCell(2).hover();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Week selected and hover same", async ({ story }) => {
            await story.openCalendar();
            await story.getWeekCell(1).hover();
            await compareScreenshot(story, "state", {
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

            await compareScreenshot(story, "state", {
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

        test("Fixed range selected", async ({ story }) => {
            await story.openCalendar();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Fixed range hover overlap before", async ({ story }) => {
            await story.openCalendar();
            await story.getFixedRangeCell(8).hover();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Fixed range hover overlap after", async ({ story }) => {
            await story.openCalendar();
            await story.getFixedRangeCell(12).hover();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Fixed range hover same date", async ({ story }) => {
            await story.openCalendar();
            await story.getFixedRangeCell(10).hover();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled", { mockedTimestamp: fixedTimestamp });
        });

        test("Disabled state", async ({ story }) => {
            await expect(story.locators.dateRangeInput).toMatchAriaSnapshot(`
                - group [disabled]
            `);
            await expect(story.locators.calendarContainer).not.toBeVisible();

            await compareScreenshot(story, "state");

            await story.locators.dateRangeInput.click({ force: true });
            await expect(story.locators.calendarContainer).not.toBeVisible();
        });
    });
});
