import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { viewport } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "e-signature";

    public readonly locators: {
        defaultFormEsig: Locator;
        disabledFormEsig: Locator;
        errorFormEsig: Locator;
        defaultEsig: Locator;
        disabledEsig: Locator;
        addSignatureButton: Locator;
        editSignatureButton: Locator;
        signaturePreview: Locator;
        signatureModal: Locator;
        modalCloseButton: Locator;
        clearButton: Locator;
        saveButton: Locator;
        canvas: Locator;
        focusStart: Locator;
        hasSignature: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            defaultFormEsig: page.getByTestId("form-esig-default"),
            disabledFormEsig: page.getByTestId("form-esig-disabled"),
            errorFormEsig: page.getByTestId("form-esig-error"),
            defaultEsig: page.getByTestId("esig-default"),
            disabledEsig: page.getByTestId("esig-disabled"),
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
            focusStart: page.getByTestId("focus-start"),
            hasSignature: page.getByTestId("has-signature"),
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
            await story.init("form-variants");
        });

        test("Form.ESignature variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.defaultFormEsig).toMatchAriaSnapshot(`
                - button "Add signature"
            `);

            await expect(story.locators.disabledFormEsig).toMatchAriaSnapshot(`
                - button "Add signature" [disabled]
            `);

            await expect(story.locators.errorFormEsig).toMatchAriaSnapshot(`
                - button "Add signature"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { size: "mobile" });
        });

        test("Form.ESignature variants (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("Form.ESignature variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled");
            await story.locators.signaturePreview.first().waitFor({
                state: "visible",
            });
        });

        test("Form.ESignature variants prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", { mode: "dark" });
            await story.locators.signaturePreview.first().waitFor({
                state: "visible",
            });
        });

        test("Form.ESignature variants prefilled (dark mode)", async ({
            story,
        }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants");
        });

        test("Standalone variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.defaultEsig).toMatchAriaSnapshot(`
                - button "Add signature"
            `);

            await expect(story.locators.disabledEsig).toMatchAriaSnapshot(`
                - button "Add signature" [disabled]
            `);
        });

        test("Focus states", async ({ story }) => {
            await story.locators.defaultEsig
                .getByRole("button", { name: "Add signature" })
                .focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultEsig,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone-variants", { mode: "dark" });
        });

        test("Focus states (dark mode)", async ({ story }) => {
            await story.locators.defaultEsig
                .getByRole("button", { name: "Add signature" })
                .focus();
            await compareScreenshot(story, "default", {
                locator: story.locators.defaultEsig,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("grid-layout");
        });

        test("Grid layout", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("description");
        });

        test("With description", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.page.getByTestId("esig-with-description"))
                .toMatchAriaSnapshot(`
                - button "Add signature"
                - paragraph: Please sign above to confirm your agreement.
            `);
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

        test("Drawing", async ({ story }) => {
            await test.step("Draw on canvas", async () => {
                await story.locators.addSignatureButton.click();
                await story.drawOnCanvas();

                await compareScreenshot(story, "after-drawing", {
                    fullscreen: true,
                });
            });

            await test.step("Save drawing", async () => {
                await story.locators.saveButton.click();

                await expect(story.locators.signatureModal).not.toBeVisible();
                await expect(story.locators.signaturePreview).toBeVisible();
                await compareScreenshot(story, "after-save");
            });

            await test.step("Clear drawing", async () => {
                await story.locators.editSignatureButton.click();
                await story.locators.clearButton.click();

                await compareScreenshot(story, "after-clear", {
                    fullscreen: true,
                });

                await story.locators.saveButton.click();
                await expect(story.locators.addSignatureButton).toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interactive", { size: "mobile" });
        });

        test("Modal (mobile)", async ({ story }) => {
            await story.locators.addSignatureButton.click();

            await expect(story.locators.signatureModal).toBeVisible();
            await compareScreenshot(story, "modal-open", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interactive", { size: "mobile" });
            await story.page.setViewportSize({
                width: viewport.mobile.height,
                height: viewport.mobile.width,
            });
        });

        test("Modal (mobile landscape)", async ({ story }) => {
            await story.locators.addSignatureButton.click();

            await expect(story.locators.signatureModal).toBeVisible();
            await compareScreenshot(story, "modal-open", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("interactive", { mode: "dark" });
        });

        test("Modal (dark mode)", async ({ story }) => {
            await story.locators.addSignatureButton.click();

            await expect(story.locators.signatureModal).toBeVisible();
            await compareScreenshot(story, "modal-open", { fullscreen: true });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("edit-existing");
        });

        test("Edit drawing", async ({ story }) => {
            await story.locators.editSignatureButton.click();

            await expect(story.locators.signatureModal).toBeVisible();
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
        });
    });
});
