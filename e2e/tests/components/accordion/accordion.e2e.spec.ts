import { test as base, expect, Locator, Page } from "@playwright/test";

import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "accordion";

    public readonly locators: {
        component: {
            title: Locator;
            expandCollapseAllButton: Locator;
        };
        smallAccordion: Locator;
        mobileTitleAccordion: Locator;
        nonCollapsibleItemContent: Locator;
        controlledOpenFirstButton: Locator;
        controlledCloseFirstButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
                title: page.getByTestId("accordion-title"),
                expandCollapseAllButton: page.getByTestId(
                    "accordion-expand-collapse-button"
                ),
            },
            smallAccordion: page.getByTestId("accordion-small"),
            mobileTitleAccordion: page.getByTestId("accordion-mobile-title"),
            nonCollapsibleItemContent: page.getByTestId(
                "non-collapsible-item-content"
            ),
            controlledOpenFirstButton: page.getByTestId(
                "controlled-open-first"
            ),
            controlledCloseFirstButton: page.getByTestId(
                "controlled-close-first"
            ),
        };
    }

    public itemButton(name: string) {
        return this.page.getByRole("button", { name });
    }

    public expandableContainer(testId: string) {
        return this.page.getByTestId(`${testId}-expandable-container`);
    }

    public icon(testId: string) {
        return this.page.getByTestId(`${testId}-expand-collapse-icon`);
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Accordion", () => {
    const expectItemExpanded = async (
        story: StoryPage,
        itemName: string,
        isExpanded: boolean
    ) => {
        await expect(story.itemButton(itemName)).toHaveAttribute(
            "aria-expanded",
            isExpanded ? "true" : "false"
        );
    };

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await expect(
                story.itemButton("This is the first item")
            ).toHaveAttribute("aria-disabled", "true");

            await compareScreenshot(story, "default mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "default mount (dark mode)");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("expand-all");
        });

        test("Expand all", async ({ story }) => {
            await test.step("Collapsed items mount with show all control", async () => {
                await expect(
                    story.locators.component.expandCollapseAllButton
                ).toHaveText("Show all");
                await expect(
                    story.itemButton("First collapsed item")
                ).toHaveAttribute("aria-expanded", "false");
                await expect(
                    story.itemButton("Second collapsed item")
                ).toHaveAttribute("aria-expanded", "false");
            });

            await test.step("Show all expands both items", async () => {
                await story.locators.component.expandCollapseAllButton.click();

                await expect(
                    story.locators.component.expandCollapseAllButton
                ).toHaveText("Hide all");
                await expectItemExpanded(story, "First collapsed item", true);
                await expectItemExpanded(story, "Second collapsed item", true);
            });

            await test.step("Hide all collapses both items", async () => {
                await story.locators.component.expandCollapseAllButton.click();

                await expect(
                    story.locators.component.expandCollapseAllButton
                ).toHaveText("Show all");
                await expectItemExpanded(story, "First collapsed item", false);
                await expectItemExpanded(story, "Second collapsed item", false);
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("non-collapsible");
        });

        test("Non collapsible", async ({ story }) => {
            const button = story.itemButton("Fixed item");
            const expandable = story.expandableContainer(
                "non-collapsible-item"
            );

            await expect(button).toHaveAttribute("aria-disabled", "true");
            await expect(button).toHaveAttribute("aria-expanded", "true");
            await expect(story.icon("non-collapsible-item")).toHaveCount(0);
            await expect(expandable).not.toHaveAttribute("inert");
            await expect(
                story.locators.nonCollapsibleItemContent
            ).toBeVisible();
            await compareScreenshot(story, "non collapsible");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("small");
        });

        test("Small item type", async ({ story }) => {
            await compareScreenshot(story, "small mount", {
                locator: story.locators.smallAccordion,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "mobile" });
        });

        test("Mobile title hidden (default)", async ({ story }) => {
            await expect(story.locators.component.title).not.toBeVisible();
            await compareScreenshot(story, "mobile title hidden");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("mobile-title", { size: "mobile" });
        });

        test("Mobile title shown", async ({ story }) => {
            await expect(story.locators.component.title).toBeVisible();
            await compareScreenshot(story, "mobile title", {
                locator: story.locators.mobileTitleAccordion,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("controlled");
        });

        test("Controlled expansion", async ({ story }) => {
            const button = story.itemButton("Controlled item");

            await expect(button).toHaveAttribute("aria-expanded", "false");

            await story.locators.controlledOpenFirstButton.click();
            await expect(button).toHaveAttribute("aria-expanded", "true");

            await story.locators.controlledCloseFirstButton.click();
            await expect(button).toHaveAttribute("aria-expanded", "false");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("mixed-state-sync");
        });

        test("Mixed item state sync", async ({ story }) => {
            await test.step("Mixed state mounts with show all", async () => {
                await expect(
                    story.locators.component.expandCollapseAllButton
                ).toHaveText("Show all");
                await expectItemExpanded(story, "Parent synced item", false);
                await expectItemExpanded(story, "Controlled open item", true);
            });

            await test.step("Show all expands the parent synced item", async () => {
                await story.locators.component.expandCollapseAllButton.click();

                await expect(
                    story.locators.component.expandCollapseAllButton
                ).toHaveText("Hide all");
                await expectItemExpanded(story, "Parent synced item", true);
                await expectItemExpanded(story, "Controlled open item", true);
            });

            await test.step("Hide all leaves the controlled item expanded", async () => {
                await story.locators.component.expandCollapseAllButton.click();

                await expect(
                    story.locators.component.expandCollapseAllButton
                ).toHaveText("Show all");
                await expectItemExpanded(story, "Parent synced item", false);
                await expectItemExpanded(story, "Controlled open item", true);
            });
        });
    });
});
