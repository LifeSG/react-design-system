import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "timetable";

    public readonly locators: {
        internal: {
            grid: Locator;
            gridcell: Locator;
            prevDayBtn: Locator;
            nextDayBtn: Locator;
            dateText: Locator;
            recordsResults: Locator;
            lazyLoader: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                grid: page.getByTestId("timetable-container"),
                gridcell: page.getByRole("gridcell"),
                prevDayBtn: page.getByTestId("date-navigator-left-arrow-btn"),
                nextDayBtn: page.getByTestId("date-navigator-right-arrow-btn"),
                dateText: page.getByTestId("date-navigator-date-text"),
                recordsResults: page.getByTestId("timetable-records-results"),
                lazyLoader: page.getByTestId("lazy-loader"),
            },
        };
    }

    public getRowHeaderTitle(rowId: string) {
        return this.page.getByTestId(`${rowId}-row-header-title`);
    }

    public getRowHeaderSubtitle(rowId: string) {
        return this.page.getByTestId(`${rowId}-row-header-subtitle`);
    }

    public getCellByText(text: string) {
        return this.page.getByRole("gridcell", { name: text });
    }

    public async scrollGridToBottom() {
        await this.scrollWithWheelUntil({
            scrollTarget: this.locators.internal.grid,
            deltaY: 300,
            until: async () => {
                return await this.page.evaluate(() => {
                    const el = document.querySelector(
                        '[data-testid="timetable-container"]'
                    );
                    if (!el) return false;
                    return (
                        Math.ceil(el.scrollTop + el.clientHeight) >=
                        el.scrollHeight - 1
                    );
                });
            },
        });
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("TimeTable", () => {
    test.describe("Cell display", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("cell-status-variants");
            });

            test("Cell status variants", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("cell-status-variants", { mode: "dark" });
            });

            test("Cell status variants (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("cell-content");
            });

            test("Cell content", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("cell-content", { mode: "dark" });
            });

            test("Cell content (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("cell-intervals");
            });

            test("Cell intervals", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("custom-cell-colours");
            });

            test("Custom cell colours", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test.describe(() => {
                test.beforeEach(async ({ story }) => {
                    await story.init("row-min-max-time");
                });

                test("Row min and max time", async ({ story }) => {
                    await compareScreenshot(story, "mount");
                });
            });

            test("Hover", async ({ story }) => {
                await test.step("Filled cell without hover background", async () => {
                    const cell = story.getCellByText("Custom filled");
                    await cell.hover();
                    await compareScreenshot(story, "custom-filled", {
                        locator: cell,
                    });
                });

                await test.step("Blocked cell without hover background", async () => {
                    const cell = story.getCellByText("Custom blocked");
                    await cell.hover();

                    await compareScreenshot(story, "custom-blocked", {
                        locator: cell,
                    });
                });

                await test.step("Filled cell with hover background", async () => {
                    const cell = story.getCellByText("Custom hover filled");
                    await cell.hover();
                    await compareScreenshot(story, "custom-hover-filled", {
                        locator: cell,
                    });
                });

                await test.step("Blocked cell with hover background", async () => {
                    const cell = story.getCellByText("Custom hover blocked");
                    await cell.hover();
                    await compareScreenshot(story, "custom-hover-blocked", {
                        locator: cell,
                    });
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("empty");
        });

        test("Empty state", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("empty", { mode: "dark" });
        });

        test("Empty state (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("row-header");
        });

        test("Row header display", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("row-header", { mode: "dark" });
        });

        test("Row header display (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Popover", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("popover");
        });

        test("Row header popover", async ({ story }) => {
            await story.getRowHeaderTitle("row-1").hover();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Cell popover", async ({ story }) => {
            await test.step("Hover over slot cell", async () => {
                await story.getCellByText("Booked").hover();
                await compareScreenshot(story, "cell", {
                    fullscreen: true,
                });
            });

            await test.step("Hover over out of range cell", async () => {
                await story.page.mouse.move(0, 0);

                await story.locators.internal.gridcell.first().hover();
                await compareScreenshot(story, "min", {
                    fullscreen: true,
                });
            });

            await test.step("Hover over out of range cell", async () => {
                await story.page.mouse.move(0, 0);

                await story.locators.internal.gridcell.last().hover();
                await compareScreenshot(story, "max", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("lazy-loading");
        });

        test("Lazy loading on scroll", async ({ story }) => {
            await story.scrollWithWheelUntil({
                scrollTarget: story.locators.internal.grid,
                deltaY: 300,
                until: async () => {
                    return await story.page.evaluate(() => {
                        const el = document.querySelector(
                            '[data-testid="timetable-container"]'
                        );
                        if (!el) return false;
                        return (
                            Math.ceil(el.scrollTop + el.clientHeight) >=
                            el.scrollHeight - 1
                        );
                    });
                },
            });

            await compareScreenshot(story, "state");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("initial-scroll-time");
        });

        test("Initial scroll time", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("accessibility");
        });

        test("Accessibility", async ({ story }) => {
            const grid = story.locators.internal.grid;

            await expect(grid).toMatchAriaSnapshot(`
                - grid "Timetable of resource availability, for 20 May 2026, from 8am to 1pm": 
                    - row "Resource 8am 9am 10am 11am 12pm":
                        - columnheader "Resource"
                    - rowgroup:
                        - row "Resource A":
                            - rowheader "Resource A"
                            - gridcell "8:00AM to 10:00AM Resource A Booked filled"
                            - gridcell "10:00AM to 1:00PM Resource A Available default"
                        - row "Resource B":
                            - rowheader "Resource B Level 2"
                            - gridcell "8:00AM to 1:00PM Resource B Blocked blocked"
                        - row "Resource C":
                            - rowheader "Resource C"
                            - gridcell "8:00AM to 11:00AM Resource C Pending pending"
                            - gridcell "11:00AM to 1:00PM Resource C Disabled disabled"
            `);

            await expect(grid).toHaveAttribute("role", "grid");
            await expect(grid).toHaveAttribute("aria-rowcount", "4"); // 3 rows + 1 header
            await expect(grid).toHaveAttribute("aria-colcount", "21"); // (08:00 - 13:00) * 4 intervals/hr + header column
        });
    });
});
