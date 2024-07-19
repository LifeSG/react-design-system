import { expect, test } from "@playwright/test";

test(
    "Collapsible",
    {
        annotation: {
            type: "description",
            description: "Box container with collapsible section",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-boxcontainer--collapsible");

        const component = page.getByTestId("e2e");

        await test.step("Collapsed state", async () => {
            await expect(component).toBeVisible();

            await expect(page).toHaveScreenshot("collapsible--collapsed.png");
        });

        await test.step("Expanded state", async () => {
            await page.getByRole("button", { name: "Expand" }).click();

            await expect(page).toHaveScreenshot("collapsible--expanded.png");
        });
    }
);

test(
    "Uncollapsible",
    {
        annotation: {
            type: "description",
            description: "Box container with uncollapsible section",
        },
    },
    async ({ page }) => {
        await page.goto(
            "/iframe.html?args=&id=e2e-boxcontainer--uncollapsible"
        );

        const component = page.getByTestId("e2e");

        await expect(component).toBeVisible();

        await expect(page).toHaveScreenshot("uncollapsible--mount.png");
    }
);

test(
    "With icon",
    {
        annotation: {
            type: "description",
            description: "Box container with icon",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-boxcontainer--with-icon");

        const component = page.getByTestId("e2e");

        await expect(component).toHaveCount(3);

        await expect(page).toHaveScreenshot("with-icon--mount.png");
    }
);

test(
    "With action button",
    {
        annotation: {
            type: "description",
            description: "Box container with call to action button",
        },
    },
    async ({ page }) => {
        await page.goto(
            "/iframe.html?args=&id=e2e-boxcontainer--with-action-button"
        );

        const component = page.getByTestId("e2e");

        await expect(component).toHaveCount(3);

        await expect(page).toHaveScreenshot("with-action-button--mount.png");
    }
);

test(
    "With icon and action button",
    {
        annotation: {
            type: "description",
            description: "Box container with icon and call to action button",
        },
    },
    async ({ page }) => {
        await page.goto(
            "/iframe.html?args=&id=e2e-boxcontainer--with-icon-and-action-button"
        );

        const component = page.getByTestId("e2e");

        await expect(component).toHaveCount(2);

        await expect(page).toHaveScreenshot(
            "with-icon-and-action-button--mount.png"
        );
    }
);
