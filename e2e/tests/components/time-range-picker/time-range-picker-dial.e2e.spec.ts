import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "time-range-picker";

    public readonly locators: {
        default: Locator;
        disabled: Locator;
        readonly: Locator;
        error: Locator;
        defaultBase: Locator;
        disabledBase: Locator;
        readonlyBase: Locator;
        errorBase: Locator;
        internal: {
            incrementHourButton: Locator;
            incrementMinuteButton: Locator;
            dropdownAMButton: Locator;
            dropdownPMButton: Locator;
            dropdownCancelButton: Locator;
            dropdownDoneButton: Locator;
            combobox: (field: Locator) => Locator;
            dropdownFrom: (locator: Locator) => Locator;
            dropdownTo: (locator: Locator) => Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            default: page.getByTestId("time-range-picker-default"),
            disabled: page.getByTestId("time-range-picker-disabled"),
            readonly: page.getByTestId("time-range-picker-readonly"),
            error: page.getByTestId("time-range-picker-error"),
            defaultBase: page.getByTestId("time-range-picker-default-base"),
            disabledBase: page.getByTestId("time-range-picker-disabled-base"),
            readonlyBase: page.getByTestId("time-range-picker-readonly-base"),
            errorBase: page.getByTestId("time-range-picker-error-base"),
            internal: {
                incrementHourButton: page.getByTestId(
                    "time-range-picker-default-base-end-hour-increment-button"
                ),
                incrementMinuteButton: page.getByTestId(
                    "time-range-picker-default-base-end-minute-increment-button"
                ),
                dropdownAMButton: page.getByTestId(
                    "time-range-picker-default-base-end-am-toggle"
                ),
                dropdownPMButton: page.getByTestId(
                    "time-range-picker-default-base-end-pm-toggle"
                ),
                dropdownCancelButton: page.getByTestId(
                    "time-range-picker-default-base-end-cancel-button"
                ),
                dropdownDoneButton: page.getByTestId(
                    "time-range-picker-default-base-end-confirm-button"
                ),
                combobox: (field: Locator) => field.getByRole("combobox"),
                dropdownFrom: (locator: Locator) =>
                    locator.getByTestId(/timepicker-selector-from$/),
                dropdownTo: (locator: Locator) =>
                    locator.getByTestId(/timepicker-selector-to$/),
            },
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Time Range Picker Dial", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("dial-variants");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus", async ({ story }) => {
            await test.step("Default state", async () => {
                await story.locators.defaultBase
                    .getByTestId("timepicker-container")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.defaultBase,
                });
            });

            await test.step("Disabled state", async () => {
                await story.locators.disabledBase
                    .getByTestId("timepicker-container")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.disabledBase,
                });
            });

            await test.step("Readonly state", async () => {
                await story.locators.readonlyBase
                    .getByTestId("timepicker-container")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.readonlyBase,
                });
            });

            await test.step("Error state", async () => {
                await story.locators.errorBase
                    .getByTestId("timepicker-container")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.errorBase,
                });
            });
        });

        test("Dropdown", async ({ story }) => {
            await test.step('Open "from" dropdown', async () => {
                await story.locators.internal
                    .dropdownFrom(story.locators.defaultBase)
                    .click();
                await compareScreenshot(story, "from");
            });

            await test.step('Open "to" dropdown', async () => {
                await story.locators.internal
                    .dropdownTo(story.locators.defaultBase)
                    .click();
                await compareScreenshot(story, "to");
            });

            await test.step("Hover on increment hour button", async () => {
                await story.locators.internal.incrementHourButton.hover();
                await compareScreenshot(story, "increment-hour-hover");
            });

            await test.step('Hover on default selected "AM" button', async () => {
                await story.locators.internal.dropdownAMButton
                    .getByTestId("toggle-input")
                    .hover();
                await compareScreenshot(story, "am-button-hover");
            });

            await test.step('Hover on "PM" button', async () => {
                await story.locators.internal.dropdownPMButton
                    .getByTestId("toggle-input")
                    .hover();
                await compareScreenshot(story, "pm-button-hover");
            });

            await test.step('Hover on "Cancel" button', async () => {
                await story.locators.internal.dropdownCancelButton.hover();
                await compareScreenshot(story, "cancel-button-hover");
            });

            await test.step('Hover on "Done" button', async () => {
                await story.locators.internal.incrementHourButton.click();
                await story.locators.internal.incrementMinuteButton.click();
                await compareScreenshot(story, "done-button-enabled");
                await story.locators.internal.dropdownDoneButton.hover();
                await compareScreenshot(story, "done-button-hover");
            });
        });

        test("Accessibility", async ({ story }) => {
            await test.step("Default state", async () => {
                await expect(story.locators.default).toMatchAriaSnapshot(`
                - text: Default state This is the subtitle
                - group:
                    - combobox "Default state"
                    - combobox "Default state"
                `);
                await expect(
                    story.locators.internal
                        .combobox(story.locators.default)
                        .nth(0)
                ).toHaveAccessibleDescription("This is the subtitle");
                await expect(
                    story.locators.internal
                        .combobox(story.locators.default)
                        .nth(1)
                ).toHaveAccessibleDescription("This is the subtitle");
            });

            await test.step("Disabled state", async () => {
                await expect(story.locators.disabled).toMatchAriaSnapshot(`
                - text: Disabled State This is the subtitle
                - group:
                    - combobox "Disabled State" [disabled=true]
                    - combobox "Disabled State" [disabled=true]
                `);
                await expect(
                    story.locators.internal
                        .combobox(story.locators.disabled)
                        .nth(0)
                ).toHaveAccessibleDescription("This is the subtitle");
                await expect(
                    story.locators.internal
                        .combobox(story.locators.disabled)
                        .nth(1)
                ).toHaveAccessibleDescription("This is the subtitle");
            });

            await test.step("Readonly state", async () => {
                await expect(story.locators.readonly).toMatchAriaSnapshot(`
                - text: Read-only State This is the subtitle
                - group:
                    - combobox "Read-only State"
                    - combobox "Read-only State"
                `);
                await expect(
                    story.locators.internal
                        .combobox(story.locators.readonly)
                        .nth(0)
                ).toHaveAccessibleDescription("This is the subtitle");
                await expect(
                    story.locators.internal
                        .combobox(story.locators.readonly)
                        .nth(1)
                ).toHaveAccessibleDescription("This is the subtitle");
            });

            await test.step("Error state", async () => {
                await expect(story.locators.error).toMatchAriaSnapshot(`
                - text: Error State This is the subtitle
                - group:
                    - combobox "Error State"
                    - combobox "Error State"
                - paragraph: Sample error message
                `);
                await expect(
                    story.locators.internal
                        .combobox(story.locators.error)
                        .nth(0)
                ).toHaveAccessibleDescription(
                    "Sample error message This is the subtitle"
                );
                await expect(
                    story.locators.internal
                        .combobox(story.locators.error)
                        .nth(1)
                ).toHaveAccessibleDescription(
                    "Sample error message This is the subtitle"
                );
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("dial-variants", { mode: "dark" });
        });

        test("Visual dark mode", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus dark mode", async ({ story }) => {
            await test.step("Default state", async () => {
                await story.locators.default
                    .getByTestId("timepicker-container")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.default,
                });
            });

            await test.step("Disabled state", async () => {
                await story.locators.disabledBase
                    .getByTestId("timepicker-container")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.disabledBase,
                });
            });

            await test.step("Readonly state", async () => {
                await story.locators.readonlyBase
                    .getByTestId("timepicker-container")
                    .focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.readonlyBase,
                });
            });

            await test.step("Error state", async () => {
                await story.locators.errorBase
                    .getByTestId("timepicker-container")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.errorBase,
                });
            });
        });

        test("Dropdown dark mode", async ({ story }) => {
            await test.step('Open "from" dropdown', async () => {
                await story.locators.internal
                    .dropdownFrom(story.locators.defaultBase)
                    .click();
                await compareScreenshot(story, "from");
            });

            await test.step('Open "to" dropdown', async () => {
                await story.locators.internal
                    .dropdownTo(story.locators.defaultBase)
                    .click();
                await compareScreenshot(story, "to");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("dial-variants", { size: "mobile" });
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("dial-variants-prefilled");
        });

        test("Prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("dial-variants-prefilled");
        });

        test("Prefilled dark mode", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("dial-grid-layout");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-dial-variants");
        });

        test("Standalone", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
