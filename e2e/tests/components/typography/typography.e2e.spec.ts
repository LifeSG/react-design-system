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
        clamps: Locator;
        clampOneLine: Locator;
        clampTwoLines: Locator;
        links: Locator;
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
            clamps: page.getByTestId("typography-clamps"),
            clampOneLine: page.getByTestId("typography-clamp-1"),
            clampTwoLines: page.getByTestId("typography-clamp-2"),
            links: page.locator("[data-testid^='typography-links']"),
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
            expect(await story.locators.lightWeights.count()).toBeGreaterThan(
                0
            );
            expect(await story.locators.regularWeights.count()).toBeGreaterThan(
                0
            );
            expect(
                await story.locators.semiboldWeights.count()
            ).toBeGreaterThan(0);
            expect(await story.locators.boldWeights.count()).toBeGreaterThan(0);

            await compareScreenshot(story, "mount");
        });
    });

    test("Paragraph style", async ({ story }) => {
        await story.init("paragraph");

        await test.step("Paragraph is visible", async () => {
            await expect(story.locators.paragraph).toBeVisible();

            await compareScreenshot(story, "mount");
        });
    });

    test("Text clamping styles", async ({ story }) => {
        await story.init("clamping");

        await test.step("Text clamping variants are visible", async () => {
            await expect(story.locators.clampOneLine).toBeVisible();
            await expect(story.locators.clampTwoLines).toBeVisible();

            await compareScreenshot(story, "mount");
        });
    });

    test("Link styles", async ({ story }) => {
        await story.init("links");

        await test.step("Link style variants are visible", async () => {
            await expect(story.locators.underlineLink).toBeVisible();
            await expect(story.locators.noUnderlineLink).toBeVisible();

            await compareScreenshot(story, "mount");
        });
    });
});
