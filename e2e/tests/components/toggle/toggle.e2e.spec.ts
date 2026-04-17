import { test as base, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "toggle";

    constructor(page: Page) {
        super(page);
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Toggle", () => {
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
            await story.init("base-variants", { mode: "dark" });
        });

        test("Base variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    // -------------------------------------------------------------------------
    // States
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("states");
        });

        test("States", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("states", { mode: "dark" });
        });

        test("States (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    // -------------------------------------------------------------------------
    // With sub label
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-sublabel");
        });

        test("With sub label", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-sublabel", { mode: "dark" });
        });

        test("With sub label (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    // -------------------------------------------------------------------------
    // With composite section
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-composite");
        });

        test("With composite section", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-composite", { mode: "dark" });
        });

        test("With composite section (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    // -------------------------------------------------------------------------
    // Removable
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("removable");
        });

        test("Removable", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("removable", { mode: "dark" });
        });

        test("Removable (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
