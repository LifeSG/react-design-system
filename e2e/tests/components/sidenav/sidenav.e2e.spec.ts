import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "sidenav";

    public readonly locators: {
        dashboardButton: Locator;
        reportsButton: Locator;
        drawer: Locator;
        drawerItem: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            dashboardButton: page.getByRole("button", { name: "Dashboard" }),
            reportsButton: page.getByRole("button", { name: "Reports" }),
            drawer: page.getByTestId("sidenav-drawer"),
            drawerItem: page.getByRole("button", { name: "New reports" }),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

const modes = [
    { title: "light mode", initOptions: undefined },
    { title: "dark mode", initOptions: { mode: "dark" as const } },
] as const;

test.describe("Sidenav", () => {
    modes.forEach((mode) => {
        test.describe(mode.title, () => {
            test.beforeEach(async ({ story }) => {
                await story.init("basic", mode.initOptions);
            });

            test(`Basic (${mode.title})`, async ({ story }) => {
                await test.step("Component mounts", async () => {
                    await expect(story.locators.dashboardButton).toBeVisible();
                    await expect(story.locators.reportsButton).toBeVisible();
                    await expect(story.locators.drawer).not.toBeVisible();

                    await compareScreenshot(story, "mount");
                });

                await test.step("Drawer opens when reports item is clicked", async () => {
                    await story.locators.reportsButton.click();

                    await expect(story.locators.drawer).toBeVisible();
                    await expect(story.locators.drawerItem).toBeVisible();

                    // Use page screenshot so floating portal content is included.
                    await expect(story.page).toHaveScreenshot(
                        "after-click.png",
                        {
                            threshold: 0,
                        }
                    );
                });
            });
        });
    });
});
