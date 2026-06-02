import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "e-signature";

    public readonly locators: {
        esigDefault: Locator;
        esigWithSignature: Locator;
        esigDisabled: Locator;
        esigDisabledWithSignature: Locator;
        esigWithDescription: Locator;
        esigLoading: Locator;
        esigLoadingComplete: Locator;
        addSignatureButton: Locator;
        editSignatureButton: Locator;
        signaturePreview: Locator;
        signatureModal: Locator;
        modalCloseButton: Locator;
        clearButton: Locator;
        saveButton: Locator;
        canvas: Locator;
        hasSignature: Locator;
        focusStart: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            esigDefault: page.getByTestId("esig-default"),
            esigWithSignature: page.getByTestId("esig-with-signature"),
            esigDisabled: page.getByTestId("esig-disabled"),
            esigDisabledWithSignature: page.getByTestId(
                "esig-disabled-with-signature"
            ),
            esigWithDescription: page.getByTestId("esig-with-description"),
            esigLoading: page.getByTestId("esig-loading"),
            esigLoadingComplete: page.getByTestId("esig-loading-complete"),
            addSignatureButton: page.getByRole("button", {
                name: "Add signature",
            }),
            editSignatureButton: page.getByRole("button", {
                name: "Edit signature",
            }),
            signaturePreview: page.getByRole("img", {
                name: "Signature preview",
            }),
            signatureModal: page.getByTestId("signature-modal"),
            modalCloseButton: page.getByTestId("close-button"),
            clearButton: page.getByRole("button", { name: "Clear" }),
            saveButton: page.getByRole("button", { name: "Save" }),
            canvas: page.locator("#eSignatureCanvas"),
            hasSignature: page.getByTestId("has-signature"),
            focusStart: page.getByTestId("focus-start"),
        };
    }

    async drawOnCanvas(): Promise<void> {
        await this.locators.canvas.waitFor({ state: "visible" });

        const box = await this.locators.canvas.boundingBox();
        if (!box) throw new Error("Canvas bounding box not found");

        const centerX = box.x + box.width / 2;
        const centerY = box.y + box.height / 2;

        await this.page.mouse.move(centerX - 60, centerY);
        await this.page.mouse.down();
        await this.page.mouse.move(centerX, centerY - 20, { steps: 10 });
        await this.page.mouse.move(centerX + 60, centerY, { steps: 10 });
        await this.page.mouse.up();
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("ESignature", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.esigDefault).toMatchAriaSnapshot(`
                - button "Add signature"
            `);

            await expect(story.locators.esigWithSignature).toMatchAriaSnapshot(`
                - img "Signature preview"
                - button "Edit signature"
            `);

            await expect(story.locators.esigDisabled).toMatchAriaSnapshot(`
                - button "Add signature" [disabled]
            `);

            await expect(story.locators.esigDisabledWithSignature)
                .toMatchAriaSnapshot(`
                - img "Signature preview"
                - button "Edit signature" [disabled]
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading");
        });

        test("Loading state", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("loading", { mode: "dark" });
        });

        test("Loading state (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interactive");
        });

        test("Clicking Add signature opens the modal", async ({ story }) => {
            await story.locators.addSignatureButton.click();

            await expect(story.locators.signatureModal).toBeVisible();
            await compareScreenshot(story, "modal-open", { fullscreen: true });
        });

        test("Closing the modal via close button", async ({ story }) => {
            await story.locators.addSignatureButton.click();
            await expect(story.locators.signatureModal).toBeVisible();

            await story.locators.modalCloseButton.click();

            await expect(story.locators.signatureModal).not.toBeVisible();
            await expect(story.locators.addSignatureButton).toBeVisible();
            await expect(story.locators.hasSignature).toHaveText("false");
        });

        test("Clearing the drawing empties the canvas", async ({ story }) => {
            await story.locators.addSignatureButton.click();

            await story.drawOnCanvas();
            await story.locators.clearButton.click();

            await compareScreenshot(story, "after-clear", { fullscreen: true });
        });

        test("Saving a drawn signature shows the preview", async ({
            story,
        }) => {
            await story.locators.addSignatureButton.click();

            await test.step("Draw on canvas", async () => {
                await story.drawOnCanvas();
            });

            await test.step("Save and verify preview", async () => {
                await story.locators.saveButton.click();

                await expect(story.locators.signatureModal).not.toBeVisible();
                await expect(story.locators.signaturePreview).toBeVisible();
                await expect(story.locators.hasSignature).toHaveText("true");
                await compareScreenshot(story, "after-save");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("edit-existing");
        });

        test("Clicking Edit signature opens the modal with existing signature", async ({
            story,
        }) => {
            await story.locators.editSignatureButton.click();

            await expect(story.locators.signatureModal).toBeVisible();
            await story.locators.canvas.waitFor({ state: "visible" });
            await compareScreenshot(story, "modal-edit", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("keyboard-nav");
        });

        test("Tab moves focus to Add signature button", async ({ story }) => {
            await story.locators.focusStart.focus();
            await story.page.keyboard.press("Tab");

            await expect(story.locators.addSignatureButton).toBeFocused();
        });

        test("Enter key opens the signature modal", async ({ story }) => {
            await story.locators.focusStart.focus();
            await story.page.keyboard.press("Tab");
            await story.page.keyboard.press("Enter");

            await expect(story.locators.signatureModal).toBeVisible();
            await compareScreenshot(story, "keyboard-open-modal", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", {
                size: "mobile",
                orientation: "landscape",
            });
        });

        test("All variants retain mobile display on landscape orientation", async ({
            story,
        }) => {
            await compareScreenshot(story, "mobile-landscape-mount");

            await expect(story.locators.esigDefault).toMatchAriaSnapshot(`
                - button "Add signature"
            `);

            await expect(story.locators.esigWithSignature).toMatchAriaSnapshot(`
                - img "Signature preview"
                - button "Edit signature"
            `);
        });
    });
});
