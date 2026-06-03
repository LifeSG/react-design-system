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
        internal: {
            prevDayBtn: Locator;
            nextDayBtn: Locator;
            dateText: Locator;
            todayBtn: Locator;
            prevServiceBtn: Locator;
            nextServiceBtn: Locator;
            emptySlot: Locator;
            hiddenSlotsIndicator: Locator;
            loadingSpinner: Locator;
        };
        schedule: Locator;
        emptySlotClickResult: Locator;
        hiddenServicesResult: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                prevDayBtn: page.getByTestId("date-navigator-left-arrow-btn"),
                nextDayBtn: page.getByTestId("date-navigator-right-arrow-btn"),
                dateText: page.getByTestId("date-navigator-date-text"),
                todayBtn: page.getByRole("button", { name: "Today" }),
                prevServiceBtn: page.getByRole("button", {
                    name: "Previous service",
                }),
                nextServiceBtn: page.getByRole("button", {
                    name: "Next service",
                }),
                emptySlot: page.getByTestId("empty-slot-service-a-08:00"),
                hiddenSlotsIndicator: page
                    .getByTestId("schedule")
                    .getByText("+1", { exact: true })
                    .first(),
                loadingSpinner: page.getByTestId("schedule").locator("svg"),
            },
            schedule: page.getByTestId("schedule"),
            emptySlotClickResult: page.getByTestId("empty-slot-click-result"),
            hiddenServicesResult: page.getByTestId("hidden-services-result"),
        };
    }

    public async switchToWeekView() {
        await this.page
            .locator('[data-id="schedule-header"]')
            .getByText("Day", { exact: true })
            .click();
        await compareScreenshot(this, "view-selection");
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
                    await story.locators.internal.dateText.click();
                    await compareScreenshot(story, "calendar-open");

                    await story.page.keyboard.press("Escape");
                });

                await test.step("Navigate to next day", async () => {
                    await story.locators.internal.nextDayBtn.click();
                    await compareScreenshot(story, "next-day");
                });

                await test.step("Navigate back to previous day", async () => {
                    await story.locators.internal.prevDayBtn.click();
                    await story.locators.internal.prevDayBtn.click();
                    await compareScreenshot(story, "prev-day");
                });

                await test.step("Empty slot click", async () => {
                    await story.locators.internal.emptySlot.click();
                    await expect(
                        story.locators.emptySlotClickResult
                    ).toBeVisible();
                    await expect(
                        story.locators.emptySlotClickResult
                    ).toContainText('"startTime":"08:00"');
                    await expect(
                        story.locators.emptySlotClickResult
                    ).toContainText('"endTime":"08:30"');
                    await expect(
                        story.locators.emptySlotClickResult
                    ).toContainText('"name":"Service A"');
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.page.clock.install({
                    time: new Date("2026-06-01T09:30:00"),
                });
                await story.init("default", { mode: "dark" });
            });

            test("Day view - dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.page.clock.install({
                    time: new Date("2026-06-01T09:30:00"),
                });
                await story.init("default");
            });

            test("Week view", async ({ story }) => {
                await test.step("Week view switch", async () => {
                    await story.switchToWeekView();
                    await compareScreenshot(story, "mount");
                });

                await test.step("Hidden slots indicator is visible", async () => {
                    await expect(
                        story.locators.internal.hiddenSlotsIndicator
                    ).toBeVisible();
                    await story.locators.internal.hiddenSlotsIndicator.hover();
                    await compareScreenshot(
                        story,
                        "hidden-slots-indicator-hover"
                    );
                });

                await test.step("Navigate to next week", async () => {
                    await story.locators.internal.nextDayBtn.click();
                    await compareScreenshot(story, "next-week");
                });

                await test.step("Navigate back to previous week", async () => {
                    await story.locators.internal.prevDayBtn.click();
                    await story.locators.internal.prevDayBtn.click();
                    await compareScreenshot(story, "prev-week");
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.page.clock.install({
                    time: new Date("2026-06-01T09:30:00"),
                });
                await story.init("default", { mode: "dark" });
            });

            test("Week view - dark mode", async ({ story }) => {
                await test.step("Week view switch", async () => {
                    await story.switchToWeekView();
                    await compareScreenshot(story, "mount");
                });

                await test.step("Hidden slots indicator is visible", async () => {
                    await expect(
                        story.locators.internal.hiddenSlotsIndicator
                    ).toBeVisible();
                    await story.locators.internal.hiddenSlotsIndicator.hover();
                    await compareScreenshot(
                        story,
                        "hidden-slots-indicator-hover"
                    );
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.page.clock.install({
                time: new Date("2026-06-01T09:30:00"),
            });
            await story.init("default", { size: "mobile" });
        });

        test("Mobile view", async ({ story }) => {
            await test.step("Initial state shows first service with next arrow", async () => {
                await compareScreenshot(story, "first-service");
            });

            await test.step("Navigate to next service", async () => {
                await story.locators.internal.nextServiceBtn.click();
                await expect(
                    story.locators.internal.prevServiceBtn
                ).toBeVisible();
                await compareScreenshot(story, "middle-service");
            });

            await test.step("Navigate to last service", async () => {
                await story.locators.internal.nextServiceBtn.click();
                await story.locators.internal.nextServiceBtn.click();
                await expect(
                    story.locators.internal.prevServiceBtn
                ).toBeVisible();
                await compareScreenshot(story, "last-service");
            });
        });
    });

    test.describe(() => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("empty-content");
            });

            test("Empty content state", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("empty-content", { mode: "dark" });
            });

            test("Empty content state - dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });
            });
        });
    });
});
