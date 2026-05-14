import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-multi-select";

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
        form: {
            default: Locator;
            selected: Locator;
            readonly: Locator;
            disabled: Locator;
            error: Locator;
        };
        standalone: {
            default: Locator;
            selected: Locator;
            readonly: Locator;
            disabled: Locator;
            error: Locator;
        };
        smallVariants: {
            default: Locator;
            withSearch: Locator;
        };
        withSearch: {
            default: Locator;
            withCustomNoResultLabel: Locator;
            withCustomNoResultDescription: Locator;
            withCustomSearchPlaceholder: Locator;
        };
        multiSelect: Locator;
        customLabel: Locator;
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
            standalone: {
                default: page.getByTestId("standalone-default"),
                selected: page.getByTestId("standalone-selected"),
                readonly: page.getByTestId("standalone-readonly"),
                disabled: page.getByTestId("standalone-disabled"),
                error: page.getByTestId("standalone-error"),
            },
            form: {
                default: page.getByTestId("form-default-base"),
                selected: page.getByTestId("form-selected-base"),
                readonly: page.getByTestId("form-readonly-base"),
                disabled: page.getByTestId("form-disabled-base"),
                error: page.getByTestId("form-error-base"),
            },
            smallVariants: {
                default: page.getByTestId("small-default"),
                withSearch: page.getByTestId("small-with-search"),
            },
            withSearch: {
                default: page.getByTestId("search-default"),
                withCustomNoResultLabel: page.getByTestId(
                    "search-with-custom-no-result-label"
                ),
                withCustomNoResultDescription: page.getByTestId(
                    "search-with-custom-no-result-description"
                ),
                withCustomSearchPlaceholder: page.getByTestId(
                    "search-with-custom-search-placeholder"
                ),
            },
            multiSelect: page.getByTestId("multi-select"),
            customLabel: page.getByTestId("form-custom-label-base"),
        };
    }

    public getOption(name: string) {
        return this.page.getByRole("option", { name, exact: true });
    }

    public async openDropdown(multiSelect: Locator) {
        await multiSelect.click();
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
    test.describe("Form", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Default", async ({ story }) => {
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await compareScreenshot(story, "mount", {
                locator: story.locators.form.default,
            });
            await expect(story.page.getByTestId("form-default"))
                .toMatchAriaSnapshot(`
                    - text: Default
                    - combobox "Default": Default multi select
            `);

            await story.openDropdown(story.locators.form.default);
            await expect(story.getOption("Option A")).toBeVisible();
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });
            await expect(story.locators.component.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status
                    - group:
                        - button "Select all"
                        - listbox:
                            - option "Option A"
                            - option "Option B"
                            - option "Option C"
                            - option "Option D"
            `);

            await story.page
                .getByRole("button", { name: "Select all" })
                .click();
            await expect(story.locators.form.default).toContainText(
                "All selected"
            );
            await compareScreenshot(story, "select-all", {
                fullscreen: true,
            });
            await expect(story.locators.component.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status
                    - group:
                        - button "Clear all"
                        - listbox:
                            - option "Option A" [selected]
                            - option "Option B" [selected]
                            - option "Option C" [selected]
                            - option "Option D" [selected]
            `);

            await story.page.getByRole("button", { name: "Clear all" }).click();
            await expect(story.locators.form.default).toHaveText(
                "Default multi select"
            );
            await compareScreenshot(story, "clear-all", {
                fullscreen: true,
            });
        });

        test("Selected", async ({ story }) => {
            await expect(story.locators.form.selected).toContainText(
                "2 selected"
            );
            await compareScreenshot(story, "state", {
                locator: story.locators.form.selected,
            });
        });

        test("Error", async ({ story }) => {
            await compareScreenshot(story, "state", {
                locator: story.locators.form.error,
            });

            await expect(story.page.getByTestId("form-error"))
                .toMatchAriaSnapshot(`
                - text: Error
                - combobox "Error": Error multi select
                - paragraph: Selection is required
            `);
        });

        test("Readonly disabled", async ({ story }) => {
            await expect(story.locators.form.readonly).not.toBeDisabled();

            await story.locators.form.readonly.click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
            await expect(story.locators.form.readonly).toMatchAriaSnapshot(`
                - combobox "Readonly": Readonly multi select
            `);

            await story.locators.form.readonly.focus();
            await story.page.keyboard.press("Enter");
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await expect(story.locators.form.disabled).toMatchAriaSnapshot(`
                - combobox [disabled]
            `);

            await story.locators.form.disabled.click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
            await expect(story.locators.form.disabled).toMatchAriaSnapshot(`
                - combobox "Disabled" [disabled]: Disabled multi select
            `);
        });
    });

    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { size: "mobile" });
        });

        test("Form Mobile", async ({ story }) => {
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await compareScreenshot(story, "mount", {
                locator: story.locators.form.default,
            });
            await expect(story.locators.form.default).toMatchAriaSnapshot(`
                - combobox "Default": Default multi select
            `);

            await story.openDropdown(story.locators.form.default);
            await expect(story.getOption("Option A")).toBeVisible();
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });

            await story.page
                .getByRole("button", { name: "Select all" })
                .click();
            await expect(story.locators.form.default).toContainText(
                "All selected"
            );
            await compareScreenshot(story, "select-all", {
                fullscreen: true,
            });

            await story.page.getByRole("button", { name: "Clear all" }).click();
            await expect(story.locators.form.default).toHaveText(
                "Default multi select"
            );
            await compareScreenshot(story, "clear-all", {
                fullscreen: true,
            });
        });
    });

    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("Form Dark Mode", async ({ story }) => {
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await compareScreenshot(story, "mount", {
                locator: story.locators.form.default,
            });
            await expect(story.locators.form.default).toMatchAriaSnapshot(`
                - combobox "Default": Default multi select
            `);

            await story.openDropdown(story.locators.form.default);
            await expect(story.getOption("Option A")).toBeVisible();
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });

            await story.page
                .getByRole("button", { name: "Select all" })
                .click();
            await expect(story.locators.form.default).toContainText(
                "All selected"
            );
            await compareScreenshot(story, "select-all", {
                fullscreen: true,
            });

            await story.page.getByRole("button", { name: "Clear all" }).click();
            await expect(story.locators.form.default).toHaveText(
                "Default multi select"
            );
            await compareScreenshot(story, "clear-all", {
                fullscreen: true,
            });
        });
    });

    test.describe("Standalone", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone");
        });

        test("Visual", async ({ story }) => {
            await test.step("Default state", async () => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.standalone.default,
                });

                await story.openDropdown(story.locators.standalone.default);
                await compareScreenshot(story, "open", {
                    fullscreen: true,
                });

                await story.page.mouse.click(0, 0);
            });

            await test.step("Selected state", async () => {
                await expect(story.locators.standalone.selected).toContainText(
                    "2 selected"
                );
                await compareScreenshot(story, "selected", {
                    locator: story.locators.standalone.selected,
                });
            });

            await test.step("Error state", async () => {
                await compareScreenshot(story, "error", {
                    locator: story.locators.standalone.error,
                });
            });
        });

        test("Readonly disabled", async ({ story }) => {
            await expect(story.locators.standalone.readonly).not.toBeDisabled();

            await story.locators.standalone.readonly.click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await story.locators.standalone.readonly.focus();
            await story.page.keyboard.press("Enter");
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();

            await expect(story.locators.standalone.disabled)
                .toMatchAriaSnapshot(`
                            - combobox [disabled]
                        `);

            await story.locators.standalone.disabled.click();
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
        });
    });

    test.describe("With search", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-search");
        });

        test("Default", async ({ story }) => {
            await story.openDropdown(story.locators.withSearch.default);
            await expect(story.locators.component.searchInput).toBeFocused();
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });
            await expect(story.locators.component.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status
                    - group:
                        - textbox "Enter text to search":
                            - /placeholder: Search
                        - button "Select all"
                        - listbox:
                            - option "Option A"
                            - option "Option B"
                            - option "Option C"
                            - option "Option D"
            `);

            await story.locators.component.searchInput.fill("zzzz");
            await expect(story.locators.component.noResults).toBeVisible();
            await compareScreenshot(story, "no-result", {
                fullscreen: true,
            });
            await expect(story.locators.component.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status
                    - group:
                        - textbox "Enter text to search":
                            - /placeholder: Search
                            - text: zzzz
                        - button "Clear search"
                        - img
                        - text: No results found.
                        - listbox
            `);
        });

        test("Custom no result label", async ({ story }) => {
            await story.openDropdown(
                story.locators.withSearch.withCustomNoResultLabel
            );
            await expect(story.locators.component.searchInput).toBeFocused();

            await story.locators.component.searchInput.fill("zzzz");
            await expect(story.locators.component.noResults).toBeVisible();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
            await expect(story.locators.component.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status
                    - group:
                        - textbox "Enter text to search":
                            - /placeholder: Search
                            - text: zzzz
                        - button "Clear search"
                        - img
                        - text: Custom no result found.
                        - listbox
            `);
        });

        test("Custom no result description", async ({ story }) => {
            await story.openDropdown(
                story.locators.withSearch.withCustomNoResultDescription
            );
            await expect(story.locators.component.searchInput).toBeFocused();

            await story.locators.component.searchInput.fill("zzzz");
            await expect(story.locators.component.noResults).toBeVisible();
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
            await expect(story.locators.component.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status
                    - group:
                        - textbox "Enter text to search":
                            - /placeholder: Search
                            - text: zzzz
                        - button "Clear search"
                        - img
                        - text: No results found. Custom no result found description.
                            This can be used to provide more context to users when there are no search results.
                        - listbox
            `);
        });

        test("Custom search placeholder", async ({ story }) => {
            await story.openDropdown(
                story.locators.withSearch.withCustomSearchPlaceholder
            );
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
            await expect(story.locators.component.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status
                    - group:
                        - textbox "Enter text to search":
                            - /placeholder: Custom search placeholder
                        - button "Select all"
                        - listbox:
                            - option "Option A"
                            - option "Option B"
                            - option "Option C"
                            - option "Option D"
            `);
        });

        test("Keyboard interaction", async ({ story }) => {
            await story.locators.withSearch.default
                .getByTestId("selector")
                .focus();
            await story.page.keyboard.press("Enter");

            await expect(story.locators.component.dropdownList).toBeVisible();
            await expect(story.locators.component.searchInput).toBeFocused();

            await story.page.keyboard.press("ArrowDown");
            await expect(story.getOption("Option A")).toBeFocused();

            await story.page.keyboard.press("Escape");
            await expect(
                story.locators.component.dropdownContainer
            ).not.toBeVisible();
            await expect(
                story.locators.withSearch.default.getByTestId("selector")
            ).toBeFocused();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("max-selectable");
        });

        test("Max selection", async ({ story }) => {
            await story.openDropdown(story.locators.multiSelect);
            await expect(story.locators.component.dropdownList)
                .toMatchAriaSnapshot(`
                - listbox:
                  - option "Option A" [selected]
                  - option "Option B" [selected]
                  - option "Option C" [disabled]
                  - option "Option D" [disabled]
            `);
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("max-selectable", { mode: "dark" });
        });

        test("Max selection Dark Mode", async ({ story }) => {
            await story.openDropdown(story.locators.multiSelect);
            await expect(story.locators.component.dropdownList)
                .toMatchAriaSnapshot(`
                - listbox:
                  - option "Option A" [selected]
                  - option "Option B" [selected]
                  - option "Option C" [disabled]
                  - option "Option D" [disabled]
            `);
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
            await story.openDropdown(story.locators.form.selected);
        });

        test("Focus", async ({ story }) => {
            await test.step("Item", async () => {
                await story.getOption("Option C").hover();
                await compareScreenshot(story, "item", {
                    fullscreen: true,
                });
            });

            await test.step("Selected item", async () => {
                await story.getOption("Option A").hover();
                await compareScreenshot(story, "selected-item", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
            await story.openDropdown(story.locators.form.selected);
        });

        test("Focus Dark Mode", async ({ story }) => {
            await test.step("Item", async () => {
                await story.getOption("Option C").hover();
                await compareScreenshot(story, "item", {
                    fullscreen: true,
                });
            });

            await test.step("Selected item", async () => {
                await story.getOption("Option A").hover();
                await compareScreenshot(story, "selected-item", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("virtualization");
        });

        test("Virtualization", async ({ story }) => {
            await story.openDropdown(story.locators.multiSelect);

            await story.scrollWithWheelUntil({
                scrollTarget: story.locators.component.dropdownList,
                until: async () =>
                    story.page.getByText("Option 100").isVisible(),
            });

            await expect(story.getOption("Option 1")).not.toBeVisible();

            await story.getOption("Option 100").hover();

            await compareScreenshot(story, "last-item", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid Layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-cta");
        });

        test("Custom CTA", async ({ story }) => {
            await story.openDropdown(story.locators.multiSelect);
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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("small-variants");
        });

        test("Small Variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await story.openDropdown(story.locators.smallVariants.default);
            await compareScreenshot(story, "open-default", {
                fullscreen: true,
            });

            await story.page.mouse.click(0, 0);

            await story.openDropdown(story.locators.smallVariants.withSearch);
            await compareScreenshot(story, "open-with-search", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-labels");
        });

        test("Custom labels", async ({ story }) => {
            await story.openDropdown(story.locators.customLabel);

            await compareScreenshot(story, "multi-selected-clear-all", {
                fullscreen: true,
            });
            await story.page
                .getByRole("button", { name: "Custom clear all" })
                .click();

            await compareScreenshot(story, "select-all", {
                fullscreen: true,
            });

            await story.page
                .getByRole("button", { name: "Custom select all" })
                .click();

            await compareScreenshot(story, "all-selected", {
                fullscreen: true,
            });
        });
    });
});
