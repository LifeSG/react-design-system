import { test as base } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { expect } from "@playwright/test";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "alert";
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Alert", () => {
    test("Type variants", async ({ story }) => {
        await story.init("type-variants");
        const alert = story.page.getByLabel("Success").first();
        await expect(alert).toBeVisible();
        await compareScreenshot(story, "type-variants");

        await expect(story.page.getByTestId("alert-success"))
            .toMatchAriaSnapshot(`
            - text: This is a success alert.
        `);
        await expect(story.page.getByTestId("alert-warning"))
            .toMatchAriaSnapshot(`
            - text: This is a warning alert.
        `);
        await expect(story.page.getByTestId("alert-error"))
            .toMatchAriaSnapshot(`
            - text: This is an error alert.
        `);
        await expect(story.page.getByTestId("alert-info")).toMatchAriaSnapshot(`
            - text: This is an info alert.
        `);
        await expect(story.page.getByTestId("alert-description"))
            .toMatchAriaSnapshot(`
            - text: This is a description alert.
        `);
    });

    test("Type variants with icon", async ({ story }) => {
        await story.init("with-icons");
        const alert = story.page.getByLabel("Success").first();
        await expect(alert).toBeVisible();
        await compareScreenshot(story, "with-icons");
    });

    test("Size", async ({ story }) => {
        await story.init("size-variants");
        await expect(story.page.getByTestId("alert-default")).toBeVisible();
        await compareScreenshot(story, "size-variants");

        await expect(story.page.getByTestId("alert-default"))
            .toMatchAriaSnapshot(`
            - text: Default size alert.
            - link "Learn more":
                - /url: "#"
                - text: Learn more
                - img
        `);
        await expect(story.page.getByTestId("alert-small"))
            .toMatchAriaSnapshot(`
            - text: Small size alert.
            - link "Learn more":
                - /url: "#"
                - text: Learn more
                - img
        `);
    });

    test("With action link", async ({ story }) => {
        await story.init("with-action-link");
        const actionLink = story.page.getByTestId("action-link");
        await expect(actionLink).toBeVisible();
        await compareScreenshot(story, "with-action-link");
    });

    test("With max collapsed height", async ({ story }) => {
        await story.init("max-collapsed-height");

        const showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });
        const showLessBtn = story.page.getByRole("button", {
            name: "Show less",
        });

        await test.step("On mount: shows 'Show more' button and content is collapsed", async () => {
            await expect(showMoreBtn).toBeVisible();
            await expect(showMoreBtn).toHaveAttribute("aria-expanded", "false");

            await compareScreenshot(story, "collapsed");
        });

        await test.step("Click 'Show more': expands content", async () => {
            await showMoreBtn.click();
            await expect(showLessBtn).toBeVisible();
            await expect(showLessBtn).toHaveAttribute("aria-expanded", "true");
            await compareScreenshot(story, "expanded");
        });

        await test.step("Click 'Show less': collapses content", async () => {
            await showLessBtn.click();
            await expect(showMoreBtn).toBeVisible();
            await expect(showMoreBtn).toHaveAttribute("aria-expanded", "false");
            await compareScreenshot(story, "collapsed");
        });
    });

    test("Keyboard navigation", async ({ story }) => {
        await story.init("keyboard-nav");

        const showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });

        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });

        await test.step("Tab focuses 'Show more' button", async () => {
            await story.page.getByTestId("before-alert").focus();
            await story.page.keyboard.press("Tab");
            await expect(showMoreBtn).toBeFocused();
        });

        await test.step("Enter key expands content", async () => {
            await story.page.keyboard.press("Enter");
            await expect(
                story.page.getByRole("button", { name: "Show less" })
            ).toBeVisible();
        });

        await test.step("Enter key collapses content", async () => {
            await story.page.keyboard.press("Enter");
            await expect(showMoreBtn).toBeVisible();
        });

        await test.step("Space key expands content", async () => {
            await story.page.keyboard.press("Space");
            await expect(
                story.page.getByRole("button", { name: "Show less" })
            ).toBeVisible();
        });

        await test.step("Tab moves focus to next element after alert", async () => {
            await story.page.getByRole("button", { name: "Show less" }).click();
            await showMoreBtn.focus();
            await story.page.keyboard.press("Tab");
            await expect(story.page.getByTestId("after-alert")).toBeFocused();
        });
    });
});
