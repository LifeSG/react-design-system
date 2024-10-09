import { expect, test } from "@playwright/test";

test(
    "Collapsible",
    {
        annotation: {
            type: "description",
            description: "Accordion with collapsible sections",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-accordion--collapsible");

        const component = page.getByTestId("e2e");

        await test.step("Expanded state", async () => {
            await expect(component).toBeVisible();

            await expect(page).toHaveScreenshot("collapsible--expanded.png");
        });

        await test.step("Collapsed state", async () => {
            await page.getByRole("button", { name: "Collapse" }).click();

            await expect(page).toHaveScreenshot("collapsible--collapsed.png");
        });
    }
);

test(
    "Uncollapsible",
    {
        annotation: {
            type: "description",
            description: "Accordion with uncollapsible sections",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-accordion--uncollapsible");

        const component = page.getByTestId("e2e");

        await expect(component).toBeVisible();

        await expect(page).toHaveScreenshot("uncollapsible--mount.png");
    }
);
