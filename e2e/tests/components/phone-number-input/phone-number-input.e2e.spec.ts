import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { modes } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "phone-number-input";

    public readonly locators: {
        internal: {
            dropdownContainer: Locator;
            dropdownList: Locator;
            searchInput: Locator;
            noResults: Locator;
        };
        form: {
            default: Locator;
            error: Locator;
            disabled: Locator;
            readonly: Locator;
            searchable: Locator;
            allowClear: Locator;
        };
        standalone: {
            default: Locator;
            selected: Locator;
            error: Locator;
            disabled: Locator;
            readonly: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                dropdownContainer: page.getByTestId("dropdown-container"),
                dropdownList: page.getByTestId("dropdown-list"),
                searchInput: page.getByTestId("search-input"),
                noResults: page.getByTestId("list-no-results"),
            },
            form: {
                default: page.getByTestId("phone-number-input-default-base"),
                error: page.getByTestId("phone-number-input-error-base"),
                disabled: page.getByTestId("phone-number-input-disabled-base"),
                readonly: page.getByTestId("phone-number-input-readonly-base"),
                searchable: page.getByTestId(
                    "phone-number-input-searchable-base"
                ),
                allowClear: page.getByTestId(
                    "phone-number-input-allow-clear-base"
                ),
            },
            standalone: {
                default: page.getByTestId(
                    "phone-number-input-standalone-default"
                ),
                selected: page.getByTestId(
                    "phone-number-input-standalone-selected"
                ),
                error: page.getByTestId("phone-number-input-standalone-error"),
                disabled: page.getByTestId(
                    "phone-number-input-standalone-disabled"
                ),
                readonly: page.getByTestId(
                    "phone-number-input-standalone-readonly"
                ),
            },
        };
    }

    public getTextbox(field: Locator) {
        return field.getByRole("textbox");
    }

    public getCombobox(field: Locator) {
        return field.getByRole("combobox");
    }

    public getOption(name: string) {
        return this.page.getByRole("option", { name });
    }

    public getActiveOption() {
        return this.locators.internal.dropdownList.locator(
            '[role="option"][tabindex="0"]'
        );
    }

    public async openDropdown(field: Locator) {
        await this.getCombobox(field).click();
        await expect(this.locators.internal.dropdownContainer).toBeVisible();
        await expect(this.locators.internal.dropdownList).toBeVisible();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, run) => {
        const story = new StoryPage(page);
        await run(story);
    },
});

