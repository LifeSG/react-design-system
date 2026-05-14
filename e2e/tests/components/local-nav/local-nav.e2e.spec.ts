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
            await compareScreenshot(story, "mount", {
                locator: story.locators.menu,
            });
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

        test("Keyboard navigation", async ({ story }) => {
            const items = ["Title 1", "Title 2", "Title 3", "Title 4"].map(
                (name) => story.locators.menu.getByRole("link", { name })
            );

            await test.step("First item receives focus", async () => {
                await items[0].focus();
                await expect(items[0]).toBeFocused();
            });

            await test.step("Tab cycles through all items in order", async () => {
                for (let i = 1; i < items.length; i++) {
                    await story.page.keyboard.press("Tab");
                    await expect(items[i]).toBeFocused();
                }
            });

            await test.step("Shift+Tab moves focus backwards", async () => {
                for (let i = items.length - 2; i >= 0; i--) {
                    await story.page.keyboard.press("Shift+Tab");
                    await expect(items[i]).toBeFocused();
                }
            });

            await test.step("Enter selects the focused item", async () => {
                await items[2].focus();
                await story.page.keyboard.press("Enter");
                await expect(items[2]).toHaveAttribute("aria-current", "true");
            });

            await test.step("Space selects the focused item", async () => {
                await items[0].focus();
                await story.page.keyboard.press(" ");
                await expect(items[0]).toHaveAttribute("aria-current", "true");
            });
        });
    });
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("menu", { mode: "dark" });
        });

        test("Menu (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.menu,
            });
        });
    });
    test.describe("Dropdown", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("dropdown");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.dropdown,
            });
            await expect(story.locators.dropdownLabel).toHaveAttribute(
                "aria-expanded",
                "false"
            );
            await expect(story.locators.dropdownList).not.toBeVisible();
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("dropdown", { mode: "dark" });
            });

            test("Default (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.dropdown,
                });
            });
        });

        test("Accessibility", async ({ story }) => {
            await expect(story.locators.dropdown).toMatchAriaSnapshot(`
                - menu:
                    - menuitem "Title 1"
                    - menuitem "Title 2"
                    - menuitem "Title 3"
                    - menuitem "Title 4"
            `);
        });

        test("Keyboard navigation", async ({ story }) => {
            const openDropdownWithKeyboard = async () => {
                await story.page.locator("body").click();
                await story.page.keyboard.press("Tab");
                await story.locators.dropdownLabel.press("ArrowDown");
            };

            await test.step("ArrowDown opens dropdown and focuses first item", async () => {
                await openDropdownWithKeyboard();
                await expect(story.locators.dropdownList).toBeVisible();
                await expect(
                    story.locators.dropdownList.getByRole("menuitem").nth(0)
                ).toBeFocused();
            });

            await test.step("ArrowDown moves focus to next item", async () => {
                await story.page.keyboard.press("ArrowDown");
                await expect(
                    story.locators.dropdownList.getByRole("menuitem").nth(1)
                ).toBeFocused();
                // move from last to first
                await story.page.keyboard.press("ArrowDown");
                await story.page.keyboard.press("ArrowDown");
                await story.page.keyboard.press("ArrowDown");
                await expect(
                    story.locators.dropdownList.getByRole("menuitem").nth(0)
                ).toBeFocused();
            });

            await test.step("ArrowUp jumps to last item from first", async () => {
                await story.page.keyboard.press("ArrowUp");
                await expect(
                    story.locators.dropdownList.getByRole("menuitem").last()
                ).toBeFocused();
            });

            await test.step("Enter selects focused item and closes dropdown", async () => {
                await story.page.keyboard.press("Enter");
                await expect(story.locators.dropdownList).not.toBeVisible();
            });

            await test.step("Space selects focused item and closes dropdown", async () => {
                await openDropdownWithKeyboard();
                await story.page.keyboard.press("Space");
                await expect(story.locators.dropdownList).not.toBeVisible();
            });

            await test.step("Escape closes dropdown", async () => {
                await openDropdownWithKeyboard();
                await story.page.keyboard.press("Escape");
                await expect(story.locators.dropdownList).not.toBeVisible();
            });
        });

        test("Sticky on scroll", async ({ story }) => {
            await test.step("Select an item", async () => {
                await story.locators.dropdownLabel.click();
                await story.locators.dropdownList
                    .getByRole("menuitem", { name: "Title 2" })
                    .click();
            });

            await test.step("Scroll until sticky", async () => {
                await story.scrollWithWheelUntil({
                    scrollTarget: story.locators.contentAfter,
                    until: async () => {
                        const text =
                            await story.locators.dropdownLabel.textContent();
                        return (text ?? "").includes("Title 2");
                    },
                });
            });

            await test.step("Open dropdown when stickied shows backdrop", async () => {
                await story.locators.dropdownLabel.click();
                await expect(story.locators.dropdownList).toBeVisible();
                await compareScreenshot(story, "sticky-open", {
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
            await compareScreenshot(story, "mount", {
                locator: story.locators.dropdown,
            });
            await story.locators.dropdownLabel.click();
            await expect(story.locators.dropdownList).toBeVisible();
            await compareScreenshot(story, "sticky-open", {
                fullscreen: true,
            });
        });
    });
});
