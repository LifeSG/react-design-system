import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

const DEFAULT_SIZE_ICON_LABEL_BUTTONS_COUNT = 5;

class StoryPage extends AbstractStoryPage {
    protected readonly component = "button";

    public readonly locators: {
        buttons: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            buttons: page.getByRole("button"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Button", () => {
    // -------------------------------------------------------------------------
    // Base variants
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-variants");
        });

        test("Base variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-loading");
        });

        test("Base variants (loading)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-danger");
        });

        test("Base variants (danger)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    // -------------------------------------------------------------------------
    // Icon-only variants
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-icon-button");
        });

        test("Icon-only variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-button-loading");
        });

        test("Icon-only variants (loading)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-button-danger");
        });

        test("Icon-only variants (danger)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    // -------------------------------------------------------------------------
    // Icon with label variants
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-icon-with-label");
        });

        test("Icon with label variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            const buttons = story.locators.buttons;
            for (let i = 0; i < DEFAULT_SIZE_ICON_LABEL_BUTTONS_COUNT; i++) {
                const button = buttons.nth(i);
                await button.hover();
                await compareScreenshot(story, `hover-${i}`, {
                    locator: button,
                });
            }
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-icon-with-label", { mode: "dark" });
        });

        test("Icon with label variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");

            const buttons = story.locators.buttons;
            for (let i = 0; i < DEFAULT_SIZE_ICON_LABEL_BUTTONS_COUNT; i++) {
                const button = buttons.nth(i);
                await button.hover();
                await compareScreenshot(story, `hover-${i}`, {
                    locator: button,
                });
            }
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-danger");
        });

        test("Icon with label variants (danger)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-danger", { mode: "dark" });
        });

        test("Icon with label variants (danger, dark mode)", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-loading");
        });

        test("Icon with label variants (loading)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-loading", { mode: "dark" });
        });

        test("Icon with label variants (loading, dark mode)", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-right");
        });

        test("Icon with label variants (iconPosition=right)", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
