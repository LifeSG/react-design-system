import { expect, test } from "@playwright/test";

test(
    "Without icon",
    {
        annotation: {
            type: "description",
            description: "Alert type variants (without icon)",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-alert--without-icon");

        await expect(page.getByTestId("e2e")).toHaveCount(5);

        await expect(page).toHaveScreenshot("without-icon--mount.png");
    }
);

test(
    "Without icon (small)",
    {
        annotation: {
            type: "description",
            description: "Alert type variants (small, without icon)",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-alert--without-icon-small");

        await expect(page.getByTestId("e2e")).toHaveCount(5);

        await expect(page).toHaveScreenshot("without-icon-small--mount.png");
    }
);

test(
    "With icon",
    {
        annotation: {
            type: "description",
            description: "Alert type variants (with icon)",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-alert--with-icon");

        await expect(page.getByTestId("e2e")).toHaveCount(5);

        await expect(page).toHaveScreenshot("with-icon--mount.png");
    }
);

test(
    "With icon (small)",
    {
        annotation: {
            type: "description",
            description: "Alert type variants (small, with icon)",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-alert--with-icon-small");

        await expect(page.getByTestId("e2e")).toHaveCount(5);

        await expect(page).toHaveScreenshot("with-icon-small--mount.png");
    }
);

test(
    "With link",
    {
        annotation: {
            type: "description",
            description: "Alert with link",
        },
    },
    async ({ page }) => {
        await page.goto("/iframe.html?args=&id=e2e-alert--with-link");

        await expect(page.getByTestId("e2e")).toBeVisible();
        await expect(page.getByTestId("e2e-small")).toBeVisible();

        await expect(page).toHaveScreenshot("with-link--mount.png");
    }
);

test(
    "With max collapsed height",
    {
        annotation: {
            type: "description",
            description: "Collapsible alert",
        },
    },
    async ({ page }) => {
        await page.goto(
            "/iframe.html?args=&id=e2e-alert--with-max-collapsed-height"
        );

        const component = page.getByTestId("e2e");
        const componentSmall = page.getByTestId("e2e-small");

        await test.step("Collapsed state", async () => {
            await expect(component).toBeVisible();
            await expect(componentSmall).toBeVisible();

            await expect(page).toHaveScreenshot(
                "with-max-collapsed-height--collapsed.png"
            );
        });

        await test.step("Expanded state", async () => {
            await component.getByRole("button", { name: "Show more" }).click();
            await componentSmall
                .getByRole("button", { name: "Show more" })
                .click();

            await expect(page).toHaveScreenshot(
                "with-max-collapsed-height--expanded.png"
            );
        });
    }
);
