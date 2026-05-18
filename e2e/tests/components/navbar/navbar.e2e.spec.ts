import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { THEME_TYPES } from "../../../../src/theme/types";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "navbar";

    public readonly locators: {
        internal: {
            mobileMenuButton: Locator;
            servicesTrigger: Locator;
            servicesMobileTrigger: Locator;
        };
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
            },
        };
    }

    async openMobileDrawer() {
        await this.locators.internal.mobileMenuButton.click();
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
    // =======================================================================
    // DESKTOP
    // =======================================================================

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

    // =======================================================================
    // MOBILE
    // =======================================================================

    test.describe("Mobile", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { size: "mobile" });
            });

            test("Collapsed", async ({ story }) => {
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
});
