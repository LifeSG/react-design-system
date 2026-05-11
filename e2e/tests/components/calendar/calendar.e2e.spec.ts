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
        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-single", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Default", async ({ story }) => {
                await expect(story.locators.selectedValue).toHaveText("none");

                await compareScreenshot(story, "mount");
            });

            test("Selection", async ({ story }) => {
                await expect(story.locators.selectedValue).toHaveText("none");
                await story.getDayCell(15).click();

                await compareScreenshot(story, "selected");
            });

            test("Keyboard interaction", async ({ story }) => {
                await story.getDayCell(14).focus();
                await story.page.keyboard.press("ArrowRight");
                await expect(story.getDayCell(15)).toBeFocused();
                await story.page.keyboard.press("Enter");

                await expect(story.locators.selectedValue).toHaveText(
                    "2026-04-15"
                );
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-single", {
                    mockedTimestamp: fixedTimestamp,
                    mode: "dark",
                });
            });

            test("Dark Mode", async ({ story }) => {
                await expect(story.locators.selectedValue).toHaveText("none");

                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Multi Variant", () => {
        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default-multi", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Default", async ({ story }) => {
                await expect(story.locators.selectedValues).toHaveText("none");

                await compareScreenshot(story, "mount");
            });

            test("Selection", async ({ story }) => {
                await story.getDayCell(10).click();
                await story.getDayCell(15).click();

                await expect(story.locators.selectedValues).toHaveText(
                    "2026-04-10,2026-04-15"
                );

                await compareScreenshot(story, "selected");
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

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("multi-limited-selection", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("With limited selection", async ({ story }) => {
                await story.getDayCell(10).click();
                await story.getDayCell(11).click();
                await story.getDayCell(12).click();
                await story.getDayCell(13).click();
                await story.getDayCell(13).blur();

                await expect(story.locators.selectedValues).toHaveText(
                    "2026-04-10,2026-04-11,2026-04-12"
                );

                await compareScreenshot(story, "multi-limit");
            });
        });
    });

    test.describe("Disabled Dates", () => {
        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("disabled-dates", {
                    mockedTimestamp: fixedTimestamp,
                });
            });

            test("Default", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Selection", async ({ story }) => {
                await expect(
                    story.getDayCell(10, "Unavailable")
                ).toBeDisabled();
                await story
                    .getDayCell(10, "Unavailable")
                    .click({ force: true });
                await expect(story.locators.selectedValue).toHaveText("none");

                await story.getDayCell(11).click();
                await expect(story.locators.selectedValue).toHaveText(
                    "2026-04-11"
                );
            });

            test("Keyboard interaction", async ({ story }) => {
                await story.getDayCell(14).focus();
                await story.page.keyboard.press("ArrowRight");
                await expect(story.getDayCell(15, "Unavailable")).toBeFocused();
                await story.page.keyboard.press("Enter");

                await expect(story.locators.selectedValue).toHaveText("none");
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("disabled-dates", {
                    mockedTimestamp: fixedTimestamp,
                    mode: "dark",
                });
            });

            test("Dark Mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Min Max Dates", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("min-max-dates", {
                mockedTimestamp: fixedTimestamp,
            });
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Selection", async ({ story }) => {
            await expect(story.getDayCell(9, "Unavailable")).toBeDisabled();
            await story.getDayCell(9, "Unavailable").click({ force: true });
            await expect(story.locators.selectedValue).toHaveText("none");

            await expect(story.getDayCell(21, "Unavailable")).toBeDisabled();
            await story.getDayCell(21, "Unavailable").click({ force: true });
            await expect(story.locators.selectedValue).toHaveText("none");

            await story.getDayCell(10).click();
            await expect(story.locators.selectedValue).toHaveText("2026-04-10");

            await compareScreenshot(story, "selected");
        });

        test("Keyboard interaction", async ({ story }) => {
            await story.getDayCell(10).focus();
            await story.page.keyboard.press("ArrowLeft");
            await expect(story.getDayCell(10)).toBeFocused();
            await story.page.keyboard.press("ArrowRight");
            await expect(story.getDayCell(11)).toBeFocused();
            await story.page.keyboard.press("Enter");

            await expect(story.locators.selectedValue).toHaveText("2026-04-11");
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

    test.describe("Focused & Hovered States", () => {
        modes.forEach((mode) => {
            test.describe(`${mode} mode`, () => {
                test.describe(() => {
                    test.beforeEach(async ({ story }) => {
                        await story.init("default-single", {
                            mockedTimestamp: fixedTimestamp,
                            mode,
                        });
                    });

                    test("Focus on active date", async ({ story }) => {
                        await story.getDayCell(15).focus();

                        await compareScreenshot(story, "state");
                    });

                    test("Focus on today date", async ({ story }) => {
                        await story.getDayCell(8).focus();

                        await compareScreenshot(story, "state");
                    });

                    test("Focus on selected date", async ({ story }) => {
                        await story.getDayCell(15).click();
                        await story.getDayCell(15).focus();

                        await compareScreenshot(story, "state");
                    });

                    test("Hover on previous month date", async ({ story }) => {
                        await story.page
                            .getByRole("gridcell", {
                                name: "31 March 2026 Tuesday, Available",
                            })
                            .first()
                            .hover();

                        await compareScreenshot(story, "state");
                    });
                });

                test.describe(() => {
                    test.beforeEach(async ({ story }) => {
                        await story.init("disabled-dates", {
                            mockedTimestamp: fixedTimestamp,
                            mode,
                        });
                    });

                    test("Focus on disabled date", async ({ story }) => {
                        await story.getDayCell(15, "Unavailable").focus();

                        await compareScreenshot(story, "state");
                    });

                    test("Hover on disabled date", async ({ story }) => {
                        await story
                            .getDayCell(15, "Unavailable")
                            .hover({ force: true });

                        await compareScreenshot(story, "state");
                    });
                });
            });
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
});
