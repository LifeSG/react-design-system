import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

const LONG_OPTION_NAME = /^This is a very long option/;
const FORM_STATES = ["default", "disabled", "readonly", "error"] as const;
class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-multi-select";

    public readonly locators: {
        dropdownContainer: Locator;
        default: Locator;
        small: Locator;
        form: Record<(typeof FORM_STATES)[number], Locator>;
        formPrefilled: Record<
            "default" | "disabled" | "readonly" | "error",
            Locator
        >;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            dropdownContainer: page.getByTestId("dropdown-container"),
            default: page.getByTestId("tag-default"),
            small: page.getByTestId("tag-small-base"),
            form: {
                default: page.getByTestId("tag-form-default-base"),
                disabled: page.getByTestId("tag-form-disabled-base"),
                readonly: page.getByTestId("tag-form-readonly-base"),
                error: page.getByTestId("tag-form-error-base"),
            },
            formPrefilled: {
                default: page.getByTestId("tag-form-prefilled-default-base"),
                disabled: page.getByTestId("tag-form-prefilled-disabled-base"),
                readonly: page.getByTestId("tag-form-prefilled-readonly-base"),
                error: page.getByTestId("tag-form-prefilled-error-base"),
            },
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

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("InputMultiSelectTag", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("tag-default");
        });

        test("Default", async ({ story }) => {
            const field = story.locators.default;

            await test.step("Placeholder", async () => {
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

    test.describe("Multi-line tags", () => {
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

        test("Accessibility", async ({ story }) => {
            const field = story.locators.default;

            await story.init("tag-default", { size: "mobile" });
            await story.selectAll(field);

            await expect(field.getByText(/^and \d+ more$/)).toBeVisible();
            await expect(field).toMatchAriaSnapshot(`
                - combobox: All selected
                - button "Remove This is a very long option label that cannot fit within the width of the field and should be truncated"
                - button "Remove Option 1"
            `);
            expect(await field.ariaSnapshot()).not.toMatch(/more/);
        });
    });

    test.describe("Form", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("tag-form-variants");
        });

        for (const state of FORM_STATES) {
            test(state, async ({ story }) => {
                await compareScreenshot(story, state, {
                    locator: story.locators.form[state],
                });
            });
        }
    });

    test.describe("Form prefilled", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("tag-form-variants-prefilled");
        });

        for (const state of FORM_STATES) {
            test(state, async ({ story }) => {
                await compareScreenshot(story, state, {
                    locator: story.locators.formPrefilled[state],
                });
            });
        }

        test.describe("Accessibility", () => {
            test("Removable", async ({ story }) => {
                await expect(story.locators.formPrefilled.default)
                    .toMatchAriaSnapshot(`
                    - /children: equal
                    - combobox "Default": 2 selected
                    - button "Remove Option A"
                    - button "Remove Option B"
                `);
            });

            test("Disabled", async ({ story }) => {
                await expect(story.locators.formPrefilled.disabled)
                    .toMatchAriaSnapshot(`
                    - /children: equal
                    - combobox "Disabled" [disabled]: 2 selected
                `);
            });

            test("Readonly", async ({ story }) => {
                await expect(story.locators.formPrefilled.readonly)
                    .toMatchAriaSnapshot(`
                    - /children: equal
                    - combobox "Readonly": 2 selected
                `);
            });

            test("Removing a tag", async ({ story }) => {
                const field = story.locators.formPrefilled.default;

                await story.getRemoveButton(field, "Option A").click();

                await expect(field).toMatchAriaSnapshot(`
                    - /children: equal
                    - combobox "Default": 1 selected
                    - button "Remove Option B"
                `);
            });
        });
    });

    test.describe("Small", () => {
        test("Mount", async ({ story }) => {
            await story.init("tag-small");

            await compareScreenshot(story, "mount", {
                locator: story.locators.small,
            });
        });
    });
});
