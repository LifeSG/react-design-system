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
        minimisableItem: Locator;
        minimisableCustomItem: Locator;
        minimisableItemViewMoreButton: Locator;
        minimisableItemViewLessButton: Locator;
        minimisableCustomItemViewMoreButton: Locator;
        minimisableCustomItemViewLessButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        const sidebar = page.getByTestId("filter-desktop");
        const minimisableItem = sidebar.getByTestId("item-minimised");
        const minimisableCustomItem = sidebar.getByTestId(
            "item-minimised-custom"
        );

        this.locators = {
            sidebar,
            modal: page.getByTestId("filter-mobile"),
            showButton: page.getByTestId("filter-show-button"),
            minimisableItem,
            minimisableCustomItem,
            minimisableItemViewMoreButton: minimisableItem.getByRole("button", {
                name: /view more/i,
            }),
            minimisableItemViewLessButton: minimisableItem.getByRole("button", {
                name: /view less/i,
            }),
            minimisableCustomItemViewMoreButton:
                minimisableCustomItem.getByRole("button", {
                    name: /view more/i,
                }),
            minimisableCustomItemViewLessButton:
                minimisableCustomItem.getByRole("button", {
                    name: /view less/i,
                }),
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
            await compareScreenshot(story, "collapsed");
            await story.expandAllItems();
            await waitForAnimationEnd(story.locators.sidebar);
            await compareScreenshot(story, "expanded");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sidebar", { mode: "dark" });
        });

        test("Sidebar (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "collapsed");
            await story.expandAllItems();
            await waitForAnimationEnd(story.locators.sidebar);
            await compareScreenshot(story, "expanded");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("modal", { size: "mobile" });
        });

        test("Modal open state", async ({ story }) => {
            await compareScreenshot(story, "closed");
            await story.locators.showButton.click();
            await compareScreenshot(story, "open", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("modal", { size: "mobile", mode: "dark" });
        });

        test("Modal open state (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "closed");
            await story.locators.showButton.click();
            await compareScreenshot(story, "open", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("item-minimisable");
            });

            test("Minimisable item", async ({ story }) => {
                const {
                    minimisableItemViewMoreButton,
                    minimisableItemViewLessButton,
                    minimisableCustomItemViewMoreButton,
                    minimisableCustomItemViewLessButton,
                } = story.locators;

                await compareScreenshot(story, "minimised");

                await test.step("Expand both items", async () => {
                    await minimisableItemViewMoreButton.click();
                    await minimisableCustomItemViewMoreButton.click();

                    await expect(minimisableItemViewLessButton).toBeVisible();
                    await expect(
                        minimisableCustomItemViewLessButton
                    ).toBeVisible();
                });

                await compareScreenshot(story, "expanded");
            });
        });
    });
});
