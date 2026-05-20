import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "feedback-rating";

    public readonly locators: {
        feedbackRatingComponent: Locator;
        feedbackRating5Stars: Locator;
        submitButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            feedbackRatingComponent: page.getByTestId("feedback-rating"),
            feedbackRating5Stars: page.getByTestId("feedback-rating-star-5"),
            submitButton: page.getByTestId("button"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("FeedbackRating", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await test.step("Visual", async () => {
                await compareScreenshot(story, "mount");
            });

            await test.step("Select 5 stars rating", async () => {
                await story.locators.feedbackRating5Stars.click();
                await compareScreenshot(story, "select-rating");
            });

            await test.step("Hover on submit button", async () => {
                await story.locators.submitButton.hover();
                await compareScreenshot(story, "submit-button-hover");
            });
        });

        test("Accessibility", async ({ story }) => {
            await expect(story.locators.feedbackRatingComponent)
                .toMatchAriaSnapshot(`
            - group "Rate your experience":
                - heading "Rate your experience" [level=2]
                - slider "Rate your experience"
                - text: Minimum, 1 star. Maximum, 5 stars.
                - button "Submit"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await test.step("Visual", async () => {
                await compareScreenshot(story, "mount");
            });

            await test.step("Select 5 stars rating", async () => {
                await story.locators.feedbackRating5Stars.click();
                await compareScreenshot(story, "select-rating");
            });

            await test.step("Hover on submit button", async () => {
                await story.locators.submitButton.hover();
                await compareScreenshot(story, "submit-button-hover");
            });
        });
    });
});
