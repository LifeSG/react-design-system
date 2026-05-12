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

    public getUnavailableDayCell(day: number) {
        return this.page
            .getByRole("gridcell", {
                name: new RegExp(`^${day} .*Unavailable$`),
            })
            .first();
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
    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mockedTimestamp: fixedTimestamp });
        });

        test("Mount", async ({ story }) => {
            await expect(story.locators.calendarContainer).not.toBeVisible();
            await expect(story.locators.selectedValue).toHaveText("none");

            await expect(story.locators.dateInput).toMatchAriaSnapshot(`
                - group:
                  - textbox "Date"
                  - textbox "Month"
                  - textbox "Year"
            `);

            await compareScreenshot(story, "mount");
        });

        test("Open", async ({ story }) => {
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
            await story.getDayCell(10).blur();

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

        test("Value committed", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.locators.doneButton.click();

            await compareScreenshot(story, "value-committed", {
                locator: story.locators.dateInput,
            });
        });

        test.describe("Focused states", () => {
            test("Day input focused", async ({ story }) => {
                await story.locators.dayInput.click();

                await compareScreenshot(story, "state", {
                    locator: story.locators.dateInput,
                });
            });

            test("Month input focused", async ({ story }) => {
                await story.locators.monthInput.click();

                await compareScreenshot(story, "state", {
                    locator: story.locators.dateInput,
                });
            });

            test("Year input focused", async ({ story }) => {
                await story.locators.yearInput.click();

                await compareScreenshot(story, "state", {
                    locator: story.locators.dateInput,
                });
            });

            test("Keyboard input", async ({ story }) => {
                await test.step("After day is filled, month input is focused", async () => {
                    await story.locators.dayInput.click();
                    await story.locators.dayInput.fill("08");

                    expect(story.locators.monthInput).toBeFocused();

                    await compareScreenshot(story, "after-day-filled", {
                        locator: story.locators.dateInput,
                    });
                });

                await test.step("After month is filled, year input is focused", async () => {
                    await story.locators.monthInput.fill("04");

                    expect(story.locators.yearInput).toBeFocused();

                    await compareScreenshot(story, "after-month-filled", {
                        locator: story.locators.dateInput,
                    });
                });

                await test.step("Year field filled", async () => {
                    await story.locators.yearInput.fill("2026");

                    await compareScreenshot(story, "after-year-filled", {
                        locator: story.locators.dateInput,
                    });
                });
            });
        });
    });

    test.describe("Selected", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("selected", { mockedTimestamp: fixedTimestamp });
        });

        test("Mount", async ({ story }) => {
            await expect(story.locators.dateInput).toMatchAriaSnapshot(`
                - group:
                  - textbox "Date": "08"
                  - textbox "Month": "04"
                  - textbox "Year": "2026"
            `);

            await compareScreenshot(story, "mount", {
                locator: story.locators.dateInput,
            });
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

    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled", { mockedTimestamp: fixedTimestamp });
        });

        test("Disabled", async ({ story }) => {
            await expect(story.locators.dateInput).toMatchAriaSnapshot(`
                - group [disabled]
            `);
            await expect(story.locators.calendarContainer).not.toBeVisible();

            await compareScreenshot(story, "state");

            await story.locators.dateInput.click({ force: true });

            await expect(story.locators.calendarContainer).not.toBeVisible();
        });
    });

    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("read-only", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Read-only", async ({ story }) => {
            await expect(story.locators.dateInput).toMatchAriaSnapshot(`
                - group:
                  - textbox "Date"
                  - textbox "Month"
                  - textbox "Year"
            `);

            await compareScreenshot(story, "mount", {
                locator: story.locators.dateInput,
            });
        });
    });

    test.describe("Error", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("error", { mockedTimestamp: fixedTimestamp });
        });

        test("Error state", async ({ story }) => {
            await expect(story.locators.dateInput).toMatchAriaSnapshot(`
                - group:
                  - textbox "Date"
                  - textbox "Month"
                  - textbox "Year"
            `);

            await compareScreenshot(story, "mount", {
                locator: story.locators.dateInput,
            });
        });

        test("Error state focused", async ({ story }) => {
            await story.locators.dateInput.click();
            await expect(story.locators.calendarContainer).toBeVisible();

            await compareScreenshot(story, "focused", {
                locator: story.locators.dateInput,
            });
        });

        test("Error state with selected value", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.locators.doneButton.click();

            await compareScreenshot(story, "value-committed", {
                locator: story.locators.dateInput,
            });
        });
    });

    test.describe("No button", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-button", { mockedTimestamp: fixedTimestamp });
        });

        test("Selecting a date closes calendar and commits value immediately", async ({
            story,
        }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();

            await expect(story.locators.calendarContainer).not.toBeVisible();
            await expect(story.locators.selectedValue).toHaveText("2026-04-10");

            await compareScreenshot(story, "value-committed", {
                locator: story.locators.dateInput,
            });
        });
    });

    test.describe("Min max date", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("min-max-date", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Dates outside range are unavailable", async ({ story }) => {
            await story.openCalendar();

            await expect(story.getUnavailableDayCell(1)).toBeVisible();
            await expect(story.getUnavailableDayCell(25)).toBeVisible();

            await compareScreenshot(story, "state", { fullscreen: true });
        });

        test("Unavailable dates cannot be selected", async ({ story }) => {
            await story.openCalendar();
            await story.getUnavailableDayCell(1).click({ force: true });
            await story.locators.doneButton.click();

            await expect(story.locators.selectedValue).toHaveText("none");
        });
    });

    test.describe("Disabled dates", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled-dates", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Disabled dates are marked unavailable", async ({ story }) => {
            await story.openCalendar();

            await expect(story.getUnavailableDayCell(10)).toBeVisible();
            await expect(story.getUnavailableDayCell(15)).toBeVisible();

            await compareScreenshot(story, "state", { fullscreen: true });
        });

        test("Disabled dates cannot be selected", async ({ story }) => {
            await story.openCalendar();
            await story.getUnavailableDayCell(10).click({ force: true });
            await story.locators.doneButton.click();

            await expect(story.locators.selectedValue).toHaveText("none");
        });
    });

    test.describe("Allow disabled selection", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("allow-disabled-selection", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Disabled dates can be selected", async ({ story }) => {
            await story.openCalendar();
            await story.getUnavailableDayCell(10).click();
            await story.locators.doneButton.click();

            await expect(story.locators.selectedValue).toHaveText("2026-04-10");

            await compareScreenshot(story, "value-committed", {
                locator: story.locators.dateInput,
            });
        });
    });

    test.describe("Dark mode", () => {
        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", {
                    mockedTimestamp: fixedTimestamp,
                    mode: "dark",
                });
            });

            test("Mount", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Open", async ({ story }) => {
                await story.openCalendar();

                await compareScreenshot(story, "state", { fullscreen: true });
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("disabled", {
                    mockedTimestamp: fixedTimestamp,
                    mode: "dark",
                });
            });

            test("Disabled", async ({ story }) => {
                await compareScreenshot(story, "state");
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("read-only", {
                    mockedTimestamp: fixedTimestamp,
                    mode: "dark",
                });
            });

            test("Read-only", async ({ story }) => {
                await compareScreenshot(story, "state", {
                    locator: story.locators.dateInput,
                });
            });
        });
    });

    test.describe("Mobile", () => {
        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", {
                    mockedTimestamp: fixedTimestamp,
                    size: "mobile",
                });
            });

            test("Mount", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Open", async ({ story }) => {
                await story.openCalendar();

                await compareScreenshot(story, "state", { fullscreen: true });
            });

            test("Done and Cancel buttons are always shown", async ({
                story,
            }) => {
                await story.openCalendar();

                await expect(story.locators.doneButton).toBeVisible();
                await expect(story.locators.cancelButton).toBeVisible();
            });
        });
    });

    test.describe("Keyboard navigation", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mockedTimestamp: fixedTimestamp });
        });

        test("Escape closes the calendar", async ({ story }) => {
            await story.openCalendar();
            await story.page.keyboard.press("Escape");

            await expect(story.locators.calendarContainer).not.toBeVisible();
        });
    });
});
