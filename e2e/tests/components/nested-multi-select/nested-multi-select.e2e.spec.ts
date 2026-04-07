import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "nested-multi-select";

    public readonly locators: {
        nestedMultiSelect: Locator;
        selector: Locator;
        dropdownContainer: Locator;
        dropdownList: Locator;
        searchInput: Locator;
        listItems: Locator;
        noResults: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            nestedMultiSelect: page.getByTestId("nested-multi-select"),
            selector: page.getByTestId("selector"),
            dropdownContainer: page.getByTestId("dropdown-container"),
            dropdownList: page.getByTestId("nested-dropdown-list"),
            searchInput: page.getByTestId("search-input"),
            listItems: page.getByTestId("list-item"),
            noResults: page.getByTestId("list-no-results"),
        };
    }

    public getTreeItem(name: string) {
        return this.locators.listItems
            .filter({ has: this.page.getByText(name, { exact: true }) })
            .first();
    }

    public async openDropdown() {
        await this.locators.nestedMultiSelect.click();
        await expect(this.locators.dropdownContainer).toBeVisible();
        await expect(this.locators.dropdownList).toBeVisible();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("InputNestedMultiSelect", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default states", async ({ story }) => {
            await expect(story.locators.dropdownContainer).not.toBeVisible();
            await compareScreenshot(story, "mount-closed");

            await story.openDropdown();
            await expect(story.getTreeItem("Category 1")).toBeVisible();
            await compareScreenshot(story, "open-default", {
                fullscreen: true,
            });

            await story.getTreeItem("Option 1.1").hover();
            await compareScreenshot(story, "open-hover-other", {
                fullscreen: true,
            });

            await story.page
                .getByRole("button", { name: "Select all" })
                .click();
            await expect(story.locators.nestedMultiSelect).toContainText(
                "4 selected"
            );
            await compareScreenshot(story, "select-all", {
                fullscreen: true,
            });

            await story.page.getByRole("button", { name: "Clear all" }).click();
            await expect(story.locators.nestedMultiSelect).toContainText(
                "Select"
            );
            await compareScreenshot(story, "clear-all", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("multi-selected");
        });

        test("Selected states", async ({ story }) => {
            await expect(story.locators.nestedMultiSelect).toContainText(
                "2 selected"
            );
            await compareScreenshot(story, "selected-on-mount");

            await story.openDropdown();
            await expect(story.getTreeItem("Option 1.1")).toMatchAriaSnapshot(`
                - treeitem "Option 1.1" [selected]
            `);
            await expect(story.getTreeItem("Option 2.1")).toMatchAriaSnapshot(`
                - treeitem "Option 2.1" [selected]
            `);
            await expect(story.getTreeItem("Category 1")).toMatchAriaSnapshot(`
                - treeitem "Category 1" [checked]
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
            await story.init("single-selected");
        });

        test("Single selected state", async ({ story }) => {
            await story.openDropdown();
            await expect(story.getTreeItem("Category 1")).toMatchAriaSnapshot(`
                - treeitem "Category 1" [checked=mixed]
            `);

            await compareScreenshot(story, "single-selected", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-search");
        });

        test("Search states", async ({ story }) => {
            await story.openDropdown();
            await expect(story.locators.searchInput).toBeVisible();
            await expect(story.locators.searchInput).toBeFocused();
            await compareScreenshot(story, "open-with-search", {
                fullscreen: true,
            });

            await story.locators.searchInput.fill("zz");
            await expect(story.locators.noResults).not.toBeVisible();

            await story.locators.searchInput.fill("zzz");
            await expect(story.locators.noResults).toBeVisible();
            await compareScreenshot(story, "search-no-results", {
                fullscreen: true,
            });

            await story.locators.searchInput.fill("");
            await expect(story.locators.noResults).not.toBeVisible();
            await expect(story.getTreeItem("Category 1")).toBeVisible();
            await compareScreenshot(story, "search-cleared", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("disabled");
        });

        test("Disabled state", async ({ story }) => {
            await expect(story.locators.selector).toBeDisabled();
            await expect(story.locators.selector).toMatchAriaSnapshot(`
                - combobox [disabled]
            `);
            await expect(story.locators.dropdownContainer).not.toBeVisible();
            await compareScreenshot(story, "disabled-on-mount");

            await story.locators.nestedMultiSelect.click({ force: true });
            await expect(story.locators.dropdownContainer).not.toBeVisible();
        });
    });
});
