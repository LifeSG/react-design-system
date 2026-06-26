import { expect, test as base, Locator, Page } from "@playwright/test";
import {
    AbstractStoryPage,
    compareScreenshot,
    waitForAnimationEnd,
} from "../../utils";
import { THEME_TYPES } from "../../../../src/theme/types";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "navbar";

    public readonly locators: {
        internal: {
            mobileMenuButton: Locator;
            servicesTrigger: Locator;
            servicesMobileTrigger: Locator;
            closeButton: Locator;
            drawer: Locator;
            drawerBrand: Locator;
            brand: Locator;
            navLink: (index: number) => Locator;
            menuMobileItem: (index: number) => Locator;
            mobileNavLink: (index: number) => Locator;
            submenuLink: (name: string) => Locator;
            downloadButton: Locator;
        };
        focusStart: Locator;
        outsideButton: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                mobileMenuButton: page.getByTestId("button__mobile-menu"),
                servicesTrigger: page.getByRole("button", { name: "Services" }),
                servicesMobileTrigger: page.getByTestId(
                    "link__mobile-2-expand-collapse-button"
                ),
                closeButton: page.getByRole("button", {
                    name: "Close nav menu",
                }),
                drawer: page.getByTestId("drawer"),
                drawerBrand: page.getByTestId("drawer__brand"),
                brand: page.getByTestId("main__brand"),
                navLink: (index: number) => page.getByTestId(`link__${index}`),
                menuMobileItem: (index: number) =>
                    page.getByTestId(`menu__mobile-${index}`),
                mobileNavLink: (index: number) =>
                    page.getByTestId(`link__mobile-${index}`),
                submenuLink: (name: string) => page.getByRole("link", { name }),
                downloadButton: page.getByTestId("action-button__download"),
            },
            focusStart: page.getByTestId("focus-start"),
            outsideButton: page.getByTestId("outside-button"),
        };
    }

    async openMobileDrawer() {
        await this.locators.internal.mobileMenuButton.click();
        await waitForAnimationEnd(this.locators.internal.drawer);
        await this.page.waitForFunction(
            () =>
                document.querySelector(
                    'nav[aria-label="Mobile navigation menu"]'
                ) === document.activeElement
        );
    }

    async waitForMasthead(page: Page) {
        await page.waitForFunction(
            () =>
                !!customElements.get("sgds-masthead") &&
                !!document.querySelector("sgds-masthead")?.shadowRoot
                    ?.firstElementChild
        );
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Navbar", () => {
    for (const theme of THEME_TYPES) {
        test.describe("Default", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { theme: theme });
            });

            test(`${theme} theme`, async ({ story }) => {
                await story.waitForMasthead(story.page);
                await compareScreenshot(story, "mount");
            });
        });

        test.describe("Default (dark mode)", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", {
                    mode: "dark",
                    theme: theme,
                });
            });

            test(`${theme} theme`, async ({ story }) => {
                await story.waitForMasthead(story.page);
                await compareScreenshot(story, "mount");
            });
        });
    }

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("compress");
        });

        test("Compress", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("stretch", { size: "xxl" });
        });

        test("Stretch", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-masthead");
        });

        test("No masthead", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hide-branding");
        });

        test("Hide branding", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hide-link-indicator");
        });

        test("Hide link indicator", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("secondary-brand");
        });

        test("Secondary brand", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("multiple-action-buttons");
        });

        test("Multiple action buttons", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("action-button-only");
        });

        test("Action button only", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("link-only");
        });

        test("Link only", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-link");
        });

        test("Custom link", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-action-button");
        });

        test("Custom action button", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("submenu");
        });

        test("Submenu", async ({ story }) => {
            await story.locators.internal.servicesTrigger.click();
            await compareScreenshot(story, "open", {
                fullscreen: true,
            });
        });
    });

    test.describe("Mobile", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { size: "mobile" });
            });

            test("Collapsed", async ({ story }) => {
                await story.waitForMasthead(story.page);
                await compareScreenshot(story, "mount");
            });

            test("Drawer", async ({ story }) => {
                await story.openMobileDrawer();
                await compareScreenshot(story, "open", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { size: "mobile", mode: "dark" });
            });

            test("Collapsed (dark mode)", async ({ story }) => {
                await story.waitForMasthead(story.page);
                await compareScreenshot(story, "mount");
            });

            test("Drawer (dark mode)", async ({ story }) => {
                await story.openMobileDrawer();
                await compareScreenshot(story, "open", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("secondary-brand", { size: "mobile" });
            });

            test("Secondary brand", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("custom-action-button", { size: "mobile" });
            });

            test("Custom action button", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("submenu", { size: "mobile" });
            });

            test("Submenu", async ({ story }) => {
                await story.openMobileDrawer();
                await story.locators.internal.servicesMobileTrigger.click();
                await compareScreenshot(story, "open", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("submenu", {
                    size: "mobile",
                    mode: "dark",
                });
            });

            test("Submenu (dark mode)", async ({ story }) => {
                await story.openMobileDrawer();
                await story.locators.internal.servicesMobileTrigger.click();
                await compareScreenshot(story, "open", {
                    fullscreen: true,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("uncollapsible-action-buttons", {
                    size: "mobile",
                });
            });

            test("Uncollapsible action buttons", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe("Keyboard navigation", () => {
        test.describe("Mobile", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("keyboard-navigation", { size: "mobile" });
            });

            test("Focus is trapped in drawer when open", async ({ story }) => {
                await story.openMobileDrawer();

                const closeButton = story.locators.internal.closeButton;
                const outsideButton = story.locators.outsideButton;
                const focusStart = story.locators.focusStart;

                await test.step("Tab through drawer items and verify focus cycles back", async () => {
                    await closeButton.focus();
                    await expect(closeButton).toBeFocused();

                    for (let i = 0; i < 10; i++) {
                        await story.page.keyboard.press("Tab");
                        await expect(outsideButton).not.toBeFocused();
                        await expect(focusStart).not.toBeFocused();
                    }

                    await expect(
                        story.locators.internal.mobileNavLink(2)
                    ).toBeFocused();
                });

                await test.step("Shift+Tab backward and verify focus does not escape", async () => {
                    await closeButton.focus();
                    await expect(closeButton).toBeFocused();

                    for (let i = 0; i < 10; i++) {
                        await story.page.keyboard.press("Shift+Tab");
                        await expect(outsideButton).not.toBeFocused();
                        await expect(focusStart).not.toBeFocused();
                    }

                    await expect(
                        story.page.getByTestId("button__play-store")
                    ).toBeFocused();
                });

                await test.step("Escape closes the drawer", async () => {
                    await story.page.keyboard.press("Escape");

                    await expect(
                        story.page.getByRole("navigation", {
                            name: "Mobile navigation menu",
                        })
                    ).toBeHidden();
                });
            });

            test("Hamburger button shows focus highlight", async ({
                story,
            }) => {
                await test.step("Tab to hamburger button", async () => {
                    await story.locators.focusStart.focus();
                    await story.page.keyboard.press("Tab");
                    await story.page.keyboard.press("Tab");
                });

                await test.step("Verify hamburger button is focused", async () => {
                    await expect(
                        story.locators.internal.mobileMenuButton
                    ).toBeFocused();

                    await compareScreenshot(story, "focus-hamburger");
                });
            });
        });

        test.describe("Desktop", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("keyboard-navigation");
            });

            test("Tab through nav links and action button", async ({
                story,
            }) => {
                await test.step("Tab from focus-start to brand link", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(story.locators.focusStart).toBeFocused();

                    await story.page.keyboard.press("Tab");
                    await expect(story.locators.internal.brand).toBeFocused();
                });

                await test.step("Tab to first nav item (Home)", async () => {
                    await story.page.keyboard.press("Tab");

                    await expect(
                        story.locators.internal.navLink(1)
                    ).toBeFocused();
                });

                await test.step("Tab to second nav item (Services)", async () => {
                    await story.page.keyboard.press("Tab");

                    await expect(
                        story.locators.internal.navLink(2)
                    ).toBeFocused();
                });

                await test.step("Tab through submenu items (opened on focus)", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.locators.internal.submenuLink(
                            "Birth registration"
                        )
                    ).toBeFocused();

                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.locators.internal.submenuLink("Baby bonus")
                    ).toBeFocused();

                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.locators.internal.submenuLink("Preschool search")
                    ).toBeFocused();
                });

                await test.step("Tab to third nav item (LifeSG app)", async () => {
                    await story.page.keyboard.press("Tab");

                    await expect(
                        story.locators.internal.navLink(3)
                    ).toBeFocused();
                });

                await test.step("Tab to download action button", async () => {
                    await story.page.keyboard.press("Tab");

                    await expect(
                        story.locators.internal.downloadButton
                    ).toBeFocused();
                });
            });

            test("Can open and navigate submenu", async ({ story }) => {
                await test.step("Focus Services button to open submenu", async () => {
                    await story.locators.internal.navLink(2).focus();
                });

                await test.step("Tab into submenu items", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.locators.internal.submenuLink(
                            "Birth registration"
                        )
                    ).toBeFocused();

                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.locators.internal.submenuLink("Baby bonus")
                    ).toBeFocused();

                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.locators.internal.submenuLink("Preschool search")
                    ).toBeFocused();
                });

                await test.step("Tab past submenu goes to next nav item", async () => {
                    await story.page.keyboard.press("Tab");
                    await expect(
                        story.locators.internal.navLink(3)
                    ).toBeFocused();
                });
            });
        });
    });
});
