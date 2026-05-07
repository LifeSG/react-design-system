import { test as base, expect, Locator, Page } from "@playwright/test";
import {
    AbstractStoryPage,
    compareScreenshot,
    waitForAnimationEnd,
} from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "filter";

    public readonly locators: {
        sidebar: Locator;
        modal: Locator;
        showButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            sidebar: page.getByTestId("filter-desktop"),
            modal: page.getByTestId("filter-mobile"),
            showButton: page.getByTestId("filter-show-button"),
        };
    }

    async expandAllItems() {
        const collapsedButtons = this.locators.sidebar
            .getByTestId("expand-collapse-button")
            .and(this.page.locator('[aria-expanded="false"]'));

        const count = await collapsedButtons.count();
        for (let i = 0; i < count; i++) {
            await collapsedButtons.first().click();
        }
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Filter", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sidebar");
        });

        test("Sidebar", async ({ story }) => {
            await compareScreenshot(story, "collapsed", {
                locator: story.locators.sidebar,
            });
            await story.expandAllItems();
            await waitForAnimationEnd(story.locators.sidebar);
            await compareScreenshot(story, "expanded", {
                locator: story.locators.sidebar,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sidebar", { mode: "dark" });
        });

        test("Sidebar (dark mode)", async ({ story }) => {
            await story.expandAllItems();
            await waitForAnimationEnd(story.locators.sidebar);
            await compareScreenshot(story, "mount", {
                locator: story.locators.sidebar,
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("modal", { size: "mobile" });
        });

        test("Modal open state", async ({ story }) => {
            await story.locators.showButton.click();
            await compareScreenshot(story, "modal-open", {
                locator: story.locators.modal,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("modal", { size: "mobile", mode: "dark" });
        });

        test("Modal open state (dark mode)", async ({ story }) => {
            await story.locators.showButton.click();
            await compareScreenshot(story, "modal-open", {
                locator: story.locators.modal,
            });
        });
    });

    test.describe(() => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("item-minimisable");
            });

            test("Minimisable item", async ({ story }) => {
                const item =
                    story.locators.sidebar.getByTestId("item-minimised");
                const customItem = story.locators.sidebar.getByTestId(
                    "item-minimised-custom"
                );

                await compareScreenshot(story, "minimised", {
                    locator: story.locators.sidebar,
                });

                await test.step("Expand both items", async () => {
                    await item
                        .getByRole("button", { name: /view more/i })
                        .click();
                    await customItem
                        .getByRole("button", { name: /view more/i })
                        .click();

                    await expect(
                        item.getByRole("button", { name: /view less/i })
                    ).toBeVisible();
                    await expect(
                        customItem.getByRole("button", { name: /view less/i })
                    ).toBeVisible();
                });

                await compareScreenshot(story, "expanded", {
                    locator: story.locators.sidebar,
                });
            });
        });
    });
});
