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

        test("All size and style variants", async ({ story }) => {
            await compareScreenshot(story, "singpass-button-variants");

            const buttonWhite = story.locators.buttons.first();
            await buttonWhite.hover();
            await compareScreenshot(
                story,
                "singpass-button-variants-hover-white",
                {
                    locator: buttonWhite,
                }
            );

            const buttonRed = story.locators.buttons.nth(1);
            await buttonRed.hover();
            await compareScreenshot(
                story,
                "singpass-button-variants-hover-red",
                {
                    locator: buttonRed,
                }
            );
        });

        test("Keyboard focus", async ({ story }) => {
            await story.page.keyboard.press("Tab");
            await compareScreenshot(story, "singpass-button-variants-focus", {
                locator: story.locators.buttons.first(),
            });
        });
    });
});
