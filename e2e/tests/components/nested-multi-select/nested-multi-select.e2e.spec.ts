import { test as base, expect, Locator, Page } from "@playwright/test";
import {
    AbstractStoryPage,
    compareScreenshot,
    isInViewport,
} from "../../utils";
import { modes } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "nested-multi-select";

    public readonly locators: {
        internal: {
            dropdownContainer: Locator;
            dropdownList: Locator;
            searchInput: Locator;
            listItems: Locator;
            noResults: Locator;
            selector: Locator;
        };
        standalone: {
            default: Locator;
            selected: Locator;
            readonly: Locator;
            disabled: Locator;
            error: Locator;
        };
        form: {
            default: Locator;
            selected: Locator;
            readonly: Locator;
            disabled: Locator;
            error: Locator;
        };
        nestedMultiSelect: Locator;
        dropdownWidth: {
            minWidth: Locator;
            customWidth: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                selector: page.getByTestId("selector"),
                dropdownContainer: page.getByTestId("dropdown-container"),
                dropdownList: page.getByTestId("nested-dropdown-list"),
                searchInput: page.getByTestId("search-input"),
                listItems: page.getByTestId("list-item"),
                noResults: page.getByTestId("list-no-results"),
            },
            standalone: {
                default: page.getByTestId("nested-multi-select-default"),
                selected: page.getByTestId("nested-multi-select-selected"),
                readonly: page.getByTestId("nested-multi-select-readonly"),
                disabled: page.getByTestId("nested-multi-select-disabled"),
                error: page.getByTestId("nested-multi-select-error"),
            },
            form: {
                default: page.getByTestId("nested-multi-select-default-base"),
                selected: page.getByTestId("nested-multi-select-selected-base"),
                readonly: page.getByTestId("nested-multi-select-readonly-base"),
                disabled: page.getByTestId("nested-multi-select-disabled-base"),
                error: page.getByTestId("nested-multi-select-error-base"),
            },
            nestedMultiSelect: page.getByTestId("nested-multi-select"),
            dropdownWidth: {
                minWidth: page.getByTestId("nested-multi-select-min-width"),
                customWidth: page.getByTestId(
                    "nested-multi-select-custom-width"
                ),
            },
        };
    }

    public getTreeItem(name: string) {
        return this.locators.internal.listItems
            .filter({ has: this.page.getByText(name, { exact: true }) })
            .first();
    }

    public async openDropdown(select: Locator) {
        await select.click();
        await expect(this.locators.internal.dropdownContainer).toBeVisible();
        await expect(this.locators.internal.dropdownList).toBeVisible();
    }

    public async closeDropdown() {
        await this.page.mouse.click(0, 0);
        await expect(
            this.locators.internal.dropdownContainer
        ).not.toBeVisible();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("InputNestedMultiSelect", () => {
    test.describe("Form", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants");
            });

            test("Visual", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Readonly disabled", async ({ story }) => {
                await expect(story.locators.form.readonly).not.toBeDisabled();

                await story.locators.form.readonly.click();
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();

                await story.locators.form.readonly.focus();
                await story.page.keyboard.press("Enter");
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();

                await expect(story.locators.form.disabled).toMatchAriaSnapshot(`
                - combobox [disabled]
            `);

                await story.locators.form.disabled.click({ force: true });
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants", { mode: "dark" });
            });

            test("Visual - dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Standalone", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Readonly disabled", async ({ story }) => {
            await expect(story.locators.standalone.readonly).not.toBeDisabled();

            await story.locators.standalone.readonly.click();
            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();

            await story.locators.standalone.readonly.focus();
            await story.page.keyboard.press("Enter");
            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();

            await expect(story.locators.standalone.disabled)
                .toMatchAriaSnapshot(`
                - combobox [disabled]
            `);

            await story.locators.standalone.disabled.click({ force: true });
            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();
        });
    });

    modes.forEach((mode) => {
        test.describe(`Default States`, () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { mode });
            });

            test(`Visual - ${mode}`, async ({ story }) => {
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();
                await compareScreenshot(story, "mount-closed");

                await story.openDropdown(story.locators.nestedMultiSelect);
                await expect(story.getTreeItem("Category 1")).toBeVisible();
                await compareScreenshot(story, "open-default", {
                    fullscreen: true,
                });

                await story.getTreeItem("Subcategory 1.1").hover();
                await compareScreenshot(story, "open-hover-other", {
                    fullscreen: true,
                });

                await story.page
                    .getByRole("button", { name: "Select all" })
                    .click();
                await expect(
                    story.page.getByTestId("nested-multi-select")
                ).toContainText("4 selected");
                await compareScreenshot(story, "select-all", {
                    fullscreen: true,
                });

                await story.page
                    .getByRole("button", { name: "Clear all" })
                    .click();
                await expect(
                    story.page.getByTestId("nested-multi-select")
                ).toContainText("Select");
                await compareScreenshot(story, "clear-all", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("multi-selected", { mode });
            });

            test(`Selected states - ${mode}`, async ({ story }) => {
                await expect(story.locators.nestedMultiSelect).toContainText(
                    "2 selected"
                );
                await compareScreenshot(story, "selected-on-mount");

                await story.openDropdown(story.locators.nestedMultiSelect);
                await expect(story.locators.internal.dropdownList)
                    .toMatchAriaSnapshot(`
                    - button "Clear all"
                    - tree:
                      - treeitem "Category 1" [checked=mixed] [expanded] [level=1] [selected]
                      - treeitem "Subcategory 1.1" [checked] [level=2] [selected]
                      - treeitem "Options 1.1.1" [checked] [level=3] [selected]
                      - treeitem "Category 2" [checked=mixed] [expanded] [level=1] [selected]
                      - treeitem "Option 2.1" [checked] [level=2] [selected]
                      - treeitem "Option 2.2" [level=2]
                `);

                await compareScreenshot(story, "selected-open", {
                    fullscreen: true,
                });

                await story.getTreeItem("Option 2.1").hover();
                await compareScreenshot(story, "selected-hover-selected", {
                    fullscreen: true,
                });

                await story.getTreeItem("Option 2.2").hover();
                await compareScreenshot(story, "selected-hover-other", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("single-selected", { mode });
            });

            test(`Single selected state - ${mode}`, async ({ story }) => {
                await story.openDropdown(story.locators.nestedMultiSelect);

                await expect(story.locators.internal.dropdownList)
                    .toMatchAriaSnapshot(`
                    - button "Clear all"
                    - tree:
                      - treeitem "Category 1" [checked=mixed] [expanded] [level=1] [selected]
                      - treeitem "Subcategory 1.1" [checked] [level=2] [selected]
                      - treeitem "Option 1.1.1" [checked] [level=3] [selected]
                      - treeitem "Category 2" [level=1]
                      - treeitem "Option 2.1" [level=2]
                      - treeitem "Option 2.2" [level=2]
                `);

                await compareScreenshot(story, "single-selected", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("with-search", { mode });
            });

            test(`Search states - ${mode}`, async ({ story }) => {
                await story.openDropdown(story.locators.nestedMultiSelect);
                await expect(story.locators.internal.searchInput).toBeVisible();
                await expect(story.locators.internal.searchInput).toBeFocused();
                await compareScreenshot(story, "open-with-search", {
                    fullscreen: true,
                });

                await story.locators.internal.searchInput.fill("zz");
                await expect(
                    story.locators.internal.noResults
                ).not.toBeVisible();

                await story.locators.internal.searchInput.fill("zzz");
                await expect(story.locators.internal.noResults).toBeVisible();
                await compareScreenshot(story, "search-no-results", {
                    fullscreen: true,
                });

                await story.locators.internal.searchInput.fill("");
                await expect(
                    story.locators.internal.noResults
                ).not.toBeVisible();
                await expect(story.getTreeItem("Category 1")).toBeVisible();
                await compareScreenshot(story, "search-cleared", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Keyboard", async ({ story }) => {
            await story.page.getByTestId("nested-multi-select").focus();

            await story.page.keyboard.press("Enter");
            await expect(
                story.locators.internal.dropdownContainer
            ).toBeVisible();

            await story.page.keyboard.press("ArrowDown");
            await story.page.keyboard.press("ArrowDown");
            await expect(story.getTreeItem("Option 1.1.1")).toHaveAttribute(
                "tabindex",
                "0"
            );

            await story.page.keyboard.press("Escape");
            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("virtualization");
        });

        test("Virtualization", async ({ story }) => {
            await story.openDropdown(story.locators.nestedMultiSelect);

            await story.scrollWithWheelUntil({
                scrollTarget: story.locators.internal.dropdownList,
                until: async () =>
                    isInViewport(story.getTreeItem("Category 100")),
            });

            await expect(story.getTreeItem("Category 1")).not.toBeVisible();

            await story.getTreeItem("Category 100").hover();

            await compareScreenshot(story, "virtualization-last-item", {
                fullscreen: true,
            });
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
            await story.init("dropdown-width");
        });

        test("Dropdown width", async ({ story }) => {
            await story.openDropdown(story.locators.dropdownWidth.minWidth);
            await compareScreenshot(story, "min", {
                fullscreen: true,
            });
            await story.closeDropdown();

            await story.openDropdown(story.locators.dropdownWidth.customWidth);
            await compareScreenshot(story, "custom", {
                fullscreen: true,
            });
            await story.closeDropdown();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("dropdown-width", { size: "mobile" });
        });

        test("Dropdown width (mobile)", async ({ story }) => {
            await story.openDropdown(story.locators.dropdownWidth.minWidth);
            await compareScreenshot(story, "min", {
                fullscreen: true,
            });
            await story.closeDropdown();

            await story.openDropdown(story.locators.dropdownWidth.customWidth);
            await compareScreenshot(story, "custom", {
                fullscreen: true,
            });
            await story.closeDropdown();
        });
    });
});
