import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "navbar";

    public readonly locators: {
        default: Locator;
        compressed: Locator;
        stretch: Locator;
        noMasthead: Locator;
        hideBranding: Locator;
        hideLinkIndicator: Locator;
        secondaryBrand: Locator;
        multipleActionButtons: Locator;
        singleActionButton: Locator;
        withAvatar: Locator;
        submenu: Locator;
        internal: {
            mobileMenuButton: Locator;
            servicesTrigger: Locator;
            servicesMobileTrigger: Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            default: page.getByTestId("navbar-default"),
            compressed: page.getByTestId("navbar-compressed"),
            stretch: page.getByTestId("navbar-stretch"),
            noMasthead: page.getByTestId("navbar-no-masthead"),
            hideBranding: page.getByTestId("navbar-hide-branding"),
            hideLinkIndicator: page.getByTestId("navbar-hide-link-indicator"),
            secondaryBrand: page.getByTestId("navbar-secondary-brand"),
            multipleActionButtons: page.getByTestId(
                "navbar-multiple-action-buttons"
            ),
            singleActionButton: page.getByTestId("navbar-single-action-button"),
            withAvatar: page.getByTestId("navbar-with-avatar"),
            submenu: page.getByTestId("navbar-submenu"),
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

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

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
            await story.init("single-action-button");
        });

        test("Single action button", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-avatar");
        });

        test("With avatar", async ({ story }) => {
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
                await story.init("with-avatar", { size: "mobile" });
            });

            test("With avatar", async ({ story }) => {
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
    });
});
