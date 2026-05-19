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
        defaultFormInput: Locator;
        disabledFormInput: Locator;
        readonlyFormInput: Locator;
        errorFormInput: Locator;
        defaultInput: Locator;
        disabledInput: Locator;
        readonlyInput: Locator;
        errorInput: Locator;
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
            defaultFormInput: page.getByRole("group", { name: "Default" }),
            disabledFormInput: page.getByRole("group", { name: "Disabled" }),
            readonlyFormInput: page.getByRole("group", { name: "Readonly" }),
            errorFormInput: page.getByRole("group", { name: "Error" }),
            defaultInput: page.getByTestId("date-range-input-default"),
            disabledInput: page.getByTestId("date-range-input-disabled"),
            readonlyInput: page.getByTestId("date-range-input-readonly"),
            errorInput: page.getByTestId("date-range-input-error"),
        };
    }

    public getDayCell(day: number, label = "Available") {
        return this.page
            .getByRole("gridcell", {
                name: new RegExp(`^${day} .*${label}$`),
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
            await story.init("form-variants");
        });

        test("Form.DateRangeInput variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.defaultFormInput).toMatchAriaSnapshot(`
                - group "Default":
                  - group:
                    - textbox "Start Date":
                      - /placeholder: DD
                    - text: /
                    - textbox "Start Month":
                      - /placeholder: MM
                    - text: /
                    - textbox "Start Year":
                      - /placeholder: YYYY
                  - group:
                    - textbox "End Date":
                      - /placeholder: DD
                    - text: /
                    - textbox "End Month":
                      - /placeholder: MM
                    - text: /
                    - textbox "End Year":
                      - /placeholder: YYYY
            `);
            await expect(story.locators.disabledFormInput).toMatchAriaSnapshot(`
                - group "Disabled" [disabled]:
                  - group:
                    - textbox "Start Date" [disabled]:
                      - /placeholder: DD
                    - text: /
                    - textbox "Start Month" [disabled]:
                      - /placeholder: MM
                    - text: /
                    - textbox "Start Year" [disabled]:
                      - /placeholder: YYYY
                  - group:
                    - textbox "End Date" [disabled]:
                      - /placeholder: DD
                    - text: /
                    - textbox "End Month" [disabled]:
                      - /placeholder: MM
                    - text: /
                    - textbox "End Year" [disabled]:
                      - /placeholder: YYYY
            `);
            await expect(story.locators.readonlyFormInput).toMatchAriaSnapshot(`
                - group "Readonly":
                  - group:
                    - textbox "Start Date":
                      - /placeholder: DD
                    - text: /
                    - textbox "Start Month":
                      - /placeholder: MM
                    - text: /
                    - textbox "Start Year":
                      - /placeholder: YYYY
                  - group:
                    - textbox "End Date":
                      - /placeholder: DD
                    - text: /
                    - textbox "End Month":
                      - /placeholder: MM
                    - text: /
                    - textbox "End Year":
                      - /placeholder: YYYY
            `);
            await expect(story.locators.errorFormInput).toMatchAriaSnapshot(`
                - group "Error":
                  - group:
                    - textbox "Start Date":
                      - /placeholder: DD
                    - text: /
                    - textbox "Start Month":
                      - /placeholder: MM
                    - text: /
                    - textbox "Start Year":
                      - /placeholder: YYYY
                  - group:
                    - textbox "End Date":
                      - /placeholder: DD
                    - text: /
                    - textbox "End Month":
                      - /placeholder: MM
                    - text: /
                    - textbox "End Year":
                      - /placeholder: YYYY
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { size: "mobile" });
        });

        test("Form.DateRangeInput variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Form.DateRangeInput calendar open (mobile)", async ({
            story,
        }) => {
            await story.locators.defaultFormInput.click();
            await expect(story.locators.calendarContainer).toBeVisible();

            await compareScreenshot(story, "calendar-open", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("Form.DateRangeInput variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled");
        });

        test("Form.DateRangeInput variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.defaultFormInput).toMatchAriaSnapshot(`
                - group "Default":
                  - group:
                    - textbox "Start Date":
                      - /placeholder: DD
                      - text: "10"
                    - text: /
                    - textbox "Start Month":
                      - /placeholder: MM
                      - text: "04"
                    - text: /
                    - textbox "Start Year":
                      - /placeholder: YYYY
                      - text: "2026"
                  - group:
                    - textbox "End Date":
                      - /placeholder: DD
                      - text: "16"
                    - text: /
                    - textbox "End Month":
                      - /placeholder: MM
                      - text: "04"
                    - text: /
                    - textbox "End Year":
                      - /placeholder: YYYY
                      - text: "2026"
            `);
            await expect(story.locators.disabledFormInput).toMatchAriaSnapshot(`
                - group "Disabled" [disabled]:
                  - group:
                    - textbox "Start Date" [disabled]:
                      - /placeholder: DD
                      - text: "10"
                    - text: /
                    - textbox "Start Month" [disabled]:
                      - /placeholder: MM
                      - text: "04"
                    - text: /
                    - textbox "Start Year" [disabled]:
                      - /placeholder: YYYY
                      - text: "2026"
                  - group:
                    - textbox "End Date" [disabled]:
                      - /placeholder: DD
                      - text: "16"
                    - text: /
                    - textbox "End Month" [disabled]:
                      - /placeholder: MM
                      - text: "04"
                    - text: /
                    - textbox "End Year" [disabled]:
                      - /placeholder: YYYY
                      - text: "2026"
            `);
            await expect(story.locators.readonlyFormInput).toMatchAriaSnapshot(`
                - group "Readonly":
                  - group:
                    - textbox "Start Date":
                      - /placeholder: DD
                      - text: "10"
                    - text: /
                    - textbox "Start Month":
                      - /placeholder: MM
                      - text: "04"
                    - text: /
                    - textbox "Start Year":
                      - /placeholder: YYYY
                      - text: "2026"
                  - group:
                    - textbox "End Date":
                      - /placeholder: DD
                      - text: "16"
                    - text: /
                    - textbox "End Month":
                      - /placeholder: MM
                      - text: "04"
                    - text: /
                    - textbox "End Year":
                      - /placeholder: YYYY
                      - text: "2026"
            `);
            await expect(story.locators.errorFormInput).toMatchAriaSnapshot(`
                - group "Error":
                  - group:
                    - textbox "Start Date":
                      - /placeholder: DD
                      - text: "10"
                    - text: /
                    - textbox "Start Month":
                      - /placeholder: MM
                      - text: "04"
                    - text: /
                    - textbox "Start Year":
                      - /placeholder: YYYY
                      - text: "2026"
                  - group:
                    - textbox "End Date":
                      - /placeholder: DD
                      - text: "16"
                    - text: /
                    - textbox "End Month":
                      - /placeholder: MM
                      - text: "04"
                    - text: /
                    - textbox "End Year":
                      - /placeholder: YYYY
                      - text: "2026"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", { mode: "dark" });
        });

        test("Form.DateRangeInput variants prefilled (dark mode)", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants");
        });

        test("Standalone variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus states", async ({ story }) => {
            await story.locators.defaultInput.focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultInput,
            });

            await story.locators.disabledInput.click({ force: true });
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
            await story.init("standalone-variants", { mode: "dark" });
        });

        test("Focus states (dark mode)", async ({ story }) => {
            await story.locators.defaultInput.focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultInput,
            });

            await story.locators.disabledInput.click({ force: true });
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
            await story.init("standalone-variants-prefilled");
        });

        test("Standalone variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Range", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mockedTimestamp: fixedTimestamp });
        });

        test("Without selected dates", async ({ story }) => {
            await expect(story.locators.calendarContainer).not.toBeVisible();

            await story.openCalendar();
            await expect(story.locators.selectedStart).toHaveText("none");
            await expect(story.locators.selectedEnd).toHaveText("none");

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("End selected and start hovered", async ({ story }) => {
            await story.openCalendar();
            await story.locators.endField.click();
            await story.getDayCell(20).click();
            await story.getDayCell(15).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Start selected and end hovered", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Start and end selected", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();

            await story.getDayCell(15).blur();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Hover end in-between", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.endField.click();
            await story.getDayCell(12).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Hover end on end", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.endField.click();
            await story.getDayCell(15).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Hover end after end", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.endField.click();
            await story.getDayCell(20).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Hover end before start", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.endField.click();
            await story.getDayCell(8).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Hover start in-between", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.startField.click();
            await story.getDayCell(12).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Hover start on start", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.startField.click();
            await story.getDayCell(10).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Hover start before start", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.startField.click();
            await story.getDayCell(8).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Hover start after end", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();
            await story.locators.startField.click();
            await story.getDayCell(18).hover();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Commit with Done", async ({ story }) => {
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

        test.describe("With maxDate constraint", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("range-with-max-date", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Open", async ({ story }) => {
                await story.openCalendar();

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });
        });

        test.describe("With minDate constraint", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("range-with-min-date", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Open", async ({ story }) => {
                await story.openCalendar();

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });
        });

        test.describe("With disabledDates", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("range-with-disabled-dates", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Open", async ({ story }) => {
                await story.openCalendar();

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe("Week", () => {
        test.describe("Default", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("week-default", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Hover current week", async ({ story }) => {
                await story.openCalendar();
                await story.getWeekCell(1).hover();

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });
        });

        test.describe("Selected", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("week-selected", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("State", async ({ story }) => {
                await story.openCalendar();

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });

            test("And hover other", async ({ story }) => {
                await story.openCalendar();
                await story.getWeekCell(2).hover();
                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });

            test("And hover same", async ({ story }) => {
                await story.openCalendar();
                await story.getWeekCell(1).hover();
                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe("Fixed Range", () => {
        test.describe("Default", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("fixed-range-default", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Hover", async ({ story }) => {
                await story.openCalendar();
                await story.getFixedRangeCell(10).hover();

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });
        });

        test.describe("Selected", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("fixed-range-selected", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("State", async ({ story }) => {
                await story.openCalendar();

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });

            test("And hover overlap before", async ({ story }) => {
                await story.openCalendar();
                await story.getFixedRangeCell(8).hover();
                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });

            test("And hover overlap after", async ({ story }) => {
                await story.openCalendar();
                await story.getFixedRangeCell(12).hover();
                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });

            test("And hover same date", async ({ story }) => {
                await story.openCalendar();
                await story.getFixedRangeCell(10).hover();
                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });
        });
    });
});
