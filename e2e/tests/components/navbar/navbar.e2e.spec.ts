import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "navbar";

    public readonly locators: {
        default: Locator;
        compressed: Locator;
        stretch: Locator;
        noMasthead: Locator;
        hideNavBranding: Locator;
        hideLinkIndicator: Locator;
        secondaryBrand: Locator;
        multipleActionButtons: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            default: page.getByTestId("navbar-default"),
            compressed: page.getByTestId("navbar-compressed"),
            stretch: page.getByTestId("navbar-stretch"),
            noMasthead: page.getByTestId("navbar-no-masthead"),
            hideNavBranding: page.getByTestId("navbar-hide-nav-branding"),
            hideLinkIndicator: page.getByTestId("navbar-hide-link-indicator"),
            secondaryBrand: page.getByTestId("navbar-secondary-brand"),
            multipleActionButtons: page.getByTestId(
                "navbar-multiple-action-buttons"
            ),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Navbar", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default desktop", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.default,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default desktop (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.default,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("compressed");
        });

        test("Compressed variant", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.compressed,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("stretch", { size: "xxl" });
        });

        test("Stretch layout", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.stretch,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("no-masthead");
        });

        test("No masthead", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.noMasthead,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hide-nav-branding");
        });

        test("Hide nav branding", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.hideNavBranding,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("hide-link-indicator");
        });

        test("Hide link indicator", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.hideLinkIndicator,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("secondary-brand");
        });

        test("Secondary brand", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.secondaryBrand,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("multiple-action-buttons");
        });

        test("Multiple action buttons", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.multipleActionButtons,
            });
        });
    });
});
