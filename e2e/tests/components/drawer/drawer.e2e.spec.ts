import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { viewport } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "drawer";

    public readonly locators: {
        internal: {
            closeButton: Locator;
            openButton: Locator;
        };
        drawer: Locator;
    };

    constructor(page: Page) {
        super(page);
        this.locators = {
            internal: {
                closeButton: page.getByRole("button", { name: "Close drawer" }),
                openButton: page.getByRole("button", { name: "Open drawer" }),
            },
            drawer: page.getByTestId("drawer"),
        };
    }

    async open() {
        await this.locators.internal.openButton.click();
        await expect(this.locators.drawer).toBeVisible();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Drawer", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await story.open();
            await compareScreenshot(story, "open", { fullscreen: true });
        });

        test("Close via close button", async ({ story }) => {
            await story.open();

            await story.locators.internal.closeButton.click();

            await expect(story.locators.drawer).not.toBeVisible();
        });

        test("Close via overlay click", async ({ story }) => {
            await story.open();

            await story.page.mouse.click(0, 0);

            await expect(story.locators.drawer).not.toBeVisible();
        });

        test("Close via Escape key", async ({ story }) => {
            await story.open();

            await story.page.keyboard.press("Escape");

            await expect(story.locators.drawer).not.toBeVisible();
        });

        test("Keyboard navigation", async ({ story }) => {
            await story.open();

            // Wait for the visibility transition to complete and focus to be applied
            await expect(
                story.page.getByRole("heading", { name: "Drawer heading" })
            ).toBeFocused();

            await story.page.keyboard.press("Tab");

            await expect(story.locators.internal.closeButton).toBeFocused();
        });

        test("Accessibility tree when open", async ({ story }) => {
            await story.open();

            await expect(story.locators.drawer).toMatchAriaSnapshot(`
                - dialog "Drawer heading":
                    - heading "Drawer heading" [level=2]
                    - paragraph: Drawer content
                    - button "Close drawer"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "mobile" });
        });

        test("Default (mobile)", async ({ story }) => {
            await story.open();
            await compareScreenshot(story, "open-mobile", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await story.open();
            await compareScreenshot(story, "open-dark", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sticky-header");
        });

        test("Header remains sticky on scroll", async ({ story }) => {
            await story.open();

            const content = story.page.getByTestId("drawer-content");
            await content.hover();
            await story.page.mouse.wheel(0, 2000);

            await compareScreenshot(story, "sticky-scrolled", {
                fullscreen: true,
            });
        });
    });
});
