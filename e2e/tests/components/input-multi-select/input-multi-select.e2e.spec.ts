import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "multi-select";

    public readonly locators: {
        component: {
            selector: Locator;
            dropdownContainer: Locator;
            dropdownList: Locator;
            searchInput: Locator;
            listItems: Locator;
            noResults: Locator;
            customCtaButton: Locator;
        };
        multiSelect: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
                selector: page.getByTestId("selector"),
                dropdownContainer: page.getByTestId("dropdown-container"),
                dropdownList: page.getByTestId("dropdown-list"),
                searchInput: page.getByTestId("search-input"),
                listItems: page.getByTestId("list-item"),
                noResults: page.getByTestId("list-no-results"),
                customCtaButton: page.getByTestId("custom-cta-button"),
            },
            multiSelect: page.getByTestId("multi-select"),
        };
    }

    public getOption(name: string) {
        return this.page.getByRole("option", { name, exact: true });
    }

    public async openDropdown() {
        await this.locators.multiSelect.click();
        await expect(this.locators.component.dropdownContainer).toBeVisible();
        await expect(this.locators.component.dropdownList).toBeVisible();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("InputMultiSelect", () => {
    test.describe("Visual", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default");
            });

            test("States", async ({ story }) => {
                await expect(
                    story.locators.component.dropdownContainer
                ).not.toBeVisible();
                await compareScreenshot(story, "closed");

                await story.openDropdown();
                await expect(story.getOption("Option A")).toBeVisible();
                await compareScreenshot(story, "open", {
                    fullscreen: true,
                });

                await story.page
                    .getByRole("button", { name: "Select all" })
                    .click();
                await expect(story.locators.component.selector).toContainText(
                    "All selected"
                );
                await compareScreenshot(story, "select-all", {
                    fullscreen: true,
                });

                await story.page
                    .getByRole("button", { name: "Clear all" })
                    .click();
                await expect(story.locators.component.selector).toHaveText(
                    "Select"
                );
                await compareScreenshot(story, "clear-all", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("with-search");
            });

            test("Searchable and no search result", async ({ story }) => {
                await story.openDropdown();
                await expect(
                    story.locators.component.searchInput
                ).toBeFocused();
                await compareScreenshot(story, "searchable", {
                    fullscreen: true,
                });

                await story.locators.component.searchInput.fill("zzzz");
                await expect(story.locators.component.noResults).toBeVisible();
                await compareScreenshot(story, "search-no-result", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("selected");
            });

            test("Selected", async ({ story }) => {
                await expect(story.locators.multiSelect).toContainText(
                    "2 selected"
                );
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("disabled");
            });

            test("Disabled", async ({ story }) => {
                await expect(story.locators.component.selector).toBeDisabled();
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("readonly");
            });

            test("Readonly", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("max-selectable");
            });

            test("Max selection", async ({ story }) => {
                await story.openDropdown();
                await expect(story.locators.component.dropdownList)
                    .toMatchAriaSnapshot(`
                    - listbox:
                      - option "Option A" [selected]
                      - option "Option B" [selected]
                      - option "Option C" [disabled]
                      - option "Option D"
                `);
                await compareScreenshot(story, "max-selection", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe("Keyboard interaction", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("with-search");
            });

            test("Open navigate and dismiss with keyboard", async ({
                story,
            }) => {
                await story.locators.component.selector.focus();
                await story.page.keyboard.press("Enter");

                await expect(
                    story.locators.component.dropdownList
                ).toBeVisible();
                await expect(
                    story.locators.component.searchInput
                ).toBeFocused();

                await story.page.keyboard.press("ArrowDown");
                await expect(story.getOption("Option A")).toBeFocused();

                await story.page.keyboard.press("Escape");
                await expect(
                    story.locators.component.dropdownContainer
                ).not.toBeVisible();
                await expect(story.locators.component.selector).toBeFocused();
            });
        });
    });

    test.describe("Focus interaction", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default");
                await story.openDropdown();
            });

            test("Item", async ({ story }) => {
                await story.getOption("Option B").hover();
                await compareScreenshot(story, "focus-item", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("selected");
                await story.openDropdown();
            });

            test("Selected item", async ({ story }) => {
                await story.getOption("Option A").hover();
                await compareScreenshot(story, "focus-selected-item", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe("", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("standalone");
            });

            test("Standalone", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("virtualization");
            });

            test("Virtualization", async ({ story }) => {
                await story.openDropdown();
                await story.locators.component.searchInput.fill("Option 4999");
                await expect(story.getOption("Option 4999")).toBeVisible();

                await compareScreenshot(story, "filtered", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe("", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("grid-layout");
            });

            test("Grid Layout", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("custom-cta");
            });

            test("Custom CTA", async ({ story }) => {
                await story.openDropdown();
                await expect(
                    story.locators.component.customCtaButton
                ).toBeVisible();

                await compareScreenshot(story, "mount", {
                    fullscreen: true,
                });

                await story.locators.component.customCtaButton.click();
                await expect(
                    story.locators.component.dropdownContainer
                ).not.toBeVisible();
            });
        });
    });

    test.describe("", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("variants");
            });

            test("Variants", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });
});
