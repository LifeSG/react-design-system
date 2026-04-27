import { test as base, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "breadcrumb";

    public readonly locators: {
        breadcrumbChevron: Locator;
        breadcrumbSlash: Locator;
        breadcrumbShort: Locator;
        breadcrumbMedium: Locator;
        breadcrumbLong: Locator;
        breadcrumbStandardPattern: Locator;
        breadcrumbMixedTypes: Locator;
        breadcrumbNoLinks: Locator;
        breadcrumbFadeLeft: Locator;
        breadcrumbFadeRight: Locator;
        breadcrumbFadeBoth: Locator;
        breadcrumbItems: Locator;
        breadcrumbLinks: Locator;
        breadcrumbCurrentPage: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            breadcrumbChevron: page.getByTestId("breadcrumb-chevron"),
            breadcrumbSlash: page.getByTestId("breadcrumb-slash"),
            breadcrumbShort: page.getByTestId("breadcrumb-short"),
            breadcrumbMedium: page.getByTestId("breadcrumb-medium"),
            breadcrumbLong: page.getByTestId("breadcrumb-long"),
            breadcrumbStandardPattern: page.getByTestId(
                "breadcrumb-standard-pattern"
            ),
            breadcrumbMixedTypes: page.getByTestId("breadcrumb-mixed-types"),
            breadcrumbNoLinks: page.getByTestId("breadcrumb-no-links"),
            breadcrumbFadeLeft: page.getByTestId("breadcrumb-fade-left"),
            breadcrumbFadeRight: page.getByTestId("breadcrumb-fade-right"),
            breadcrumbFadeBoth: page.getByTestId("breadcrumb-fade-both"),
            breadcrumbItems: page.locator("li"),
            breadcrumbLinks: page.getByRole("link"),
            breadcrumbCurrentPage: page.locator("[aria-current='page']"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Breadcrumb", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("separator-styles");
        });

        test("All separator styles", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("multiple-lengths");
        });

        test("Multiple breadcrumb lengths", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("link-vs-non-link");
        });

        test("Link vs non-link items display", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("fade-gradients");
            await story.page.setViewportSize({ width: 375, height: 812 });
        });

        test("Fade gradients on overflow", async ({ story }) => {
            // Wait for breadcrumbs to render and auto-scroll
            await story.page.waitForTimeout(200);

            // Set specific scroll positions to show different fade effects
            await story.page.evaluate(() => {
                // Fade Left: scroll to middle to show left fade
                const fadeLeft = document.querySelector(
                    '[data-testid="breadcrumb-fade-left"] ul'
                );
                if (fadeLeft && fadeLeft.scrollWidth > fadeLeft.clientWidth) {
                    fadeLeft.scrollLeft =
                        (fadeLeft.scrollWidth - fadeLeft.clientWidth) / 2;
                }

                // Fade Right: scroll to start to show right fade
                const fadeRight = document.querySelector(
                    '[data-testid="breadcrumb-fade-right"] ul'
                );
                if (fadeRight) {
                    fadeRight.scrollLeft = 0;
                }

                // Fade Both: scroll to middle to show both fades
                const fadeBoth = document.querySelector(
                    '[data-testid="breadcrumb-fade-both"] ul'
                );
                if (fadeBoth && fadeBoth.scrollWidth > fadeBoth.clientWidth) {
                    fadeBoth.scrollLeft =
                        (fadeBoth.scrollWidth - fadeBoth.clientWidth) / 2;
                }
            });

            // Wait for fade calculations to complete after scrolling
            await story.page.waitForTimeout(100);

            await compareScreenshot(story, "mount");
        });
    });
});
