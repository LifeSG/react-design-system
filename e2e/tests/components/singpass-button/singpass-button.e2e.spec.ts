import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "singpass-button";

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

test.describe("SingpassButton", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("All size and style variants – default", async ({ story }) => {
            await compareScreenshot(story, "singpass-button-variants");
        });

        test("All size and style variants – hover on white-filled", async ({
            story,
        }) => {
            const button = story.locators.buttons.first();
            await button.hover();
            await compareScreenshot(
                story,
                "singpass-button-variants-hover-white",
                {
                    locator: button,
                }
            );
        });

        test("All size and style variants – hover on red-filled", async ({
            story,
        }) => {
            const button = story.locators.buttons.nth(1);
            await button.hover();
            await compareScreenshot(
                story,
                "singpass-button-variants-hover-red",
                {
                    locator: button,
                }
            );
        });

        test("All size and style variants – keyboard focus on Tab", async ({
            story,
        }) => {
            await story.page.keyboard.press("Tab");
            await compareScreenshot(story, "singpass-button-variants-focus", {
                locator: story.locators.buttons.first(),
            });
        });
    });
});
