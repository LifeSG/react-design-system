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
            await compareScreenshot(story, "mount");

            await test.step("White button hover state", async () => {
                const buttonWhite = story.locators.buttons.first();
                await buttonWhite.hover();
                await compareScreenshot(story, "hover-white", {
                    locator: buttonWhite,
                });
            });

            await test.step("Red button hover state", async () => {
                const buttonRed = story.locators.buttons.nth(1);
                await buttonRed.hover();
                await compareScreenshot(story, "hover-red", {
                    locator: buttonRed,
                });
            });
        });

        test("Keyboard focus", async ({ story }) => {
            await story.page.keyboard.press("Tab");
            await compareScreenshot(story, "focus", {
                locator: story.locators.buttons.first(),
            });
        });
    });
});
