import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "typography";

    public readonly locators: {
        lightWeights: Locator;
        regularWeights: Locator;
        semiboldWeights: Locator;
        boldWeights: Locator;
        paragraph: Locator;
        clampOneLine: Locator;
        clampTwoLines: Locator;
        underlineLink: Locator;
        noUnderlineLink: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            lightWeights: page.locator("[data-testid$='-weight-light']"),
            regularWeights: page.locator("[data-testid$='-weight-regular']"),
            semiboldWeights: page.locator("[data-testid$='-weight-semibold']"),
            boldWeights: page.locator("[data-testid$='-weight-bold']"),
            paragraph: page.getByTestId("typography-paragraph"),
            clampOneLine: page.getByTestId("typography-clamp-1"),
            clampTwoLines: page.getByTestId("typography-clamp-2"),
            underlineLink: page.getByTestId("typography-link-underline"),
            noUnderlineLink: page.getByTestId("typography-link-no-underline"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Typography", () => {
    test("Variants", async ({ story }) => {
        await story.init("variants");

        await test.step("Component mounts with all variants", async () => {
            await expect(story.locators.lightWeights).toHaveCount(12);
            await expect(story.locators.regularWeights).toHaveCount(12);
            await expect(story.locators.semiboldWeights).toHaveCount(12);
            await expect(story.locators.boldWeights).toHaveCount(12);

            await compareScreenshot(story, "mount");
        });
    });

    test("Styles", async ({ story }) => {
        await story.init("styles");

        await test.step("Component mounts with style variants", async () => {
            await expect(story.locators.paragraph).toBeVisible();
            await expect(story.locators.clampOneLine).toBeVisible();
            await expect(story.locators.clampTwoLines).toBeVisible();
            await expect(story.locators.underlineLink).toBeVisible();
            await expect(story.locators.noUnderlineLink).toBeVisible();

            await compareScreenshot(story, "mount");
        });
    });
});
