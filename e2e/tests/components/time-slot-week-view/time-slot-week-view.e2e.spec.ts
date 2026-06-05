import { test as base, expect, Locator, Page } from "@playwright/test";
import { fixedTimestamp } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "time-slot-week-view";

    public readonly locators: {
        internal: {
            leftArrow: Locator;
            rightArrow: Locator;
        };
        selectedValue: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                leftArrow: page.getByTestId("left-arrow-btn"),
                rightArrow: page.getByTestId("right-arrow-btn"),
            },
            selectedValue: page.getByTestId("selected-value"),
        };
    }

    getDayCell(day: number, label = "Available") {
        return this.page
            .getByRole("columnheader", {
                name: new RegExp(`^${day} .*${label}$`),
            })
            .first();
    }

    async moveMouseAway() {
        await this.page.mouse.move(0, 0); // to avoid capturing hover state
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("TimeSlotWeekView", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await test.step("Date selection", async () => {
                await expect(story.locators.selectedValue).toHaveText("none");

                await story.getDayCell(9).click();
                await expect(story.locators.selectedValue).toHaveText(
                    "2026-04-09"
                );
                await compareScreenshot(story, "hovered");

                await story.moveMouseAway();
                await compareScreenshot(story, "selected");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", {
                mockedTimestamp: fixedTimestamp,
                mode: "dark",
            });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await test.step("Date selection", async () => {
                await story.getDayCell(9).click();
                await compareScreenshot(story, "hovered");

                await story.moveMouseAway();
                await compareScreenshot(story, "selected");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", {
                mockedTimestamp: fixedTimestamp,
                size: "mobile",
            });
        });

        test("Default (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled-dates", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Disabled dates", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled-dates", {
                mockedTimestamp: fixedTimestamp,
                mode: "dark",
            });
        });

        test("Disabled dates (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("min-max-dates", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Min max dates", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await test.step("Navigation arrows disabled at boundaries", async () => {
                await expect(story.locators.internal.leftArrow).toBeDisabled();
                await expect(story.locators.internal.rightArrow).toBeDisabled();
            });

            await test.step("Dates outside range are disabled", async () => {
                await expect(story.getDayCell(5, "Unavailable")).toBeVisible();

                await story.getDayCell(5, "Unavailable").click({ force: true });
                await expect(story.locators.selectedValue).toHaveText("none");

                await story.getDayCell(8).click();
                await expect(story.locators.selectedValue).toHaveText(
                    "2026-04-08"
                );
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-navigation-header", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Hide nav header", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("selection-disabled", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Disabled selection", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await test.step("Day headers are not interactive", async () => {
                const dayCell = story.page.getByRole("columnheader").first();
                await expect(dayCell).toBeVisible();

                await expect(dayCell).toHaveAttribute("tabindex", "-1");
            });
        });
    });
});
