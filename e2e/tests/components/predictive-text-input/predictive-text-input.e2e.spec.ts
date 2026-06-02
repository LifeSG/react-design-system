import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

const DEBOUNCE_DELAY = 600; // ms — slightly over the component's 500 ms debounce

class StoryPage extends AbstractStoryPage {
    protected readonly component = "predictive-text-input";

    public readonly locators: {
        internal: {
            dropdownContainer: Locator;
            listLoading: Locator;
            listItems: Locator;
            clearButton: Locator;
        };
        form: {
            default: Locator;
            error: Locator;
            disabled: Locator;
            readonly: Locator;
        };
        default: Locator;
        standalone: {
            disabled: Locator;
            readonly: Locator;
        };
        loading: Locator;
        gridLayout: {
            layout: Locator;
        };
        secondaryLabel: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                dropdownContainer: page.getByTestId("dropdown-container"),
                listLoading: page.getByTestId("list-loading"),
                listItems: page.getByTestId("list-item"),
                clearButton: page.getByRole("button", {
                    name: "Clear input",
                }),
            },
            form: {
                default: page.getByTestId("pti-default-base"),
                error: page.getByTestId("pti-error-base"),
                disabled: page.getByTestId("pti-disabled-base"),
                readonly: page.getByTestId("pti-readonly-base"),
            },
            default: page.getByTestId("pti-default"),
            standalone: {
                disabled: page.getByTestId("pti-disabled"),
                readonly: page.getByTestId("pti-readonly"),
            },
            loading: page.getByTestId("pti-loading"),
            gridLayout: {
                layout: page.getByTestId("pti-grid-layout"),
            },
            secondaryLabel: page.getByTestId("pti-secondary-label"),
        };
    }

    public getInput(container: Locator) {
        return container.getByRole("combobox");
    }

    public getOption(name: string) {
        return this.page.getByRole("option", { name, exact: true });
    }

    public async typeAndWaitForDebounce(input: Locator, text: string) {
        await input.fill(text);
        await this.page.waitForTimeout(DEBOUNCE_DELAY);
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("PredictiveTextInput", () => {
    test.describe("Form Variants", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants");
            });

            test("Mount", async ({ story }) => {
                await compareScreenshot(story, "state");

                await expect(story.page.getByTestId("pti-default"))
                    .toMatchAriaSnapshot(`
                    - text: Default
                    - combobox "Default":
                      - /placeholder: Enter here.../
                `);

                await expect(story.page.getByTestId("pti-disabled"))
                    .toMatchAriaSnapshot(`
                    - text: Disabled
                    - combobox "Disabled" [disabled]:
                      - /placeholder: Enter here.../
                `);

                await expect(story.page.getByTestId("pti-error"))
                    .toMatchAriaSnapshot(`
                    - text: Error
                    - combobox "Error":
                      - /placeholder: Enter here.../
                    - paragraph: Selection is required
                `);

                await expect(story.page.getByTestId("pti-readonly"))
                    .toMatchAriaSnapshot(`
                    - text: Readonly
                    - combobox "Readonly":
                      - /placeholder: Enter here.../
                `);
            });

            test("Focus states", async ({ story }) => {
                await story.getInput(story.locators.form.default).focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.form.default,
                });

                await story.getInput(story.locators.form.disabled).focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.form.disabled,
                });

                await story.getInput(story.locators.form.error).focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.form.error,
                });

                await story.getInput(story.locators.form.readonly).focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.form.readonly,
                });
            });

            test("Open states", async ({ story }) => {
                const input = story.getInput(story.locators.form.default);
                await story.typeAndWaitForDebounce(input, "land");
                await compareScreenshot(story, "default", {
                    fullscreen: true,
                });
            });

            test("Hover states", async ({ story }) => {
                const input = story.getInput(story.locators.form.default);
                await story.typeAndWaitForDebounce(input, "land");

                const optionTarget = story.getOption("Finland");
                await optionTarget.hover();
                await compareScreenshot(story, "active-option", {
                    fullscreen: true,
                });

                await optionTarget.click();

                await story.typeAndWaitForDebounce(input, "land");

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

            test("Visual mobile dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Form Variants Prefilled", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants-prefilled");
            });

            test("Mount", async ({ story }) => {
                await compareScreenshot(story, "state");

                await expect(story.page.getByTestId("pti-default"))
                    .toMatchAriaSnapshot(`
                    - text: /Default/
                    - combobox "Default": Finland
                    - button "Clear input"
                `);

                await expect(story.page.getByTestId("pti-disabled"))
                    .toMatchAriaSnapshot(`
                    - text: /Disabled/
                    - combobox "Disabled" [disabled]: Finland
                `);

                await expect(story.page.getByTestId("pti-error"))
                    .toMatchAriaSnapshot(`
                    - text: /Error/
                    - combobox "Error": Finland
                    - button "Clear input"
                    - paragraph: Selection is required
                `);

                await expect(story.page.getByTestId("pti-readonly"))
                    .toMatchAriaSnapshot(`
                    - text: /Readonly/
                    - combobox "Readonly": Finland
                `);
            });

            test("Focus states", async ({ story }) => {
                await story.getInput(story.locators.form.default).focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.form.default,
                });

                await story.getInput(story.locators.form.disabled).focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.form.disabled,
                });

                await story.getInput(story.locators.form.error).focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.form.error,
                });

                await story.getInput(story.locators.form.readonly).focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.form.readonly,
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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interaction");
        });

        test("Typing with no results found", async ({ story }) => {
            const input = story.getInput(story.locators.default);

            await story.typeAndWaitForDebounce(input, "xyz");

            await compareScreenshot(story, "no-results", { fullscreen: true });
        });

        test("Typing with suggestions", async ({ story }) => {
            const input = story.getInput(story.locators.default);

            await story.typeAndWaitForDebounce(input, "land");

            await expect(story.locators.internal.listItems).toHaveCount(6);

            await compareScreenshot(story, "suggestions", { fullscreen: true });
        });

        test("Clear selected option", async ({ story }) => {
            const input = story.getInput(story.locators.default);

            await story.typeAndWaitForDebounce(input, "fin");
            await story.getOption("Finland").click();
            await story.locators.internal.clearButton.click();

            await expect(input).toHaveValue("");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interaction", { mode: "dark" });
        });

        test("Typing with suggestions (dark mode)", async ({ story }) => {
            const input = story.getInput(story.locators.default);

            await story.typeAndWaitForDebounce(input, "land");

            await compareScreenshot(story, "suggestions", { fullscreen: true });
        });
    });

    test.describe("Standalone", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("standalone");
            });

            test("Mount", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Disabled and readonly states", async ({ story }) => {
                await test.step("Disabled - should not open dropdown on click", async () => {
                    await story.locators.standalone.disabled.click();
                    await expect(
                        story.locators.internal.dropdownContainer
                    ).not.toBeVisible();
                });

                await test.step("Disabled - combobox should be disabled", async () => {
                    await expect(
                        story.getInput(story.locators.standalone.disabled)
                    ).toMatchAriaSnapshot(`
                        - combobox "Enter here..." [disabled]
                    `);
                });

                await test.step("Readonly - should not open dropdown on click", async () => {
                    await story.locators.standalone.readonly.click();
                });

                await test.step("Readonly - combobox should not be disabled", async () => {
                    await expect(
                        story.getInput(story.locators.standalone.readonly)
                    ).not.toBeDisabled();
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("standalone", { mode: "dark" });
            });

            test("Visual dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading");
        });

        test("Loading", async ({ story }) => {
            const input = story.getInput(story.locators.loading);

            await story.typeAndWaitForDebounce(input, "app");

            await expect(story.locators.internal.listLoading).toBeVisible();

            await compareScreenshot(story, "loading", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.gridLayout.layout,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("secondary-label");
        });

        test("Secondary label in suggestions", async ({ story }) => {
            const input = story.getInput(story.locators.secondaryLabel);

            await story.typeAndWaitForDebounce(input, "land");
            await compareScreenshot(story, "secondary-label", {
                fullscreen: true,
            });
        });
    });

    test.describe("Mobile", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("interaction", { size: "mobile" });
            });

            test("Typing with suggestions", async ({ story }) => {
                const input = story.getInput(story.locators.default);

                await story.typeAndWaitForDebounce(input, "land");

                await compareScreenshot(story, "suggestions", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("secondary-label", { size: "mobile" });
            });

            test("Secondary label in suggestions", async ({ story }) => {
                const input = story.getInput(story.locators.secondaryLabel);

                await story.typeAndWaitForDebounce(input, "land");
                await compareScreenshot(story, "secondary-label", {
                    fullscreen: true,
                });
            });
        });
    });
});
