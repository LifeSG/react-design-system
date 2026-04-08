import { test as base, expect, Locator, Page } from "@playwright/test";
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
            await story.init("default");
        });

        test("Single date calendar states", async ({ story }) => {
            await test.step("Mount - calendar closed", async () => {
                await expect(
                    story.locators.calendarContainer
                ).not.toBeVisible();
                await expect(story.locators.selectedValue).toHaveText("none");
                await compareScreenshot(story, "mount-closed");
            });

            await test.step("Open + hovered date", async () => {
                await story.openCalendar();
                await story.getDayCell(15).hover();
                await compareScreenshot(story, "single-hovered", {
                    fullscreen: true,
                });
            });

            await test.step("Selected date", async () => {
                await story.getDayCell(10).click();

                // Moving the focus to the container to avoid the hover state
                // from interfering with the screenshot. Blur is not working
                // as expected, so using hover on the container as a workaround.
                await story.locators.dateInput.hover();

                await compareScreenshot(story, "single-selected", {
                    fullscreen: true,
                });
            });

            await test.step("Selected + hovered date", async () => {
                await story.getDayCell(10).hover();
                await compareScreenshot(story, "single-selected-hovered", {
                    fullscreen: true,
                });
            });

            await test.step("Commit with Done", async () => {
                await story.locators.doneButton.click();
                await expect(story.locators.selectedValue).toHaveText(
                    /^\d{4}-\d{2}-\d{2}$/
                );
            });

            await test.step("Cancel restores initial value", async () => {
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
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("selected");
        });

        test("Single date month and year views", async ({ story }) => {
            await story.openCalendar();

            await story.monthButton.click();
            await expect(story.getMonthOption("January")).toBeVisible();
            await compareScreenshot(story, "single-month-view", {
                fullscreen: true,
            });

            await story.locators.cancelButton.click();

            await story.yearButton.click();
            await expect(story.getYearOption("2026")).toBeVisible();
            await compareScreenshot(story, "single-year-view", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled");
        });

        test("Disabled state", async ({ story }) => {
            await expect(story.locators.dateInput).toHaveAttribute(
                "aria-disabled",
                "true"
            );
            await expect(story.locators.calendarContainer).not.toBeVisible();

            await compareScreenshot(story, "disabled-on-mount");

            await story.locators.dateInput.click({ force: true });
            await expect(story.locators.calendarContainer).not.toBeVisible();
        });
    });
});
