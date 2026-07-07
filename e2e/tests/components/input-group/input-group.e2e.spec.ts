import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-group";

    public readonly locators: {
        formGridListShort: Locator;
        formGridListLong: Locator;
        clearLabelLeft: Locator;
        clearCustomLeft: Locator;
        clearListLeft: Locator;
        clearLabelRight: Locator;
        clearCustomRight: Locator;
        clearListRight: Locator;
        textbox: (field: Locator) => Locator;
        combobox: (field: Locator) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            formGridListShort: page.getByTestId(
                "form-input-group-list-short-base"
            ),
            formGridListLong: page.getByTestId(
                "form-input-group-list-long-base"
            ),
            clearLabelLeft: page.getByTestId("form-input-group-label-clear"),
            clearCustomLeft: page.getByTestId("form-input-group-custom-clear"),
            clearListLeft: page.getByTestId("form-input-group-list-clear"),
            clearLabelRight: page.getByTestId(
                "form-input-group-label-right-clear"
            ),
            clearCustomRight: page.getByTestId(
                "form-input-group-custom-right-clear"
            ),
            clearListRight: page.getByTestId(
                "form-input-group-list-right-clear"
            ),
            textbox: (field: Locator) => field.getByRole("textbox"),
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

test.describe("Input Group", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Short grid select", async ({ story }) => {
            await story.locators.formGridListShort
                .getByTestId("selector")
                .click();
            await compareScreenshot(story, "dropdown-open");
        });

        test("Long grid select", async ({ story }) => {
            await story.locators.formGridListLong
                .getByTestId("selector")
                .click();
            await compareScreenshot(story, "dropdown-open");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-clear-button");
        });

        test("Clear button", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("borderless-label-addon");
        });

        test("Borderless label", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("borderless-custom-addon");
        });

        test("Borderless custom", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("borderless-list-addon");
        });

        test("Borderless list", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
