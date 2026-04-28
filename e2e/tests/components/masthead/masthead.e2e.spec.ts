import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "masthead";

    public readonly locators: {
        component: {
            howToIdentifyButton: Locator;
        };
        mastheadContainer: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
                howToIdentifyButton: page.getByRole("button", {
                    name: "How to identify",
                }),
            },
            mastheadContainer: page
                .getByTestId("masthead-default")
                .locator("> div"),
        };
    }

    public async getCustomProperty(locator: Locator, name: string) {
        return locator.evaluate((element, propertyName) => {
            return window
                .getComputedStyle(element)
                .getPropertyValue(propertyName)
                .trim();
        }, name);
    }

    public async expandHowToIdentify() {
        await this.locators.component.howToIdentifyButton.click();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Masthead", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { size: "xxl" });
        });

        test("Basic", async ({ story }) => {
            await compareScreenshot(story, "mount");
            await story.expandHowToIdentify();
            await compareScreenshot(story, "expanded");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Basic (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("stretch", { size: "xxl" });
        });

        test("Stretch", async ({ story }) => {
            await compareScreenshot(story, "mount");
            expect(
                await story.getCustomProperty(
                    story.locators.mastheadContainer,
                    "--sgds-mainnav-max-width"
                )
            ).toBe("calc(infinity * 1px)");
        });
    });
});
