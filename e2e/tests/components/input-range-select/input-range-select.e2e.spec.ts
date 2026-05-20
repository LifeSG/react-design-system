import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-range-select";

    public readonly locators: {
        internal: {
            dropdownContainer: Locator;
            dropdownList: Locator;
            searchInput: Locator;
        };
        form: {
            default: Locator;
            disabled: Locator;
            readonly: Locator;
            error: Locator;
        };
        search: Locator;
        grid: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                dropdownContainer: page.getByTestId("dropdown-container"),
                dropdownList: page.getByTestId("dropdown-list"),
                searchInput: page.getByTestId("search-input"),
            },
            form: {
                default: page.getByTestId("input-range-select-default-base"),
                disabled: page.getByTestId("input-range-select-disabled-base"),
                readonly: page.getByTestId("input-range-select-readonly-base"),
                error: page.getByTestId("input-range-select-error-base"),
            },
            search: page.getByTestId("input-range-select-search-base"),
            grid: page.getByTestId("input-range-select-grid-layout"),
        };
    }

    public getOption(name: string) {
        return this.page.getByRole("option", { name });
    }

    public getFromButton(within: Locator) {
        return within.getByRole("combobox").first();
    }

    public getToButton(within: Locator) {
        return within.getByRole("combobox").last();
    }

    public async openDropdown(button: Locator) {
        await button.click();
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

test.describe("InputRangeSelect", () => {
    test.describe("Form variants", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Accessibility", async ({ story }) => {
            await test.step("readonly does not open the dropdown", async () => {
                await story.getFromButton(story.locators.form.readonly).click();
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();
            });

            await test.step("readonly is reflected in aria", async () => {
                await expect(story.locators.form.readonly).toMatchAriaSnapshot(`
                    - combobox
                    - combobox
                `);
            });

            await test.step("disabled is reflected in aria", async () => {
                await expect(story.locators.form.disabled).toMatchAriaSnapshot(`
                    - combobox [disabled]
                    - combobox [disabled]
                `);
            });

            await test.step("disabled does not open the dropdown", async () => {
                await story
                    .getFromButton(story.locators.form.disabled)
                    .click({ force: true });
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();
            });
        });
    });

    test.describe("Form variants (mobile)", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { size: "mobile" });
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Form variants (dark mode)", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Form variants prefilled", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Clear selection", async ({ story }) => {
            await test.step("clear button is visible when both values selected", async () => {
                await expect(
                    story.locators.form.default.getByRole("button", {
                        name: "Clear",
                    })
                ).toBeVisible();
            });

            await test.step("clicking clear resets both values", async () => {
                await story.locators.form.default
                    .getByRole("button", { name: "Clear" })
                    .click();
                await expect(
                    story.getFromButton(story.locators.form.default)
                ).toContainText("Select");
                await expect(
                    story.getToButton(story.locators.form.default)
                ).toContainText("Select");
                await expect(
                    story.locators.form.default.getByRole("button", {
                        name: "Clear",
                    })
                ).not.toBeVisible();
            });
        });
    });

    test.describe("Form variants prefilled (dark mode)", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", { mode: "dark" });
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Standalone variants", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Standalone variants prefilled", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-prefilled");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("Focus states", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Open from dropdown", async ({ story }) => {
            await story.openDropdown(
                story.getFromButton(story.locators.form.default)
            );
            await expect(story.locators.form.default).toMatchAriaSnapshot(`
                - combobox [expanded]
                - combobox
            `);
            await compareScreenshot(story, "from-open", { fullscreen: true });
        });

        test("Select from then auto-opens to dropdown", async ({ story }) => {
            await story.openDropdown(
                story.getFromButton(story.locators.form.default)
            );
            await story.getOption("Option A").click();
            await expect(
                story.locators.internal.dropdownContainer
            ).toBeVisible();
            await expect(story.locators.form.default).toMatchAriaSnapshot(`
                - combobox
                - combobox [expanded]
            `);
            await compareScreenshot(story, "to-open-after-from-selected", {
                fullscreen: true,
            });
        });

        test("Clicking to directly when from is already selected", async ({
            story,
        }) => {
            // Complete a full selection first so both values are set
            await story.openDropdown(
                story.getFromButton(story.locators.form.default)
            );
            await story.getOption("Option A").click();
            await story.getOption("Option K").click();
            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();

            // Clicking "to" should open "to" directly since "from" is already selected
            await story.getToButton(story.locators.form.default).click();
            await expect(
                story.locators.internal.dropdownContainer
            ).toBeVisible();
            await expect(story.locators.form.default).toMatchAriaSnapshot(`
                - combobox
                - combobox [expanded]
            `);
        });

        test("Complete selection flow", async ({ story }) => {
            await story.openDropdown(
                story.getFromButton(story.locators.form.default)
            );
            await story.getOption("Option A").click();
            await story.getOption("Option K").click();

            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();
            await expect(story.locators.form.default).toMatchAriaSnapshot(`
                - combobox: /Option A/
                - combobox: /Option K/
            `);
            await compareScreenshot(story, "both-selected", {
                locator: story.locators.form.default,
            });
        });

        test("Dismiss clears partial selection", async ({ story }) => {
            await story.openDropdown(
                story.getFromButton(story.locators.form.default)
            );
            await story.getOption("Option A").click();

            await story.page.keyboard.press("Escape");

            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();
            await expect(
                story.getFromButton(story.locators.form.default)
            ).toContainText("Select");
            await expect(
                story.getToButton(story.locators.form.default)
            ).toContainText("Select");
        });

        test("Keyboard navigation and focus ring states", async ({ story }) => {
            await test.step("Default from - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "default-from-focused", {
                    locator: story.locators.form.default,
                });
            });

            // await test.step("Default from - dropdown open", async () => {
            //     await story.page.keyboard.press("Enter");
            //     await compareScreenshot(story, "default-from-dropdown-open", {
            //         locator: story.locators.form.default,
            //     });
            // });

            // await test.step("Default from - dropdown closed", async () => {
            //     await story.page.keyboard.press("Escape");
            //     await compareScreenshot(story, "default-from-dropdown-closed", {
            //         locator: story.locators.form.default,
            //     });
            // });

            await test.step("Default to - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "default-to-focused", {
                    locator: story.locators.form.default,
                });
            });

            await test.step("Disabled from - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "disabled-from-focused", {
                    locator: story.locators.form.disabled,
                });
            });

            await test.step("Disabled to - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "disabled-to-focused", {
                    locator: story.locators.form.disabled,
                });
            });

            await test.step("Readonly from - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "readonly-from-focused", {
                    locator: story.locators.form.readonly,
                });
            });

            await test.step("Readonly to - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "readonly-to-focused", {
                    locator: story.locators.form.readonly,
                });
            });

            await test.step("Error from - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "error-from-focused", {
                    locator: story.locators.form.error,
                });
            });

            // await test.step("Error from - dropdown open", async () => {
            //     await story.page.keyboard.press("Enter");
            //     await compareScreenshot(story, "error-from-dropdown-open", {
            //         locator: story.locators.form.error,
            //     });
            // });

            // await test.step("Error from - dropdown closed", async () => {
            //     await story.page.keyboard.press("Escape");
            //     await compareScreenshot(story, "error-from-dropdown-closed", {
            //         locator: story.locators.form.error,
            //     });
            // });

            await test.step("Error to - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "error-to-focused", {
                    locator: story.locators.form.error,
                });
            });
        });
    });

    test.describe("Focus states (dark mode)", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("Open from dropdown", async ({ story }) => {
            await story.openDropdown(
                story.getFromButton(story.locators.form.default)
            );
            await compareScreenshot(story, "from-open", { fullscreen: true });
        });

        test("Focus ring states", async ({ story }) => {
            await test.step("Default from - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "default-from-focused", {
                    locator: story.locators.form.default,
                });
            });

            // await test.step("Default from - dropdown open", async () => {
            //     await story.page.keyboard.press("Enter");
            //     await compareScreenshot(story, "default-from-dropdown-open", {
            //         locator: story.locators.form.default,
            //     });
            // });

            // await test.step("Default from - dropdown closed", async () => {
            //     await story.page.keyboard.press("Escape");
            //     await compareScreenshot(story, "default-from-dropdown-closed", {
            //         locator: story.locators.form.default,
            //     });
            // });

            await test.step("Default to - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "default-to-focused", {
                    locator: story.locators.form.default,
                });
            });

            await test.step("Disabled from - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "disabled-from-focused", {
                    locator: story.locators.form.disabled,
                });
            });

            await test.step("Disabled to - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "disabled-to-focused", {
                    locator: story.locators.form.disabled,
                });
            });

            await test.step("Readonly from - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "readonly-from-focused", {
                    locator: story.locators.form.readonly,
                });
            });

            await test.step("Readonly to - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "readonly-to-focused", {
                    locator: story.locators.form.readonly,
                });
            });

            await test.step("Error from - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "error-from-focused", {
                    locator: story.locators.form.error,
                });
            });

            // await test.step("Error from - dropdown open", async () => {
            //     await story.page.keyboard.press("Enter");
            //     await compareScreenshot(story, "error-from-dropdown-open", {
            //         locator: story.locators.form.error,
            //     });
            // });

            // await test.step("Error from - dropdown closed", async () => {
            //     await story.page.keyboard.press("Escape");
            //     await compareScreenshot(story, "error-from-dropdown-closed", {
            //         locator: story.locators.form.error,
            //     });
            // });

            await test.step("Error to - focused", async () => {
                await story.page.keyboard.press("Tab");
                await compareScreenshot(story, "error-to-focused", {
                    locator: story.locators.form.error,
                });
            });
        });
    });

    test.describe("Grid layout", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe("With search", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-search");
        });

        test("Search filters options", async ({ story }) => {
            await story.openDropdown(
                story.getFromButton(story.locators.search)
            );
            await compareScreenshot(story, "from-open", { fullscreen: true });

            await story.locators.internal.searchInput.fill("Option C");
            await expect(story.locators.internal.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status: "Selecting for: Select"
                    - 'group "Selecting for: Select"':
                        - textbox "Enter text to search":
                            - /placeholder: Search
                        - listbox:
                            - option "Option C"
                `);
            await compareScreenshot(story, "search-filtered", {
                fullscreen: true,
            });
        });

        test("Search no results", async ({ story }) => {
            await story.openDropdown(
                story.getFromButton(story.locators.search)
            );

            await story.locators.internal.searchInput.fill("zzzz");
            await expect(story.locators.internal.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status: "Selecting for: Select"
                    - 'group "Selecting for: Select"':
                        - textbox "Enter text to search":
                            - /placeholder: Search
                        - img
                        - text: /No results/
                `);
            await compareScreenshot(story, "search-no-results", {
                fullscreen: true,
            });
        });

        test("Search cleared restores full list", async ({ story }) => {
            await story.openDropdown(
                story.getFromButton(story.locators.search)
            );
            await story.locators.internal.searchInput.fill("Option C");
            await story.locators.internal.searchInput.fill("");

            await expect(story.locators.internal.dropdownContainer)
                .toMatchAriaSnapshot(`
                    - status: "Selecting for: Select"
                    - 'group "Selecting for: Select"':
                        - textbox "Enter text to search":
                            - /placeholder: Search
                        - listbox:
                            - option "Option A"
                            - option "Option B"
                            - option "Option C"
                            - option "Option D"
                `);
        });
    });
});
