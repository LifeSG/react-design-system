import { expect, test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

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
            await compareScreenshot(story, "mount-collapsed", {
                locator: story.locators.sidebar,
            });
            await story.expandAllItems();
            await story.page.waitForTimeout(700);
            await compareScreenshot(story, "mount-expanded", {
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
            await story.page.waitForTimeout(700);
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

            test("Minimisable content", async ({ story }) => {
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

    test.describe("Checkbox", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("checkbox-flat");
            });

            test("Flat options selection", async ({ story }) => {
                const item =
                    story.locators.sidebar.getByTestId("item-checkbox");
                await item.getByRole("checkbox", { name: "Option 1" }).click();
                await item.getByRole("checkbox", { name: "Option 3" }).click();

                await expect(
                    item.getByRole("checkbox", { name: "Option 1" })
                ).toBeChecked();
                await expect(
                    item.getByRole("checkbox", { name: "Option 2" })
                ).not.toBeChecked();
                await expect(
                    item.getByRole("checkbox", { name: "Option 3" })
                ).toBeChecked();

                await compareScreenshot(story, "selected", {
                    locator: story.locators.sidebar,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("checkbox-nested");
            });

            test("Nested options indeterminate state", async ({ story }) => {
                const tree = story.locators.sidebar.getByRole("tree", {
                    name: "Nested categories",
                });
                const banana = tree.getByRole("treeitem", { name: "Banana" });

                await test.step("Selecting one child sets parent to mixed", async () => {
                    await banana.click();
                    await compareScreenshot(story, "indeterminate", {
                        locator: story.locators.sidebar,
                    });
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("checkbox-minimisable");
            });

            test("Minimisable view more and less", async ({ story }) => {
                const item =
                    story.locators.sidebar.getByTestId("item-checkbox");
                const viewMoreButton = item.getByRole("button", {
                    name: /view more/i,
                });
                const viewLessButton = item.getByRole("button", {
                    name: /view less/i,
                });

                await expect(viewMoreButton).toBeVisible();
                await expect(
                    item.getByRole("checkbox", { name: "Option 8" })
                ).not.toBeInViewport();
                await compareScreenshot(story, "minimised", {
                    locator: story.locators.sidebar,
                });

                await viewMoreButton.click();

                await expect(viewLessButton).toBeVisible();
                await expect(
                    item.getByRole("checkbox", { name: "Option 8" })
                ).toBeInViewport();
                await compareScreenshot(story, "expanded", {
                    locator: story.locators.sidebar,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("checkbox-mobile", { size: "mobile" });
                await story.locators.showButton.click();
            });

            test("Mobile checkbox display when showAsCheckboxInMobile", async ({
                story,
            }) => {
                const item = story.locators.modal.getByTestId(
                    "item-checkbox-checkbox"
                );
                const pillItem = story.locators.modal.getByTestId(
                    "item-checkbox-toggle"
                );
                await pillItem
                    .getByRole("checkbox", { name: "Option 1" })
                    .click();
                await item.getByRole("checkbox", { name: "Option 1" }).click();
                await item.getByRole("checkbox", { name: "Option 2" }).click();

                await compareScreenshot(story, "checkbox-selected", {
                    locator: story.locators.modal,
                });
            });
        });
    });
});
