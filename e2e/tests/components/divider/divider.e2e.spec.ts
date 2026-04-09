import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "divider";

    public readonly locators: {
        dividerDefault: Locator;
        dividerDashed: Locator;
        dividerCustomThickness: Locator;
        dividerCustomColor: Locator;
        dividerDashedCustom: Locator;
        dividerSolid: Locator;
        dividerDashedVariant: Locator;
        dividerSolidCustom: Locator;
        dividerDashedCustomVariant: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            dividerDefault: page.getByTestId("divider-default"),
            dividerDashed: page.getByTestId("divider-dashed"),
            dividerCustomThickness: page.getByTestId("divider-custom-thickness"),
            dividerCustomColor: page.getByTestId("divider-custom-color"),
            dividerDashedCustom: page.getByTestId("divider-dashed-custom"),
            dividerSolid: page.getByTestId("divider-solid"),
            dividerDashedVariant: page.getByTestId("divider-dashed"),
            dividerSolidCustom: page.getByTestId("divider-solid-custom"),
            dividerDashedCustomVariant: page.getByTestId("divider-dashed-custom"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

// =============================================================================
// BASIC
// =============================================================================

test.describe("Divider – Basic", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.dividerDefault).toBeVisible();
                await expect(story.locators.dividerDashed).toBeVisible();
                await expect(story.locators.dividerCustomThickness).toBeVisible();
                await expect(story.locators.dividerCustomColor).toBeVisible();
                await expect(story.locators.dividerDashedCustom).toBeVisible();

                await compareScreenshot(story, "basic-mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Basic (dark mode)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.dividerDefault).toBeVisible();
                await expect(story.locators.dividerDashed).toBeVisible();
                await expect(story.locators.dividerCustomThickness).toBeVisible();
                await expect(story.locators.dividerCustomColor).toBeVisible();
                await expect(story.locators.dividerDashedCustom).toBeVisible();

                await compareScreenshot(story, "basic-dark-mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { size: "mobile" });
        });

        test("Basic (mobile)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.dividerDefault).toBeVisible();
                await expect(story.locators.dividerDashed).toBeVisible();
                await expect(story.locators.dividerCustomThickness).toBeVisible();
                await expect(story.locators.dividerCustomColor).toBeVisible();
                await expect(story.locators.dividerDashedCustom).toBeVisible();

                await compareScreenshot(story, "basic-mobile-mount");
            });
        });
    });
});

// =============================================================================
// LINE STYLE VARIANTS
// =============================================================================

test.describe("Divider – Line style variants", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("line-style-variants");
        });

        test("Line style variants", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.dividerSolid).toBeVisible();
                await expect(story.locators.dividerDashedVariant).toBeVisible();
                await expect(story.locators.dividerSolidCustom).toBeVisible();
                await expect(story.locators.dividerDashedCustomVariant).toBeVisible();

                await compareScreenshot(story, "line-style-variants-mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("line-style-variants", { mode: "dark" });
        });

        test("Line style variants (dark mode)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.dividerSolid).toBeVisible();
                await expect(story.locators.dividerDashedVariant).toBeVisible();
                await expect(story.locators.dividerSolidCustom).toBeVisible();
                await expect(story.locators.dividerDashedCustomVariant).toBeVisible();

                await compareScreenshot(story, "line-style-variants-dark-mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("line-style-variants", { size: "mobile" });
        });

        test("Line style variants (mobile)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await expect(story.locators.dividerSolid).toBeVisible();
                await expect(story.locators.dividerDashedVariant).toBeVisible();
                await expect(story.locators.dividerSolidCustom).toBeVisible();
                await expect(story.locators.dividerDashedCustomVariant).toBeVisible();

                await compareScreenshot(story, "line-style-variants-mobile-mount");
            });
        });
    });
});
