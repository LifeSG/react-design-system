import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "select-histogram";

    public readonly locators: {
        internal: {
            thumb: (index: number) => Locator;
        };
        form: {
            default: Locator;
            selected: Locator;
            disabled: Locator;
            readonly: Locator;
            error: Locator;
            grid: Locator;
        };
        standalone: {
            default: Locator;
            selected: Locator;
            disabled: Locator;
            readonly: Locator;
            error: Locator;
            customLabel: Locator;
            empty: Locator;
            emptyView: Locator;
        };
        interaction: Locator;
        focusTargetBefore: Locator;
        minValue: Locator;
        maxValue: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                thumb: (index: number) =>
                    page.getByTestId(`slider-thumb-${index}`),
            },
            form: {
                default: page.getByTestId("select-histogram-form-default-base"),
                selected: page.getByTestId(
                    "select-histogram-form-selected-base"
                ),
                disabled: page.getByTestId(
                    "select-histogram-form-disabled-base"
                ),
                readonly: page.getByTestId(
                    "select-histogram-form-readonly-base"
                ),
                error: page.getByTestId("select-histogram-form-error-base"),
                grid: page.getByTestId("select-histogram-grid-layout"),
            },
            standalone: {
                default: page.getByTestId("select-histogram-default"),
                selected: page.getByTestId("select-histogram-selected"),
                disabled: page.getByTestId("select-histogram-disabled"),
                readonly: page.getByTestId("select-histogram-readonly"),
                error: page.getByTestId("select-histogram-error"),
                customLabel: page.getByTestId("select-histogram-custom-label"),
                empty: page.getByTestId("select-histogram-empty"),
                emptyView: page.getByTestId("empty-view"),
            },
            interaction: page.getByTestId("select-histogram-interaction"),
            focusTargetBefore: page.getByTestId("focus-target-before"),
            minValue: page.getByTestId("min-value"),
            maxValue: page.getByTestId("max-value"),
        };
    }

    public getTrigger(locator: Locator) {
        return locator.getByTestId("selector");
    }

    public async openDropdown(locator: Locator) {
        await this.getTrigger(locator).click();
        await expect(this.getTrigger(locator)).toHaveAttribute(
            "aria-expanded",
            "true"
        );
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("SelectHistogram", () => {
    test.describe("Form variants", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants");
            });

            test("All variants", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Accessibility", async ({ story }) => {
                await test.step("disabled combobox is reflected in aria", async () => {
                    await expect(story.locators.form.disabled)
                        .toMatchAriaSnapshot(`
                        - combobox "Disabled" [disabled]:
                            - paragraph: "1"
                            - text: "-"
                            - paragraph: "2"
                    `);
                });

                await test.step("readonly combobox is accessible and not marked as disabled", async () => {
                    await expect(story.locators.form.readonly)
                        .toMatchAriaSnapshot(`
                        - combobox "Readonly":
                            - paragraph: "1"
                            - text: "-"
                            - paragraph: "2"
                    `);
                });

                await test.step("error combobox signals invalid state via aria-invalid", async () => {
                    await expect(
                        story.getTrigger(story.locators.form.error)
                    ).toHaveAttribute("aria-invalid", "true");
                });

                await test.step("error message is linked as accessible description", async () => {
                    await expect(
                        story.getTrigger(story.locators.form.error)
                    ).toHaveAccessibleDescription("Please select a range");
                });

                await test.step("disabled does not open the dropdown", async () => {
                    await story.getTrigger(story.locators.form.disabled).click({
                        force: true,
                    });
                    await expect(story.page.getByRole("slider")).toHaveCount(0);
                });

                await test.step("readonly does not open the dropdown", async () => {
                    await story
                        .getTrigger(story.locators.form.readonly)
                        .click();
                    await expect(story.page.getByRole("slider")).toHaveCount(0);
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants", { mode: "dark" });
            });

            test("All variants (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants", { size: "mobile" });
            });

            test("All variants (mobile)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Form variants prefilled", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants-prefilled");
            });

            test("All variants", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants-prefilled", { mode: "dark" });
            });

            test("All variants (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Focus states", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants");
            });

            test("Keyboard navigation and focus ring states", async ({
                story,
            }) => {
                await test.step("Default - focused", async () => {
                    await story.getTrigger(story.locators.form.default).focus();
                    await compareScreenshot(story, "default-focused", {
                        locator: story.locators.form.default,
                    });
                });

                await test.step("Default - dropdown open", async () => {
                    await story.page.keyboard.press("Enter");
                    await expect(
                        story.getTrigger(story.locators.form.default)
                    ).toHaveAttribute("aria-expanded", "true");
                    await compareScreenshot(story, "default-open", {
                        fullscreen: true,
                    });
                    await story.page.keyboard.press("Escape");
                });

                await test.step("Disabled - focused", async () => {
                    await story.page.keyboard.press("Tab");
                    await compareScreenshot(story, "disabled-focused", {
                        locator: story.locators.form.disabled,
                    });
                });

                await test.step("Readonly - focused", async () => {
                    await story.page.keyboard.press("Tab");
                    await compareScreenshot(story, "readonly-focused", {
                        locator: story.locators.form.readonly,
                    });
                });

                await test.step("Error - focused", async () => {
                    await story.page.keyboard.press("Tab");
                    await compareScreenshot(story, "error-focused", {
                        locator: story.locators.form.error,
                    });
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-variants", { mode: "dark" });
            });

            test("Keyboard navigation and focus ring states (dark mode)", async ({
                story,
            }) => {
                await test.step("Default - focused", async () => {
                    await story.getTrigger(story.locators.form.default).focus();
                    await compareScreenshot(story, "default-focused", {
                        locator: story.locators.form.default,
                    });
                });

                await test.step("Disabled - focused", async () => {
                    await story.page.keyboard.press("Tab");
                    await compareScreenshot(story, "disabled-focused", {
                        locator: story.locators.form.disabled,
                    });
                });

                await test.step("Readonly - focused", async () => {
                    await story.page.keyboard.press("Tab");
                    await compareScreenshot(story, "readonly-focused", {
                        locator: story.locators.form.readonly,
                    });
                });

                await test.step("Error - focused", async () => {
                    await story.page.keyboard.press("Tab");
                    await compareScreenshot(story, "error-focused", {
                        locator: story.locators.form.error,
                    });
                });
            });
        });
    });

    test.describe("Grid layout", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("grid");
            });

            test("Grid layout", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Standalone variants", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("standalone");
            });

            test("All variants", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });

            test("Disabled and readonly cannot open", async ({ story }) => {
                await test.step("disabled combobox is reflected in aria", async () => {
                    await expect(story.locators.standalone.disabled)
                        .toMatchAriaSnapshot(`
                        - combobox [disabled]
                    `);
                });

                await test.step("disabled does not open the dropdown", async () => {
                    await story
                        .getTrigger(story.locators.standalone.disabled)
                        .click({ force: true });
                    await expect(story.page.getByRole("slider")).toHaveCount(0);
                });

                await test.step("readonly does not open the dropdown", async () => {
                    await story
                        .getTrigger(story.locators.standalone.readonly)
                        .click();
                    await expect(story.page.getByRole("slider")).toHaveCount(0);
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("custom-label");
            });

            test("Custom range label prefix and suffix", async ({ story }) => {
                await compareScreenshot(story, "custom-label-closed", {
                    locator: story.locators.standalone.customLabel,
                });

                await story.openDropdown(story.locators.standalone.customLabel);
                await compareScreenshot(story, "custom-label-open", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("empty");
            });

            test("Empty view when dropdown is opened", async ({ story }) => {
                await story.openDropdown(story.locators.standalone.empty);
                await expect(story.locators.standalone.emptyView).toBeVisible();
                await compareScreenshot(story, "empty-view-open", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("standalone", { mode: "dark" });
            });

            test("All variants (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("standalone", { size: "mobile" });
            });

            test("All variants (mobile)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Interaction", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("interaction");
            });

            test("Open and close dropdown", async ({ story }) => {
                const trigger = story.getTrigger(story.locators.interaction);

                await test.step("click opens the dropdown", async () => {
                    await trigger.click();
                    await expect(trigger).toHaveAttribute(
                        "aria-expanded",
                        "true"
                    );
                    await expect(
                        story.locators.internal.thumb(0)
                    ).toBeVisible();
                    await compareScreenshot(story, "dropdown-open", {
                        fullscreen: true,
                    });
                });

                await test.step("click outside closes the dropdown", async () => {
                    await story.page.mouse.click(0, 0);
                    await expect(trigger).toHaveAttribute(
                        "aria-expanded",
                        "false"
                    );
                    await expect(
                        story.locators.internal.thumb(0)
                    ).not.toBeAttached();
                });

                await test.step("keyboard: Enter opens the dropdown", async () => {
                    await trigger.focus();
                    await story.page.keyboard.press("Enter");
                    await expect(trigger).toHaveAttribute(
                        "aria-expanded",
                        "true"
                    );
                    await expect(
                        story.locators.internal.thumb(0)
                    ).toBeVisible();
                });

                await test.step("keyboard: Escape closes the dropdown and restores focus", async () => {
                    await story.page.keyboard.press("Escape");
                    await expect(trigger).toHaveAttribute(
                        "aria-expanded",
                        "false"
                    );
                    await expect(
                        story.locators.internal.thumb(0)
                    ).not.toBeAttached();
                    await expect(trigger).toBeFocused();
                });

                await test.step("keyboard: Space toggles the dropdown", async () => {
                    await story.page.keyboard.press("Space");
                    await expect(trigger).toHaveAttribute(
                        "aria-expanded",
                        "true"
                    );
                    await story.page.keyboard.press("Space");
                    await expect(trigger).toHaveAttribute(
                        "aria-expanded",
                        "false"
                    );
                });
            });

            test("Slider interaction updates displayed range label", async ({
                story,
            }) => {
                const trigger = story.getTrigger(story.locators.interaction);
                await story.openDropdown(story.locators.interaction);

                await test.step("Tab focuses the min slider", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.page.getByRole("slider").first()
                    ).toBeFocused();
                });

                await test.step("ArrowRight increases min value and updates combobox label", async () => {
                    await story.page.keyboard.press("ArrowRight");
                    await expect(story.locators.minValue).toHaveText("3");
                    await expect(trigger).toContainText("3");
                });

                await test.step("Tab focuses the max slider", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.page.getByRole("slider").last()
                    ).toBeFocused();
                });

                await test.step("ArrowRight increases max value and updates combobox label", async () => {
                    await story.page.keyboard.press("ArrowRight");
                    await expect(story.locators.maxValue).toHaveText("5");
                    await expect(trigger).toContainText("5");
                });

                await compareScreenshot(story, "slider-adjusted", {
                    fullscreen: true,
                });
            });
        });
    });
});
