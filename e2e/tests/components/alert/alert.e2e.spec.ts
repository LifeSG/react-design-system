import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "alert";

    public readonly locators: {
        component: {
            showMoreBtn: Locator;
            showLessBtn: Locator;
            actionLink: Locator;
        };
        alertDefault: Locator;
        beforeAlert: Locator;
        afterAlert: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
                showMoreBtn: page.getByRole("button", { name: "Show more" }),
                showLessBtn: page.getByRole("button", { name: "Show less" }),
                actionLink: page.getByTestId("action-link"),
            },
            alertDefault: page.getByTestId("alert-default"),
            beforeAlert: page.getByTestId("before-alert"),
            afterAlert: page.getByTestId("after-alert"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Alert", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("type-variants");
        });

        test("Type variants", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.page.getByTestId("alert-success"))
                .toMatchAriaSnapshot(`
                - alert "Success": This is a success alert.
            `);
            await expect(story.page.getByTestId("alert-warning"))
                .toMatchAriaSnapshot(`
                - alert "Warning": This is a warning alert.
            `);
            await expect(story.page.getByTestId("alert-error"))
                .toMatchAriaSnapshot(`
                - alert "Error": This is an error alert.
            `);
            await expect(story.page.getByTestId("alert-info"))
                .toMatchAriaSnapshot(`
                - alert "Information": This is an info alert.
            `);
            await expect(story.page.getByTestId("alert-description"))
                .toMatchAriaSnapshot(`
                - alert "Description": This is a description alert.
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-icons");
        });

        test("Type variants with icon", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-icons", { mode: "dark" });
        });

        test("Type variants with icon (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("size-variants");
        });

        test("Size variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-action-link");
        });

        test("With action link", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.alertDefault).toMatchAriaSnapshot(`
                - text: This alert has an action link.
                - link "Learn more":
                    - /url: "#"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-action-link", { mode: "dark" });
        });

        test("With action link (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");

            await expect(story.locators.alertDefault).toMatchAriaSnapshot(`
                - text: This alert has an action link.
                - link "Learn more":
                    - /url: "#"
            `);
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("max-collapsed-height");
        });

        test("With max collapsed height", async ({ story }) => {
            await test.step("On mount: shows 'Show more' button and content is collapsed", async () => {
                await compareScreenshot(story, "collapsed");

                await expect(story.locators.alertDefault).toMatchAriaSnapshot(`
                    - alert "Information":
                      - button "Show more" [expanded=false]
                `);
            });

            await test.step("Click 'Show more': expands content", async () => {
                await story.locators.component.showMoreBtn.click();

                await compareScreenshot(story, "expanded");

                await expect(story.locators.alertDefault).toMatchAriaSnapshot(`
                    - alert "Information":
                      - button "Show less" [expanded=true]
                `);
            });

            await test.step("Click 'Show less': collapses content", async () => {
                await story.locators.component.showLessBtn.click();

                await expect(
                    story.locators.component.showMoreBtn
                ).toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("keyboard-nav");
        });

        test("Keyboard navigation", async ({ story }) => {
            await test.step("Tab focuses 'Show more' button", async () => {
                await story.locators.beforeAlert.focus();
                await story.page.keyboard.press("Tab");

                await expect(
                    story.locators.component.showMoreBtn
                ).toBeFocused();
            });

            await test.step("'Show more' button is toggled with 'Enter' key", async () => {
                await story.page.keyboard.press("Enter");

                await expect(
                    story.locators.component.showLessBtn
                ).toBeVisible();

                await story.page.keyboard.press("Enter");

                await expect(
                    story.locators.component.showMoreBtn
                ).toBeVisible();
            });

            await test.step("'Show more' button is toggled with 'Space' key", async () => {
                await story.page.keyboard.press("Space");

                await expect(
                    story.locators.component.showLessBtn
                ).toBeVisible();

                await story.page.keyboard.press("Space");

                await expect(
                    story.locators.component.showMoreBtn
                ).toBeVisible();
            });

            await test.step("Expand content", async () => {
                await story.page.keyboard.press("Space");

                await expect(
                    story.locators.component.showLessBtn
                ).toBeVisible();
            });

            await test.step("Tab focuses 'Learn more' link", async () => {
                await story.page.keyboard.press("Tab");

                await expect(story.locators.component.actionLink).toBeFocused();
            });

            await test.step("Tab moves focus to next element after alert", async () => {
                await story.page.keyboard.press("Tab");

                await expect(story.locators.afterAlert).toBeFocused();
            });
        });
    });
});
