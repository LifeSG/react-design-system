import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "dropdown-list";

    public readonly locators: {
        variantDefault: Locator;
        variantSmall: Locator;
        singleSelectContainer: Locator;
        multiSelectContainer: Locator;
        searchContainer: Locator;
        keyboardNavContainer: Locator;
        loadingContainer: Locator;
        failContainer: Locator;
        customCtaContainer: Locator;
        variantDefaultDropdownContainer: Locator;
        variantSmallDropdownContainer: Locator;
        variantDefaultDropdownList: Locator;
        variantSmallDropdownList: Locator;
        searchInput: Locator;
        searchNoResults: Locator;
        loadingState: Locator;
        failState: Locator;
        customCta: Locator;
        ctaButton: Locator;
        retryTriggered: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            variantDefault: page.getByTestId("variant-default"),
            variantSmall: page.getByTestId("variant-small"),
            singleSelectContainer: page.getByTestId("single-select-container"),
            multiSelectContainer: page.getByTestId("multi-select-container"),
            searchContainer: page.getByTestId("search-container"),
            keyboardNavContainer: page.getByTestId("keyboard-nav-container"),
            loadingContainer: page.getByTestId("loading-container"),
            failContainer: page.getByTestId("fail-container"),
            customCtaContainer: page.getByTestId("custom-cta-container"),
            variantDefaultDropdownContainer: page
                .getByTestId("variant-default")
                .getByTestId("dropdown-container"),
            variantSmallDropdownContainer: page
                .getByTestId("variant-small")
                .getByTestId("dropdown-container"),
            variantDefaultDropdownList: page
                .getByTestId("variant-default")
                .getByTestId("dropdown-list"),
            variantSmallDropdownList: page
                .getByTestId("variant-small")
                .getByTestId("dropdown-list"),
            searchInput: page
                .getByTestId("search-container")
                .getByTestId("search-input"),
            searchNoResults: page
                .getByTestId("search-container")
                .getByTestId("list-no-results"),
            loadingState: page
                .getByTestId("loading-container")
                .getByTestId("list-loading"),
            failState: page
                .getByTestId("fail-container")
                .getByTestId("list-fail"),
            customCta: page
                .getByTestId("custom-cta-container")
                .getByTestId("custom-cta"),
            ctaButton: page
                .getByTestId("custom-cta-container")
                .getByTestId("cta-button"),
            retryTriggered: page.getByTestId("retry-triggered"),
        };
    }

    public getListItemsIn(container: Locator) {
        return container.getByTestId("list-item");
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("DropdownList", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-variants");
        });

        test("Default and small variant", async ({ story }) => {
            await expect(
                story.locators.variantDefaultDropdownContainer
            ).toBeVisible();
            await expect(
                story.locators.variantSmallDropdownContainer
            ).toBeVisible();

            await expect(story.locators.variantDefaultDropdownList)
                .toMatchAriaSnapshot(`
                - group "Default variant":
                  - listbox:
                    - option "Option A"
                    - option "Option B"
                    - option "Option C"
                    - option "Option D"
            `);

            await expect(story.locators.variantSmallDropdownList)
                .toMatchAriaSnapshot(`
                - group "Small variant":
                  - listbox:
                    - option "Option A"
                    - option "Option B"
                    - option "Option C"
                    - option "Option D"
            `);

            await compareScreenshot(story, "base-variants");
        });

        test("Item hover activates hover state", async ({ story }) => {
            const defaultItems = story.getListItemsIn(
                story.locators.variantDefault
            );
            const smallItems = story.getListItemsIn(
                story.locators.variantSmall
            );

            await defaultItems.first().hover();
            await compareScreenshot(story, "base-variants-hover-default", {
                locator: story.locators.variantDefault,
            });

            await smallItems.first().hover();
            await compareScreenshot(story, "base-variants-hover-small", {
                locator: story.locators.variantSmall,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("base-variants", { mode: "dark" });
        });

        test("Default and small variant - dark mode", async ({ story }) => {
            await compareScreenshot(story, "base-variants-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("single-selection");
        });

        test("Clicking an item selects it", async ({ story }) => {
            const container = story.locators.singleSelectContainer;
            const items = story.getListItemsIn(container);

            await expect(items.first()).toHaveAttribute(
                "aria-selected",
                "false"
            );
            await items.first().click();
            await expect(items.first()).toHaveAttribute(
                "aria-selected",
                "true"
            );

            await compareScreenshot(story, "single-selection-selected", {
                locator: container,
            });
        });

        test("Clicking a selected item deselects it", async ({ story }) => {
            const container = story.locators.singleSelectContainer;
            const items = story.getListItemsIn(container);

            await items.first().click();
            await expect(items.first()).toHaveAttribute(
                "aria-selected",
                "true"
            );

            await items.first().click();
            await expect(items.first()).toHaveAttribute(
                "aria-selected",
                "false"
            );
        });

        test("Selecting a new item deselects the previous", async ({
            story,
        }) => {
            const container = story.locators.singleSelectContainer;
            const items = story.getListItemsIn(container);

            await items.first().click();
            await expect(items.first()).toHaveAttribute(
                "aria-selected",
                "true"
            );

            await items.nth(1).click();
            await expect(items.first()).toHaveAttribute(
                "aria-selected",
                "false"
            );
            await expect(items.nth(1)).toHaveAttribute("aria-selected", "true");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("multi-selection");
        });

        test("clicking items toggles their selection", async ({ story }) => {
            const container = story.locators.multiSelectContainer;
            const items = story.getListItemsIn(container);

            await items.first().click();
            await items.nth(1).click();

            await expect(items.first()).toHaveAttribute(
                "aria-selected",
                "true"
            );
            await expect(items.nth(1)).toHaveAttribute("aria-selected", "true");
            await expect(items.nth(2)).toHaveAttribute(
                "aria-selected",
                "false"
            );

            await compareScreenshot(story, "multi-selection-partial", {
                locator: container,
            });
        });

        test("select all then clear all", async ({ story }) => {
            const container = story.locators.multiSelectContainer;
            const items = story.getListItemsIn(container);

            await container.getByRole("button", { name: "Select all" }).click();
            const count = await items.count();
            for (let i = 0; i < count; i++) {
                await expect(items.nth(i)).toHaveAttribute(
                    "aria-selected",
                    "true"
                );
            }

            await compareScreenshot(story, "multi-selection-all-selected", {
                locator: container,
            });

            await container.getByRole("button", { name: "Clear all" }).click();
            for (let i = 0; i < count; i++) {
                await expect(items.nth(i)).toHaveAttribute(
                    "aria-selected",
                    "false"
                );
            }
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("multi-selection", { mode: "dark" });
        });

        test("Select all - dark mode", async ({ story }) => {
            await compareScreenshot(story, "multi-selection-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("search");
        });

        test("Typing, clearing, and no-results flow", async ({ story }) => {
            await story.locators.searchInput.fill("an");

            const items = story.getListItemsIn(story.locators.searchContainer);
            await expect(items).toHaveCount(1);
            await expect(items.first()).toContainText("Banana");

            await compareScreenshot(story, "search-filtered", {
                locator: story.locators.searchContainer,
            });

            await story.locators.searchContainer
                .getByRole("button", { name: "Clear" })
                .click();
            await expect(items).toHaveCount(5);

            await story.locators.searchInput.fill("zzz");
            await expect(story.locators.searchNoResults).toBeVisible();

            await compareScreenshot(story, "search-no-results", {
                locator: story.locators.searchContainer,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("keyboard-nav");
        });

        test("Arrow keys, enter, and space", async ({ story }) => {
            const items = story.getListItemsIn(
                story.locators.keyboardNavContainer
            );

            await items.first().focus();
            await story.page.keyboard.press("ArrowDown");
            await expect(items.nth(1)).toBeFocused();

            await story.page.keyboard.press("ArrowUp");
            await expect(items.first()).toBeFocused();

            await story.page.keyboard.press("Enter");
            await expect(items.first()).toHaveAttribute(
                "aria-selected",
                "true"
            );

            await story.page.keyboard.press("ArrowDown");
            await expect(items.nth(1)).toBeFocused();
            await story.page.keyboard.press("Space");
            await expect(items.nth(1)).toHaveAttribute("aria-selected", "true");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("load-states");
        });

        test("Loading, fail, and retry callback", async ({ story }) => {
            await expect(story.locators.loadingState).toBeVisible();

            await compareScreenshot(story, "load-states", {
                locator: story.locators.loadingContainer,
            });

            await expect(story.locators.failState).toBeVisible();
            await expect(
                story.locators.failContainer.getByRole("button", {
                    name: "Try again.",
                })
            ).toBeVisible();

            await compareScreenshot(story, "load-states-fail", {
                locator: story.locators.failContainer,
            });

            await story.locators.failContainer
                .getByRole("button", { name: "Try again." })
                .click();

            await expect(story.locators.retryTriggered).toBeVisible();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("load-states", { mode: "dark" });
        });

        test("Loading - dark mode", async ({ story }) => {
            await compareScreenshot(story, "load-states-dark");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-cta");
        });

        test("Renders at the bottom of the list", async ({ story }) => {
            await expect(story.locators.customCta).toBeVisible();
            await expect(story.locators.ctaButton).toBeVisible();

            await compareScreenshot(story, "custom-cta", {
                locator: story.locators.customCtaContainer,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-cta", { mode: "dark" });
        });

        test("Custom CTA - dark mode", async ({ story }) => {
            await compareScreenshot(story, "custom-cta-dark");
        });
    });
});
