import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "popover";

    public readonly locators: {
        basicDesktopPopover: Locator;
        basicMobilePopover: Locator;
        basicDesktopDialog: Locator;
        basicMobileDialog: Locator;
        outsideDismissTarget: Locator;
        hoverDialog: Locator;
        focusStart: Locator;
        triggerButton: Locator;
        popoverContent: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            basicDesktopPopover: page
                .getByTestId("card")
                .getByTestId("popover-content"),
            basicMobilePopover: page
                .getByTestId("modal-content")
                .getByTestId("popover-content"),
            basicDesktopDialog: page.getByTestId("popover"),
            basicMobileDialog: page.locator(
                '[data-floating-ui-focusable=""][role="dialog"][aria-label="More details"]'
            ),
            outsideDismissTarget: page.getByTestId("outside-dismiss-target"),
            hoverDialog: page.getByRole("dialog", {
                name: "Hover details",
            }),
            focusStart: page.getByTestId("focus-start"),
            triggerButton: page.getByTestId("popover-trigger"),
            popoverContent: page.getByTestId("popover-content"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Popover", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic with click", async ({ story }) => {
            await test.step("Popover is not initially visible", async () => {
                await expect(story.locators.triggerButton).toBeVisible();
                await expect(
                    story.locators.basicDesktopPopover
                ).not.toBeVisible();
            });

            await test.step("Popover opens on click with expected semantics", async () => {
                await story.locators.triggerButton.click();

                await expect(story.locators.basicDesktopPopover).toBeVisible();
                await expect(story.locators.basicDesktopDialog).toBeVisible();

                await compareScreenshot(story, "after-click", {
                    fullscreen: true,
                });
            });

            await test.step("Popover closes when clicking outside", async () => {
                await story.locators.outsideDismissTarget.click();
                await expect(
                    story.locators.basicDesktopPopover
                ).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { size: "mobile" });
        });

        test("Basic with click (mobile)", async ({ story }) => {
            await expect(story.locators.basicMobilePopover).not.toBeVisible();

            await story.locators.triggerButton.click();
            await expect(story.locators.basicMobilePopover).toBeVisible();
            await expect(story.locators.basicMobileDialog).toBeVisible();

            await compareScreenshot(story, "after-click-mobile", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { size: "mobile", mode: "dark" });
        });

        test("Basic with click (mobile, dark mode)", async ({ story }) => {
            await story.locators.triggerButton.click();

            await expect(story.locators.basicMobilePopover).toBeVisible();
            await expect(story.locators.basicMobileDialog).toBeVisible();

            await compareScreenshot(story, "after-click-mobile-dark", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Basic with click (dark mode)", async ({ story }) => {
            await expect(story.locators.basicDesktopPopover).not.toBeVisible();

            await story.locators.triggerButton.click();
            await expect(story.locators.basicDesktopPopover).toBeVisible();

            await compareScreenshot(story, "after-click", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hover");
        });

        test("basic with hover", async ({ story }) => {
            await expect(story.locators.popoverContent).not.toBeVisible();

            await story.locators.triggerButton.hover();
            await expect(story.locators.popoverContent).toBeVisible();
            await expect(story.locators.hoverDialog).toBeVisible();

            await compareScreenshot(story, "hover-open", {
                fullscreen: true,
            });

            await story.page.mouse.move(0, 100);
            await expect(story.locators.popoverContent).not.toBeVisible();
        });

        test("Basic with hover (keyboard navigation)", async ({ story }) => {
            await test.step("Trigger can receive focus", async () => {
                await story.locators.triggerButton.focus();
                await expect(story.locators.triggerButton).toBeFocused();
            });

            await test.step("Enter opens popover and Escape dismisses it", async () => {
                await story.page.keyboard.press("Enter");

                await expect(story.locators.popoverContent).toBeVisible();
                await expect(story.locators.hoverDialog).toBeVisible();

                await compareScreenshot(story, "hover-keyboard-open", {
                    fullscreen: true,
                });

                await story.page.keyboard.press("Escape");
                await expect(story.locators.popoverContent).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic with click (keyboard navigation)", async ({ story }) => {
            await test.step("Focus moves to trigger via Tab", async () => {
                await story.locators.focusStart.focus();
                await story.page.keyboard.press("Tab");

                await expect(story.locators.triggerButton).toBeFocused();
            });

            await test.step("Enter opens popover and Escape dismisses it", async () => {
                await story.page.keyboard.press("Enter");

                await expect(story.locators.basicDesktopPopover).toBeVisible();
                await expect(story.locators.basicDesktopDialog).toBeVisible();

                await compareScreenshot(story, "keyboard-open", {
                    fullscreen: true,
                });

                await story.page.keyboard.press("Escape");

                await expect(
                    story.locators.basicDesktopPopover
                ).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("placement");
        });

        test("Popover renders below trigger with bottom placement", async ({
            story,
        }) => {
            await story.locators.triggerButton.click();
            await expect(story.locators.popoverContent).toBeVisible();

            await compareScreenshot(story, "bottom-placement", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("flip");
        });

        test("Popover renders below trigger with flipped top placement", async ({
            story,
        }) => {
            await story.locators.triggerButton.click();
            await expect(story.locators.popoverContent).toBeVisible();

            await compareScreenshot(story, "flip-top-placement", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("position-on-scroll");
        });

        test("Popover position updates on scroll (top to bottom to top)", async ({
            story,
        }) => {
            const getPopoverVerticalPosition = async () => {
                const triggerBox =
                    await story.locators.triggerButton.boundingBox();
                const popoverBox =
                    await story.locators.popoverContent.boundingBox();

                if (!triggerBox || !popoverBox) return "unknown";
                return popoverBox.y < triggerBox.y ? "above" : "below";
            };

            await test.step("Popover opens and is positioned above trigger initially", async () => {
                await story.locators.triggerButton.click();
                await expect(story.locators.popoverContent).toBeVisible();
                await expect.poll(getPopoverVerticalPosition).toBe("above");
            });

            await test.step("Popover moves below trigger after scrolling down", async () => {
                await story.page.evaluate(() => window.scrollBy(0, 380));
                await expect.poll(getPopoverVerticalPosition).toBe("below");
            });

            await test.step("Popover returns above trigger after scrolling back up", async () => {
                await story.page.evaluate(() => window.scrollBy(0, -380));
                await expect.poll(getPopoverVerticalPosition).toBe("above");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("resize");
        });

        test("Resize mode constrains oversized content", async ({ story }) => {
            await story.locators.triggerButton.click();
            await expect(story.locators.popoverContent).toBeVisible();

            const triggerBox = await story.locators.triggerButton.boundingBox();
            const popoverBox =
                await story.locators.popoverContent.boundingBox();

            expect(triggerBox).not.toBeNull();
            expect(popoverBox).not.toBeNull();
            expect(popoverBox!.y).toBeLessThan(triggerBox!.y);

            await compareScreenshot(story, "resize-open", {
                fullscreen: true,
            });
        });
    });
});
