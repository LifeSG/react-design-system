import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "modal-v2";

    public readonly locators: {
        modal: Locator;
        overlayClickCount: Locator;
        closeCount: Locator;
        keyboardCloseSlot: Locator;
        outsideButton: Locator;
        focusStart: Locator;
        firstModalContent: Locator;
        secondModalContent: Locator;
        secondModalCloseSlot: Locator;
        defaultContent: Locator;
        openDefaultFocusModalButton: Locator;
        openDisableInitialFocusModalButton: Locator;
        disabledFocusTarget: Locator;
        overlayDisabledCloseSlot: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            modal: page.getByTestId("modal"),
            overlayClickCount: page.getByTestId("overlay-click-count"),
            closeCount: page.getByTestId("close-count"),
            keyboardCloseSlot: page.getByTestId("keyboard-close-slot"),
            outsideButton: page.getByTestId("outside-button"),
            focusStart: page.getByTestId("focus-start"),
            firstModalContent: page.getByTestId("first-modal-content"),
            secondModalContent: page.getByTestId("second-modal-content"),
            secondModalCloseSlot: page.getByTestId("second-modal-close-slot"),
            defaultContent: page.getByTestId("default-content"),
            openDefaultFocusModalButton: page.getByTestId(
                "open-default-focus-modal"
            ),
            openDisableInitialFocusModalButton: page.getByTestId(
                "open-disable-initial-focus-modal"
            ),
            disabledFocusTarget: page.getByTestId("disabled-focus-target"),
            overlayDisabledCloseSlot: page.getByTestId(
                "overlay-disabled-close-slot"
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

const clickOverlayOutsideModal = async ({
    page,
    modalContent,
}: {
    page: Page;
    modalContent: Locator;
}) => {
    const contentBox = await modalContent.boundingBox();
    if (!contentBox) {
        throw new Error("Could not get modal content bounding box");
    }

    await page.mouse.click(
        contentBox.x + contentBox.width + 100,
        contentBox.y + contentBox.height + 8
    );
};

test.describe("ModalV2", () => {
    test.describe("default interactions", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("modal", async ({ story }) => {
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });

            await test.step("dismisses when close button is clicked", async () => {
                await expect(story.locators.defaultContent).toBeVisible();

                await story.page
                    .getByRole("button", { name: "Close button" })
                    .click();
                await expect(story.page.getByRole("dialog")).not.toBeVisible();
            });

            await test.step("dismisses when overlay area is clicked", async () => {
                await story.init("default");
                await expect(story.locators.defaultContent).toBeVisible();

                await clickOverlayOutsideModal({
                    page: story.page,
                    modalContent: story.locators.defaultContent,
                });

                await expect(story.page.getByRole("dialog")).not.toBeVisible();
            });
        });
    });

    test.describe("focus behavior", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("focus-behavior");
        });

        test("Escape dismissal", async ({ story }) => {
            await test.step("verify dialog focus", async () => {
                await story.locators.openDefaultFocusModalButton.click();

                const defaultDialog = story.page.getByRole("dialog").first();
                await expect(defaultDialog).toBeVisible();
                await expect(defaultDialog).toBeFocused();

                await story.page.keyboard.press("Escape");
                await expect(defaultDialog).not.toBeVisible();
            });

            await test.step("verify manual target focus", async () => {
                await story.locators.openDisableInitialFocusModalButton.click();

                const disabledFocusDialog = story.page
                    .getByRole("dialog")
                    .first();
                await expect(disabledFocusDialog).toBeVisible();
                await expect(story.locators.disabledFocusTarget).toBeFocused();

                await story.page.keyboard.press("Escape");
                await expect(disabledFocusDialog).not.toBeVisible();
            });
        });
    });

    test.describe("keyboard navigation", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("keyboard-navigation");
        });

        test("traps tab", async ({ story }) => {
            await test.step("validate accessibility tree snapshot", async () => {
                await expect(story.layout).toMatchAriaSnapshot(`
                    - button "Outside button"
                    - button "Close button"
                    - text: Keyboard navigation story
                    - textbox "Type here"
                    - button "Continue"
                    - button "Back"
                `);
            });

            await test.step("tab within modal and verify focus does not escape", async () => {
                await story.locators.keyboardCloseSlot
                    .locator("button")
                    .focus();
                await story.page.keyboard.press("Shift+Tab");
                await expect(story.locators.outsideButton).not.toBeFocused();
            });

            await test.step("activate close button with keyboard", async () => {
                await story.locators.keyboardCloseSlot
                    .locator("button")
                    .focus();
                await expect(story.locators.closeCount).toHaveText("0");

                await story.page.keyboard.press("Enter");
                await expect(story.locators.closeCount).toHaveText("1");
            });
        });
    });

    test.describe("overlay click disabled", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("overlay-click-disabled");
        });

        test("does not dismiss", async ({ story }) => {
            const disabledOverlayContent = story.page.getByTestId(
                "overlay-disabled-content"
            );
            await test.step("verify initial visible state", async () => {
                await expect(disabledOverlayContent).toBeVisible();
                await expect(story.locators.overlayClickCount).toHaveText("0");
            });

            await test.step("click outside modal content and verify no dismissal", async () => {
                await clickOverlayOutsideModal({
                    page: story.page,
                    modalContent: disabledOverlayContent,
                });

                await expect(story.locators.overlayClickCount).toHaveText("0");
                await expect(disabledOverlayContent).toBeVisible();
            });
        });

        test("dismisses through close button", async ({ story }) => {
            const disabledOverlayContent = story.page.getByTestId(
                "overlay-disabled-content"
            );

            await test.step("verify modal is open before close action", async () => {
                await expect(disabledOverlayContent).toBeVisible();
                await expect(story.locators.overlayClickCount).toHaveText("0");
            });

            await test.step("close modal from close button", async () => {
                await story.locators.overlayDisabledCloseSlot
                    .locator("button")
                    .click();

                await expect(disabledOverlayContent).not.toBeVisible();
                await expect(story.locators.overlayClickCount).toHaveText("0");
            });
        });
    });

    test.describe("stacked", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("stacked");
        });

        test("matches screenshot", async ({ story }) => {
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("stacking modals", async ({ story }) => {
            await test.step("verify both modals are initially visible", async () => {
                await expect(story.locators.firstModalContent).toBeVisible();
                await expect(story.locators.secondModalContent).toBeVisible();
            });

            await test.step("close top modal and verify bottom remains", async () => {
                await story.locators.secondModalCloseSlot
                    .locator("button")
                    .click();

                await expect(
                    story.locators.secondModalContent
                ).not.toBeVisible();
                await expect(story.locators.firstModalContent).toBeVisible();
            });
        });
    });

    test.describe("scroll handling", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("scroll-handling");
        });

        test("allows scrolling when content exceeds modal viewport", async ({
            story,
        }) => {
            await test.step("verify modal overflow is present", async () => {
                await expect(story.locators.modal).toBeVisible();

                const scrollMetrics = await story.locators.modal.evaluate(
                    (node) => {
                        return {
                            scrollHeight: node.scrollHeight,
                            clientHeight: node.clientHeight,
                        };
                    }
                );

                expect(scrollMetrics.scrollHeight).toBeGreaterThan(
                    scrollMetrics.clientHeight
                );
            });

            await test.step("scroll modal and verify scroll position updates", async () => {
                await story.locators.modal.evaluate((node) => {
                    node.scrollTop = 400;
                });

                const scrollTop = await story.locators.modal.evaluate(
                    (node) => node.scrollTop
                );
                expect(scrollTop).toBeGreaterThan(0);
            });
        });
    });

    test.describe("styled-slots", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("styled-slots");
        });

        test("matches screenshot", async ({ story }) => {
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });
    });
});
