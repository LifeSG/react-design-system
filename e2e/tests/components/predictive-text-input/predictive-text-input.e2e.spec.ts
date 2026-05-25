import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

const DEBOUNCE_DELAY = 600; // ms — slightly over the component's 500 ms debounce

class StoryPage extends AbstractStoryPage {
    protected readonly component = "predictive-text-input";

    public readonly locators: {
        internal: {
            dropdownContainer: Locator;
            listLoading: Locator;
            listFail: Locator;
            listItems: Locator;
            retryButton: Locator;
            clearButton: Locator;
        };
        default: Locator;
        standalone: {
            disabled: Locator;
            readonly: Locator;
        };
        loading: Locator;
        errorState: Locator;
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
                listFail: page.getByTestId("list-fail"),
                listItems: page.getByTestId("list-item"),
                retryButton: page.getByRole("button", { name: "Try again." }),
                clearButton: page.getByRole("button", {
                    name: "Clear input",
                }),
            },
            default: page.getByTestId("pti-default"),
            standalone: {
                disabled: page.getByTestId("pti-disabled"),
                readonly: page.getByTestId("pti-readonly"),
            },
            loading: page.getByTestId("pti-loading"),
            errorState: page.getByTestId("pti-error-state"),
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
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");
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

        test("Select option from suggestions", async ({ story }) => {
            const input = story.getInput(story.locators.default);

            await story.typeAndWaitForDebounce(input, "fin");
            await story.getOption("Finland").click();

            await compareScreenshot(story, "selected", {
                locator: story.locators.default,
            });
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
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.default,
            });
        });

        test("Typing with suggestions (dark mode)", async ({ story }) => {
            const input = story.getInput(story.locators.default);

            await story.typeAndWaitForDebounce(input, "land");

            await compareScreenshot(story, "suggestions", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone");
        });

        test("Standalone", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await test.step("Disabled - should not open dropdown on click", async () => {
                await story.locators.standalone.disabled.click();
                await expect(
                    story.locators.internal.dropdownContainer
                ).not.toBeVisible();
            });

            await test.step("Disabled - combobox should be disabled", async () => {
                await expect(story.getInput(story.locators.standalone.disabled))
                    .toMatchAriaSnapshot(`
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
            await story.init("error-state");
        });

        test("Error", async ({ story }) => {
            const input = story.getInput(story.locators.errorState);

            await story.typeAndWaitForDebounce(input, "app");

            await compareScreenshot(story, "error", { fullscreen: true });
        });

        test("Retry after error", async ({ story }) => {
            const input = story.getInput(story.locators.errorState);

            await story.typeAndWaitForDebounce(input, "app");
            await expect(story.locators.internal.listFail).toBeVisible();

            await story.locators.internal.retryButton.click();
            await expect(story.locators.internal.listFail).toBeVisible();
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
                await story.init("default", { size: "mobile" });
            });

            test("Default", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.default,
                });
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
                await story.init("default", {
                    size: "mobile",
                    mode: "dark",
                });
            });

            test("Default (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.default,
                });
            });

            test("Typing with suggestions (dark mode)", async ({ story }) => {
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
