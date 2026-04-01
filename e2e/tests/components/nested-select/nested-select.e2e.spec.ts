import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "nested-select";

    public readonly locators: {
        nestedSelect: Locator;
        selector: Locator;
        dropdownContainer: Locator;
        dropdownList: Locator;
        searchInput: Locator;
        listItems: Locator;
        noResults: Locator;
        listFail: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            nestedSelect: page.getByTestId("nested-select"),
            selector: page.getByTestId("selector"),
            dropdownContainer: page.getByTestId("dropdown-container"),
            dropdownList: page.getByTestId("nested-dropdown-list"),
            searchInput: page.getByTestId("search-input"),
            listItems: page.getByTestId("list-item"),
            noResults: page.getByTestId("list-no-results"),
            listFail: page.getByTestId("list-fail"),
        };
    }

    public getTreeItem(name: string) {
        return this.locators.listItems
            .filter({ has: this.page.getByText(name, { exact: true }) })
            .first();
    }

    public async openDropdown() {
        await this.locators.nestedSelect.click();
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

test.describe("NestedSelect", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default states", async ({ story }) => {
            await test.step("Mount - dropdown should be closed", async () => {
                await expect(story.locators.nestedSelect).toBeVisible();
                await expect(
                    story.locators.dropdownContainer
                ).not.toBeVisible();

                await compareScreenshot(story, "mount-closed");
            });

            await test.step("Open - dropdown should be visible and first item should be active", async () => {
                await story.openDropdown();

                const first = story.getTreeItem("Category 1");
                await expect(first).toBeVisible();
                await expect(first).toHaveAttribute("tabindex", "0");
                await expect(first).toHaveAttribute("aria-selected", "false");

                await compareScreenshot(story, "open-first-active", {
                    fullscreen: true,
                });
            });

            await test.step("Mouse hover on other item - hovered item should be active", async () => {
                const hovered = story.getTreeItem("Option 1.1");
                await hovered.hover();

                await expect(hovered).toHaveAttribute("tabindex", "0");
                await expect(hovered).toHaveAttribute("aria-selected", "false");

                await compareScreenshot(story, "open-hover-other", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("selected");
        });

        test("Selected states", async ({ story }) => {
            await test.step("Selected on mount", async () => {
                await expect(story.locators.nestedSelect).toContainText(
                    "Option 1.1"
                );
                await expect(
                    story.locators.dropdownContainer
                ).not.toBeVisible();

                await compareScreenshot(story, "selected-on-mount");
            });

            await test.step("Selected + open - selected item should be selected and active", async () => {
                await story.openDropdown();

                const selected = story.getTreeItem("Option 1.1");
                await expect(selected).toHaveAttribute("aria-selected", "true");

                await compareScreenshot(story, "selected-open", {
                    fullscreen: true,
                });
            });

            await test.step("Selected + hover other item - selected remains selected and hovered is active", async () => {
                const selected = story.getTreeItem("Option 1.1");
                const hovered = story.getTreeItem("Option 1.2");

                await hovered.hover();

                await expect(selected).toHaveAttribute("aria-selected", "true");
                await expect(hovered).toHaveAttribute("aria-selected", "false");

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

                await expect(story.locators.searchInput).toBeVisible();
                await expect(story.locators.searchInput).toBeFocused();

                await compareScreenshot(story, "open-with-search", {
                    fullscreen: true,
                });
            });

            await test.step("No result only after at least 3 chars", async () => {
                await story.locators.searchInput.fill("zz");

                await expect(story.locators.noResults).not.toBeVisible();
                await expect(story.getTreeItem("Category 1")).toBeVisible();

                await story.locators.searchInput.fill("zzz");

                await expect(story.locators.noResults).toBeVisible();

                await compareScreenshot(story, "open-with-search-no-results", {
                    fullscreen: true,
                });
            });

            await test.step("Search cleared should restore options", async () => {
                await story.locators.searchInput.fill("");

                await expect(story.locators.noResults).not.toBeVisible();
                await expect(story.getTreeItem("Category 1")).toBeVisible();

                await compareScreenshot(story, "open-with-search-cleared", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("fail");
        });

        test("Fail state", async ({ story }) => {
            await story.openDropdown();
            await expect(story.locators.listFail).toBeVisible();
            await expect(story.page.getByText("Try again.")).toBeVisible();

            await compareScreenshot(story, "open-fail", {
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
            await expect(story.locators.selector).toHaveAttribute(
                "aria-disabled",
                "true"
            );
            await expect(story.locators.dropdownContainer).not.toBeVisible();

            await compareScreenshot(story, "disabled-on-mount");

            await story.locators.nestedSelect.click({ force: true });
            await expect(story.locators.dropdownContainer).not.toBeVisible();
        });
    });
});
