import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "masked-input";

    public readonly locators: {
        defaultFormMasked: Locator;
        disabledFormMasked: Locator;
        readonlyFormMasked: Locator;
        errorFormMasked: Locator;
        defaultFormMaskedBase: Locator;
        disabledFormMaskedBase: Locator;
        readonlyFormMaskedBase: Locator;
        errorFormMaskedBase: Locator;
        defaultFormUnmasked: Locator;
        disabledFormUnmasked: Locator;
        errorFormUnmasked: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            defaultFormMasked: page.getByTestId("form-masked-input-default"),
            disabledFormMasked: page.getByTestId("form-masked-input-disabled"),
            readonlyFormMasked: page.getByTestId("form-masked-input-readonly"),
            errorFormMasked: page.getByTestId("form-masked-input-error"),
            defaultFormMaskedBase: page.getByTestId(
                "form-masked-input-default-base-masked"
            ),
            disabledFormMaskedBase: page.getByTestId(
                "form-masked-input-disabled-base-masked"
            ),
            readonlyFormMaskedBase: page.getByTestId(
                "masked-input-readonly-button"
            ),
            errorFormMaskedBase: page.getByTestId(
                "form-masked-input-error-base-masked"
            ),
            defaultFormUnmasked: page.getByTestId(
                "form-masked-input-default-base-unmasked"
            ),
            disabledFormUnmasked: page.getByTestId(
                "form-masked-input-disabled-base-unmasked"
            ),
            errorFormUnmasked: page.getByTestId(
                "form-masked-input-error-base-unmasked"
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

test.describe("Masked Input", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus", async ({ story }) => {
            await test.step("Focus default masked input", async () => {
                await story.locators.defaultFormMaskedBase
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.defaultFormUnmasked,
                });
            });

            await test.step("Focus disabled masked input", async () => {
                await story.locators.disabledFormMaskedBase
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.disabledFormUnmasked,
                });
            });

            await test.step("Focus readonly masked input", async () => {
                await story.locators.readonlyFormMaskedBase.focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.readonlyFormMaskedBase,
                });
            });

            await test.step("Focus error masked input", async () => {
                await story.locators.errorFormMaskedBase
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.errorFormUnmasked,
                });
            });
        });

        test("Accessibility", async ({ story }) => {
            await test.step("Default state", async () => {
                await expect(story.locators.defaultFormMasked)
                    .toMatchAriaSnapshot(`
                - text: Default state This is the subtitle
                - textbox "Default state"
                `);
            });

            await test.step("Disabled state", async () => {
                await expect(story.locators.disabledFormMasked)
                    .toMatchAriaSnapshot(`
                - text: Disabled state This is the subtitle
                - textbox "Disabled state" [disabled=true]
                `);
            });
            await test.step("Readonly state", async () => {
                await expect(story.locators.readonlyFormMasked)
                    .toMatchAriaSnapshot(`
                - text: Readonly state This is the subtitle -
                - button "- Readonly state" [disabled=true]: "-"
                `);
            });
            await test.step("Error state", async () => {
                await expect(story.locators.errorFormMasked)
                    .toMatchAriaSnapshot(`
                - text: Error state This is the subtitle
                - textbox "Error state"
                - paragraph: Sample error message
                `);
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { size: "mobile" });
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants", { mode: "dark" });
        });

        test("Dark mode", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });

        test("Focus dark mode", async ({ story }) => {
            await test.step("Focus default masked input", async () => {
                await story.locators.defaultFormMaskedBase
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "default", {
                    locator: story.locators.defaultFormUnmasked,
                });
            });

            await test.step("Focus disabled masked input", async () => {
                await story.locators.disabledFormMaskedBase
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "disabled", {
                    locator: story.locators.disabledFormUnmasked,
                });
            });

            await test.step("Focus readonly masked input", async () => {
                await story.locators.readonlyFormMaskedBase.focus();
                await compareScreenshot(story, "readonly", {
                    locator: story.locators.readonlyFormMaskedBase,
                });
            });

            await test.step("Focus error masked input", async () => {
                await story.locators.errorFormMaskedBase
                    .getByTestId("input")
                    .focus();
                await compareScreenshot(story, "error", {
                    locator: story.locators.errorFormUnmasked,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled");
        });

        test("Prefilled", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("form-variants-prefilled", { mode: "dark" });
        });

        test("Prefilled dark mode", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-mask-icons");
        });

        test("Custom mask icons", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("standalone");
        });

        test("Standalone", async ({ story }) => {
            await compareScreenshot(story, "mount");
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
            await story.init("loading-and-error-display");
        });

        test("Loading and error display", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });
});
