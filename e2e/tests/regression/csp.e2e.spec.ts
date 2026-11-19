import { expect, test } from "@playwright/test";
import { viewport } from "../consts";

type WindowWithViolations = Window & {
    __cspViolations?: string[];
};

test.describe("CSP", () => {
    test.describe(() => {
        test.skip(
            !process.env.CI,
            "Requires the production CSP header and actual hash from the built package"
        );

        test("CSP hash for inline script", async ({ page }) => {
            await test.step("Set up", async () => {
                await page.setViewportSize(viewport.lg);

                // block the JS bundles so the page never hydrates
                await page.route(/\/_next\/static\/.*\.js/, (route) =>
                    route.abort()
                );

                // use CSP that permits the inline script by its hash
                await page.route(
                    (url) => url.pathname === "/csp-hash",
                    (route) =>
                        route.continue({
                            headers: {
                                ...route.request().headers(),
                                "x-include-csp-hash": "true",
                            },
                        })
                );

                // listen for CSP violations
                await page.addInitScript(() => {
                    const w = window as WindowWithViolations;
                    w.__cspViolations = [];
                    document.addEventListener(
                        "securitypolicyviolation",
                        (e) => {
                            w.__cspViolations?.push(
                                `${e.violatedDirective}: ${e.blockedURI}`
                            );
                        }
                    );
                });
            });

            await test.step("CSP hash is applied correctly", async () => {
                await page.goto("/csp-hash");

                expect(
                    await page.evaluate(
                        () => (window as WindowWithViolations).__cspViolations
                    )
                ).toEqual([]);

                const body = page.locator("body");
                await expect(body).toContainClass("fds-breakpoint-lg");
                await expect(body).not.toContainClass("fds-breakpoint-md");
                await expect(body).not.toContainClass("fds-breakpoint-xl");
            });
        });

        test("CSP nonce for inline script", async ({ page }) => {
            await test.step("Set up", async () => {
                await page.setViewportSize(viewport.lg);

                // block the JS bundles so the page never hydrates
                await page.route(/\/_next\/static\/.*\.js/, (route) =>
                    route.abort()
                );

                // listen for CSP violations
                await page.addInitScript(() => {
                    const w = window as WindowWithViolations;
                    w.__cspViolations = [];
                    document.addEventListener(
                        "securitypolicyviolation",
                        (e) => {
                            w.__cspViolations?.push(
                                `${e.violatedDirective}: ${e.blockedURI}`
                            );
                        }
                    );
                });
            });

            await test.step("CSP nonce is applied correctly", async () => {
                // any story page will do, as nonce is configured by default in the layout
                await page.goto("/components/layout/col-div");

                expect(
                    await page.evaluate(
                        () => (window as WindowWithViolations).__cspViolations
                    )
                ).toEqual([]);

                const body = page.locator("body");
                await expect(body).toContainClass("fds-breakpoint-lg");
                await expect(body).not.toContainClass("fds-breakpoint-md");
                await expect(body).not.toContainClass("fds-breakpoint-xl");
            });
        });
    });
});
