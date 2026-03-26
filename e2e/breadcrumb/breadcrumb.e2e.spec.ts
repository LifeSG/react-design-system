import { expect, test } from "@playwright/test";

test(
    "Short breadcrumb",
    {
        annotation: {
            type: "description",
            description: "Breadcrumb with short content that does not overflow",
        },
    },
    async ({ page }) => {
        await page.goto(
            "/iframe.html?args=&id=e2e-breadcrumb--short-breadcrumb"
        );

        const field = page.getByTestId("e2e");
        await expect(field).toBeVisible();
        await expect(page).toHaveScreenshot("short--mount.png");
    }
);

test(
    "Long breadcrumb",
    {
        annotation: {
            type: "description",
            description:
                "Breadcrumb with long content. On desktop, wraps to the next line. On mobile, becomes scrollable",
        },
    },
    async ({ page, isMobile }) => {
        await page.goto(
            "/iframe.html?args=&id=e2e-breadcrumb--long-breadcrumb"
        );

        const field = page.getByTestId("e2e");
        await expect(field).toBeVisible();
        await expect(page).toHaveScreenshot("long--mount.png");

        if (isMobile) {
            await test.step("Scroll", async () => {
                await field.hover();
                await page.mouse.wheel(-1000, 0);
                await expect(page).toHaveScreenshot("long--scroll.png");
            });
        }
    }
);
