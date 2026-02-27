import { expect, test } from "@playwright/test";
import { viewport } from "../consts";

test.describe("Example", () => {
    test.describe("Default", () => {
        test.beforeEach(({ page }) => {
            page.setViewportSize(viewport.desktop);
        });

        test("Can render successfully", async ({ page }) => {
            await page.goto("/components/example/basic");

            await expect(page.getByText("Hello world")).toBeVisible();
        });
    });

    test.describe("Default (mobile)", () => {
        test.beforeEach(({ page }) => {
            page.setViewportSize(viewport.mobile);
        });

        test("Can render successfully", async ({ page }) => {
            await page.goto("/components/example/basic");

            await expect(page.getByText("Hello world")).toBeVisible();
        });
    });

    test.describe("Default (dark mode)", () => {
        test.beforeEach(({ page }) => {
            page.emulateMedia({ colorScheme: "dark" });
        });

        test("Can render successfully", async ({ page }) => {
            await page.goto("/components/example/basic");

            await expect(page.getByText("Hello world")).toBeVisible();
        });
    });
});
