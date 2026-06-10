import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "nested-select";

    public readonly locators: {
        nestedSelectDefault: Locator;
        nestedSelectDefaultBase: Locator;
        nestedSelectDisabled: Locator;
        nestedSelectDisabledBase: Locator;
        nestedSelectReadonly: Locator;
        nestedSelectReadonlyBase: Locator;
        nestedSelectError: Locator;
        nestedSelectErrorBase: Locator;
        internal: {
            selector: Locator;
            dropdownContainer: Locator;
            dropdownList: Locator;
            searchInput: Locator;
            listItems: Locator;
            noResults: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            nestedSelectDefault: page.getByTestId("form-nested-select-default"),
            nestedSelectDefaultBase: page.getByTestId(
                "form-nested-select-default-base"
            ),
            nestedSelectDisabled: page.getByTestId(
                "form-nested-select-disabled"
            ),
            nestedSelectDisabledBase: page.getByTestId(
                "form-nested-select-disabled-base"
            ),
            nestedSelectReadonly: page.getByTestId(
                "form-nested-select-readonly"
            ),
            nestedSelectReadonlyBase: page.getByTestId(
                "form-nested-select-readonly-base"
            ),
            nestedSelectError: page.getByTestId("form-nested-select-error"),
            nestedSelectErrorBase: page.getByTestId(
                "form-nested-select-error-base"
            ),
            internal: {
                selector: page.getByTestId("selector"),
                dropdownContainer: page.getByTestId("dropdown-container"),
                dropdownList: page.getByTestId("nested-dropdown-list"),
                searchInput: page.getByTestId("search-input"),
                listItems: page.getByTestId("list-item"),
                noResults: page.getByTestId("list-no-results"),
            },
        };
    }

    public getTreeItem(name: string) {
        return this.locators.internal.listItems
            .filter({ has: this.page.getByText(name, { exact: true }) })
            .first();
    }

    public async openDropdown() {
        await this.locators.nestedSelectDefaultBase.click();
        await expect(this.locators.internal.dropdownContainer).toBeVisible();
        await expect(this.locators.internal.dropdownList).toBeVisible();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("NestedSelect", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default states", async ({ story }) => {
            await test.step("On mount", async () => {
                await compareScreenshot(story, "mount");
            });

            await test.step("Open - dropdown should be visible and first item should be active", async () => {
                await story.openDropdown();

                const first = story.getTreeItem("Category 1");
                await expect(first).toBeVisible();
                await expect(first).toMatchAriaSnapshot(`
                    - treeitem "Category 1"
                `);

                await compareScreenshot(story, "open-first-active", {
                    fullscreen: true,
                });
            });

            await test.step("Mouse hover on other item - hovered item should be active", async () => {
                const hovered = story.getTreeItem("Option 1.1");
                await hovered.hover();

                await expect(hovered).toMatchAriaSnapshot(`
                    - treeitem "Option 1.1"
                `);

                await compareScreenshot(story, "open-hover-other", {
                    fullscreen: true,
                });
            });
        });

        test("Focus", async ({ story }) => {
            await test.step("Default", async () => {
                await story.locators.nestedSelectDefaultBase
                    .getByTestId("selector")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.nestedSelectDefault,
                });
            });

            await test.step("Disabled", async () => {
                await story.locators.nestedSelectDisabledBase
                    .getByTestId("selector")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.nestedSelectDisabled,
                });
            });

            await test.step("Readonly", async () => {
                await story.locators.nestedSelectReadonlyBase
                    .getByTestId("selector")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.nestedSelectReadonly,
                });
            });

            await test.step("Error", async () => {
                await story.locators.nestedSelectErrorBase
                    .getByTestId("selector")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.nestedSelectError,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("prefilled");
        });

        test("Prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("selected");
        });

        test("Selected states", async ({ story }) => {
            await test.step("Selected on mount", async () => {
                await expect(
                    story.locators.nestedSelectDefaultBase
                ).toContainText("Option 1.1");
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();
            });

            await test.step("Selected + open - selected item should be selected and active", async () => {
                await story.openDropdown();

                await expect(story.locators.internal.dropdownList)
                    .toMatchAriaSnapshot(`
                    - tree:
                      - treeitem "Category 1"
                      - treeitem "Option 1.1" [selected]
                      - treeitem "Option 1.2"
                      - treeitem "Category 2"
                `);

                await compareScreenshot(story, "selected-open", {
                    fullscreen: true,
                });
            });

            await test.step("Selected + open - selected item is hovered", async () => {
                const selected = story.getTreeItem("Option 1.1");

                await selected.hover();

                await expect(story.locators.internal.dropdownList)
                    .toMatchAriaSnapshot(`
                    - tree:
                      - treeitem "Category 1"
                      - treeitem "Option 1.1" [selected]
                      - treeitem "Option 1.2"
                      - treeitem "Category 2"
                `);

                await compareScreenshot(story, "selected-hover", {
                    fullscreen: true,
                });
            });

            await test.step("Selected + hover other item - selected remains selected and hovered is active", async () => {
                const hovered = story.getTreeItem("Option 1.2");

                await hovered.hover();

                await expect(story.locators.internal.dropdownList)
                    .toMatchAriaSnapshot(`
                    - tree:
                      - treeitem "Category 1"
                      - treeitem "Option 1.1" [selected]
                      - treeitem "Option 1.2"
                      - treeitem "Category 2"
                `);

                await compareScreenshot(story, "selected-hover-other", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-search");
        });

        test("With search", async ({ story }) => {
            await test.step("Open with search", async () => {
                await story.openDropdown();

                await expect(story.locators.internal.searchInput).toBeVisible();
                await expect(story.locators.internal.searchInput).toBeFocused();

                await compareScreenshot(story, "open-with-search", {
                    fullscreen: true,
                });
            });

            await test.step("No result only after at least 3 chars", async () => {
                await story.locators.internal.searchInput.fill("zz");

                await expect(
                    story.locators.internal.noResults
                ).not.toBeVisible();
                await expect(story.getTreeItem("Category 1")).toBeVisible();

                await story.locators.internal.searchInput.fill("zzz");

                await expect(story.locators.internal.noResults).toBeVisible();

                await compareScreenshot(story, "open-with-search-no-results", {
                    fullscreen: true,
                });
            });

            await test.step("Search cleared should restore options", async () => {
                await story.locators.internal.searchInput.fill("");

                await expect(
                    story.locators.internal.noResults
                ).not.toBeVisible();
                await expect(story.getTreeItem("Category 1")).toBeVisible();

                await compareScreenshot(story, "open-with-search-cleared", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("all-expanded");
        });

        test("Expanded state", async ({ story }) => {
            await story.locators.internal.selector.click();
            await compareScreenshot(story, "dropdown-open", {
                fullscreen: true,
            });

            await expect(story.locators.internal.dropdownList)
                .toMatchAriaSnapshot(`
                - tree:
                    - treeitem "Category 1" [expanded=true] 
                    - treeitem "Option 1.1" 
                    - treeitem "Option 1.2" 
                    - treeitem "Category 2" [expanded=true] 
                    - treeitem "Option 2.1" 
                    - treeitem "Option 2.2" 
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("all-collapsed");
        });

        test("Collapsed state", async ({ story }) => {
            await story.locators.internal.selector.click();
            await compareScreenshot(story, "dropdown-open", {
                fullscreen: true,
            });

            await expect(story.locators.internal.dropdownList)
                .toMatchAriaSnapshot(`
                - tree:
                    - treeitem "Category 1" [expanded=false] 
                    - treeitem "Category 2" [expanded=false] 
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone");
        });

        test("Standalone", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("short-dropdown");
        });

        test("Short dropdown", async ({ story }) => {
            await story.locators.internal.selector.click();
            await compareScreenshot(story, "dropdown-open", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("virtualization");
        });

        test("Virtualization", async ({ story }) => {
            await story.openDropdown();
            await expect(story.locators.internal.searchInput).toBeFocused();

            await story.locators.internal.searchInput.fill("Option 999");
            await expect(story.getTreeItem("Option 999")).toBeVisible();
            await expect(story.locators.internal.searchInput).toBeFocused();
            await compareScreenshot(story, "search-result", {
                fullscreen: true,
            });

            await story.getTreeItem("Option 999-1").click();
            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();
            await expect(story.locators.internal.selector).toContainText(
                "Option 999-1"
            );
        });
    });
});
