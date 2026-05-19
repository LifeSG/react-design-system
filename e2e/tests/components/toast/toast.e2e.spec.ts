import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "toast";

    public readonly locators: {
        toast: Locator;
        toastSuccess: Locator;
        toastWarning: Locator;
        toastError: Locator;
        toastInfo: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            toast: page.getByRole("alert"),
            toastSuccess: page.getByTestId("toast-success"),
            toastWarning: page.getByTestId("toast-warning"),
            toastError: page.getByTestId("toast-error"),
            toastInfo: page.getByTestId("toast-info"),
        };
    }

    public getDismissButton(testId: string) {
        return this.page
            .getByTestId(testId)
            .getByRole("button", { name: "Close notification" });
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Toast", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("variants");
            await story.page.waitForTimeout(1000); // Wait for animations to complete
        });

        test("Variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.toastSuccess).toMatchAriaSnapshot(`
                - alert:
                  - text: success
                  - paragraph: Your booking has been updated successfully.
                  - button "Close notification"
            `);
            await expect(story.locators.toastWarning).toMatchAriaSnapshot(`
                - alert:
                  - text: warning
                  - paragraph: The template contains characters that cannot be updated.
                  - button "Close notification"
            `);
            await expect(story.locators.toastError).toMatchAriaSnapshot(`
                - alert:
                  - text: error
                  - paragraph: An internal system error has occurred.
                  - button "Close notification"
            `);
            await expect(story.locators.toastInfo).toMatchAriaSnapshot(`
                - alert:
                  - text: info
                  - paragraph: Your changes are saved as you continue editing.
                  - button "Close notification"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("fixed-positioning");
            await story.page.waitForTimeout(1000); // Wait for animations to complete
        });

        test("Fixed positioning", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.page.getByTestId("fixed-positioning-page"),
            });

            const pageHeight = await story.page.evaluate(
                () => document.body.scrollHeight
            );
            await story.page.mouse.wheel(0, pageHeight);

            await compareScreenshot(story, "scrolled", {
                locator: story.page.getByTestId("fixed-positioning-page"),
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-content");
            await story.page.waitForTimeout(1000); // Wait for animations to complete
        });

        test("Custom content", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.toastInfo).toMatchAriaSnapshot(`
                - alert:
                  - text: info
                  - heading "This is a custom title" [level=6]:
                    - text: ""
                    - strong: custom title
                  - paragraph:
                    - text: This is a custom description with a
                    - link "link":
                      - /url: "#"
                    - text: .
                  - button "Close notification"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-action-button");
            await story.page.waitForTimeout(1000); // Wait for animations to complete
        });

        test("With Action Button", async ({ story }) => {
            await compareScreenshot(story, "mount");
            await expect(story.locators.toastSuccess).toMatchAriaSnapshot(`
                - alert:
                  - text: success
                  - paragraph: Your booking has been updated successfully.
                  - button "Click me"
                  - button "Close notification"
            `);
            await expect(story.locators.toastWarning).toMatchAriaSnapshot(`
                - alert:
                  - text: warning
                  - paragraph: The template contains characters that cannot be updated.
                  - button "Click me"
                  - button "Close notification"
            `);
            await expect(story.locators.toastInfo).toMatchAriaSnapshot(`
                - alert:
                  - text: info
                  - paragraph: Your changes are saved as you continue editing.
                  - button "Click me"
                  - button "Close notification"
            `);
            await expect(story.locators.toastError).toMatchAriaSnapshot(`
                - alert:
                  - text: error
                  - paragraph: An internal system error has occurred.
                  - button "Click me"
                  - button "Close notification"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-sublabel");
            await story.page.waitForTimeout(1000); // Wait for animations to complete
        });

        test("With Sublabel", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.toastSuccess).toMatchAriaSnapshot(`
                - alert:
                  - text: success Booking updated
                  - paragraph: Your booking has been updated.
                  - button "Close notification"
            `);
            await expect(story.locators.toastWarning).toMatchAriaSnapshot(`
                - alert:
                  - text: warning Unknown characters
                  - paragraph: Please remove the unsupported characters and try again.
                  - button "Close notification"
            `);
            await expect(story.locators.toastInfo).toMatchAriaSnapshot(`
                - alert:
                  - text: info Updated automatically
                  - paragraph: The calendar will update when you finish editing.
                  - button "Close notification"
            `);
            await expect(story.locators.toastError).toMatchAriaSnapshot(`
                - alert:
                  - text: error Error occurred
                  - paragraph: An internal system error has occurred.
                  - button "Close notification"
            `);
        });
    });
});
