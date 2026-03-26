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
            await compareScreenshot(story, "variants");

            await expect(story.layout).toMatchAriaSnapshot(`
                    - button "Default"
                    - button "Selected"
                    - button "Error"
                    - button "Error Selected"
                    - button "Disabled" [disabled]
                `);

            await story.locators.imageButtonDefault.hover();
            await compareScreenshot(story, "variants-hover-default", {
                locator: story.locators.imageButtonDefault,
            });

            await story.locators.imageButtonSelected.hover();
            await compareScreenshot(story, "variants-hover-selected", {
                locator: story.locators.imageButtonSelected,
            });

            await story.locators.imageButtonError.hover();
            await compareScreenshot(story, "variants-hover-error", {
                locator: story.locators.imageButtonError,
            });

            await story.locators.imageButtonErrorSelected.hover();
            await compareScreenshot(story, "variants-hover-error-selected", {
                locator: story.locators.imageButtonErrorSelected,
            });

            await story.locators.imageButtonDisabled.hover();
            await compareScreenshot(story, "variants-hover-disabled", {
                locator: story.locators.imageButtonDisabled,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "variants");

            await story.locators.imageButtonDefault.hover();
            await compareScreenshot(story, "variants-hover-default", {
                locator: story.locators.imageButtonDefault,
            });

            await story.locators.imageButtonSelected.hover();
            await compareScreenshot(story, "variants-hover-selected", {
                locator: story.locators.imageButtonSelected,
            });

            await story.locators.imageButtonError.hover();
            await compareScreenshot(story, "variants-hover-error", {
                locator: story.locators.imageButtonError,
            });

            await story.locators.imageButtonErrorSelected.hover();
            await compareScreenshot(story, "variants-hover-error-selected", {
                locator: story.locators.imageButtonErrorSelected,
            });

            await story.locators.imageButtonDisabled.hover();
            await compareScreenshot(story, "variants-hover-disabled", {
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

            await compareScreenshot(story, "image-fallback");
        });
    });
});
