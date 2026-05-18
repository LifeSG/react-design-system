import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "local-nav";

    public readonly locators: {
        menu: Locator;
        menuItems: Locator;
        dropdown: Locator;
        dropdownLabel: Locator;
        dropdownList: Locator;
        contentAfter: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            menu: page.getByTestId("local-nav-menu"),
            menuItems: page.getByTestId("local-nav-menu").getByRole("link"),
            dropdown: page.getByTestId("local-nav-dropdown"),
            dropdownLabel: page.getByTestId("local-nav-dropdown-label"),
            dropdownList: page.getByTestId("local-nav-dropdown-dropdown-list"),
            contentAfter: page.getByTestId("content-after"),
        };
    }

    async scrollUntilSticky() {
        await this.scrollWithWheelUntil({
            scrollTarget: this.locators.contentAfter,
            until: () =>
                this.page.evaluate(
                    () =>
                        window.innerHeight + window.scrollY >=
                        document.documentElement.scrollHeight - 1
                ),
        });
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Local nav", () => {
    test.describe("Menu", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("menu");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Accessibility", async ({ story }) => {
            await expect(story.locators.menu).toMatchAriaSnapshot(`
                - list:
                    - listitem:
                        - link "Title 1"
                    - listitem:
                        - link "Title 2"
                    - listitem:
                        - link "Title 3"
                    - listitem:
                        - link "Title 4"
            `);
        });

        test("Hover", async ({ story }) => {
            await story.locators.menuItems.first().hover();
            await compareScreenshot(story, "hover");
        });
    });
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("menu", { mode: "dark" });
        });

        test("Menu (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
            await story.locators.menuItems.first().hover();
            await compareScreenshot(story, "hover");
        });
    });
    test.describe("Dropdown", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("dropdown");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "non-sticky unopened");

            await story.locators.dropdownLabel.click();
            await compareScreenshot(story, "non-sticky open", {
                fullscreen: true,
            });

            await story.locators.dropdownLabel.click();
        });

        test("Accessibility", async ({ story }) => {
            await test.step("Collapsed", async () => {
                await expect(story.locators.dropdown).toMatchAriaSnapshot(`
                    - navigation:
                        - button "Jump to section" [expanded=false]:
                            - paragraph: Jump to section
                            - img
                `);
            });

            await test.step("Expanded", async () => {
                await story.locators.dropdownLabel.click();
                await expect(story.locators.dropdown).toMatchAriaSnapshot(`
                    - navigation:
                        - button "Jump to section" [expanded=true]:
                            - paragraph: Jump to section
                            - img
                        - menu:
                            - menuitem "Title 1"
                            - menuitem "Title 2"
                            - menuitem "Title 3"
                            - menuitem "Title 4"
                            - menuitem "Title 5"
                            - menuitem "Title 6"
                            - menuitem "Title 7"
                            - menuitem "Title 8"
                `);
            });
        });

        test("Sticky on scroll", async ({ story }) => {
            await test.step("Scroll until sticky", async () => {
                await story.scrollUntilSticky();
                await compareScreenshot(story, "sticky unopened", {
                    fullscreen: true,
                });
            });

            await test.step("Open dropdown when stickied shows backdrop", async () => {
                await story.locators.dropdownLabel.click();
                await compareScreenshot(story, "sticky open", {
                    fullscreen: true,
                });
            });
        });
    });
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("dropdown", { mode: "dark" });
        });

        test("Dropdown (dark mode)", async ({ story }) => {
            await test.step("Non-sticky mode", async () => {
                await compareScreenshot(story, "non-sticky unopened", {
                    fullscreen: true,
                });
                await story.locators.dropdownLabel.click();
                await compareScreenshot(story, "non-sticky open", {
                    fullscreen: true,
                });
                await story.locators.dropdownLabel.click();
            });

            await test.step("Scroll until sticky", async () => {
                await story.scrollUntilSticky();
                await compareScreenshot(story, "sticky unopened", {
                    fullscreen: true,
                });
            });

            await test.step("Open dropdown when stickied shows backdrop", async () => {
                await story.locators.dropdownLabel.click();
                await compareScreenshot(story, "sticky open", {
                    fullscreen: true,
                });
            });
        });
    });
});
