import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "sidenav";

    public readonly locators: {
        sidenav: Locator;
        itemDashboard: Locator;
        itemUsers: Locator;
        itemSettings: Locator;
        drawer: Locator;
        drawerItemAllUsers: Locator;
        drawerItemUserGroups: Locator;
        drawerSubitemAdmins: Locator;
        drawerSubitemContainer: Locator;
    };

    constructor(page: Page) {
        super(page);
        this.locators = {
            sidenav: page.getByTestId("sidenav"),
            itemDashboard: page.getByTestId("item-dashboard"),
            itemUsers: page.getByTestId("item-users"),
            itemSettings: page.getByTestId("item-settings"),
            drawer: page.getByTestId("sidenav-drawer"),
            drawerItemAllUsers: page.getByRole("button", { name: "All Users" }),
            drawerItemUserGroups: page.getByRole("button", {
                name: "User Groups",
            }),
            drawerSubitemAdmins: page.getByRole("button", { name: "Admins" }),
            drawerSubitemContainer: page
                .getByTestId("drawer-subitem-container")
                .nth(1),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Sidenav", () => {
    test.describe("With drawer", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default states", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Navigation accessibility tree", async ({ story }) => {
            await expect(story.locators.sidenav).toMatchAriaSnapshot(`
                - navigation "Sidebar":
                    - list:
                        - listitem:
                            - button "Dashboard"
                        - listitem:
                            - button "Users" [expanded=false]
                    - list:
                        - listitem:
                            - button "Settings"
            `);
        });

        test("Click interaction", async ({ story }) => {
            await test.step("Drawer open on click", async () => {
                await story.locators.itemUsers.click();
                await compareScreenshot(story, "drawer-open");

                await expect(story.locators.sidenav).toMatchAriaSnapshot(`
                    - navigation "Sidebar":
                        - list:
                            - listitem:
                                - button "Dashboard"
                            - listitem:
                                - button "Users" [expanded=true]
                                - list:
                                    - listitem:
                                        - button "All Users"
                                    - listitem:
                                        - button "User Groups" [expanded=true]
                                        - list:
                                            - listitem:
                                                - button "Admins"
                                            - listitem:
                                                - button "Members"
                        - list:
                            - listitem:
                                - button "Settings"
                `);
            });

            await test.step("Subitems visible when expanded by default", async () => {
                await compareScreenshot(story, "drawer-item-expanded");
            });

            await test.step("Collapse drawer item hides subitems", async () => {
                await story.locators.drawerItemUserGroups.click();
                await compareScreenshot(story, "drawer-item-collapsed");
            });

            await test.step("Expand drawer item shows subitems again", async () => {
                await story.locators.drawerItemUserGroups.click();
            });

            await test.step("Expanded subitems aria snapshot", async () => {
                await expect(story.locators.drawer).toMatchAriaSnapshot(`
                    - list:
                        - listitem:
                            - button "All Users"
                        - listitem:
                            - button "User Groups" [expanded=true]
                            - list:
                                - listitem:
                                    - button "Admins"
                                - listitem:
                                    - button "Members"
                `);
            });
        });

        test("Keyboard navigation", async ({ story }) => {
            await story.page.locator("body").click();

            await test.step("Tab to first item", async () => {
                await story.page.keyboard.press("Tab");
                await expect(story.locators.itemDashboard).toBeFocused();
            });

            await test.step("Tab to item with children", async () => {
                await expect(story.locators.drawer).not.toBeVisible();
                await story.page.keyboard.press("Tab");
                await expect(story.locators.itemUsers).toBeFocused();
                await expect(story.locators.drawer).toBeVisible();
            });

            await test.step("Tab moves focus into drawer", async () => {
                await story.page.keyboard.press("Tab");
                await expect(story.locators.drawerItemAllUsers).toBeFocused();
            });

            await test.step("Shift+Tab moves focus back to sidenav item", async () => {
                await story.page.keyboard.press("Shift+Tab");
                await expect(story.locators.itemUsers).toBeFocused();
            });

            await test.step("Shift+Tab moves focus to previous item", async () => {
                await story.page.keyboard.press("Shift+Tab");
                await expect(story.locators.itemDashboard).toBeFocused();
            });
        });

        test.describe("Default states (Dark mode)", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { mode: "dark" });
            });

            test("Default states dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount-dark");
            });

            test("Drawer open dark mode", async ({ story }) => {
                await story.locators.itemUsers.click();
                await compareScreenshot(story, "drawer-open-dark");
            });
        });
    });

    test.describe("No drawer", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-drawer");
        });

        test("Default states", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Navigation accessibility tree", async ({ story }) => {
            await expect(story.locators.sidenav).toMatchAriaSnapshot(`
                - navigation "Sidebar":
                    - list:
                        - listitem:
                            - button "Dashboard"
                        - listitem:
                            - button "Users"
                    - list:
                        - listitem:
                            - button "Settings"
            `);
        });
    });

    test.describe("Mobile", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "mobile" });
        });

        test("Desktop sidenav is not rendered on mobile", async ({ story }) => {
            await expect(story.locators.sidenav).not.toBeVisible();
        });
    });
});
