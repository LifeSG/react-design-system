import {
    test as base,
    expect,
    type Locator,
    type Page,
} from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { fixedTimestamp } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "schedule";

    public readonly locators: {
        internal: {
            dateText: Locator;
            prevServiceBtn: Locator;
            nextServiceBtn: Locator;
            hiddenSlotsIndicator: Locator;
            loadingSpinner: Locator;
        };
        schedule: Locator;
        hiddenServicesResult: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                dateText: page.getByTestId("date-navigator-date-text"),
                prevServiceBtn: page.getByRole("button", {
                    name: "Previous service",
                }),
                nextServiceBtn: page.getByRole("button", {
                    name: "Next service",
                }),
                hiddenSlotsIndicator: page
                    .getByTestId("schedule")
                    .getByText("+1", { exact: true })
                    .first(),
                loadingSpinner: page.getByTestId("loading-spinner"),
            },
            schedule: page.getByTestId("schedule"),
            hiddenServicesResult: page.getByTestId("hidden-services-result"),
        };
    }

    public async switchToWeekView(withSnapshot: boolean = true) {
        const dayViewTrigger = this.page.getByTestId("view-selector");

        await dayViewTrigger.click();

        await expect(dayViewTrigger).toHaveAttribute("data-focused", "true");

        if (withSnapshot) {
            await compareScreenshot(this, "view-selection");
        }
        await this.page.getByRole("option", { name: "Week" }).click();

        await this.page.mouse.click(0, 0);
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
                await story.init("default", {
                    mockedTimestamp: fixedTimestamp,
                });
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
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", {
                    mode: "dark",
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Day view - dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", {
                    mockedTimestamp: fixedTimestamp,
                });
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
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", {
                    mode: "dark",
                    mockedTimestamp: fixedTimestamp,
                });
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
            await story.init("default", {
                size: "mobile",
                mockedTimestamp: fixedTimestamp,
            });
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
                await story.init("empty-content", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Empty content state", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("empty-content", {
                    mode: "dark",
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Empty content state - dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("initial-scroll-time", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Initial scroll time", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-popover", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Custom popover - Day View", async ({ story }) => {
            await test.step("Slot popover on hover", async () => {
                await story.page
                    .getByTestId("schedule")
                    .getByText(/2 \/ 5/)
                    .first()
                    .hover();
                await compareScreenshot(story, "slot-hover");
            });

            await test.step("Empty slot popover on hover", async () => {
                const emptySlot = story.page.getByTestId(
                    "empty-slot-service-a-08:00"
                );
                await emptySlot.hover();
                await compareScreenshot(story, "empty-slot-hover");
            });
        });

        test("Custom popover - Week View", async ({ story }) => {
            await story.switchToWeekView(false);
            await story.page
                .getByTestId("schedule")
                .getByText(/Service A/)
                .first()
                .hover();
            await compareScreenshot(story, "slot-hover");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading");
        });

        test("Loading - day view", async ({ story }) => {
            await compareScreenshot(story, "state", {
                mask: [story.locators.internal.loadingSpinner],
            });
        });

        test("Loading - week view", async ({ story }) => {
            await story.switchToWeekView(false);
            await compareScreenshot(story, "state", {
                mask: [story.locators.internal.loadingSpinner],
            });
        });
    });
});
