import { test, expect } from "@playwright/test";

test.describe("Accessibility smoke", () => {
    test("file-upload exposes expected button and progress announcement", async ({
        page,
    }) => {
        await page.goto("/components/file-upload/a11y");

        await expect(
            page.getByRole("button", { name: "Upload files" })
        ).toHaveAccessibleName("Upload files");
        await expect(page.locator('[aria-live="polite"]')).toContainText(
            "Starting upload of supporting-document.pdf"
        );
    });

    test("predictive-text-input exposes accessible name and description", async ({
        page,
    }) => {
        await page.goto("/components/predictive-text-input/a11y");

        const combobox = page.getByRole("combobox", {
            name: "Search for options",
        });
        await expect(combobox).toHaveAccessibleName("Search for options");
        await expect(combobox).toHaveAccessibleDescription(
            "Type in 3 or more characters for suggested results."
        );

        await combobox.fill("alp");

        await expect(page.locator('[aria-live="polite"]')).toContainText(
            "1 result found. Press down arrow to scroll through the list."
        );
    });

    test("timeline exposes heading and hidden status text", async ({
        page,
    }) => {
        await page.goto("/components/timeline/a11y");

        await expect(
            page.getByRole("heading", {
                level: 2,
                name: "Application progress",
            })
        ).toBeVisible();
        await expect(page.getByRole("list")).toBeVisible();
        await expect(page.getByRole("listitem").first()).toContainText(
            "Step number 1"
        );
    });

    test("error-display inactivity announces remaining time", async ({
        page,
    }) => {
        await page.goto("/components/error-display/a11y");

        await expect(page.getByRole("heading", { level: 2 })).toBeVisible();
        await expect(page.locator('[aria-live="polite"]')).toContainText(
            "you'll be logged out in 1 minutes 5 seconds"
        );
    });

    test("masked-input readonly button has accessible name", async ({
        page,
    }) => {
        await page.goto("/components/masked-input/a11y");

        const maskedButton = page.getByTestId("masked-input-readonly-button");
        await expect(maskedButton).toHaveAccessibleName(
            "Starting with S1 and ending with 67D"
        );

        await maskedButton.click();

        await expect(maskedButton).toHaveAccessibleName("S1234567D");
    });
});
