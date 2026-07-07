import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "toggle";

    public readonly locators: {
        toggleDefault: Locator;
        toggleChecked: Locator;
        toggleDisabled: Locator;
        toggleError: Locator;
        toggleErrorChecked: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            toggleDefault: page.getByTestId("toggle-default"),
            toggleChecked: page.getByTestId("toggle-checked"),
            toggleDisabled: page.getByTestId("toggle-disabled"),
            toggleError: page.getByTestId("toggle-error"),
            toggleErrorChecked: page.getByTestId("toggle-error-checked"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Toggle", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("checkbox");
        });

        test("Checkbox", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Hover states", async ({ story }) => {
            await story.locators.toggleDefault.hover();
            await compareScreenshot(story, "hover-default", {
                locator: story.locators.toggleDefault,
            });

            await story.locators.toggleChecked.hover();
            await compareScreenshot(story, "hover-checked", {
                locator: story.locators.toggleChecked,
            });

            await story.locators.toggleDisabled.hover();
            await compareScreenshot(story, "hover-disabled", {
                locator: story.locators.toggleDisabled,
            });

            await story.locators.toggleError.hover();
            await compareScreenshot(story, "hover-error", {
                locator: story.locators.toggleError,
            });

            await story.locators.toggleErrorChecked.hover();
            await compareScreenshot(story, "hover-error-checked", {
                locator: story.locators.toggleErrorChecked,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("checkbox", { mode: "dark" });
        });

        test("Checkbox (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Hover states (dark mode)", async ({ story }) => {
            await story.locators.toggleDefault.hover();
            await compareScreenshot(story, "hover-default", {
                locator: story.locators.toggleDefault,
            });

            await story.locators.toggleChecked.hover();
            await compareScreenshot(story, "hover-checked", {
                locator: story.locators.toggleChecked,
            });

            await story.locators.toggleDisabled.hover();
            await compareScreenshot(story, "hover-disabled", {
                locator: story.locators.toggleDisabled,
            });

            await story.locators.toggleError.hover();
            await compareScreenshot(story, "hover-error", {
                locator: story.locators.toggleError,
            });

            await story.locators.toggleErrorChecked.hover();
            await compareScreenshot(story, "hover-error-checked", {
                locator: story.locators.toggleErrorChecked,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("radio");
        });

        test("Radio", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("yes");
        });

        test("Yes", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no");
        });

        test("No", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sublabel");
        });

        test("Sublabel", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sublabel", { mode: "dark" });
        });

        test("Sublabel (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("composite-section");
        });

        test("Composite section", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Composite section hover", async ({ story }) => {
            await story.locators.toggleDefault.hover({
                position: { x: 10, y: 10 },
            });
            await compareScreenshot(story, "hover-default", {
                locator: story.locators.toggleDefault,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("composite-section", { mode: "dark" });
        });

        test("Composite section (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Composite section hover (dark mode)", async ({ story }) => {
            await story.locators.toggleDefault.hover({
                position: { x: 10, y: 10 },
            });
            await compareScreenshot(story, "hover-default", {
                locator: story.locators.toggleDefault,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("removable");
        });

        test("Removable variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("removable", { mode: "dark" });
        });

        test("Removable variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
