import { test as base, expect, Locator, Page } from "@playwright/test";
import { fixedTimestamp, modes } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "calendar";

    public readonly locators: {
        component: {
            content: Locator;
        };
        calendar: Locator;
        selectedValue: Locator;
        selectedValues: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
                content: page.getByTestId("calendar-content"),
            },
            calendar: page.getByTestId("calendar"),
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
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-single", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Default", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-single", {
                    mockedTimestamp: fixedTimestamp,
                    mode: "dark",
                });
            });

            test("Default (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-single", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Selected", async ({ story }) => {
                await story.getDayCell(15).click();
                await story.page.mouse.move(0, 0); // To dismiss any potential hover states

                await compareScreenshot(story, "selected");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-single", {
                    mockedTimestamp: fixedTimestamp,
                    mode: "dark",
                });
            });

            test("Selected (dark mode)", async ({ story }) => {
                await story.getDayCell(15).click();
                await story.page.mouse.move(0, 0); // To dismiss any potential hover states

                await compareScreenshot(story, "selected");
            });
        });
    });

    test.describe("Multi Variant", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-multi", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Default", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-multi", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Selected", async ({ story }) => {
                await story.getDayCell(10).click();
                await story.getDayCell(15).click();

                await compareScreenshot(story, "selected");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("multi-limited-selection", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("With maxSelectable", async ({ story }) => {
                await story.getDayCell(10).click();
                await story.getDayCell(11).click();
                await story.getDayCell(12).click();
                await story.getDayCell(13).click();
                await story.page.mouse.move(0, 0); // To dismiss any potential hover states

                await compareScreenshot(story, "multi-limit");
            });
        });
    });

    test.describe("Disabled Dates", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("disabled-dates", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Default", async ({ story }) => {
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

            test("Dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Min Max Dates", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("min-max-dates", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Default", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("min-max-dates", {
                    mockedTimestamp: fixedTimestamp,
                    mode: "dark",
                });
            });

            test("Dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("active-month-only", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Active Month Only", async ({ story }) => {
            await expect(
                story.page.getByRole("gridcell", {
                    name: /March 2026/i,
                })
            ).toHaveCount(0);

            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-border", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("No Border Variant", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-single", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Month view", async ({ story }) => {
            await story.page
                .getByRole("button", { name: "April, Select month" })
                .click();

            await compareScreenshot(story, "state");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default-single", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Year view", async ({ story }) => {
            await story.page
                .getByRole("button", { name: "2026, Select year" })
                .click();

            await compareScreenshot(story, "state");
        });
    });

    test.describe("Hover states", () => {
        modes.forEach((mode) => {
            test.describe(`${mode} mode`, () => {
                test.describe(() => {
                    test.beforeEach(async ({ story }) => {
                        await story.init("default-single", {
                            mockedTimestamp: fixedTimestamp,
                            mode,
                        });
                    });

                    test("Active date", async ({ story }) => {
                        await story.getDayCell(15).hover();

                        await compareScreenshot(story, "state", {
                            locator: story.getDayCell(15),
                        });
                    });

                    test("Today date", async ({ story }) => {
                        await story.getDayCell(8).hover();

                        await compareScreenshot(story, "state", {
                            locator: story.getDayCell(8),
                        });
                    });

                    test("Selected date", async ({ story }) => {
                        await story.getDayCell(15).click();
                        await story.getDayCell(15).hover();

                        await compareScreenshot(story, "state", {
                            locator: story.getDayCell(15),
                        });
                    });

                    test("Previous month date", async ({ story }) => {
                        const locator = story.page.getByRole("gridcell", {
                            name: "31 March 2026 Tuesday, Available",
                        });

                        await locator.hover();

                        await compareScreenshot(story, "state", { locator });
                    });
                });

                test.describe(() => {
                    test.beforeEach(async ({ story }) => {
                        await story.init("disabled-dates", {
                            mockedTimestamp: fixedTimestamp,
                            mode,
                        });
                    });

                    test("Disabled date", async ({ story }) => {
                        const locator = story.getDayCell(15, "Unavailable");

                        await locator.hover({ force: true });

                        await compareScreenshot(story, "state", { locator });
                    });
                });

                test.describe(() => {
                    test.beforeEach(async ({ story }) => {
                        await story.init("disabled-dates-selectable", {
                            mockedTimestamp: fixedTimestamp,
                            mode,
                        });
                    });

                    test("Selectable disabled date", async ({ story }) => {
                        const locator = story.getDayCell(15, "Unavailable");

                        await locator.hover();

                        await compareScreenshot(story, "state", { locator });
                    });
                });
            });
        });
    });

    test.describe("Focus states", () => {
        modes.forEach((mode) => {
            test.describe(`${mode} mode`, () => {
                test.describe(() => {
                    test.beforeEach(async ({ story }) => {
                        await story.init("default-single", {
                            mockedTimestamp: fixedTimestamp,
                            mode,
                        });
                    });

                    test("Active date", async ({ story }) => {
                        await story.getDayCell(15).focus();

                        await compareScreenshot(story, "state", {
                            locator: story.getDayCell(15),
                        });
                    });

                    test("Today date", async ({ story }) => {
                        await story.getDayCell(8).focus();

                        await compareScreenshot(story, "state", {
                            locator: story.getDayCell(8),
                        });
                    });

                    test("Selected date", async ({ story }) => {
                        await story.getDayCell(15).click();
                        await story
                            .getDayCell(15)
                            .click({ position: { x: 0, y: 0 } }); // Deselect cell
                        await story.getDayCell(15).focus();

                        await compareScreenshot(story, "state", {
                            locator: story.getDayCell(15),
                        });
                    });
                });
            });
        });
    });
});
