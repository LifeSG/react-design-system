import { expect, test } from "@playwright/test";

test("default input", async ({ page }) => {
    await page.goto(
        "/iframe.html?args=&id=form-nestedselect-e2e--default-story&viewMode=story"
    );

    const field = page.getByTestId("e2e");
    const dropdown = page.getByTestId("dropdown-container");

    await test.step("View input field", async () => {
        await expect(field).toBeVisible();
        await expect(field.getByText("Select")).toBeVisible();
        await expect(dropdown).not.toBeVisible();
        await expect(page).toHaveScreenshot("default-mount.png");
    });

    await test.step("Focus input field", async () => {
        await field.click();
        await expect(dropdown).toBeVisible();
        await expect(dropdown.getByText("Category 1")).toBeVisible();
        await expect(dropdown.getByText("Sub Category A")).toBeVisible();
        await expect(dropdown.getByText("Option 1")).toBeVisible();
        await expect(page).toHaveScreenshot("default-dropdown.png");
    });

    await test.step("Hover on option", async () => {
        await dropdown.getByText("Option 1").hover();
        await expect(page).toHaveScreenshot("default-option-hover.png");
    });

    await test.step("Select option", async () => {
        await dropdown.getByText("Option 1").click();
        await expect(dropdown).not.toBeVisible();
        await expect(page).toHaveScreenshot("default-option-select.png");
    });
});

test("prefilled input", async ({ page }) => {
    await page.goto(
        "/iframe.html?args=&id=form-nestedselect-e2e--prefilled&viewMode=story"
    );

    const field = page.getByTestId("e2e");
    const dropdown = page.getByTestId("dropdown-container");

    await test.step("View input field", async () => {
        await expect(field).toBeVisible();
        await expect(field.getByText("Option 1")).toBeVisible();
        await expect(dropdown).not.toBeVisible();
        await expect(page).toHaveScreenshot("prefilled-mount.png");
    });

    await test.step("Open dropdown", async () => {
        await field.click();
        await expect(dropdown).toBeVisible();
        await expect(dropdown.getByText("Category 1")).toBeVisible();
        await expect(dropdown.getByText("Sub Category A")).toBeVisible();
        await expect(dropdown.getByText("Option 1")).toBeVisible();
        await expect(page).toHaveScreenshot("prefilled-dropdown.png");
    });

    await test.step("Expand option", async () => {
        await dropdown.getByText("Hive").click();
        await expect(dropdown.getByText("Level 8")).toBeVisible();
        await expect(page).toHaveScreenshot("prefilled-option-expand.png");
    });

    await test.step("Select option", async () => {
        await dropdown.getByText("Level 8").click();
        await expect(dropdown).not.toBeVisible();
        await expect(page).toHaveScreenshot("prefilled-option-select.png");
    });
});
