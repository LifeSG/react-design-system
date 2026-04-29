import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "box-container";

    public readonly locators: {
        container: {
            nonCollapsible: Locator;
            error: Locator;
            warning: Locator;
            default: Locator;
            cta: Locator;
            collapsed: Locator;
            expanded: Locator;
        };
        handle: Locator;
        nonExpandableContainer: Locator;
        expandableContainer: Locator;
        title: Locator;
        errorIcon: Locator;
        warningIcon: Locator;
        ctaContainer: Locator;
        ctaButton: Locator;
        content: {
            collapsed: Locator;
            expanded: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            container: {
                nonCollapsible: page.getByTestId(
                    "box-container-non-collapsible"
                ),
                error: page.getByTestId("box-container-error"),
                warning: page.getByTestId("box-container-warning"),
                default: page.getByTestId("box-container-default"),
                cta: page.getByTestId("box-container-cta"),
                collapsed: page.getByTestId("box-container-collapsed"),
                expanded: page.getByTestId("box-container-expanded"),
            },
            handle: page.getByTestId("handle"),
            nonExpandableContainer: page.getByTestId(
                "non-expandable-container"
            ),
            expandableContainer: page.getByTestId("expandable-container"),
            title: page.getByTestId("title"),
            errorIcon: page.getByTestId("error-icon"),
            warningIcon: page.getByTestId("warning-icon"),
            ctaContainer: page.getByTestId("call-to-action-container"),
            ctaButton: page.getByTestId("cta-button"),
            content: {
                collapsed: page.getByTestId("content-collapsed"),
                expanded: page.getByTestId("content-expanded"),
            },
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("BoxContainer", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("display-states");
        });

        test("Display states", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.container.error).toMatchAriaSnapshot(`
                    - region "Container with error state error error":
                      - status:
                        - text: Container with error state error
                        - img "error"
                      - button "Container with error state error error" [expanded=false]
                      - paragraph: This container has an error display state with a red error icon.
                `);

            await expect(story.locators.container.warning).toMatchAriaSnapshot(`
                    - region "Container with warning state warning warning":
                      - status:
                        - text: Container with warning state warning
                        - img "warning"
                      - button "Container with warning state warning warning" [expanded=false]
                      - paragraph: This container has a warning display state with an amber warning icon.
                `);

            await expect(story.locators.container.default).toMatchAriaSnapshot(`
                    - region "Default state (no icon)":
                      - button "Default state (no icon)" [expanded=false]
                      - paragraph: This container has default display state with no icon.
                `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("non-collapsible");
        });

        test("Non-collapsible container", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.container.nonCollapsible)
                .toMatchAriaSnapshot(`
                    - region "Non-collapsible container":
                      - status: Non-collapsible container
                      - paragraph: Lorem ipsum dolor sit amet
                `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("call-to-action");
        });

        test("Container with call-to-action component", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("expand-collapse");
        });

        test("Expand/collapse interaction", async ({ story }) => {
            await test.step("Visual appearance of expand/collapse states", async () => {
                await compareScreenshot(story, "mount");

                // First container starts collapsed
                await expect(story.locators.container.collapsed)
                    .toMatchAriaSnapshot(`
                    - region "Title":
                      - status: Title
                      - button "Title" [expanded=false]
                `);

                // Second container starts expanded
                await expect(story.locators.container.expanded)
                    .toMatchAriaSnapshot(`
                    - region "Title":
                      - status: Title
                      - button "Title" [expanded=true]
                      - paragraph: Lorem ipsum dolor sit amet
                `);
            });

            // Test expanding the collapsed container
            await test.step("Clicking handle should expand collapsed container", async () => {
                const collapsedHandle =
                    story.locators.container.collapsed.getByTestId("handle");

                // Click to expand
                await collapsedHandle.click();

                // Verify state changed using aria snapshot
                await expect(story.locators.container.collapsed)
                    .toMatchAriaSnapshot(`
                    - region "Title":
                      - status: Title
                      - button "Title" [expanded=true]
                      - paragraph: Lorem ipsum dolor sit amet
                `);
            });

            // Test collapsing the expanded container
            await test.step("Clicking handle should collapse expanded container", async () => {
                const expandedHandle =
                    story.locators.container.expanded.getByTestId("handle");

                // Click to collapse
                await expandedHandle.click();

                // Verify state changed using aria snapshot
                await expect(story.locators.container.expanded)
                    .toMatchAriaSnapshot(`
                    - region "Title":
                      - status: Title
                      - button "Title" [expanded=false]
                `);
            });
        });
    });
});
