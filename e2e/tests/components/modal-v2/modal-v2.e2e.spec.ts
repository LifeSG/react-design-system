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
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });

        test("Dismisses via close button", async ({ story }) => {
            await story.locators.closeButton.click();
            await expect(story.locators.dialog).not.toBeVisible();
        });

        test("Dismisses on overlay click", async ({ story }) => {
            await story.clickOverlayOutsideModal(story.locators.defaultContent);
            await expect(story.locators.dialog).not.toBeVisible();
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("focus-behavior");
        });

        test("Initial focus behavior", async ({ story }) => {
            await test.step("Default focus targets the dialog", async () => {
                await story.locators.openDefaultFocusModalButton.click();

                const defaultDialog = story.locators.dialog.first();
                await expect(defaultDialog).toBeVisible();
                await expect(defaultDialog).toBeFocused();

                await story.page.keyboard.press("Escape");
                await expect(defaultDialog).not.toBeVisible();
            });

            await test.step("Disabled initial focus targets the specified element", async () => {
                await story.locators.openDisableInitialFocusModalButton.click();

                const disabledFocusDialog = story.locators.dialog.first();
                await expect(disabledFocusDialog).toBeVisible();
                await expect(story.locators.disabledFocusTarget).toBeFocused();

                await story.page.keyboard.press("Escape");
                await expect(disabledFocusDialog).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("keyboard-navigation");
        });

        test("Traps tab on keyboard navigation", async ({ story }) => {
            const input = story.page.getByTestId("modal-input");

            await test.step("Validate accessibility tree snapshot", async () => {
                await expect(story.page.locator("xpath=//html/body"))
                    .toMatchAriaSnapshot(`
                    - /children: equal
                    - dialog:
                      - paragraph: Keyboard navigation story
                      - textbox "Type here"
                      - button "Continue"
                      - button "Back"
                      - button "Close button"
                `);
            });

            await test.step("Tab within modal and verify focus does not escape", async () => {
                await input.focus();

                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");
                await story.page.keyboard.press("Tab");

                // focus cycles back to the first element
                await expect(input).toBeFocused();
            });

            await test.step("Activate close button with keyboard", async () => {
                await story.locators.closeButton.focus();
                await story.page.keyboard.press("Enter");

                await expect(story.locators.dialog).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("scroll-handling");
        });

        test("Supports overflow scrolling", async ({ story }) => {
            await story.page.keyboard.press("End");

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("overlay-click-disabled");
        });

        test("Overlay click disabled", async ({ story }) => {
            const disabledOverlayContent = story.page.getByTestId(
                "overlay-disabled-content"
            );

            await test.step("Does not dismiss via overlay click", async () => {
                await story.clickOverlayOutsideModal(disabledOverlayContent);

                await expect(disabledOverlayContent).toBeVisible();
            });

            await test.step("Dismisses via close button", async () => {
                await story.locators.closeButton.click();

                await expect(disabledOverlayContent).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("stacked");
        });

        test("Stacked", async ({ story }) => {
            await compareScreenshot(story, "state", {
                fullscreen: true,
            });
        });

        test("Stacked modals dismiss top modal first", async ({ story }) => {
            await test.step("Both modals are initially visible", async () => {
                await expect(story.locators.firstModalContent).toBeVisible();
                await expect(story.locators.secondModalContent).toBeVisible();
            });

            await test.step("Close top modal and verify bottom remains", async () => {
                await story.page.getByTestId("second-modal-close-slot").click();

                await expect(
                    story.locators.secondModalContent
                ).not.toBeVisible();
                await expect(story.locators.firstModalContent).toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("styled-slots");
        });

        test("Styled slots", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });
});
