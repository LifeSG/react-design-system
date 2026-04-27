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
            await story.init("non-collapsible");
        });

        test("Aria attributes for non-collapsible container", async ({
            story,
        }) => {
            await test.step("Should have proper region role and labeling", async () => {
                // Check that container has proper ARIA role and label
                const container = story.page.locator('[role="region"]');
                expect(await container.count()).toBe(1);

                // Verify container is properly labeled
                await expect(container).toHaveAttribute("aria-labelledby");
            });

            await test.step("Should not have expandable ARIA attributes", async () => {
                // Verify no aria-expanded or aria-controls attributes exist
                const expandButtons = story.page.locator("[aria-expanded]");
                expect(await expandButtons.count()).toBe(0);

                const controlsElements = story.page.locator("[aria-controls]");
                expect(await controlsElements.count()).toBe(0);
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("display-states");
        });

        test("Display states (error and warning icons)", async ({ story }) => {
            // Verify all containers are visible
            await test.step("All display state containers should be visible", async () => {
                await expect(story.locators.container.error).toBeVisible();
                await expect(story.locators.container.warning).toBeVisible();
                await expect(story.locators.container.default).toBeVisible();
            });

            // Verify error icon is present and has correct attributes
            await test.step("Error icon should be visible with correct attributes", async () => {
                await expect(story.locators.errorIcon).toBeVisible();
                await expect(story.locators.errorIcon).toHaveAttribute(
                    "aria-label",
                    "error"
                );
            });

            // Verify warning icon is present and has correct attributes
            await test.step("Warning icon should be visible with correct attributes", async () => {
                await expect(story.locators.warningIcon).toBeVisible();
                await expect(story.locators.warningIcon).toHaveAttribute(
                    "aria-label",
                    "warning"
                );
            });

            // Verify default container has no display state icon
            await test.step("Default container should not have display state icons", async () => {
                const defaultContainer = story.locators.container.default;
                const iconsInDefault = defaultContainer.locator(
                    '[data-testid$="-icon"]'
                );
                expect(await iconsInDefault.count()).toBe(0);
            });

            // Visual regression test
            await test.step("Visual appearance of display states", async () => {
                await compareScreenshot(story, "display-states");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("call-to-action");
        });

        test("Container with call-to-action component", async ({ story }) => {
            // Verify container is visible
            await test.step("Call-to-action container should be visible", async () => {
                await expect(story.locators.container.cta).toBeVisible();
            });

            // Verify call-to-action container is present
            await test.step("Call-to-action container should be present", async () => {
                expect(await story.locators.ctaContainer.count()).toBe(1);
            });

            // Verify button is visible and enabled
            await test.step("Call-to-action button should be visible and enabled", async () => {
                await expect(story.locators.ctaButton).toBeVisible();
                await expect(story.locators.ctaButton).toBeEnabled();
            });

            // Test button interaction
            await test.step("Visual appearance of call-to-action container", async () => {
                await compareScreenshot(story, "call-to-action-container");
            });

            await test.step("Button should be clickable", async () => {
                await story.locators.ctaButton.click();
            });
        });

        test("Call-to-action button accessibility", async ({ story }) => {
            await test.step("Button should have proper role and be focusable", async () => {
                // Verify button role
                await expect(story.locators.ctaButton).toHaveRole("button");

                // Verify button is focusable
                await story.locators.ctaButton.focus();
                await expect(story.locators.ctaButton).toBeFocused();
            });

            await test.step("Button should be keyboard accessible", async () => {
                // Test keyboard navigation and activation
                await story.locators.ctaButton.focus();
                await story.page.keyboard.press("Enter");

                await story.locators.ctaButton.focus();
                await story.page.keyboard.press("Space");
            });
        });

        test("Call-to-action layout and positioning", async ({ story }) => {
            await test.step("Call-to-action component should be positioned correctly in header", async () => {
                // Verify call-to-action container is within the header
                const ctaInHeader = story.locators.container.cta.locator(
                    '[data-testid="call-to-action-container"]'
                );
                await expect(ctaInHeader).toBeVisible();
            });

            await test.step("Single button should be properly contained", async () => {
                // Check that the button is within the CTA container
                const buttonInCta =
                    story.locators.ctaContainer.locator("button");
                expect(await buttonInCta.count()).toBe(1);
                await expect(buttonInCta).toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("expand-collapse");
        });

        test("Expand/collapse interaction", async ({ story }) => {
            // Verify all containers are visible
            await test.step("All collapsible containers should be visible", async () => {
                await expect(story.locators.container.collapsed).toBeVisible();
                await expect(story.locators.container.expanded).toBeVisible();
            });

            // Verify handle buttons are present for collapsible containers
            await test.step("Handle buttons should be present for collapsible containers", async () => {
                const handles = story.page.getByTestId("handle");
                expect(await handles.count()).toBe(2);

                // All handles should be visible and enabled
                for (let i = 0; i < 2; i++) {
                    await expect(handles.nth(i)).toBeVisible();
                    await expect(handles.nth(i)).toBeEnabled();
                }
            });

            // Test initial states
            await test.step("Initial expand/collapse states should be correct", async () => {
                // First container starts collapsed - content should not be visible
                const collapsedHandle =
                    story.locators.container.collapsed.getByTestId("handle");
                await expect(collapsedHandle).toHaveAttribute(
                    "aria-expanded",
                    "false"
                );

                // Second container starts expanded - content should be visible
                const expandedHandle =
                    story.locators.container.expanded.getByTestId("handle");
                await expect(expandedHandle).toHaveAttribute(
                    "aria-expanded",
                    "true"
                );
            });

            // Test expanding the collapsed container
            await test.step("Clicking handle should expand collapsed container", async () => {
                const collapsedHandle =
                    story.locators.container.collapsed.getByTestId("handle");

                // Click to expand
                await collapsedHandle.click();

                // Verify state changed
                await expect(collapsedHandle).toHaveAttribute(
                    "aria-expanded",
                    "true"
                );

                // Verify content becomes visible
                await expect(story.locators.content.collapsed).toBeVisible();
            });

            // Test collapsing the expanded container
            await test.step("Clicking handle should collapse expanded container", async () => {
                const expandedHandle =
                    story.locators.container.expanded.getByTestId("handle");

                // Click to collapse
                await expandedHandle.click();

                // Verify state changed
                await expect(expandedHandle).toHaveAttribute(
                    "aria-expanded",
                    "false"
                );
            });

            // Test multiple clicks (toggle behavior)
            await test.step("Multiple clicks should toggle container state", async () => {
                const collapsedHandle =
                    story.locators.container.collapsed.getByTestId("handle");

                // Already expanded from previous test, click to collapse
                await collapsedHandle.click();
                await expect(collapsedHandle).toHaveAttribute(
                    "aria-expanded",
                    "false"
                );

                // Click again to expand
                await collapsedHandle.click();
                await expect(collapsedHandle).toHaveAttribute(
                    "aria-expanded",
                    "true"
                );
            });

            // Visual regression test for both states
            await test.step("Visual appearance of expand/collapse states", async () => {
                // Reset to known state for screenshot
                const handles = story.page.getByTestId("handle");

                // Ensure first is expanded, second is collapsed
                await handles.nth(0).click(); // expand if not already
                await handles.nth(1).click(); // collapse if not already

                await compareScreenshot(story, "expand-collapse-mixed-states");
            });
        });

        test("Expand/collapse content visibility", async ({ story }) => {
            await test.step("Content focus management", async () => {
                const collapsedHandle =
                    story.locators.container.collapsed.getByTestId("handle");
                const expandedHandle =
                    story.locators.container.expanded.getByTestId("handle");

                // Test that content in expanded container is accessible
                await expect(expandedHandle).toHaveAttribute(
                    "aria-expanded",
                    "true"
                );

                // Test that collapsed content is properly hidden
                await expect(collapsedHandle).toHaveAttribute(
                    "aria-expanded",
                    "false"
                );

                // Expand collapsed container and verify content becomes accessible
                await collapsedHandle.click();
                await expect(collapsedHandle).toHaveAttribute(
                    "aria-expanded",
                    "true"
                );
                await expect(story.locators.content.collapsed).toBeVisible();
            });
        });

        test("Expand/collapse accessibility", async ({ story }) => {
            await test.step("Handle buttons should have proper ARIA attributes", async () => {
                const handles = story.page.getByTestId("handle");

                for (let i = 0; i < 2; i++) {
                    const handle = handles.nth(i);

                    // Check required ARIA attributes
                    await expect(handle).toHaveAttribute("aria-controls");
                    await expect(handle).toHaveAttribute("aria-expanded");
                    await expect(handle).toHaveAttribute("aria-labelledby");
                    await expect(handle).toHaveRole("button");
                }
            });

            await test.step("Container regions should be properly labeled", async () => {
                // All containers should have region role and be labeled
                const containers = story.page.locator('[role="region"]');
                expect(await containers.count()).toBe(2);

                for (let i = 0; i < 2; i++) {
                    await expect(containers.nth(i)).toHaveAttribute(
                        "aria-labelledby"
                    );
                }
            });

            await test.step("Content areas should have proper controls relationship", async () => {
                const handles = story.page.getByTestId("handle");
                const expandableContainers = story.page.getByTestId(
                    "expandable-container"
                );

                expect(await handles.count()).toBe(
                    await expandableContainers.count()
                );

                // Each handle should control a corresponding content area
                for (let i = 0; i < 2; i++) {
                    const handle = handles.nth(i);
                    const controlsId = await handle.getAttribute(
                        "aria-controls"
                    );

                    const controlledElement = story.page.locator(
                        `[id="${controlsId}"]`
                    );
                    await expect(controlledElement).toBeAttached();
                }
            });
        });
    });
});
