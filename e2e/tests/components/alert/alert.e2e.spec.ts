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
    // =========================================================================
    // TYPE VARIANTS
    // =========================================================================
    test("type-variants: renders all type variants", async ({ story }) => {
        await story.init("type-variants");
        const alert = story.page.getByLabel("Success").first();
        await expect(alert).toBeVisible();
        await compareScreenshot(story, "type-variants");
    });

    test("type-variants: accessibility aria-label for each type", async ({
        story,
    }) => {
        await story.init("type-variants");
        await expect(story.page.getByLabel("Success").first()).toBeVisible();
        await expect(story.page.getByLabel("Warning").first()).toBeVisible();
        await expect(story.page.getByLabel("Error").first()).toBeVisible();
        await expect(
            story.page.getByLabel("Information").first()
        ).toBeVisible();
        await expect(
            story.page.getByLabel("Description").first()
        ).toBeVisible();
    });

    // =========================================================================
    // WITH ICONS
    // =========================================================================
    test("with-icons: renders all type variants with icons", async ({
        story,
    }) => {
        await story.init("with-icons");
        const alert = story.page.getByLabel("Success").first();
        await expect(alert).toBeVisible();
        await compareScreenshot(story, "with-icons");
    });

    // =========================================================================
    // SIZE VARIANTS
    // =========================================================================
    test("size-variants: renders default and small size variants", async ({
        story,
    }) => {
        await story.init("size-variants");
        const alert = story.page.getByLabel("Information").first();
        await expect(alert).toBeVisible();
        await compareScreenshot(story, "size-variants");
    });

    // =========================================================================
    // WITH ACTION LINK
    // =========================================================================
    test("with-action-link: renders action link", async ({ story }) => {
        await story.init("with-action-link");
        const actionLink = story.page.getByTestId("action-link");
        await expect(actionLink).toBeVisible();
        await compareScreenshot(story, "with-action-link");
    });

    // =========================================================================
    // SHOW MORE / SHOW LESS
    // =========================================================================
    test("show-more: shows 'Show more' button when content exceeds maxCollapsedHeight", async ({
        story,
    }) => {
        await story.init("show-more");
        const showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await expect(showMoreBtn).toHaveAttribute("aria-expanded", "false");
        await compareScreenshot(story, "collapsed");
    });

    test("show-more: expands content when 'Show more' is clicked", async ({
        story,
    }) => {
        await story.init("show-more");
        const showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await showMoreBtn.click();
        const showLessBtn = story.page.getByRole("button", {
            name: "Show less",
        });
        await expect(showLessBtn).toBeVisible();
        await expect(showLessBtn).toHaveAttribute("aria-expanded", "true");
        await compareScreenshot(story, "expanded");
    });

    test("show-more: collapses content when 'Show less' is clicked", async ({
        story,
    }) => {
        await story.init("show-more");
        let showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await showMoreBtn.click();
        const showLessBtn = story.page.getByRole("button", {
            name: "Show less",
        });
        await showLessBtn.click();
        showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });
        await expect(showMoreBtn).toBeVisible();
        await expect(showMoreBtn).toHaveAttribute("aria-expanded", "false");
        await compareScreenshot(story, "collapsed");
    });

    test("show-more: button has correct aria-controls pointing to content", async ({
        story,
    }) => {
        await story.init("show-more");
        const showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        const controlsId = await showMoreBtn.getAttribute("aria-controls");
        expect(controlsId).toBeTruthy();
        await expect(
            story.page.locator(`button[aria-controls="${controlsId!}"]`).first()
        ).toBeVisible();
    });

    // =========================================================================
    // KEYBOARD NAVIGATION
    // =========================================================================
    test("keyboard-nav: can toggle show more/less via keyboard (Enter)", async ({
        story,
    }) => {
        await story.init("keyboard-nav");
        const showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await showMoreBtn.focus();
        await story.page.keyboard.press("Enter");
        await expect(
            story.page.getByRole("button", { name: "Show less" })
        ).toBeVisible();
        await story.page.keyboard.press("Enter");
        await expect(showMoreBtn).toBeVisible();
    });

    test("keyboard-nav: can toggle show more/less via keyboard (Space)", async ({
        story,
    }) => {
        await story.init("keyboard-nav");
        const showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await showMoreBtn.focus();
        await story.page.keyboard.press("Space");
        await expect(
            story.page.getByRole("button", { name: "Show less" })
        ).toBeVisible();
    });

    test("keyboard-nav: show more button appears before action link in tab order", async ({
        story,
    }) => {
        await story.init("keyboard-nav");
        const showMoreBtn = story.page.getByRole("button", {
            name: "Show more",
        });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        const beforeBtn = story.page.getByTestId("before-alert");
        await beforeBtn.focus();
        await story.page.keyboard.press("Tab");
        await expect(showMoreBtn).toBeFocused();
        await story.page.keyboard.press("Tab");
        await expect(story.page.getByTestId("after-alert")).toBeFocused();
    });
});
