import { test as base, expect, Locator, Page } from "@playwright/test";

import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "accordion";

    public readonly locators: {
        component: {
            title: Locator;
            expandCollapseAllButton: Locator;
        };
        expandableContainer: (testId: string) => Locator;
        icon: (testId: string) => Locator;
        defaultAccordion: Locator;
        expandAllAccordion: Locator;
        nonCollapsibleAccordion: Locator;
        smallAccordion: Locator;
        mobileTitleAccordion: Locator;
        nonCollapsibleItemContent: Locator;
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
            expandableContainer: (testId: string) =>
                page.getByTestId(`${testId}-expandable-container`),
            icon: (testId: string) =>
                page.getByTestId(`${testId}-expand-collapse-icon`),
            defaultAccordion: page.getByTestId("accordion-default"),
            expandAllAccordion: page.getByTestId("accordion-expand-all"),
            nonCollapsibleAccordion: page.getByTestId(
                "accordion-non-collapsible"
            ),
            smallAccordion: page.getByTestId("accordion-small"),
            mobileTitleAccordion: page.getByTestId("accordion-mobile-title"),
            nonCollapsibleItemContent: page.getByTestId(
                "non-collapsible-item-content"
            ),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Accordion", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await expect(story.locators.defaultAccordion).toMatchAriaSnapshot(`
                - heading "My Accordion" [level=2]
                - button "Hide all"
                - heading "This is the first item" [level=3]:
                    - button "This is the first item" [disabled] [expanded=true]
                - paragraph: First accordion item content.
                - heading "This is the second item" [level=3]:
                    - button "This is the second item" [expanded=true]
                - paragraph: Second accordion item content.
            `);

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
            const expectExpandAllItems = async () => {
                await expect(story.locators.expandAllAccordion)
                    .toMatchAriaSnapshot(`
                    - heading "Collapsed Accordion" [level=2]
                    - button "Show all"
                    - heading "First collapsed item" [level=3]:
                        - button "First collapsed item" [expanded=false]
                    - heading "Second collapsed item" [level=3]:
                        - button "Second collapsed item" [expanded=false]
                `);
            };
            await test.step("Collapsed items mount with show all control", async () => {
                await expectExpandAllItems();
            });

            await test.step("Show all expands both items", async () => {
                await story.locators.component.expandCollapseAllButton.click();

                await expect(story.locators.expandAllAccordion)
                    .toMatchAriaSnapshot(`
                    - heading "Collapsed Accordion" [level=2]
                    - button "Hide all"
                    - heading "First collapsed item" [level=3]:
                        - button "First collapsed item" [expanded=true]
                    - paragraph: First collapsed item content.
                    - heading "Second collapsed item" [level=3]:
                        - button "Second collapsed item" [expanded=true]
                    - paragraph: Second collapsed item content.
                `);
            });

            await test.step("Hide all collapses both items", async () => {
                await story.locators.component.expandCollapseAllButton.click();
                await expectExpandAllItems();
                await compareScreenshot(story, "collapse all");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("non-collapsible");
        });

        test("Non collapsible", async ({ story }) => {
            const expandable = story.locators.expandableContainer(
                "non-collapsible-item"
            );

            await expect(story.locators.nonCollapsibleAccordion)
                .toMatchAriaSnapshot(`
                - heading "No expand collapse all" [level=2]
                - heading "Fixed item" [level=3]:
                    - button "Fixed item" [disabled] [expanded=true]
                - paragraph: This item stays expanded.
            `);

            await expect(
                story.locators.icon("non-collapsible-item")
            ).toHaveCount(0);
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
            await compareScreenshot(story, "mobile title hidden");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("mobile-title", { size: "mobile" });
        });

        test("Mobile title shown", async ({ story }) => {
            await expect(story.locators.mobileTitleAccordion)
                .toMatchAriaSnapshot(`
                - heading "Title in mobile too" [level=2]
            `);

            await compareScreenshot(story, "mobile title", {
                locator: story.locators.mobileTitleAccordion,
            });
        });
    });
});
