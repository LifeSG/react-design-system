import { test as base, expect, Locator, Page } from "@playwright/test";
import { fixedTimestamp } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "date-input";

    public readonly locators: {
        dateInput: Locator;
        calendarContainer: Locator;
        calendarContent: Locator;
        doneButton: Locator;
        cancelButton: Locator;
        selectedValue: Locator;
        dayInput: Locator;
        monthInput: Locator;
        yearInput: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            dateInput: page.getByTestId("date-input"),
            calendarContainer: page.getByTestId("calendar-container"),
            calendarContent: page.getByTestId("calendar-content"),
            doneButton: page.getByTestId("done-button"),
            cancelButton: page.getByTestId("cancel-button"),
            selectedValue: page.getByTestId("selected-value"),
            dayInput: page.getByTestId("start-day-input"),
            monthInput: page.getByTestId("start-month-input"),
            yearInput: page.getByTestId("start-year-input"),
        };
    }

    public getDayCell(day: number) {
        return this.page
            .getByRole("gridcell", {
                name: new RegExp(`^${day} .*Available$`),
            })
            .first();
    }

    public get monthButton() {
        return this.page.locator("#month-dropdown");
    }

    public get yearButton() {
        return this.page.locator("#year-dropdown");
    }

    public getMonthOption(name: string) {
        return this.page.getByRole("button", { name, exact: true });
    }

    public getYearOption(year: string) {
        return this.page.getByRole("button", { name: year, exact: true });
    }

    public async openCalendar() {
        await this.locators.dateInput.click();
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

test.describe("DateInput", () => {
    test.describe("Default story", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mockedTimestamp: fixedTimestamp });
        });

        test("Mount", async ({ story }) => {
            await expect(story.locators.calendarContainer).not.toBeVisible();
            await expect(story.locators.selectedValue).toHaveText("none");
            await compareScreenshot(story, "mount");
        });

        test("Open - no selection", async ({ story }) => {
            await story.openCalendar();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Hovered date", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(15).hover();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Selected and hovered date", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(10).hover();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Selected date", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            const box = await story.locators.calendarContent.boundingBox();
            if (!box)
                throw new Error(
                    "calendarContent bounding box unavailable in 'Selected date' test"
                );
            await story.page.mouse.move(box.x + box.width / 2, box.y - 10);
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Commit with Done", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.locators.doneButton.click();
            await expect(story.locators.selectedValue).toHaveText(
                /^\d{4}-\d{2}-\d{2}$/
            );
        });

        test("Cancel restores initial value", async ({ story }) => {
            const previousValue =
                (await story.locators.selectedValue.textContent()) ?? "";

            await story.openCalendar();
            await story.getDayCell(20).click();
            await story.locators.cancelButton.click();

            await expect(story.locators.selectedValue).toHaveText(
                previousValue
            );
        });

        test.describe("Focused states", () => {
            test("day input focused", async ({ story }) => {
                await story.locators.dayInput.click();
                await compareScreenshot(story, "state", {
                    locator: story.locators.dateInput,
                });
            });

            test("month input focused", async ({ story }) => {
                await story.locators.monthInput.click();
                await compareScreenshot(story, "state", {
                    locator: story.locators.dateInput,
                });
            });

            test("year input focused", async ({ story }) => {
                await story.locators.yearInput.click();
                await compareScreenshot(story, "state", {
                    locator: story.locators.dateInput,
                });
            });

            test("day filled — divider active", async ({ story }) => {
                await story.locators.dayInput.click();
                await story.locators.dayInput.fill("08");
                await compareScreenshot(story, "state", {
                    locator: story.locators.dateInput,
                });
            });

            test("all fields filled via typing", async ({ story }) => {
                await story.locators.dayInput.click();
                await story.locators.dayInput.fill("08");
                await story.locators.monthInput.fill("04");
                await story.locators.yearInput.fill("2026");
                await compareScreenshot(story, "state", {
                    locator: story.locators.dateInput,
                });
            });
        });
    });

    test.describe("Selected story", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("selected", { mockedTimestamp: fixedTimestamp });
        });

        test("Month view", async ({ story }) => {
            await story.openCalendar();

            await story.monthButton.click();
            await expect(story.getMonthOption("January")).toBeVisible();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Year view", async ({ story }) => {
            await story.openCalendar();
            await story.yearButton.click();
            await expect(story.getYearOption("2026")).toBeVisible();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });
    });

    test.describe("Disabled story", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled", { mockedTimestamp: fixedTimestamp });
        });

        test("Disabled state", async ({ story }) => {
            await expect(story.locators.dateInput).toMatchAriaSnapshot(`
                - group [disabled]
            `);
            await expect(story.locators.calendarContainer).not.toBeVisible();

            await compareScreenshot(story, "state");

            await story.locators.dateInput.click({ force: true });
            await expect(story.locators.calendarContainer).not.toBeVisible();
        });
    });

    test.describe("StandaloneDateInput", () => {
        test.describe("Disabled with value", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("disabled", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("disabled with pre-filled value", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.dateInput,
                });
            });
        });

        test.describe("Read-only", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("read-only", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("read-only with value", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.dateInput,
                });
            });
        });
    });
});
