import { test as base, expect, Locator, Page } from "@playwright/test";
import {
    AbstractStoryPage,
    compareScreenshot,
    waitForAnimationEnd,
} from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "filter";

    public readonly locators: {
        internal: {
            sidebar: Locator;
            modal: Locator;
            showButton: Locator;
            clearButton: Locator;
            item: {
                viewMoreButton: (item?: Locator) => Locator;
                viewLessButton: (item?: Locator) => Locator;
                tooltipTrigger: (item?: Locator) => Locator;
            };
            page: {
                dismissButton: Locator;
                doneButton: Locator;
            };
        };
        minimisableItem: Locator;
        minimisableCustomItem: Locator;
        itemNoDivider: Locator;
        itemWithDivider: Locator;
        itemDefault: Locator;
        itemNoTitleCollapsible: Locator;
        itemNoTitleNotCollapsible: Locator;
        itemNotCollapsible: Locator;
        page: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                sidebar: page.getByTestId("filter-desktop"),
                modal: page.getByTestId("filter-mobile"),
                showButton: page.getByTestId("filter-show-button"),
                clearButton: page.getByRole("button", {
                    name: /clear filter/i,
                }),
                item: {
                    viewMoreButton: (item?: Locator) =>
                        (item ?? page).getByRole("button", {
                            name: /view more/i,
                        }),
                    viewLessButton: (item?: Locator) =>
                        (item ?? page).getByRole("button", {
                            name: /view less/i,
                        }),
                    tooltipTrigger: (item?: Locator) =>
                        (item ?? page).getByRole("button", {
                            name: "More info",
                        }),
                },
                page: {
                    dismissButton: page.getByRole("button", {
                        name: "Dismiss",
                    }),
                    doneButton: page.getByRole("button", { name: "Done" }),
                },
            },
            minimisableItem: page.getByTestId("item-minimised"),
            minimisableCustomItem: page.getByTestId("item-minimised-custom"),
            itemNoDivider: page.getByTestId("item-no-divider"),
            itemWithDivider: page.getByTestId("item-with-divider"),
            itemDefault: page.getByTestId("item-default"),
            itemNoTitleCollapsible: page.getByTestId(
                "item-no-title-collapsible"
            ),
            itemNoTitleNotCollapsible: page.getByTestId(
                "item-no-title-not-collapsible"
            ),
            itemNotCollapsible: page.getByTestId("item-not-collapsible"),
            page: page.getByTestId("page-wrapper"),
        };
    }

    async expandAllItems() {
        const collapsedButtons = this.locators.internal.sidebar
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
    test.describe("Default", () => {
        test("Desktop", async ({ story }) => {
            await story.init("default", { size: "desktop" });

            await expect(story.locators.internal.sidebar).toBeVisible();
            await expect(story.locators.internal.modal).toBeHidden();
            await expect(story.locators.internal.showButton).toBeHidden();
        });

        test("Tablet", async ({ story }) => {
            await story.init("default", { size: "tablet" });

            await expect(story.locators.internal.sidebar).toBeHidden();
            await expect(story.locators.internal.showButton).toBeVisible();
        });

        test("Mobile", async ({ story }) => {
            await story.init("default", { size: "mobile" });

            await expect(story.locators.internal.sidebar).toBeHidden();
            await expect(story.locators.internal.showButton).toBeVisible();
        });
    });

    test.describe("Sidebar", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("sidebar");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "collapsed");

            await story.expandAllItems();
            await waitForAnimationEnd(story.locators.internal.sidebar);

            await compareScreenshot(story, "expanded");
        });

        test("Tooltip", async ({ story }) => {
            await story.locators.internal.item.tooltipTrigger().click();

            await compareScreenshot(story, "open");
        });

        test("Disabled clear button", async ({ story }) => {
            await expect(story.locators.internal.clearButton).toBeDisabled();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sidebar", { mode: "dark" });
        });

        test("Sidebar (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "collapsed");
            await story.expandAllItems();
            await waitForAnimationEnd(story.locators.internal.sidebar);
            await compareScreenshot(story, "expanded");
        });
    });

    test.describe("Modal", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("modal", { size: "mobile" });
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "closed");

            await story.locators.internal.showButton.click();

            await compareScreenshot(story, "open", { fullscreen: true });
        });

        test("Tooltip", async ({ story }) => {
            await story.locators.internal.showButton.click();
            await story.locators.internal.item.tooltipTrigger().click();

            await compareScreenshot(story, "open", { fullscreen: true });
        });

        test("Enabled clear button", async ({ story }) => {
            await story.locators.internal.showButton.click();

            await expect(
                story.locators.internal.clearButton
            ).not.toBeDisabled();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("modal", { size: "mobile", mode: "dark" });
        });

        test("Modal (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "closed");

            await story.locators.internal.showButton.click();

            await compareScreenshot(story, "open", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("item-minimisable");
        });

        test("Minimisable item", async ({ story }) => {
            const minimisableItem = story.locators.minimisableItem;
            const minimisableCustomItem = story.locators.minimisableCustomItem;

            await compareScreenshot(story, "minimised");

            await test.step("Expand both items", async () => {
                await story.locators.internal.item
                    .viewMoreButton(minimisableItem)
                    .click();
                await story.locators.internal.item
                    .viewMoreButton(minimisableCustomItem)
                    .click();

                await expect(
                    story.locators.internal.item.viewLessButton(minimisableItem)
                ).toBeVisible();
                await expect(
                    story.locators.internal.item.viewLessButton(
                        minimisableCustomItem
                    )
                ).toBeVisible();
            });

            await compareScreenshot(story, "expanded");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("item-configurations");
        });

        test("Item configurations", async ({ story }) => {
            await compareScreenshot(story, "collapsed-all");

            await story.expandAllItems();
            await waitForAnimationEnd(story.locators.internal.sidebar);

            await compareScreenshot(story, "expanded-all");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("counter");
        });

        test("Counter (sidebar)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("counter", { size: "mobile" });
        });

        test("Counter (modal)", async ({ story }) => {
            await compareScreenshot(story, "button");

            await story.locators.internal.showButton.click();
            await compareScreenshot(story, "modal", { fullscreen: true });
        });
    });

    test.describe("Page", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("page");
            });

            test("Default", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.page,
                });
            });

            test("Accessibility", async ({ story }) => {
                await expect(story.locators.page).toMatchAriaSnapshot(`
                    - button "Dismiss":
                        - img
                    - paragraph: Custom filter page content
                    - button "Done"
                `);
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("page", { mode: "dark" });
        });

        test("Page (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
