import {
    test as base,
    chromium,
    expect,
    Locator,
    Page,
} from "@playwright/test";
import { fixedTimestamp } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "date-input";

    public readonly locators: {
        defaultFormInput: Locator;
        disabledFormInput: Locator;
        readonlyFormInput: Locator;
        errorFormInput: Locator;
        defaultInput: Locator;
        disabledInput: Locator;
        readonlyInput: Locator;
        errorInput: Locator;
        dateInput: Locator;
        calendarContainer: Locator;
        calendarContent: Locator;
        toggleZone: Locator;
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
            defaultFormInput: page.getByTestId("form-date-input-default"),
            disabledFormInput: page.getByTestId("form-date-input-disabled"),
            readonlyFormInput: page.getByTestId("form-date-input-readonly"),
            errorFormInput: page.getByTestId("form-date-input-error"),
            defaultInput: page.getByTestId("date-input-default"),
            disabledInput: page.getByTestId("date-input-disabled"),
            readonlyInput: page.getByTestId("date-input-readonly"),
            errorInput: page.getByTestId("date-input-error"),
            dateInput: page.getByTestId("date-input"),
            calendarContainer: page.getByTestId("calendar-container"),
            calendarContent: page.getByTestId("calendar-content"),
            toggleZone: page.getByTestId("toggle-zone"),
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
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Form.DateInput variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.defaultFormInput).toMatchAriaSnapshot(`
                - group "Default":
                  - group:
                    - textbox "Date":
                      - /placeholder: DD
                    - text: /
                    - textbox "Month":
                      - /placeholder: MM
                    - text: /
                    - textbox "Year":
                      - /placeholder: YYYY
            `);

            await expect(story.locators.disabledFormInput).toMatchAriaSnapshot(`
                - group "Disabled" [disabled]:
                  - group:
                    - textbox "Date" [disabled]:
                      - /placeholder: DD
                    - text: /
                    - textbox "Month" [disabled]:
                      - /placeholder: MM
                    - text: /
                    - textbox "Year" [disabled]:
                      - /placeholder: YYYY
            `);

            await expect(story.locators.readonlyFormInput).toMatchAriaSnapshot(`
                - group "Readonly":
                  - group:
                    - textbox "Date":
                      - /placeholder: DD
                    - text: /
                    - textbox "Month":
                      - /placeholder: MM
                    - text: /
                    - textbox "Year":
                      - /placeholder: YYYY
            `);

            await expect(story.locators.errorFormInput).toMatchAriaSnapshot(`
                - group "Error":
                  - group:
                    - textbox "Date":
                      - /placeholder: DD
                    - text: /
                    - textbox "Month":
                      - /placeholder: MM
                    - text: /
                    - textbox "Year":
                      - /placeholder: YYYY
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", {
                mockedTimestamp: fixedTimestamp,
                size: "mobile",
            });
        });

        test("Form.DateInput variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", {
                mockedTimestamp: fixedTimestamp,
                mode: "dark",
            });
        });

        test("Form.DateInput variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Form.DateInput variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.defaultFormInput).toMatchAriaSnapshot(`
                - group "Default":
                  - group:
                    - textbox "Date": "08"
                    - text: /
                    - textbox "Month": "04"
                    - text: /
                    - textbox "Year": "2026"
            `);

            await expect(story.locators.disabledFormInput).toMatchAriaSnapshot(`
                - group "Disabled" [disabled]:
                  - group:
                    - textbox "Date" [disabled]: "08"
                    - text: /
                    - textbox "Month" [disabled]: "04"
                    - text: /
                    - textbox "Year" [disabled]: "2026"
            `);

            await expect(story.locators.readonlyFormInput).toMatchAriaSnapshot(`
                - group "Readonly":
                  - group:
                    - textbox "Date": "08"
                    - text: /
                    - textbox "Month": "04"
                    - text: /
                    - textbox "Year": "2026"
            `);

            await expect(story.locators.errorFormInput).toMatchAriaSnapshot(`
                - group "Error":
                  - group:
                    - textbox "Date": "08"
                    - text: /
                    - textbox "Month": "04"
                    - text: /
                    - textbox "Year": "2026"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", {
                mockedTimestamp: fixedTimestamp,
                mode: "dark",
            });
        });

        test("Form.DateInput variants prefilled (dark mode)", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Standalone variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus states", async ({ story }) => {
            await story.locators.defaultInput.focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultInput,
            });

            await story.locators.disabledInput.focus();
            await compareScreenshot(story, "disabled", {
                locator: story.locators.disabledInput,
            });

            await story.locators.readonlyInput.focus();
            await compareScreenshot(story, "readonly", {
                locator: story.locators.readonlyInput,
            });

            await story.locators.errorInput.focus();
            await compareScreenshot(story, "error", {
                locator: story.locators.errorInput,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants", {
                mockedTimestamp: fixedTimestamp,
                mode: "dark",
            });
        });

        test("Focus states (dark mode)", async ({ story }) => {
            await story.locators.defaultInput.focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultInput,
            });

            await story.locators.disabledInput.focus();
            await compareScreenshot(story, "disabled", {
                locator: story.locators.disabledInput,
            });

            await story.locators.readonlyInput.focus();
            await compareScreenshot(story, "readonly", {
                locator: story.locators.readonlyInput,
            });

            await story.locators.errorInput.focus();
            await compareScreenshot(story, "error", {
                locator: story.locators.errorInput,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test.describe("Default states", () => {
            test("Mount", async ({ story }) => {
                await expect(story.locators.selectedValue).toHaveText("none");

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

                await compareScreenshot(story, "state", { fullscreen: true });
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

                await compareScreenshot(story, "state", { fullscreen: true });
            });

            test("Done and Cancel actions", async ({ story }) => {
                await story.openCalendar();
                await story.getDayCell(10).click();
                await story.locators.doneButton.click();

                const committedValue =
                    (await story.locators.selectedValue.textContent()) ?? "";
                expect(committedValue).toMatch(/^\d{4}-\d{2}-\d{2}$/);

                await story.openCalendar();
                await story.getDayCell(20).click();
                await story.locators.cancelButton.click();

                await expect(story.locators.selectedValue).toHaveText(
                    committedValue
                );
            });
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
            test("Input focus states", async ({ story }) => {
                await story.locators.dayInput.click();
                await compareScreenshot(story, "day", {
                    locator: story.locators.dateInput,
                });
            });

            test("Month input focused", async ({ story }) => {
                await story.locators.monthInput.click();
                await compareScreenshot(story, "month", {
                    locator: story.locators.dateInput,
                });
            });

            test("Year input focused", async ({ story }) => {
                await story.locators.yearInput.click();
                await compareScreenshot(story, "year", {
                    locator: story.locators.dateInput,
                });
            });

            test("Keyboard input", async ({ story }) => {
                await test.step("After day is filled, month input is focused", async () => {
                    await story.locators.dayInput.click();
                    await story.locators.dayInput.fill("08");

                    await expect(story.locators.monthInput).toBeFocused();

                    await compareScreenshot(story, "after-day-filled", {
                        locator: story.locators.dateInput,
                    });
                });

                await test.step("After month is filled, year input is focused", async () => {
                    await story.locators.monthInput.fill("04");

                    await expect(story.locators.yearInput).toBeFocused();

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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("selected", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test.describe("Selected state", () => {
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
    });

    test.describe("No button", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-button", {
                mockedTimestamp: fixedTimestamp,
            });
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

    test.describe("Mobile", () => {
        test.describe(() => {
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

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
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
            await story.init("default", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Escape closes the calendar", async ({ story }) => {
            await story.openCalendar();
            await story.page.keyboard.press("Escape");

            await expect(story.locators.calendarContainer).not.toBeVisible();
        });
    });

    test("With Custom Browser Font Size", async () => {
        const browser = await chromium.connect(
            "ws://127.0.0.1:3011/custom-font"
        );

        const context = await browser.newContext({
            baseURL: "http://host.docker.internal:3000",
        });

        const page = await context.newPage();
        const story = new StoryPage(page);

        await story.init("default", {
            mockedTimestamp: fixedTimestamp,
            size: "xxs",
        });

        await story.locators.dateInput.click();

        await expect(story.locators.calendarContainer).toBeVisible();

        await compareScreenshot(story, "before", {
            fullscreen: true,
        });

        // Scroll calendar content to the right
        await story.locators.toggleZone.evaluate((el) => {
            el.scrollLeft = el.scrollWidth;
        });

        await compareScreenshot(story, "after", {
            fullscreen: true,
        });

        await browser.close();
    });
});
