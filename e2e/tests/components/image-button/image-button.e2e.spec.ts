import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "image-button";

    public readonly locators: {
        imageButtonDefault: Locator;
        imageButtonSelected: Locator;
        imageButtonError: Locator;
        imageButtonErrorSelected: Locator;
        imageButtonDisabled: Locator;
        imageButton: Locator;
        focusStart: Locator;
        clickCount: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            imageButtonDefault: page.getByTestId("image-button-default"),
            imageButtonSelected: page.getByTestId("image-button-selected"),
            imageButtonError: page.getByTestId("image-button-error"),
            imageButtonErrorSelected: page.getByTestId(
                "image-button-error-selected"
            ),
            imageButtonDisabled: page.getByTestId("image-button-disabled"),
            imageButton: page.getByTestId("image-button"),
            focusStart: page.getByTestId("focus-start"),
            clickCount: page.getByTestId("click-count"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("ImageButton", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.layout).toMatchAriaSnapshot(`
                - button "Default"
                - button "Selected"
                - button "Error"
                - button "Error Selected"
                - button "Disabled" [disabled]
            `);

            await story.locators.imageButtonDefault.hover();
            await compareScreenshot(story, "hover-default", {
                locator: story.locators.imageButtonDefault,
            });

            await story.locators.imageButtonSelected.hover();
            await compareScreenshot(story, "hover-selected", {
                locator: story.locators.imageButtonSelected,
            });

            await story.locators.imageButtonError.hover();
            await compareScreenshot(story, "hover-error", {
                locator: story.locators.imageButtonError,
            });

            await story.locators.imageButtonErrorSelected.hover();
            await compareScreenshot(story, "hover-error-selected", {
                locator: story.locators.imageButtonErrorSelected,
            });

            await story.locators.imageButtonDisabled.hover();
            await compareScreenshot(story, "hover-disabled", {
                locator: story.locators.imageButtonDisabled,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await story.locators.imageButtonDefault.hover();
            await compareScreenshot(story, "hover-default", {
                locator: story.locators.imageButtonDefault,
            });

            await story.locators.imageButtonSelected.hover();
            await compareScreenshot(story, "hover-selected", {
                locator: story.locators.imageButtonSelected,
            });

            await story.locators.imageButtonError.hover();
            await compareScreenshot(story, "hover-error", {
                locator: story.locators.imageButtonError,
            });

            await story.locators.imageButtonErrorSelected.hover();
            await compareScreenshot(story, "hover-error-selected", {
                locator: story.locators.imageButtonErrorSelected,
            });

            await story.locators.imageButtonDisabled.hover();
            await compareScreenshot(story, "hover-disabled", {
                locator: story.locators.imageButtonDisabled,
            });
        });
    });

    test.describe(() => {
        test.skip(
            !process.env.CI,
            "Does not work locally as NextJS loads the fallback image differently from rollup"
        );

        test.beforeEach(async ({ story }) => {
            await story.init("image-fallback");
        });

        test("Image fallback renders when imgSrc fails to load", async ({
            story,
        }) => {
            // wait for loading to complete and fallback to the placeholder
            await expect(story.page.locator("img")).toHaveAttribute(
                "src",
                /data:image\/png/
            );

            await compareScreenshot(story, "fallback");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("focusable-when-disabled");
        });

        test("Focusable when disabled", async ({ story }) => {
            await test.step("Button remains disabled for ATs", async () => {
                await expect(story.locators.imageButton).toMatchAriaSnapshot(`
                    - button "Label" [disabled]
                `);
            });

            await test.step("Button can receive focus", async () => {
                await story.locators.focusStart.focus();
                await story.page.keyboard.press("Tab");

                await expect(story.locators.imageButton).toBeFocused();
            });

            await test.step("Clicking the button does not fire the onClick handler", async () => {
                await expect(story.locators.clickCount).toHaveText("0");

                await story.locators.imageButton.click({ force: true });

                await expect(story.locators.clickCount).toHaveText("0");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("keyboard-activation");
        });

        test("Keyboard activation", async ({ story }) => {
            await test.step("Button can receive focus", async () => {
                await story.locators.focusStart.focus();
                await story.page.keyboard.press("Tab");

                await expect(story.locators.imageButton).toBeFocused();
            });

            await test.step("Enter key triggers onClick", async () => {
                await expect(story.locators.clickCount).toHaveText("0");

                await story.page.keyboard.press("Enter");

                await expect(story.locators.clickCount).toHaveText("1");
            });

            await test.step("Space key triggers onClick", async () => {
                await story.page.keyboard.press("Space");

                await expect(story.locators.clickCount).toHaveText("2");
            });
        });
    });
});
