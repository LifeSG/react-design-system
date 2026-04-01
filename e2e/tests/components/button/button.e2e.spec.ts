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
            await test.step("All variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "base-variants");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-variants", { mode: "dark" });
        });

        test("Base variants – dark mode", async ({ story }) => {
            await test.step("All variants render in dark mode", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "base-variants-dark");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Loading state
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading-state");
        });

        test("Loading state – all size and style combinations", async ({
            story,
        }) => {
            await test.step("All loading variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "loading-state");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading-state", { mode: "dark" });
        });

        test("Loading state – dark mode", async ({ story }) => {
            await test.step("All loading variants render in dark mode", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "loading-state-dark");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Danger variants
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-variants");
        });

        test("Danger variants – all size and style combinations", async ({
            story,
        }) => {
            await test.step("All danger variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "danger-variants");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-variants", { mode: "dark" });
        });

        test("Danger variants – dark mode", async ({ story }) => {
            await test.step("All danger variants render in dark mode", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "danger-variants-dark");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Danger loading state
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-loading-state");
        });

        test("Danger loading state – all size and style combinations", async ({
            story,
        }) => {
            await test.step("All danger loading variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "danger-loading-state");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("danger-loading-state", { mode: "dark" });
        });

        test("Danger loading state – dark mode", async ({ story }) => {
            await test.step("All danger loading variants render in dark mode", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "danger-loading-state-dark");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Focusable when disabled
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("focusable-when-disabled");
        });

        test("Focusable when disabled – renders correctly", async ({
            story,
        }) => {
            await test.step("Both buttons render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "focusable-when-disabled");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Icon-only variants
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-button-variants");
        });

        test("Icon-only button – all size and style combinations", async ({
            story,
        }) => {
            await test.step("All icon-only variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "icon-button-variants");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-button-variants", { mode: "dark" });
        });

        test("Icon-only button – dark mode", async ({ story }) => {
            await test.step("All icon-only variants render in dark mode", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "icon-button-variants-dark");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Icon-only danger
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-button-danger");
        });

        test("Icon-only button – danger variants", async ({ story }) => {
            await test.step("All icon-only danger variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "icon-button-danger");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Icon-only loading
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-button-loading");
        });

        test("Icon-only button – loading state", async ({ story }) => {
            await test.step("All icon-only loading variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "icon-button-loading");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Icon with label – left (default)
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-variants");
        });

        test("Icon with label – all size and style combinations (icon left)", async ({
            story,
        }) => {
            await test.step("All icon-with-label variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "icon-with-label-variants");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-variants", { mode: "dark" });
        });

        test("Icon with label – dark mode", async ({ story }) => {
            await test.step("All icon-with-label variants render in dark mode", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "icon-with-label-variants-dark");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Icon with label – right
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-right");
        });

        test("Icon with label – icon right position", async ({ story }) => {
            await test.step("All right-icon variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "icon-with-label-right");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Icon with label – danger
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-danger");
        });

        test("Icon with label – danger variants", async ({ story }) => {
            await test.step("All icon-with-label danger variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "icon-with-label-danger");
            });
        });
    });

    // -------------------------------------------------------------------------
    // Icon with label – loading
    // -------------------------------------------------------------------------
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("icon-with-label-loading");
        });

        test("Icon with label – loading state", async ({ story }) => {
            await test.step("All icon-with-label loading variants render", async () => {
                await expect(story.locators.buttons.first()).toBeVisible();
                await compareScreenshot(story, "icon-with-label-loading");
            });
        });
    });
});
