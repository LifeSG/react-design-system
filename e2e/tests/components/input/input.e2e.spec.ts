import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input";

    public readonly locators: {
        defaultFormInput: Locator;
        disabledFormInput: Locator;
        readonlyFormInput: Locator;
        errorFormInput: Locator;
        defaultInput: Locator;
        disabledInput: Locator;
        readonlyInput: Locator;
        errorInput: Locator;
        telSpacingInput: Locator;
        clearButtonFormInput: Locator;
        clearButtonPrefilledFormInput: Locator;
        textbox: (field: Locator) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            defaultFormInput: page.getByTestId("form-input-default"),
            disabledFormInput: page.getByTestId("form-input-disabled"),
            readonlyFormInput: page.getByTestId("form-input-readonly"),
            errorFormInput: page.getByTestId("form-input-error"),
            defaultInput: page.getByTestId("input-default"),
            disabledInput: page.getByTestId("input-disabled"),
            readonlyInput: page.getByTestId("input-readonly"),
            errorInput: page.getByTestId("input-error"),
            telSpacingInput: page.getByTestId("input-spacing"),
            clearButtonFormInput: page.getByTestId(
                "form-input-with-clear-button"
            ),
            clearButtonPrefilledFormInput: page.getByTestId(
                "form-input-with-clear-button-prefilled"
            ),
            textbox: (field: Locator) => field.getByRole("textbox"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Input", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Form.Input variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.defaultFormInput).toMatchAriaSnapshot(`
                    - text: Default This is the subtitle
                    - textbox "Default" [disabled=false]:
                      - /placeholder: Default state
                `);
            await expect(
                story.locators.textbox(story.locators.defaultFormInput)
            ).toHaveAccessibleDescription("This is the subtitle");

            await expect(story.locators.disabledFormInput).toMatchAriaSnapshot(`
                    - text: Disabled This is the subtitle
                    - textbox "Disabled" [disabled=true]:
                      - /placeholder: Disabled state
                `);
            await expect(
                story.locators.textbox(story.locators.disabledFormInput)
            ).toHaveAccessibleDescription("This is the subtitle");

            await expect(story.locators.readonlyFormInput).toMatchAriaSnapshot(`
                    - text: Readonly This is the subtitle
                    - textbox "Readonly" [disabled=false]:
                      - /placeholder: Readonly state
                `);
            await expect(
                story.locators.textbox(story.locators.readonlyFormInput)
            ).toHaveAccessibleDescription("This is the subtitle");

            await expect(story.locators.errorFormInput).toMatchAriaSnapshot(`
                    - text: Error This is the subtitle
                    - textbox "Error" [disabled=false]:
                      - /placeholder: Error state
                    - paragraph: This field is required
                `);
            await expect(
                story.locators.textbox(story.locators.errorFormInput)
            ).toHaveAccessibleDescription(
                "This field is required This is the subtitle"
            );
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { size: "mobile" });
        });

        test("Form.Input variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("Form.Input variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled");
        });

        test("Form.Input variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", { mode: "dark" });
        });

        test("Form.Input variants prefilled (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants");
        });

        test("Standalone variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus states", async ({ story }) => {
            await story.locators.defaultInput.focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultInput,
            });

            await story.locators.disabledInput.focus();
            await compareScreenshot(story, "disabled", {
                locator: story.locators.disabledInput,
            });

            await story.locators.readonlyInput.focus();
            await compareScreenshot(story, "readonly", {
                locator: story.locators.readonlyInput,
            });

            await story.locators.errorInput.focus();
            await compareScreenshot(story, "error", {
                locator: story.locators.errorInput,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants", { mode: "dark" });
        });

        test("Focus states (dark mode)", async ({ story }) => {
            await story.locators.defaultInput.focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultInput,
            });

            await story.locators.disabledInput.focus();
            await compareScreenshot(story, "disabled", {
                locator: story.locators.disabledInput,
            });

            await story.locators.readonlyInput.focus();
            await compareScreenshot(story, "readonly", {
                locator: story.locators.readonlyInput,
            });

            await story.locators.errorInput.focus();
            await compareScreenshot(story, "error", {
                locator: story.locators.errorInput,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-border-variants");
        });

        test("No-border variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("No-border focus states", async ({ story }) => {
            await story.locators.defaultInput.focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultInput,
            });

            await story.locators.disabledInput.focus();
            await compareScreenshot(story, "disabled", {
                locator: story.locators.disabledInput,
            });

            await story.locators.readonlyInput.focus();
            await compareScreenshot(story, "readonly", {
                locator: story.locators.readonlyInput,
            });

            await story.locators.errorInput.focus();
            await compareScreenshot(story, "error", {
                locator: story.locators.errorInput,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-border-variants", { mode: "dark" });
        });

        test("No-border variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-border-variants-prefilled");
        });

        test("No-border variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("clear-button");
        });

        test("Clear button", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.clearButtonFormInput)
                .toMatchAriaSnapshot(`
                - textbox "With clear button" [disabled=false]
            `);

            await expect(story.locators.clearButtonPrefilledFormInput)
                .toMatchAriaSnapshot(`
                - textbox "With clear button prefilled" [disabled=false]
                - button "Clear input"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("tel-spacing");
        });

        test("Text spacing for telephone inputs", async ({ story }) => {
            await story.locators.telSpacingInput.fill("91234567");

            await compareScreenshot(story, "filled");
        });
    });
});
