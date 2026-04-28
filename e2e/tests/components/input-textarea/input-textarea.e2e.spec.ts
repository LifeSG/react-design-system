import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "input-textarea";

    public readonly locators: {
        prefixTextarea: Locator;
        defaultTextarea: Locator;
        readonlyTextarea: Locator;
        disabledTextarea: Locator;
        errorTextarea: Locator;
        counterTextarea: Locator;
        defaultCounterLabel: Locator;
        customCounterTextarea: Locator;
        customCounterLabel: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            prefixTextarea: page.getByTestId("textarea-prefix"),
            defaultTextarea: page.getByTestId("textarea-default"),
            readonlyTextarea: page.getByTestId("textarea-readonly"),
            disabledTextarea: page.getByTestId("textarea-disabled"),
            errorTextarea: page.getByTestId("textarea-error"),
            counterTextarea: page.getByTestId("textarea-counter"),
            defaultCounterLabel: page.getByTestId("counter-label"),
            customCounterTextarea: page.getByTestId("textarea-custom-counter"),
            customCounterLabel: page.getByTestId("custom-counter-label"),
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
            await story.init("standalone");
        });

        test("Standalone", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("states");
        });

        test("States", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });

        test("Focus", async ({ story }) => {
            await story.page.keyboard.press("Tab");
            await expect(story.locators.defaultTextarea).toBeFocused();

            await story.page.keyboard.press("Tab");
            await expect(story.locators.readonlyTextarea).toBeFocused();

            await story.page.keyboard.press("Tab");
            await expect(story.locators.errorTextarea).toBeFocused();
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
            await compareScreenshot(story, "mount", {
                locator: story.layout,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-counter");
        });

        test("Custom counter", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.layout,
            });
        });
    });
});
