import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "multi-select";

    public readonly locators: {
        multiSelect: Locator;
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
            multiSelect: page.getByTestId("multi-select"),
            selector: page.getByTestId("selector"),
            dropdownContainer: page.getByTestId("dropdown-container"),
            dropdownList: page.getByTestId("dropdown-list"),
            searchInput: page.getByTestId("search-input"),
            listItems: page.getByTestId("list-item"),
            noResults: page.getByTestId("list-no-results"),
        };
    }

    public getOption(name: string) {
        return this.page.getByRole("option", { name, exact: true });
    }

    public async openDropdown() {
        await this.locators.multiSelect.click();
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

test.describe("InputMultiSelect", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default states", async ({ story }) => {
            await test.step("Closed on mount", async () => {
                await expect(
                    story.locators.dropdownContainer
                ).not.toBeVisible();

                await compareScreenshot(story, "mount-closed");
            });

            await test.step("Open", async () => {
                await story.openDropdown();
                await expect(story.getOption("Option A")).toBeVisible();

                await compareScreenshot(story, "open-default", {
                    fullscreen: true,
                });
            });

            await test.step("Hover other option", async () => {
                const hovered = story.getOption("Option B");
                await hovered.hover();
                await expect(hovered).toBeVisible();

                await compareScreenshot(story, "open-hover-other", {
                    fullscreen: true,
                });
            });

            await test.step("Select all then clear all", async () => {
                await story.page
                    .getByRole("button", { name: "Select all" })
                    .click();
                await expect(
                    story.page.getByText("All selected")
                ).toBeVisible();

                await compareScreenshot(story, "select-all", {
                    fullscreen: true,
                });

                await story.page
                    .getByRole("button", { name: "Clear all" })
                    .click();
                await expect(story.locators.selector).toHaveText("Select");

                await compareScreenshot(story, "clear-all", {
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
            await expect(story.locators.multiSelect).toContainText(
                "2 selected"
            );

            await compareScreenshot(story, "selected-on-mount");

            await story.openDropdown();
            await expect(story.locators.dropdownList).toMatchAriaSnapshot(`
                - listbox:
                  - option "Option A" [selected]
                  - option "Option B" [selected]
                  - option "Option C"
                  - option "Option D"
            `);

            await compareScreenshot(story, "selected-open", {
                fullscreen: true,
            });

            await story.getOption("Option B").hover();
            await compareScreenshot(story, "selected-hover-selected", {
                fullscreen: true,
            });

            await story.getOption("Option C").hover();
            await compareScreenshot(story, "selected-hover-other", {
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

            await story.locators.searchInput.fill("zzzz");
            await expect(story.locators.noResults).toBeVisible();

            await compareScreenshot(story, "search-no-results", {
                fullscreen: true,
            });

            await story.locators.searchInput.fill("");
            await expect(story.locators.noResults).not.toBeVisible();
            await expect(story.getOption("Option A")).toBeVisible();

            await compareScreenshot(story, "search-cleared", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("max-selectable");
        });

        test("Max selectable", async ({ story }) => {
            await story.openDropdown();
            await expect(story.locators.dropdownList).toMatchAriaSnapshot(`
                - listbox:
                  - option "Option A" [selected]
                  - option "Option B" [selected]
                  - option "Option C" [disabled]
                  - option "Option D"
            `);

            await compareScreenshot(story, "reached", {
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

            await story.locators.multiSelect.click({ force: true });
            await expect(story.locators.dropdownContainer).not.toBeVisible();
        });
    });
});
