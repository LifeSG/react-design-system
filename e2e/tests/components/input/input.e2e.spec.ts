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
            await story.init("all-input-variants");
        });

        test("All input style variants with different states", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-input-variants");
        });

        test("Form Input variants with different states", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("clear-button-functionality");
        });

        test("Clear button functionality", async ({ story }) => {
            await story.locators.clearInputs.standaloneField.fill("Test text");
            await story.locators.clearInputs.formField.fill("Test text");

            await compareScreenshot(story, "with-text");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("spacing-functionality");
        });

        test("Text spacing for telephone inputs", async ({ story }) => {
            await story.locators.spacingInputs.spacingField.fill("91234567");
            await story.locators.spacingInputs.formSpacingField.fill(
                "91234567"
            );
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

        test("Input fields with short and long column spans", async ({
            story,
        }) => {
            await compareScreenshot(story, "with-column-spans");
        });
    });
});
