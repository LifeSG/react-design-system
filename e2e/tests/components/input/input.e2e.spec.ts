import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input";

    public readonly locators: {
        clearInputs: {
            standaloneField: Locator;
            formField: Locator;
        };
        spacingInputs: {
            spacingField: Locator;
            formSpacingField: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            clearInputs: {
                standaloneField: page.getByTestId("input-clear-standalone"),
                formField: page.getByTestId("form-input-clear-base"),
            },
            spacingInputs: {
                spacingField: page.getByTestId("input-spacing"),
                formSpacingField: page.getByTestId("form-input-spacing-base"),
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

test.describe("Input", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants");
        });

        test("All input style variants with different states", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");

            // Focus states
            await story.page.getByTestId("input-bordered-normal").focus();
            await compareScreenshot(story, "normal-focused");

            await story.page.getByTestId("input-bordered-error").focus();
            await compareScreenshot(story, "error-focused");

            await story.page.getByTestId("input-bordered-readonly").focus();
            await compareScreenshot(story, "readonly-focused");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants-with-values");
        });

        test("Standalone variants with initial values", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-input-variants");
        });

        test("Form Input variants with different states", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.page.getByTestId("form-input-normal"))
                .toMatchAriaSnapshot(`
            - text: Normal form input field
            - textbox "Normal form input field":
                - /placeholder: Enter here...
            `);

            await expect(story.page.getByTestId("form-input-error"))
                .toMatchAriaSnapshot(`
            - text: Error form input field
            - textbox "Error form input field":
                - /placeholder: Enter here...
            - paragraph: This field is required
            `);

            await expect(story.page.getByTestId("form-input-disabled"))
                .toMatchAriaSnapshot(`
            - text: Disabled form input field
            - textbox "Disabled form input field" [disabled=true]:
                - /placeholder: Enter here...
            `);

            await expect(story.page.getByTestId("form-input-readonly"))
                .toMatchAriaSnapshot(`
            - text: Readonly form input field
            - textbox "Readonly form input field"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-input-variants-with-values");
        });

        test("Form Input variants with initial values", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("clear-button-functionality");
        });

        test("Clear button functionality", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.layout).toMatchAriaSnapshot(`
            - textbox
            - button "Clear input"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("spacing-functionality");
        });

        test("Text spacing for telephone inputs", async ({ story }) => {
            await story.locators.spacingInputs.spacingField.fill("91234567");
            await compareScreenshot(story, "with-spacing");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-border-variants");
        });

        test("No-border input variants with different states", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("short-long-form-input");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
