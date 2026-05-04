import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-textarea";

    public readonly locators: {
        defaultFormTextarea: Locator;
        disabledFormTextarea: Locator;
        readonlyFormTextarea: Locator;
        errorFormTextarea: Locator;
        defaultTextarea: Locator;
        disabledTextarea: Locator;
        readonlyTextarea: Locator;
        errorTextarea: Locator;
        textbox: (field: Locator) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            defaultFormTextarea: page.getByTestId("form-textarea-default"),
            disabledFormTextarea: page.getByTestId("form-textarea-disabled"),
            readonlyFormTextarea: page.getByTestId("form-textarea-readonly"),
            errorFormTextarea: page.getByTestId("form-textarea-error"),
            defaultTextarea: page.getByTestId("textarea-default"),
            disabledTextarea: page.getByTestId("textarea-disabled"),
            readonlyTextarea: page.getByTestId("textarea-readonly"),
            errorTextarea: page.getByTestId("textarea-error"),
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

test.describe("InputTextarea", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Form.Textarea variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            // FIXME: Restore assertions after fixing the accessibility issues in the component
            /*
            await expect(story.locators.defaultFormTextarea)
                .toMatchAriaSnapshot(`
                    - textbox "Default" [disabled=false]:
                      - /placeholder: Default state
                `);
            await expect(
                story.locators.defaultFormTextarea
            ).toHaveAccessibleDescription("This is the subtitle");

            await expect(story.locators.disabledFormTextarea)
                .toMatchAriaSnapshot(`
                    - textbox "Disabled" [disabled=true]:
                      - /placeholder: Disabled state
                `);
            await expect(
                story.locators.disabledFormTextarea
            ).toHaveAccessibleDescription("This is the subtitle");

            await expect(story.locators.readonlyFormTextarea)
                .toMatchAriaSnapshot(`
                    - textbox "Readonly" [disabled=false]:
                      - /placeholder: Readonly state
                `);
            await expect(
                story.locators.readonlyFormTextarea
            ).toHaveAccessibleDescription("This is the subtitle");

            await expect(story.locators.errorFormTextarea).toMatchAriaSnapshot(`
                    - textbox "Error" [disabled=false]:
                      - /placeholder: Error state
                `);
            await expect(
                story.locators.errorFormTextarea
            ).toHaveAccessibleDescription(
                "This is the subtitle This field is required"
            );
            */
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { size: "mobile" });
        });

        test("Form.Textarea variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("Form.Textarea variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled");
        });

        test("Form.Textarea variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", { mode: "dark" });
        });

        test("Form.Textarea variants prefilled (dark mode)", async ({
            story,
        }) => {
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
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants-prefilled");
        });

        test("Standalone variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants");
        });

        test("Focus states", async ({ story }) => {
            await story.locators.defaultTextarea.focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultTextarea,
            });

            await story.locators.disabledTextarea.focus();
            await compareScreenshot(story, "disabled", {
                locator: story.locators.disabledTextarea,
            });

            await story.locators.readonlyTextarea.focus();
            await compareScreenshot(story, "readonly", {
                locator: story.locators.readonlyTextarea,
            });

            await story.locators.errorTextarea.focus();
            await compareScreenshot(story, "error", {
                locator: story.locators.errorTextarea,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants", { mode: "dark" });
        });

        test("Focus states (dark mode)", async ({ story }) => {
            await story.locators.defaultTextarea.focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultTextarea,
            });

            await story.locators.disabledTextarea.focus();
            await compareScreenshot(story, "disabled", {
                locator: story.locators.disabledTextarea,
            });

            await story.locators.readonlyTextarea.focus();
            await compareScreenshot(story, "readonly", {
                locator: story.locators.readonlyTextarea,
            });

            await story.locators.errorTextarea.focus();
            await compareScreenshot(story, "error", {
                locator: story.locators.errorTextarea,
            });
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
            await story.init("prefix");
        });

        test("Prefix", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("counter");
        });

        test("Counter", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-counter");
        });

        test("Custom counter", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
