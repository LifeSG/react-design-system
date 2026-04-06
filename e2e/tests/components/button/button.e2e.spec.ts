import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

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

        test("Base variants – all size and style combinations", async ({
            story,
        }) => {
            await compareScreenshot(story, "base-variants");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-variants", { mode: "dark" });
        });

        test("Base variants – dark mode", async ({ story }) => {
            await compareScreenshot(story, "base-variants-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-loading");
        });

        test("Base loading – all size and style combinations", async ({
            story,
        }) => {
            await compareScreenshot(story, "base-loading");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-loading", { mode: "dark" });
        });

        test("Base loading – dark mode", async ({ story }) => {
            await compareScreenshot(story, "base-loading-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-danger");
        });

        test("Base danger – all size and style combinations", async ({
            story,
        }) => {
            await compareScreenshot(story, "base-danger");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-danger", { mode: "dark" });
        });

        test("Base danger – dark mode", async ({ story }) => {
            await compareScreenshot(story, "base-danger-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-danger-loading");
        });

        test("Base danger loading – all size and style combinations", async ({
            story,
        }) => {
            await compareScreenshot(story, "base-danger-loading");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-danger-loading", { mode: "dark" });
        });

        test("Base danger loading – dark mode", async ({ story }) => {
            await compareScreenshot(story, "base-danger-loading-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("focusable-when-disabled");
        });

        test("Focusable when disabled – renders correctly", async ({
            story,
        }) => {
            await compareScreenshot(story, "focusable-when-disabled");
        });
    });

    // -------------------------------------------------------------------------
    // Icon-only variants
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-icon-button");
        });

        test("Icon-only button – all size and style combinations", async ({
            story,
        }) => {
            await compareScreenshot(story, "base-icon-button");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-icon-button", { mode: "dark" });
        });

        test("Icon-only button – dark mode", async ({ story }) => {
            await compareScreenshot(story, "base-icon-button-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-button-danger");
        });

        test("Icon-only button – danger variants", async ({ story }) => {
            await compareScreenshot(story, "icon-button-danger");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-button-loading");
        });

        test("Icon-only button – loading state", async ({ story }) => {
            await compareScreenshot(story, "icon-button-loading");
        });
    });

    // -------------------------------------------------------------------------
    // Icon with label variants
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-icon-with-label");
        });

        test("Icon with label – all size and style combinations (icon left)", async ({
            story,
        }) => {
            await compareScreenshot(story, "base-icon-with-label");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-icon-with-label", { mode: "dark" });
        });

        test("Icon with label – dark mode", async ({ story }) => {
            await compareScreenshot(story, "base-icon-with-label-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-right");
        });

        test("Icon with label – icon right position", async ({ story }) => {
            await compareScreenshot(story, "icon-with-label-right");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-danger");
        });

        test("Icon with label – danger variants", async ({ story }) => {
            await compareScreenshot(story, "icon-with-label-danger");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-loading");
        });

        test("Icon with label – loading state", async ({ story }) => {
            await compareScreenshot(story, "icon-with-label-loading");
        });
    });
});
