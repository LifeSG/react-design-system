import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "data-table";

    public readonly locators: {
        internal: {
            selectAllCheckbox: Locator;
            selectedCountLabel: Locator;
            clearSelectionButton: Locator;
            emptyView: Locator;
        };
        dataTable: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                selectAllCheckbox: page.getByRole("checkbox", {
                    name: "Select all rows",
                }),
                emptyView: page.getByText("No matching rows"),
                selectedCountLabel: page.getByText(/ item(s)? selected$/),
                clearSelectionButton: page.getByRole("button", {
                    name: /Clear selection of/,
                }),
            },
            dataTable: page.getByTestId("data-table"),
        };
    }

    public getRowCheckbox(rowId: string) {
        return this.page
            .getByTestId(`data-table-row-${rowId}-selection`)
            .getByRole("checkbox");
    }

    public getHeaderCell(fieldKey: string) {
        return this.page.getByTestId(`data-table-header-${fieldKey}`);
    }

    public getHeaderSortArrow(fieldKey: string, direction: "up" | "down") {
        return this.page.getByTestId(
            `data-table-header-${fieldKey}-arrow${direction}`
        );
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, mountStory) => {
        const story = new StoryPage(page);
        await mountStory(story);
    },
});

test.describe("DataTable", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await expect(story.locators.dataTable).toMatchAriaSnapshot(`
                - table:
                    - rowgroup:
                        - row "Title Status Description Time":
                            - columnheader "Title":
                                - paragraph: Title
                            - columnheader "Status":
                                - paragraph: Status
                            - columnheader "Description":
                                - paragraph: Description
                            - columnheader "Time":
                                - paragraph: Time
                    - rowgroup:
                        - row "Title 1 Completed Test 07/Aug/2023 9.30pm":
                            - cell "Title 1":
                                - paragraph: Title 1
                            - cell "Completed":
                                - paragraph: Completed
                            - cell "Test":
                                - paragraph: Test
                            - cell "07/Aug/2023 9.30pm":
                                - paragraph: 07/Aug/2023 9.30pm
                        - row "Title 2 Pending Cells containing longer data may be truncated so that only a maximum of 2 lines are visible 07/Aug/2023 10.30pm":
                            - cell "Title 2":
                                - paragraph: Title 2
                            - cell "Pending":
                                - paragraph: Pending
                            - cell "Cells containing longer data may be truncated so that only a maximum of 2 lines are visible":
                                - paragraph: Cells containing longer data may be truncated so that only a maximum of 2 lines are visible
                            - cell "07/Aug/2023 10.30pm":
                                - paragraph: 07/Aug/2023 10.30pm
            `);

            await compareScreenshot(story, "mount");
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { mode: "dark" });
            });

            test("Default Dark Mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("empty");
        });

        test("Empty State", async ({ story }) => {
            await expect(story.locators.internal.emptyView).toBeVisible();
            await compareScreenshot(story, "mount");
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("empty", { mode: "dark" });
            });

            test("Empty State Dark Mode", async ({ story }) => {
                await expect(story.locators.internal.emptyView).toBeVisible();
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("alternating-rows");
        });

        test("Alternating Rows", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("alternating-rows", { mode: "dark" });
            });

            test("Alternating Rows Dark Mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sort-indicators");
        });

        test("Sort indicators", async ({ story }) => {
            await expect(story.getHeaderSortArrow("colA", "up")).toBeVisible();
            await expect(story.getHeaderCell("colA")).toMatchAriaSnapshot(`
                - columnheader "Column A Sort by descending order"    
            `);

            await expect(
                story.getHeaderSortArrow("colB", "down")
            ).toBeVisible();
            await expect(story.getHeaderCell("colB")).toMatchAriaSnapshot(`
                - columnheader "Column B Sort by ascending order"    
            `);

            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Multi Select", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("multi-select");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Selection", async ({ story }) => {
            const firstRowCheckbox = story.getRowCheckbox("1");
            const secondRowCheckbox = story.getRowCheckbox("2");
            const thirdRowCheckbox = story.getRowCheckbox("3");

            await test.step("Select one row", async () => {
                await firstRowCheckbox.click();
                await story.getHeaderCell("title").hover();

                await expect(firstRowCheckbox).toBeChecked();

                await compareScreenshot(story, "one-row");
            });

            await test.step("Select all rows from header checkbox", async () => {
                await story.locators.internal.selectAllCheckbox.click();
                await story.locators.internal.selectAllCheckbox.blur();

                await expect(firstRowCheckbox).toBeChecked();
                await expect(secondRowCheckbox).toBeChecked();
                await expect(thirdRowCheckbox).toBeChecked();
                await compareScreenshot(story, "all-rows");
            });

            await story.locators.internal.selectAllCheckbox.click();

            await expect(firstRowCheckbox).not.toBeChecked();
            await expect(secondRowCheckbox).not.toBeChecked();
            await expect(thirdRowCheckbox).not.toBeChecked();
        });

        test("Hover Checkbox", async ({ story }) => {
            const firstRowCheckbox = story.getRowCheckbox("1");

            await test.step("Select one row", async () => {
                await firstRowCheckbox.hover();

                await compareScreenshot(story, "not-selected");

                await firstRowCheckbox.click();

                await compareScreenshot(story, "selected");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("disabled-checkboxes");
            });

            test("Disabled checkboxes", async ({ story }) => {
                const firstRowCheckbox = story.getRowCheckbox("1");
                const secondRowCheckbox = story.getRowCheckbox("2");
                const thirdRowCheckbox = story.getRowCheckbox("3");

                await expect(firstRowCheckbox).toBeDisabled();
                await expect(secondRowCheckbox).toBeDisabled();
                await expect(thirdRowCheckbox).toBeEnabled();

                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("multi-select-empty");
            });

            test("Empty", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("multi-select", { mode: "dark" });
            });

            test("Default Dark Mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("ActionBar", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("action-bar");
        });

        test("Default", async ({ story }) => {
            const firstRowCheckbox = story.getRowCheckbox("1");
            const secondRowCheckbox = story.getRowCheckbox("2");
            const thirdRowCheckbox = story.getRowCheckbox("3");

            await firstRowCheckbox.click();
            await expect(
                story.locators.internal.selectedCountLabel
            ).toContainText("1 item selected");

            await story.locators.internal.selectAllCheckbox.click();
            await expect(
                story.locators.internal.selectedCountLabel
            ).toContainText("3 items selected");

            await story.locators.internal.selectAllCheckbox.blur();

            await compareScreenshot(story, "state");

            await story.locators.internal.clearSelectionButton.click();

            await expect(firstRowCheckbox).not.toBeChecked();
            await expect(secondRowCheckbox).not.toBeChecked();
            await expect(thirdRowCheckbox).not.toBeChecked();
            await expect(
                story.locators.internal.selectedCountLabel
            ).not.toBeVisible();
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("action-bar", { mode: "dark" });
            });

            test("Default Dark Mode", async ({ story }) => {
                const firstRowCheckbox = story.getRowCheckbox("1");
                const secondRowCheckbox = story.getRowCheckbox("2");
                const thirdRowCheckbox = story.getRowCheckbox("3");

                await firstRowCheckbox.click();
                await expect(
                    story.locators.internal.selectedCountLabel
                ).toContainText("1 item selected");

                await story.locators.internal.selectAllCheckbox.click();
                await expect(
                    story.locators.internal.selectedCountLabel
                ).toContainText("3 items selected");

                await story.locators.internal.selectAllCheckbox.blur();

                await compareScreenshot(story, "state");

                await story.locators.internal.clearSelectionButton.click();

                await expect(firstRowCheckbox).not.toBeChecked();
                await expect(secondRowCheckbox).not.toBeChecked();
                await expect(thirdRowCheckbox).not.toBeChecked();
                await expect(
                    story.locators.internal.selectedCountLabel
                ).not.toBeVisible();
            });
        });

        test.describe("Overflow with Long Items", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("action-bar-overflow-with-long-items");
            });

            test("Floating", async ({ story }) => {
                const firstRowCheckbox = story.getRowCheckbox("1");

                await firstRowCheckbox.click();

                await story.page.keyboard.press("PageDown");

                await compareScreenshot(story, "state", {
                    locator: story.locators.dataTable,
                });
            });

            test("Docking", async ({ story }) => {
                const firstRowCheckbox = story.getRowCheckbox("1");

                await firstRowCheckbox.click();

                await story.page.keyboard.press("End");

                await compareScreenshot(story, "state", {
                    locator: story.locators.dataTable,
                });
            });
        });

        test.describe("Overflow with Max Height", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("action-bar-overflow-with-max-height");
            });

            test("Floating", async ({ story }) => {
                const firstRowCheckbox = story.getRowCheckbox("1");

                await firstRowCheckbox.click();

                await story.page.keyboard.press("PageDown");

                await compareScreenshot(story, "state");
            });

            test("Docking", async ({ story }) => {
                const firstRowCheckbox = story.getRowCheckbox("1");

                await firstRowCheckbox.click();

                await story.page.keyboard.press("End");

                await compareScreenshot(story, "state");
            });
        });
    });
});
