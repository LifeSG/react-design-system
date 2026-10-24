import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-multi-select";

    public readonly locators: {
        dropdownContainer: Locator;
        default: Locator;
        disabled: Locator;
        readonly: Locator;
        small: Locator;
        error: Locator;
        form: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            dropdownContainer: page.getByTestId("dropdown-container"),
            default: page.getByTestId("tag-default"),
            disabled: page.getByTestId("tag-disabled"),
            readonly: page.getByTestId("tag-readonly"),
            small: page.getByTestId("tag-small"),
            error: page.getByTestId("tag-error"),
            form: page.getByTestId("tag-form-base"),
        };
    }

    public getOption(name: string | RegExp) {
        // `exact` only applies to strings
        return this.page.getByRole("option", { name, exact: true });
    }

    public getRemoveButton(field: Locator, label: string) {
        return field.getByRole("button", { name: `Remove ${label}` });
    }

    public async openDropdown(field: Locator) {
        await field.click();
        await this.page.waitForTimeout(300); // Wait for dropdown animation to complete

        await expect(this.locators.dropdownContainer).toBeVisible();
    }

    public async closeDropdown() {
        await this.page.keyboard.press("Escape");
        await expect(this.locators.dropdownContainer).not.toBeVisible();
    }

    public async selectAll(field: Locator) {
        await this.openDropdown(field);
        await this.page.getByRole("button", { name: "Select all" }).click();
        await this.closeDropdown();
    }
}

const LONG_OPTION_NAME = /^This is a very long option/;

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Input Multi Select Tag", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("tag-default");
        });

        test("Default", async ({ story }) => {
            const field = story.locators.default;

            await test.step("Placeholder", async () => {
                await expect(field).toContainText("Select");
                await compareScreenshot(story, "placeholder", {
                    locator: field,
                });
            });

            await test.step("Accessibility", async () => {
                await expect(field.getByRole("combobox")).toMatchAriaSnapshot(`
                    - combobox: Select
                `);

                await story.selectAll(field);
                await expect(field.getByRole("combobox")).toMatchAriaSnapshot(`
                    - combobox: All selected
                `);
            });
        });

        test("States", async ({ story }) => {
            const { disabled, readonly } = story.locators;

            await test.step("Visual", async () => {
                await compareScreenshot(story, "disabled", {
                    locator: disabled,
                });
                await compareScreenshot(story, "readonly", {
                    locator: readonly,
                });
            });
        });

        test("Select and remove tags", async ({ story }) => {
            const field = story.locators.default;

            await story.openDropdown(field);
            await story.getOption("Option 1").click();
            await story.getOption("Option 2").click();
            await story.closeDropdown();

            await expect(field.getByRole("combobox")).toHaveText("2 selected");
            await expect(
                story.getRemoveButton(field, "Option 1")
            ).toBeVisible();

            await test.step("Remove with the x", async () => {
                await story.getRemoveButton(field, "Option 1").click();

                await expect(
                    story.getRemoveButton(field, "Option 1")
                ).toHaveCount(0);
                await expect(
                    story.getRemoveButton(field, "Option 2")
                ).toBeVisible();
                await expect(
                    story.locators.dropdownContainer
                ).not.toBeVisible();
            });

            await test.step("Removed option is unchecked in the dropdown", async () => {
                await story.openDropdown(field);
                await expect(story.getOption("Option 1")).toHaveAttribute(
                    "aria-selected",
                    "false"
                );
                await expect(story.getOption("Option 2")).toHaveAttribute(
                    "aria-selected",
                    "true"
                );
            });

            await test.step("Clear all shows the placeholder", async () => {
                await story.page
                    .getByRole("button", { name: "Clear all" })
                    .click();
                await story.closeDropdown();

                await expect(field.getByRole("combobox")).toHaveText("Select");
            });
        });

        test("Clicking a tag opens the dropdown", async ({ story }) => {
            const field = story.locators.default;

            await story.openDropdown(field);
            await story.getOption("Option 1").click();
            await story.closeDropdown();

            await field.getByText("Option 1", { exact: true }).click();
            await expect(story.locators.dropdownContainer).toBeVisible();
        });

        test("Keyboard", async ({ story }) => {
            const field = story.locators.default;

            await story.openDropdown(field);
            await story.getOption("Option 1").click();
            await story.getOption("Option 2").click();
            await story.closeDropdown();

            await test.step("Backspace and Delete do not remove tags", async () => {
                await field.getByRole("combobox").focus();
                await story.page.keyboard.press("Backspace");
                await story.page.keyboard.press("Delete");

                await expect(
                    story.getRemoveButton(field, "Option 1")
                ).toBeVisible();
                await expect(
                    story.getRemoveButton(field, "Option 2")
                ).toBeVisible();
            });

            await test.step("The x is in the tab order", async () => {
                await field.getByRole("combobox").focus();
                await story.page.keyboard.press("Tab");
                await expect(
                    story.getRemoveButton(field, "Option 1")
                ).toBeFocused();

                await story.page.keyboard.press("Enter");
                await expect(
                    story.getRemoveButton(field, "Option 1")
                ).toHaveCount(0);
                await expect(
                    story.locators.dropdownContainer
                ).not.toBeVisible();
            });

            await test.step("Combobox opens with the keyboard", async () => {
                await field.getByRole("combobox").focus();
                await story.page.keyboard.press("Enter");
                await expect(story.locators.dropdownContainer).toBeVisible();
            });
        });
    });

    test.describe("Long label", () => {
        test("Desktop", async ({ story }) => {
            await story.init("tag-default");
            await story.openDropdown(story.locators.default);
            await story.getOption(LONG_OPTION_NAME).click();
            await compareScreenshot(story, "state");
        });

        test("Mobile", async ({ story }) => {
            await story.init("tag-default", { size: "mobile" });
            await story.openDropdown(story.locators.default);
            await story.getOption(LONG_OPTION_NAME).click();
            await compareScreenshot(story, "state");
        });
    });

    test.describe("Select all", () => {
        test("Desktop", async ({ story }) => {
            await story.init("tag-default");
            await story.selectAll(story.locators.default);
            await compareScreenshot(story, "state");
        });

        test("Mobile", async ({ story }) => {
            await story.init("tag-default", { size: "mobile" });
            await story.selectAll(story.locators.default);
            await compareScreenshot(story, "state");
        });
    });

    test.describe(() => {
        test("Small", async ({ story }) => {
            await story.init("tag-small");

            await compareScreenshot(story, "mount", {
                locator: story.locators.small,
            });
        });
    });

    test.describe(() => {
        test("Error", async ({ story }) => {
            await story.init("tag-error");

            await compareScreenshot(story, "mount", {
                locator: story.locators.error,
            });
        });
    });

    test.describe(() => {
        test("Form", async ({ story }) => {
            await story.init("tag-form");

            await compareScreenshot(story, "mount", {
                locator: story.locators.form,
            });
        });
    });
});
