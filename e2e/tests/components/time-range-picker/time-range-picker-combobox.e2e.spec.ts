import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "time-range-picker";

    public readonly locators: {
        default: Locator;
        disabled: Locator;
        readOnly: Locator;
        error: Locator;
        defaultInputFrom: Locator;
        defaultInputTo: Locator;
        intervalVariantInputFrom: Locator;
        format24hrVariantInputFrom: Locator;
        limitsVariantInputFrom: Locator;
        dropdownList: Locator;
        combobox: (field: Locator) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            default: page.getByTestId("time-range-picker-combobox-default"),
            disabled: page.getByTestId("time-range-picker-combobox-disabled"),
            readOnly: page.getByTestId("time-range-picker-combobox-readonly"),
            error: page.getByTestId("time-range-picker-combobox-error"),
            defaultInputFrom: page.getByTestId(
                "time-range-picker-combobox-default-base-timepicker-selector-start"
            ),
            defaultInputTo: page.getByTestId(
                "time-range-picker-combobox-default-base-timepicker-selector-end"
            ),
            intervalVariantInputFrom: page.getByTestId(
                "time-range-picker-combobox-interval-base-timepicker-selector-start"
            ),
            format24hrVariantInputFrom: page.getByTestId(
                "time-range-picker-combobox-24hr-base-timepicker-selector-start"
            ),
            limitsVariantInputFrom: page.getByTestId(
                "time-range-picker-combobox-limits-base-timepicker-selector-start"
            ),
            dropdownList: page.getByRole("listbox"),
            combobox: (field: Locator) => field.getByRole("combobox"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Time Range Picker Combobox", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("combobox-variants");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Dropdown", async ({ story }) => {
            await test.step('Open "from" dropdown', async () => {
                await story.locators.defaultInputFrom.click();
                await compareScreenshot(story, "from");
            });

            await test.step('Open "to" dropdown', async () => {
                await story.locators.defaultInputTo.click();
                await compareScreenshot(story, "to");
            });

            await test.step("Hover unselected option in dropdown", async () => {
                await story.locators.defaultInputFrom.click();
                const firstOption = story.locators.dropdownList
                    .getByRole("option")
                    .first();
                await firstOption.hover();
                await compareScreenshot(story, "hover-unselected-option");
            });

            await test.step("Hover selected option in dropdown", async () => {
                await story.locators.defaultInputFrom.click();
                const firstOption = story.locators.dropdownList
                    .getByRole("option")
                    .first();
                await firstOption.click();
                await story.locators.defaultInputFrom.click();
                await firstOption.hover();
                await compareScreenshot(story, "hover-selected-option");
            });
        });

        test("Accessibility", async ({ story }) => {
            await test.step("Default state", async () => {
                await expect(story.locators.default).toMatchAriaSnapshot(`
                - text: Default state This is the subtitle
                - group:
                    - text: Start time End time
                    - combobox "Default state Start time"
                    - combobox "Default state End time"
                `);
                await expect(
                    story.locators.combobox(story.locators.default).nth(0)
                ).toHaveAccessibleDescription("This is the subtitle");
                await expect(
                    story.locators.combobox(story.locators.default).nth(1)
                ).toHaveAccessibleDescription("This is the subtitle");
            });

            await test.step("Disabled state", async () => {
                await expect(story.locators.disabled).toMatchAriaSnapshot(`
                - text: Disabled State This is the subtitle
                - group:
                    - text: Start time End time
                    - combobox "Disabled State Start time" [disabled=true]
                    - combobox "Disabled State End time" [disabled=true]
                `);
                await expect(
                    story.locators.combobox(story.locators.disabled).nth(0)
                ).toHaveAccessibleDescription("This is the subtitle");
                await expect(
                    story.locators.combobox(story.locators.disabled).nth(1)
                ).toHaveAccessibleDescription("This is the subtitle");
            });

            await test.step("Readonly state", async () => {
                await expect(story.locators.readOnly).toMatchAriaSnapshot(`
                - text: Read-only State This is the subtitle
                - group:
                    - text: Start time End time
                    - combobox "Read-only State Start time"
                    - combobox "Read-only State End time"
                `);
                await expect(
                    story.locators.combobox(story.locators.readOnly).nth(0)
                ).toHaveAccessibleDescription("This is the subtitle");
                await expect(
                    story.locators.combobox(story.locators.readOnly).nth(1)
                ).toHaveAccessibleDescription("This is the subtitle");
            });

            await test.step("Error state", async () => {
                await expect(story.locators.error).toMatchAriaSnapshot(`
                - text: Error State This is the subtitle
                - group:
                    - text: Start time End time
                    - combobox "Error State Start time"
                    - combobox "Error State End time"
                - paragraph: Sample error message
                `);
                await expect(
                    story.locators.combobox(story.locators.error).nth(0)
                ).toHaveAccessibleDescription(
                    "Sample error message This is the subtitle"
                );
                await expect(
                    story.locators.combobox(story.locators.error).nth(1)
                ).toHaveAccessibleDescription(
                    "Sample error message This is the subtitle"
                );
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("combobox-variants", { mode: "dark" });
        });

        test("Visual dark mode", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Dropdown dark mode", async ({ story }) => {
            await test.step('Open "from" dropdown', async () => {
                await story.locators.defaultInputFrom.click();
                await compareScreenshot(story, "from");
            });

            await test.step('Open "to" dropdown', async () => {
                await story.locators.defaultInputTo.click();
                await compareScreenshot(story, "to");
            });

            await test.step("Hover unselected option in dropdown", async () => {
                await story.locators.defaultInputFrom.click();
                const firstOption = story.locators.dropdownList
                    .getByRole("option")
                    .first();
                await firstOption.hover();
                await compareScreenshot(story, "hover-unselected-option");
            });

            await test.step("Hover selected option in dropdown", async () => {
                await story.locators.defaultInputFrom.click();
                const firstOption = story.locators.dropdownList
                    .getByRole("option")
                    .first();
                await firstOption.click();
                await story.locators.defaultInputFrom.click();
                await firstOption.hover();
                await compareScreenshot(story, "hover-selected-option");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("combobox-variants", { size: "mobile" });
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("combobox-other-variants");
        });

        test("Interval variant", async ({ story }) => {
            await story.locators.intervalVariantInputFrom.click();
            await compareScreenshot(story, "dropdown");
        });

        test("24hr format variant", async ({ story }) => {
            await story.locators.format24hrVariantInputFrom.click();
            await compareScreenshot(story, "dropdown");
        });

        test("Limits variant", async ({ story }) => {
            await story.locators.limitsVariantInputFrom.click();
            await compareScreenshot(story, "dropdown");
        });

        test("Validation variant", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("combobox-variants-prefilled");
        });

        test("Prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-combobox-variants");
        });

        test("Standalone", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
