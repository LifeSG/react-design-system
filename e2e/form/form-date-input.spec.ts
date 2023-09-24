import { expect, test } from "@playwright/test";
import { MockDate } from "../utils";

test.beforeEach(async ({ page }) => {
    await MockDate.mock(page, new Date("2024-02-01"));
});

test("default input", async ({ page }) => {
    await page.goto(
        "/iframe.html?args=&id=form-dateinput-e2e--empty-input&viewMode=story"
    );

    const field = page.getByTestId("e2e");

    await test.step("View input field", async () => {
        await expect(field).toBeVisible();
        await expect(field.getByLabel("day")).toHaveValue("");
        await expect(field.getByLabel("month")).toHaveValue("");
        await expect(field.getByLabel("year")).toHaveValue("");
        await expect(page).toHaveScreenshot("default-mount.png");
    });

    await test.step("Focus input field", async () => {
        await field.click();
        await expect(field.getByText("Feb")).toBeVisible();
        await expect(field.getByText("2024")).toBeVisible();
        await expect(page).toHaveScreenshot("default-focused.png");
    });

    await test.step("Hover on a calendar day", async () => {
        await field.getByText("15").hover();
        await expect(field.getByLabel("day")).toHaveValue("15");
        await expect(field.getByLabel("month")).toHaveValue("02");
        await expect(field.getByLabel("year")).toHaveValue("2024");
        await expect(page).toHaveScreenshot("default-calendar-hover.png");
    });

    await test.step("Select calendar day", async () => {
        await page.getByText("15").click();
        await page.getByText("Done").click();
        await expect(page).toHaveScreenshot("default-calendar-select.png");
    });
});

test("prefilled input", async ({ page }) => {
    await page.goto(
        "/iframe.html?args=&id=form-dateinput-e2e--prefilled-input&viewMode=story"
    );

    const field = page.getByTestId("e2e");

    await test.step("View input field", async () => {
        await expect(field).toBeVisible();
        await expect(field.getByLabel("day")).toHaveValue("01");
        await expect(field.getByLabel("month")).toHaveValue("12");
        await expect(field.getByLabel("year")).toHaveValue("2023");
        await expect(page).toHaveScreenshot("prefilled-mount.png");
    });

    await test.step("Focus input field", async () => {
        await field.click();
        await expect(field.getByText("Dec")).toBeVisible();
        await expect(field.getByText("2023")).toBeVisible();
        await expect(page).toHaveScreenshot("prefilled-focused.png");
    });
});

test("clear input", async ({ page }) => {
    await page.goto(
        "/iframe.html?args=&id=form-dateinput-e2e--prefilled-input&viewMode=story"
    );

    const field = page.getByTestId("e2e");

    await test.step("View input field", async () => {
        await expect(field).toBeVisible();
    });

    await test.step("Focus year input", async () => {
        await field.getByLabel("year").click();
        await expect(field.getByLabel("year")).toBeFocused();
    });

    await test.step("Clear year input with backspace", async () => {
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await expect(field.getByLabel("year")).toHaveValue("");
        await expect(field.getByLabel("month")).toBeFocused();
    });

    await test.step("Clear month input with backspace", async () => {
        await page.keyboard.press("Backspace");
        await expect(field.getByLabel("month")).toHaveValue("");
        await expect(field.getByLabel("day")).toBeFocused();
    });

    await test.step("Clear day input with backspace", async () => {
        await page.keyboard.press("Backspace");
        await expect(field.getByLabel("day")).toHaveValue("");
    });

    await test.step("Confirm input", async () => {
        await field.getByText("Done").click();
        await expect(field.getByLabel("day")).toHaveValue("");
        await expect(field.getByLabel("month")).toHaveValue("");
        await expect(field.getByLabel("year")).toHaveValue("");
        await expect(page).toHaveScreenshot("clear-input.png");
    });
});
