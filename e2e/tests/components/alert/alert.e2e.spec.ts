import { expect, test } from "@playwright/test";

const ALERT_PAGE = "/components/alert";

// =============================================================================
// TYPE VARIANTS
// =============================================================================
test.describe(() => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ALERT_PAGE);
    });

    test("renders all type variants", async ({ page }) => {
        const section = page.getByTestId("story-type-variants");
        await expect(section).toBeVisible();
        await expect(section).toHaveScreenshot("alert-type-variants.png");
    });
});

// =============================================================================
// ICON VARIANTS
// =============================================================================
test.describe(() => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ALERT_PAGE);
    });

    test("renders all type variants with icons", async ({ page }) => {
        const section = page.getByTestId("story-with-icons");
        await expect(section).toBeVisible();
        await expect(section).toHaveScreenshot("alert-with-icons.png");
    });
});

// =============================================================================
// SIZE VARIANTS
// =============================================================================
test.describe(() => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ALERT_PAGE);
    });

    test("renders default and small size variants", async ({ page }) => {
        const section = page.getByTestId("story-size-variants");
        await expect(section).toBeVisible();
        await expect(section).toHaveScreenshot("alert-size-variants.png");
    });
});

// =============================================================================
// ACTION LINK
// =============================================================================
test.describe(() => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ALERT_PAGE);
    });

    test("renders action link", async ({ page }) => {
        const section = page.getByTestId("story-with-action-link");
        await expect(section.getByTestId("action-link")).toBeVisible();
        await expect(section).toHaveScreenshot("alert-with-action-link.png");
    });
});

// =============================================================================
// SHOW MORE / SHOW LESS
// =============================================================================
test.describe(() => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ALERT_PAGE);
    });

    test("shows 'Show more' button when content exceeds maxCollapsedHeight", async ({
        page,
    }) => {
        const section = page.getByTestId("story-show-more");
        const showMoreBtn = section.getByRole("button", { name: "Show more" });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await expect(showMoreBtn).toHaveAttribute("aria-expanded", "false");
        await expect(section).toHaveScreenshot("alert-collapsed.png");
    });

    test("expands content when 'Show more' is clicked", async ({ page }) => {
        const section = page.getByTestId("story-show-more");
        const showMoreBtn = section.getByRole("button", { name: "Show more" });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await showMoreBtn.click();
        const showLessBtn = section.getByRole("button", { name: "Show less" });
        await expect(showLessBtn).toBeVisible();
        await expect(showLessBtn).toHaveAttribute("aria-expanded", "true");
        await expect(section).toHaveScreenshot("alert-expanded.png");
    });

    test("collapses content when 'Show less' is clicked", async ({ page }) => {
        const section = page.getByTestId("story-show-more");
        let showMoreBtn = section.getByRole("button", { name: "Show more" });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await showMoreBtn.click();
        const showLessBtn = section.getByRole("button", { name: "Show less" });
        await showLessBtn.click();
        showMoreBtn = section.getByRole("button", { name: "Show more" });
        await expect(showMoreBtn).toBeVisible();
        await expect(showMoreBtn).toHaveAttribute("aria-expanded", "false");
        await expect(section).toHaveScreenshot("alert-collapsed.png");
    });
});

// =============================================================================
// KEYBOARD NAVIGATION
// =============================================================================
test.describe(() => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ALERT_PAGE);
    });

    test("can toggle show more/less via keyboard (Enter)", async ({ page }) => {
        const section = page.getByTestId("story-keyboard-nav");
        const showMoreBtn = section.getByRole("button", { name: "Show more" });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await showMoreBtn.focus();
        await page.keyboard.press("Enter");
        await expect(
            section.getByRole("button", { name: "Show less" })
        ).toBeVisible();
        await page.keyboard.press("Enter");
        await expect(showMoreBtn).toBeVisible();
    });

    test("can toggle show more/less via keyboard (Space)", async ({ page }) => {
        const section = page.getByTestId("story-keyboard-nav");
        const showMoreBtn = section.getByRole("button", { name: "Show more" });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        await showMoreBtn.focus();
        await page.keyboard.press("Space");
        await expect(
            section.getByRole("button", { name: "Show less" })
        ).toBeVisible();
    });

    test("show more button appears before action link in tab order", async ({
        page,
    }) => {
        const section = page.getByTestId("story-keyboard-nav");
        const showMoreBtn = section.getByRole("button", { name: "Show more" });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        const beforeBtn = page.getByTestId("before-alert");
        await beforeBtn.focus();
        await page.keyboard.press("Tab");
        await expect(showMoreBtn).toBeFocused();
        await page.keyboard.press("Tab");
        await expect(page.getByTestId("after-alert")).toBeFocused();
    });
});

// =============================================================================
// ACCESSIBILITY
// =============================================================================
test.describe(() => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ALERT_PAGE);
    });

    test("alert has correct aria-label for each type", async ({ page }) => {
        const section = page.getByTestId("story-type-variants");
        await expect(section.getByLabel("Success").first()).toBeVisible();
        await expect(section.getByLabel("Warning").first()).toBeVisible();
        await expect(section.getByLabel("Error").first()).toBeVisible();
        await expect(section.getByLabel("Information").first()).toBeVisible();
        await expect(section.getByLabel("Description").first()).toBeVisible();
    });

    test("show more button has correct aria-controls pointing to content", async ({
        page,
    }) => {
        const section = page.getByTestId("story-show-more");
        const showMoreBtn = section.getByRole("button", { name: "Show more" });
        await expect(showMoreBtn).toBeVisible({ timeout: 5000 });
        const controlsId = await showMoreBtn.getAttribute("aria-controls");
        expect(controlsId).toBeTruthy();
        await expect(
            page.locator(`button[aria-controls="${controlsId!}"]`).first()
        ).toBeVisible();
    });
});