test.describe("PhoneNumberInput", () => {
    test.describe("Form Variants", () => {
        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants");
            });

            test("Mount", async ({ story }) => {
                await compareScreenshot(story, "state");

                await expect(
                    story.page.getByTestId("phone-number-input-default")
                ).toMatchAriaSnapshot(`
                    - text: Default
                    - combobox "Default Country code": Select
                    - text: Press space to open options
                    - textbox "Default Enter phone number":
                      - /placeholder: Enter phone number
                `);

                await expect(
                    story.page.getByTestId("phone-number-input-disabled")
                ).toMatchAriaSnapshot(`
                    - text: Disabled
                    - combobox "Disabled Country code" [disabled]
                    - text: Press space to open options
                    - textbox "Disabled Enter phone number" [disabled]:
                      - /placeholder: Enter phone number
                `);
                await story.locators.form.disabled.click();
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();

                await expect(story.page.getByTestId("phone-number-input-error"))
                    .toMatchAriaSnapshot(`
                    - text: Error
                    - combobox "Error Country code"
                    - text: Press space to open options
                    - textbox "Error Enter phone number":
                      - /placeholder: Enter phone number
                    - paragraph: Mobile number is required
                `);

                await expect(
                    story.page.getByTestId("phone-number-input-readonly")
                ).toMatchAriaSnapshot(`
                    - text: Readonly
                    - textbox "Readonly Enter phone number":
                      - /placeholder: Enter phone number
                `);
                await story.locators.form.readonly.click();
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();
            });

            test("Focus states", async ({ story }) => {
                await story.getTextbox(story.locators.form.default).focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.form.default,
                });

                await story.getTextbox(story.locators.form.disabled).focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.form.disabled,
                });

                await story.getTextbox(story.locators.form.error).focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.form.error,
                });

                await story.getTextbox(story.locators.form.readonly).focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.form.readonly,
                });
            });

            test("Open states", async ({ story }) => {
                await story.openDropdown(story.locators.form.default);
                await compareScreenshot(story, "default", {
                    fullscreen: true,
                });
            });

            test("Hover states", async ({ story }) => {
                const optionTarget = story.getOption("Albania");

                await story.openDropdown(story.locators.form.default);
                await optionTarget.hover();
                await compareScreenshot(story, "active-option", {
                    fullscreen: true,
                });

                await optionTarget.click();

                await story.openDropdown(story.locators.form.default);

                await optionTarget.hover();
                await compareScreenshot(story, "selected-option", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants", { size: "mobile" });
            });

            test("Visual mobile", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants", { mode: "dark" });
            });

            test("Visual dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Form Variants Prefilled", () => {
        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants-prefilled");
            });

            test("Mount", async ({ story }) => {
                await compareScreenshot(story, "state");

                await expect(
                    story.page.getByTestId("phone-number-input-default")
                ).toMatchAriaSnapshot(`
                    - text: Default
                    - combobox "Default Country code": "+213"
                    - text: Press space to open options
                    - textbox "Default Enter phone number":
                      - /placeholder: Enter phone number
                      - text: 912 345 67
                `);

                await expect(
                    story.page.getByTestId("phone-number-input-disabled")
                ).toMatchAriaSnapshot(`
                    - text: Disabled
                    - combobox "Disabled Country code" [disabled]: "+213"
                    - text: Press space to open options
                    - textbox "Disabled Enter phone number" [disabled]:
                      - /placeholder: Enter phone number
                      - text: 912 345 67
                `);
                await story.locators.form.disabled.click();
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();

                await expect(story.page.getByTestId("phone-number-input-error"))
                    .toMatchAriaSnapshot(`
                    - text: Error
                    - combobox "Error Country code": "+213"
                    - text: Press space to open options
                    - textbox "Error Enter phone number":
                      - /placeholder: Enter phone number
                      - text: 912 345 67
                    - paragraph: Mobile number is required
                `);
            });

            test("Focus states", async ({ story }) => {
                await story.getTextbox(story.locators.form.default).focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.form.default,
                });

                await story.getTextbox(story.locators.form.disabled).focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.form.disabled,
                });

                await story.getTextbox(story.locators.form.error).focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.form.error,
                });
            });

            test("Open states", async ({ story }) => {
                await story.openDropdown(story.locators.form.default);
                await compareScreenshot(story, "default", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants-prefilled", { mode: "dark" });
            });

            test("Visual dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Searchable", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("searchable");
        });

        test("Search and select", async ({ story }) => {
            await story.openDropdown(story.locators.form.searchable);
            await expect(story.locators.internal.searchInput).toBeFocused();

            await compareScreenshot(story, "open", { fullscreen: true });

            const input = story.getTextbox(story.locators.form.searchable);
            const initialValue = await input.inputValue();

            await story.locators.internal.searchInput.fill("Singapore");
            await expect(story.getOption("Singapore")).toBeVisible();

            await story.getOption("Singapore").hover();
            await compareScreenshot(story, "hover-option", {
                fullscreen: true,
            });

            await story.getOption("Singapore").click();
            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();

            await expect(
                story.getCombobox(story.locators.form.searchable)
            ).toContainText("+65");
            await expect(input).not.toHaveValue(initialValue);

            await story.openDropdown(story.locators.form.searchable);
            await story.page.mouse.click(0, 0);
            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();
        });

        test("Keyboard search selection", async ({ story }) => {
            await story.openDropdown(story.locators.form.searchable);

            await story.locators.internal.searchInput.fill("Singapore");
            await story.page.keyboard.press("ArrowDown");
            await expect(story.getActiveOption()).toContainText("Singapore");

            await story.page.keyboard.press("Enter");
            await expect(
                story.locators.internal.dropdownContainer
            ).not.toBeVisible();

            await expect(
                story.getCombobox(story.locators.form.searchable)
            ).toContainText("+65");
        });

        test("No results and search focus", async ({ story }) => {
            await story.openDropdown(story.locators.form.searchable);
            await story.locators.internal.searchInput.fill("zzzzzz");
            await expect(story.locators.internal.noResults).toBeVisible();
            await compareScreenshot(story, "no-results", { fullscreen: true });
        });
    });

    test.describe("Standalone", () => {
        modes.forEach((mode) => {
            test.describe(() => {
                test.beforeEach(async ({ story }) => {
                    await story.init("standalone", { mode });
                });

                test(`${mode} mode`, async ({ story }) => {
                    await compareScreenshot(story, "mount");
                });
            });
        });
    });

    test.describe("Allow clear", () => {
        modes.forEach((mode) => {
            test.beforeEach(async ({ story }) => {
                await story.init("allow-clear", { mode });
            });

            test(`${mode} mode`, async ({ story }) => {
                const clearField = story.locators.form.allowClear;
                const clearButton = clearField.getByRole("button", {
                    name: "Clear input",
                });

                await expect(clearButton).not.toBeVisible();

                await story.getTextbox(clearField).fill("91234567");
                await expect(clearButton).toBeVisible();
                await compareScreenshot(story, "filled", {
                    locator: clearField,
                });

                await clearButton.click();
                await expect(story.getTextbox(clearField)).toHaveValue("");
                await expect(clearButton).not.toBeVisible();
            });
        });
    });

    test.describe("", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("fixed-country");
        });

        test("Fixed Country", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
