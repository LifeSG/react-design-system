import {
    test as base,
    expect,
    type Locator,
    type Page,
} from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "schedule";

    public readonly locators: {
        schedule: Locator;
        prevDayBtn: Locator;
        nextDayBtn: Locator;
        dateText: Locator;
        todayBtn: Locator;
        prevServiceBtn: Locator;
        nextServiceBtn: Locator;
        emptySlot: Locator;
        emptySlotClickResult: Locator;
        hiddenServicesResult: Locator;
        hiddenSlotsIndicator: Locator;
        loadingSpinner: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            schedule: page.getByTestId("schedule"),
            prevDayBtn: page.getByTestId("date-navigator-left-arrow-btn"),
            nextDayBtn: page.getByTestId("date-navigator-right-arrow-btn"),
            dateText: page.getByTestId("date-navigator-date-text"),
            todayBtn: page.getByRole("button", { name: "Today" }),
            prevServiceBtn: page.getByRole("button", {
                name: "Previous service",
            }),
            nextServiceBtn: page.getByRole("button", { name: "Next service" }),
            emptySlot: page.getByTestId("empty-slot-service-a-08:00"),
            emptySlotClickResult: page.getByTestId("empty-slot-click-result"),
            hiddenServicesResult: page.getByTestId("hidden-services-result"),
            // "+1" text rendered by the hidden-slots indicator in week view
            hiddenSlotsIndicator: page
                .getByTestId("schedule")
                .getByText("+1", { exact: true })
                .first(),
            loadingSpinner: page.getByTestId("schedule").locator("svg"),
        };
    }

    /** Switches the header view selector from Day to Week view. */
    public async switchToWeekView() {
        await this.page
            .locator('[data-id="schedule-header"]')
            .getByText("Day", { exact: true })
            .click();
        await this.page.getByRole("option", { name: "Week" }).click();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Schedule", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.page.clock.install({
                time: new Date("2026-06-01T09:30:00"),
            });
            await story.init("default");
        });

        test("Day view", async ({ story }) => {
            await test.step("Day view", async () => {
                await compareScreenshot(story, "mount");
            });

            await test.step("Day view open calendar", async () => {
                await story.locators.dateText.click();
                await compareScreenshot(story, "calendar-open");

                await story.page.keyboard.press("Escape");
            });

            await test.step("Navigate to next day", async () => {
                await story.locators.nextDayBtn.click();
                await compareScreenshot(story, "next-day");
            });

            await test.step("Navigate back to previous day", async () => {
                await story.locators.prevDayBtn.click();
                await story.locators.prevDayBtn.click();
                await compareScreenshot(story, "prev-day");
            });

            await test.step("Empty slot click", async () => {
                await story.locators.emptySlot.click();
                await expect(story.locators.emptySlotClickResult).toBeVisible();
                await expect(story.locators.emptySlotClickResult).toContainText(
                    '"startTime":"08:00"'
                );
                await expect(story.locators.emptySlotClickResult).toContainText(
                    '"endTime":"08:30"'
                );
                await expect(story.locators.emptySlotClickResult).toContainText(
                    '"name":"Service A"'
                );
            });
        });
    });
});
