import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "popover";

    public readonly locators: {
        popoverContent: Locator;
        dialog: Locator;
        outsideDismissTarget: Locator;
        focusStart: Locator;
        triggerButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            popoverContent: page.getByTestId("popover-content"),
            dialog: page.getByRole("dialog", { name: "More details" }),
            outsideDismissTarget: page.getByTestId("outside-dismiss-target"),
            focusStart: page.getByTestId("focus-start"),
            triggerButton: page.getByTestId("popover-trigger"),
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
                await expect(story.locators.popoverContent).not.toBeVisible();
            });

            await test.step("Popover opens on click", async () => {
                await story.locators.triggerButton.click();

                await compareScreenshot(story, "after-click", {
                    fullscreen: true,
                });

                await expect(story.locators.dialog).toMatchAriaSnapshot(`
                    - dialog "More details":
                      - paragraph: Basic popover content.
                `);
            });

            await test.step("Popover closes when clicking outside", async () => {
                await story.locators.outsideDismissTarget.click();

                await expect(story.locators.popoverContent).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { mode: "dark" });
        });

        test("Basic with click (dark mode)", async ({ story }) => {
            await story.locators.triggerButton.click();

            await compareScreenshot(story, "after-click", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { size: "mobile" });
        });

        test("Basic with click (mobile)", async ({ story }) => {
            await test.step("Popover is not initially visible", async () => {
                await expect(story.locators.popoverContent).not.toBeVisible();
            });

            await test.step("Popover opens on click", async () => {
                await story.locators.triggerButton.click();

                await compareScreenshot(story, "after-click", {
                    fullscreen: true,
                });
            });

            await test.step("Popover closes when clicking outside", async () => {
                await story.page.mouse.click(0, 0);

                await expect(story.locators.popoverContent).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic", { size: "mobile", mode: "dark" });
        });

        test("Basic with click (mobile, dark mode)", async ({ story }) => {
            await story.locators.triggerButton.click();

            await compareScreenshot(story, "after-click", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hover");
        });

        test("Basic with hover", async ({ story }) => {
            await test.step("Popover is not initially visible", async () => {
                await expect(story.locators.popoverContent).not.toBeVisible();
            });

            await test.step("Popover opens on hover", async () => {
                await story.locators.triggerButton.hover();

                await compareScreenshot(story, "after-hover", {
                    fullscreen: true,
                });
            });

            await test.step("Popover closes when mouse moves away", async () => {
                await story.page.mouse.move(0, 100);

                await expect(story.locators.popoverContent).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("basic");
        });

        test("Basic with click (keyboard navigation)", async ({ story }) => {
            await test.step("Trigger can receive focus", async () => {
                await story.locators.triggerButton.focus();

                await expect(story.locators.triggerButton).toBeFocused();
            });

            await test.step("'Enter' key opens popover", async () => {
                await story.page.keyboard.press("Enter");

                await compareScreenshot(story, "after-trigger", {
                    fullscreen: true,
                });
            });

            await test.step("'Escape' key dismisses popover", async () => {
                await story.page.keyboard.press("Escape");

                await expect(story.locators.popoverContent).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hover");
        });

        test("Basic with hover (keyboard navigation)", async ({ story }) => {
            await test.step("Trigger can receive focus", async () => {
                await story.locators.triggerButton.focus();

                await expect(story.locators.triggerButton).toBeFocused();
            });

            await test.step("'Enter' key opens popover", async () => {
                await story.page.keyboard.press("Enter");

                await compareScreenshot(story, "after-trigger", {
                    fullscreen: true,
                });
            });

            await test.step("'Escape' key dismisses popover", async () => {
                await story.page.keyboard.press("Escape");

                await expect(story.locators.popoverContent).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("placement");
        });

        test("position=bottom", async ({ story }) => {
            await story.locators.triggerButton.click();

            await compareScreenshot(story, "result", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("flip");
        });

        test("enabledFlip=true", async ({ story }) => {
            await story.locators.triggerButton.click();

            await compareScreenshot(story, "result", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("position-on-scroll");
        });

        test("Auto-positioning", async ({ story }) => {
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

        test("enableResize=true, enabledFlip=false", async ({ story }) => {
            await story.locators.triggerButton.click();

            await compareScreenshot(story, "result", {
                fullscreen: true,
            });
        });
    });
});
