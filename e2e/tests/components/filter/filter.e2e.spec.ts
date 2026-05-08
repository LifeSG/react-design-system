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
        itemNoDivider: Locator;
        itemWithDivider: Locator;
        itemDefault: Locator;
        itemNoTitleCollapsible: Locator;
        itemNoTitleNotCollapsible: Locator;
        itemNotCollapsible: Locator;
        addonTriggerButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        const sidebar = page.getByTestId("filter-desktop");
        const modal = page.getByTestId("filter-mobile");
        const minimisableItem = sidebar.getByTestId("item-minimised");
        const minimisableCustomItem = sidebar.getByTestId(
            "item-minimised-custom"
        );

        this.locators = {
            sidebar,
            modal,
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
            itemNoDivider: sidebar.getByTestId("item-no-divider"),
            itemWithDivider: sidebar.getByTestId("item-with-divider"),
            itemDefault: sidebar.getByTestId("item-default"),
            itemNoTitleCollapsible: sidebar.getByTestId(
                "item-no-title-collapsible"
            ),
            itemNoTitleNotCollapsible: sidebar.getByTestId(
                "item-no-title-not-collapsible"
            ),
            itemNotCollapsible: sidebar.getByTestId("item-not-collapsible"),
            addonTriggerButton: page.getByRole("button", { name: "More info" }),
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
    test.describe("Default responsive behaviour", () => {
        test("Renders as sidebar on desktop", async ({ story }) => {
            await story.init("default", { size: "desktop" });

            await expect(story.locators.sidebar).toBeVisible();
            await expect(story.locators.modal).toBeHidden();
            await expect(story.locators.showButton).toBeHidden();
        });

        test("Renders as modal trigger on tablet", async ({ story }) => {
            await story.init("default", { size: "tablet" });

            await expect(story.locators.sidebar).toBeHidden();
            await expect(story.locators.showButton).toBeVisible();
        });

        test("Renders as modal trigger on mobile", async ({ story }) => {
            await story.init("default", { size: "mobile" });

            await expect(story.locators.sidebar).toBeHidden();
            await expect(story.locators.showButton).toBeVisible();
        });
    });
    
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

        test("Tooltip in sidebar", async ({ story }) => {
            const { addonTriggerButton } = story.locators;

            await addonTriggerButton.click();
            await compareScreenshot(story, "open");
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

        test("Tooltip in modal", async ({ story }) => {
            const { showButton, addonTriggerButton } = story.locators;

            await showButton.click();
            await addonTriggerButton.click();
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });
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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("item-configurations");
        });

        test("Filter item configurations", async ({ story }) => {
            await compareScreenshot(story, "collapsed-all");
            await story.expandAllItems();
            await waitForAnimationEnd(story.locators.sidebar);
            await compareScreenshot(story, "expanded-all");
        });
    });
});
