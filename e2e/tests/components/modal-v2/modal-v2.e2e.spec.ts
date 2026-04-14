import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "modal-v2";

    public readonly locators: {
        modal: Locator;
        dialog: Locator;
        closeButton: Locator;
        outsideButton: Locator;
        focusStart: Locator;
        firstModalContent: Locator;
        secondModalContent: Locator;
        defaultContent: Locator;
        openDefaultFocusModalButton: Locator;
        openDisableInitialFocusModalButton: Locator;
        disabledFocusTarget: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            modal: page.getByTestId("modal"),
            dialog: page.getByRole("dialog"),
            closeButton: page.getByRole("button", { name: "Close" }),
            outsideButton: page.getByTestId("outside-button"),
            focusStart: page.getByTestId("focus-start"),
            firstModalContent: page.getByTestId("first-modal-content"),
            secondModalContent: page.getByTestId("second-modal-content"),
            defaultContent: page.getByTestId("default-content"),
            openDefaultFocusModalButton: page.getByTestId(
                "open-default-focus-modal"
            ),
            openDisableInitialFocusModalButton: page.getByTestId(
                "open-disable-initial-focus-modal"
            ),
            disabledFocusTarget: page.getByTestId("disabled-focus-target"),
        };
    }

    public async clickOverlayOutsideModal(modalContent: Locator) {
        const contentBox = await modalContent.boundingBox();
        if (!contentBox) {
            throw new Error("Could not get modal content bounding box");
        }

        await this.page.mouse.click(
            contentBox.x + contentBox.width + 100,
            contentBox.y + contentBox.height + 8
        );
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("ModalV2", () => {
    test.describe("Default", () => {
        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default");
            });

            test("Matches screenshot", async ({ story }) => {
                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });

            test("Dismisses via close button", async ({ story }) => {
                await expect(story.locators.defaultContent).toBeVisible();

                await story.locators.closeButton.click();
                await expect(story.locators.dialog).not.toBeVisible();
            });

            test("Dismisses on overlay click", async ({ story }) => {
                await expect(story.locators.defaultContent).toBeVisible();

                await story.clickOverlayOutsideModal(
                    story.locators.defaultContent
                );

                await expect(story.locators.dialog).not.toBeVisible();
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("focus-behavior");
            });

            test("Dismisses on Escape", async ({ story }) => {
                await test.step("verify dialog focus", async () => {
                    await story.locators.openDefaultFocusModalButton.click();

                    const defaultDialog = story.locators.dialog.first();
                    await expect(defaultDialog).toBeVisible();
                    await expect(defaultDialog).toBeFocused();

                    await story.page.keyboard.press("Escape");
                    await expect(defaultDialog).not.toBeVisible();
                });

                await test.step("verify manual target focus", async () => {
                    await story.locators.openDisableInitialFocusModalButton.click();

                    const disabledFocusDialog = story.locators.dialog.first();
                    await expect(disabledFocusDialog).toBeVisible();
                    await expect(
                        story.locators.disabledFocusTarget
                    ).toBeFocused();

                    await story.page.keyboard.press("Escape");
                    await expect(disabledFocusDialog).not.toBeVisible();
                });
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("keyboard-navigation");
            });

            test("Traps tab on keyboard navigation", async ({ story }) => {
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
                    await story.locators.closeButton.focus();
                    await story.page.keyboard.press("Shift+Tab");
                    await expect(
                        story.locators.outsideButton
                    ).not.toBeFocused();
                });

                await test.step("activate close button with keyboard", async () => {
                    await story.locators.closeButton.focus();
                    await story.page.keyboard.press("Enter");
                    await expect(story.locators.dialog).not.toBeVisible();
                });
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("scroll-handling");
            });

            test("Supports overflow scrolling", async ({ story }) => {
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
    });

    test.describe("enableOverlayClick=false", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("overlay-click-disabled");
        });

        test("Does not dismiss via overlay click", async ({ story }) => {
            const disabledOverlayContent = story.page.getByTestId(
                "overlay-disabled-content"
            );
            await test.step("verify initial visible state", async () => {
                await expect(disabledOverlayContent).toBeVisible();
            });

            await test.step("click outside modal content and verify no dismissal", async () => {
                await story.clickOverlayOutsideModal(disabledOverlayContent);

                await expect(disabledOverlayContent).toBeVisible();
            });
        });

        test("Dismisses via close button", async ({ story }) => {
            const disabledOverlayContent = story.page.getByTestId(
                "overlay-disabled-content"
            );

            await test.step("verify modal is open before close action", async () => {
                await expect(disabledOverlayContent).toBeVisible();
            });

            await test.step("close modal from close button", async () => {
                await story.locators.closeButton.click();

                await expect(disabledOverlayContent).not.toBeVisible();
            });
        });
    });

    test.describe("Stacked", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("stacked");
        });

        test("Matches screenshot", async ({ story }) => {
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Dismisses top modal first", async ({ story }) => {
            await test.step("verify both modals are initially visible", async () => {
                await expect(story.locators.firstModalContent).toBeVisible();
                await expect(story.locators.secondModalContent).toBeVisible();
            });

            await test.step("close top modal and verify bottom remains", async () => {
                await story.page.getByTestId("second-modal-close-slot").click();

                await expect(
                    story.locators.secondModalContent
                ).not.toBeVisible();
                await expect(story.locators.firstModalContent).toBeVisible();
            });
        });
    });

    test.describe("Styled slots", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("styled-slots");
        });

        test("Matches screenshot", async ({ story }) => {
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });
    });
});
