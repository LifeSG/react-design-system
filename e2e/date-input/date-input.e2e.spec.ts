import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date("2024-02-01T12:00:00"));
});

test(
    "Date input with buttons",
    {
        annotation: {
            type: "description",
            description:
                "Default date input. Cancel and Done buttons are shown in the calendar dropdown. Confirmation is required to change the date selection.",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-dateinput--empty-input");

        const field = page.getByTestId("e2e");
        const calendar = page.getByTestId("calendar-dropdown");

        await test.step("View input field", async () => {
            await expect(field).toBeVisible();
            await expect(field.getByLabel("day")).toHaveValue("");
            await expect(field.getByLabel("month")).toHaveValue("");
            await expect(field.getByLabel("year")).toHaveValue("");

            await expect(calendar).not.toBeVisible();

            await expect(page).toHaveScreenshot("empty-input--mount.png");
        });

        await test.step("Focus input field", async () => {
            await field.click();

            await expect(calendar).toBeVisible();
            await expect(calendar.getByText("Feb")).toBeVisible();
            await expect(calendar.getByText("2024")).toBeVisible();

            await expect(page).toHaveScreenshot(
                "empty-input--calendar-open.png"
            );
        });

        await test.step("Hover on a calendar day", async () => {
            await calendar.getByText("15").hover();

            await expect(field.getByLabel("day")).toHaveValue("15");
            await expect(field.getByLabel("month")).toHaveValue("02");
            await expect(field.getByLabel("year")).toHaveValue("2024");

            await expect(page).toHaveScreenshot(
                "empty-input--calendar-hover.png"
            );
        });

        await test.step("Select date from calendar", async () => {
            await calendar.getByText("15").click();

            await expect(calendar).toBeVisible();

            await expect(page).toHaveScreenshot(
                "empty-input--calendar-select-date.png"
            );
        });

        await test.step("Confirm selection", async () => {
            await calendar.getByText("Done").click();

            await expect(calendar).not.toBeVisible();

            await expect(field.getByLabel("day")).toHaveValue("15");
            await expect(field.getByLabel("month")).toHaveValue("02");
            await expect(field.getByLabel("year")).toHaveValue("2024");

            await expect(page).toHaveScreenshot(
                "empty-input--calendar-closed.png"
            );
        });
    }
);

test(
    "Date input without buttons",
    {
        annotation: {
            type: "description",
            description:
                "Date input without action buttons. Cancel and Done buttons are not shown in the calendar dropdown.",
        },
    },
    async ({ page }) => {
        await page.goto(
            "/iframe.html?args=&id=e2e-dateinput--empty-input-without-button"
        );

        const field = page.getByTestId("e2e");
        const calendar = page.getByTestId("calendar-dropdown");

        await test.step("View input field", async () => {
            await expect(field).toBeVisible();
            await expect(field.getByLabel("day")).toHaveValue("");
            await expect(field.getByLabel("month")).toHaveValue("");
            await expect(field.getByLabel("year")).toHaveValue("");

            await expect(calendar).not.toBeVisible();
        });

        await test.step("Focus input field", async () => {
            await field.click();

            await expect(calendar).toBeVisible();
            await expect(calendar.getByText("Feb")).toBeVisible();
            await expect(calendar.getByText("2024")).toBeVisible();

            await expect(page).toHaveScreenshot(
                "empty-input-without-button--calendar-open.png"
            );
        });

        await test.step("Select date from calendar", async () => {
            await calendar.getByText("15").click();

            await expect(calendar).not.toBeVisible();

            await expect(field.getByLabel("day")).toHaveValue("15");
            await expect(field.getByLabel("month")).toHaveValue("02");
            await expect(field.getByLabel("year")).toHaveValue("2024");
        });
    }
);
