import { test as base, expect, Locator, Page } from "@playwright/test";
import { fixedTimestamp } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "calendar";

    public readonly locators: {
        calendarContent: Locator;
        defaultSingle: Locator;
        defaultMulti: Locator;
        disabledDates: Locator;
        minMaxBoundaries: Locator;
        multiSelectLimits: Locator;
        activeMonthOnly: Locator;
        variantBordered: Locator;
        variantNoBorder: Locator;
        selectedValue: Locator;
        selectedValues: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            calendarContent: page.getByTestId("calendar-content"),
            defaultSingle: page.getByTestId("calendar-default-single"),
            defaultMulti: page.getByTestId("calendar-default-multi"),
            disabledDates: page.getByTestId("calendar-disabled-dates"),
            minMaxBoundaries: page.getByTestId("calendar-min-max-boundaries"),
            multiSelectLimits: page.getByTestId("calendar-multi-select-limits"),
            activeMonthOnly: page.getByTestId("calendar-active-month-only"),
            variantBordered: page.getByTestId("calendar-variant-bordered"),
            variantNoBorder: page.getByTestId("calendar-variant-no-border"),
            selectedValue: page.getByTestId("selected-value"),
            selectedValues: page.getByTestId("selected-values"),
        };
    }

    public getDayCell(day: number, label = "Available") {
        return this.page
            .getByRole("gridcell", {
                name: new RegExp(`^${day} .*${label}$`),
            })
            .first();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, run) => {
        const story = new StoryPage(page);
        await run(story);
    },
});

test.describe("Calendar", () => {
    test.describe("Single Variant", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-single", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Default", async ({ story }) => {
            await expect(story.locators.selectedValue).toHaveText("none");

            await compareScreenshot(story, "mount", {
                locator: story.locators.defaultSingle,
            });
        });

        test("Selected", async ({ story }) => {
            await expect(story.locators.selectedValue).toHaveText("none");
            await story.getDayCell(15).click();

            await compareScreenshot(story, "mount", {
                locator: story.locators.defaultSingle,
            });
        });

        test("Keyboard interaction", async ({ story }) => {
            await story.getDayCell(14).focus();
            await story.page.keyboard.press("ArrowRight");
            await expect(story.getDayCell(15)).toBeFocused();
            await story.page.keyboard.press("Enter");

            await expect(story.locators.selectedValue).toHaveText("2026-04-15");
        });
    });

    test.describe("Multi Variant", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-multi", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Default", async ({ story }) => {
            await expect(story.locators.selectedValues).toHaveText("none");

            await compareScreenshot(story, "mount");
        });

        test("Selected", async ({ story }) => {
            await story.getDayCell(10).click();
            await story.getDayCell(15).click();

            await expect(story.locators.selectedValues).toHaveText(
                "2026-04-10,2026-04-15"
            );

            await compareScreenshot(story, "mount");
        });

        test("Keyboard interaction", async ({ story }) => {
            await story.getDayCell(14).focus();
            await story.page.keyboard.press("ArrowRight");
            await expect(story.getDayCell(15)).toBeFocused();
            await story.page.keyboard.press("Enter");

            await expect(story.locators.selectedValues).toHaveText(
                "2026-04-15"
            );
        });
    });
});
