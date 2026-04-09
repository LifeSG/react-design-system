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
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mockedTimestamp: fixedTimestamp });
        });

        test("Mount closed", async ({ story }) => {
            await expect(story.locators.calendarContainer).not.toBeVisible();
            await expect(story.locators.selectedValue).toHaveText("none");
            await compareScreenshot(story, "state");
        });

        test("Hovered date", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(15).hover();
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

        test("Selected and hovered date", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.getDayCell(10).hover();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
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
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("selected", { mockedTimestamp: fixedTimestamp });
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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mockedTimestamp: fixedTimestamp });
        });

        test("Commit with Done", async ({ story }) => {
            await story.openCalendar();
            await story.getDayCell(10).click();
            await story.locators.doneButton.click();
            await expect(story.locators.selectedValue).toHaveText(
                /^\d{4}-\d{2}-\d{2}$/
            );
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mockedTimestamp: fixedTimestamp });
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
    });

    test.describe(() => {
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
});
