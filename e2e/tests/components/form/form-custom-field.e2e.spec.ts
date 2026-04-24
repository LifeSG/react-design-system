import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "form";

    public readonly locators: {
        basicField: Locator;
        labelField: Locator;
        subtitleField: Locator;
        errorField: Locator;
        errorMessage: Locator;
        disabledField: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            basicField: page.getByTestId("custom-field-basic"),
            labelField: page.getByTestId("custom-field-label"),
            subtitleField: page.getByTestId("custom-field-subtitle"),
            errorField: page.getByTestId("custom-field-error"),
            errorMessage: page.getByTestId("custom-field-error-message"),
            disabledField: page.getByTestId("custom-field-disabled"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Form.CustomField", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-custom-field");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-custom-field", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
