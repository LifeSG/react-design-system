import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "example";

    public readonly locators: {
        components: {
            toggleButton: Locator;
        };
        text: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            components: {
                toggleButton: page.getByRole("button", { name: "click me" }),
            },
            text: page.getByText("Hello world"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Example", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await compareScreenshot(story, "mount");
            });

            await test.step("Box is expanded after toggling the button", async () => {
                await story.locators.components.toggleButton.click();

                await compareScreenshot(story, "after-click");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { size: "mobile" });
        });

        test("Basic (mobile)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await compareScreenshot(story, "mount");
            });

            await test.step("Box is expanded after toggling the button", async () => {
                await story.locators.components.toggleButton.click();

                await compareScreenshot(story, "after-click");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Basic (dark mode)", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await compareScreenshot(story, "mount");
            });

            await test.step("Box is expanded after toggling the button", async () => {
                await story.locators.components.toggleButton.click();

                await compareScreenshot(story, "after-click");
            });
        });
    });
});
