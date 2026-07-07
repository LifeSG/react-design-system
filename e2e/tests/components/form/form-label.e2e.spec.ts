import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "form";

    public readonly locators: {
        labelBasic: Locator;
        labelSubtitle: Locator;
        labelAddon: Locator;
        labelAddonTrigger: Locator;
        labelAddonPopoverContent: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            labelBasic: page.getByTestId("label-basic"),
            labelSubtitle: page.getByTestId("label-subtitle"),
            labelAddon: page.getByTestId("label-addon"),
            labelAddonTrigger: page.getByTestId("popover-icon"),
            labelAddonPopoverContent: page.getByTestId(
                "label-addon-popover-content"
            ),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Form.Label", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "label-variants");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "label-variants-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-label");
        });

        test("Popover addon behaviour", async ({ story }) => {
            await test.step("Popover content is not initially visible", async () => {
                await expect(
                    story.locators.labelAddonPopoverContent
                ).not.toBeVisible();
            });

            await test.step("Popover opens on trigger click", async () => {
                await story.locators.labelAddonTrigger.click();
                await expect(
                    story.locators.labelAddonPopoverContent
                ).toBeVisible();

                await compareScreenshot(story, "label-addon-open", {
                    fullscreen: true,
                });
            });

            await test.step("Popover closes on Escape", async () => {
                await story.page.keyboard.press("Escape");
                await expect(
                    story.locators.labelAddonPopoverContent
                ).not.toBeVisible();
            });
        });
    });
});
