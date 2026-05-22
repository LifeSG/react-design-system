import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class MediaQueryPage extends AbstractStoryPage {
    protected readonly component = "theme";

    public readonly locators: {
        viewportDimensions: Locator;
        minWidthXsStatus: Locator;
        minWidthSmStatus: Locator;
        minWidthMdStatus: Locator;
        minWidthLgStatus: Locator;
        minWidthXxlStatus: Locator;
        maxWidthXxsStatus: Locator;
        maxWidthSmStatus: Locator;
        maxWidthMdStatus: Locator;
        maxWidthLgStatus: Locator;
        maxWidthXlStatus: Locator;
        orientationLandscapeStatus: Locator;
        orientationPortraitStatus: Locator;
        combinedMdLandscapeStatus: Locator;
        tokenDirectMinMdStatus: Locator;
        tokenDirectMaxSmStatus: Locator;
        layoutContainerSpecificity: Locator;
        layoutContainerFlexColumnSpecificity: Locator;
        layoutContainerGridSpecificity: Locator;
        layoutContentSpecificity: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            viewportDimensions: page.getByTestId("viewport-dimensions"),
            minWidthXsStatus: page.getByTestId("min-width-xs-status"),
            minWidthSmStatus: page.getByTestId("min-width-sm-status"),
            minWidthMdStatus: page.getByTestId("min-width-md-status"),
            minWidthLgStatus: page.getByTestId("min-width-lg-status"),
            minWidthXxlStatus: page.getByTestId("min-width-xxl-status"),
            maxWidthXxsStatus: page.getByTestId("max-width-xxs-status"),
            maxWidthSmStatus: page.getByTestId("max-width-sm-status"),
            maxWidthMdStatus: page.getByTestId("max-width-md-status"),
            maxWidthLgStatus: page.getByTestId("max-width-lg-status"),
            maxWidthXlStatus: page.getByTestId("max-width-xl-status"),
            orientationLandscapeStatus: page.getByTestId(
                "orientation-landscape-status"
            ),
            orientationPortraitStatus: page.getByTestId(
                "orientation-portrait-status"
            ),
            combinedMdLandscapeStatus: page.getByTestId(
                "combined-md-landscape-status"
            ),
            tokenDirectMinMdStatus: page.getByTestId(
                "token-direct-min-md-status"
            ),
            tokenDirectMaxSmStatus: page.getByTestId(
                "token-direct-max-sm-status"
            ),
            layoutContainerSpecificity: page.getByTestId(
                "layout-container-specificity"
            ),
            layoutContainerFlexColumnSpecificity: page.getByTestId(
                "layout-container-flex-column-specificity"
            ),
            layoutContainerGridSpecificity: page.getByTestId(
                "layout-container-grid-specificity"
            ),
            layoutContentSpecificity: page.getByTestId(
                "layout-content-specificity"
            ),
        };
    }
}

const test = base.extend<{ story: MediaQueryPage }>({
    story: async ({ page }, runStoryFixture) => {
        const story = new MediaQueryPage(page);
        await runStoryFixture(story);
    },
});

test.describe("Theme media query", () => {
    test.describe("Hooks", () => {
        test("mobile breakpoint queries", async ({ story }) => {
            await story.init("media-query", { size: "mobile" });

            await expect(story.locators.minWidthXsStatus).toHaveText("true");
            await expect(story.locators.minWidthSmStatus).toHaveText("false");
            await expect(story.locators.minWidthMdStatus).toHaveText("false");

            await expect(story.locators.maxWidthXxsStatus).toHaveText("false");
            await expect(story.locators.maxWidthSmStatus).toHaveText("true");
            await expect(story.locators.maxWidthMdStatus).toHaveText("true");
        });

        test("tablet breakpoint queries", async ({ story }) => {
            await story.init("media-query", { size: "tablet" });

            await expect(story.locators.minWidthSmStatus).toHaveText("true");
            await expect(story.locators.minWidthMdStatus).toHaveText("true");
            await expect(story.locators.minWidthLgStatus).toHaveText("false");

            await expect(story.locators.maxWidthSmStatus).toHaveText("false");
            await expect(story.locators.maxWidthLgStatus).toHaveText("true");
        });

        test("desktop breakpoint queries", async ({ story }) => {
            await story.init("media-query", { size: "desktop" });

            await expect(story.locators.minWidthMdStatus).toHaveText("true");
            await expect(story.locators.minWidthLgStatus).toHaveText("true");
            await expect(story.locators.minWidthXxlStatus).toHaveText("false");

            await expect(story.locators.maxWidthLgStatus).toHaveText("false");
            await expect(story.locators.maxWidthXlStatus).toHaveText("true");
        });

        test("landscape orientation detection", async ({ story }) => {
            await story.init("media-query", {
                size: "mobile",
                orientation: "landscape",
            });

            await expect(story.locators.orientationLandscapeStatus).toHaveText(
                "true"
            );
            await expect(story.locators.orientationPortraitStatus).toHaveText(
                "false"
            );
        });

        test("portrait orientation detection", async ({ story }) => {
            await story.init("media-query", {
                size: "mobile",
                orientation: "portrait",
            });

            await expect(story.locators.orientationPortraitStatus).toHaveText(
                "true"
            );
            await expect(story.locators.orientationLandscapeStatus).toHaveText(
                "false"
            );
        });

        test("combined queries (minWidth + orientation)", async ({ story }) => {
            await story.init("media-query", { size: "mobile" });
            await expect(story.locators.combinedMdLandscapeStatus).toHaveText(
                "false"
            );

            await story.page.setViewportSize({ width: 400, height: 300 });
            await expect(story.locators.combinedMdLandscapeStatus).toHaveText(
                "false"
            );

            await story.page.setViewportSize({ width: 1024, height: 600 });
            await expect(story.locators.combinedMdLandscapeStatus).toHaveText(
                "true"
            );
        });

        test("token resolution via convenience hooks", async ({ story }) => {
            await story.init("media-query", { size: "desktop" });

            await expect(story.locators.minWidthMdStatus).toHaveText("true");
            await expect(story.locators.tokenDirectMinMdStatus).toHaveText(
                "true"
            );
            await expect(story.locators.maxWidthSmStatus).toHaveText("false");
            await expect(story.locators.tokenDirectMaxSmStatus).toHaveText(
                "false"
            );
        });
    });

    test.describe("Specificity", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("media-query-specificity", { size: "sm" });
        });

        test("Enable override media query specificity", async ({ story }) => {
            await compareScreenshot(story, "layout-container-specificity", {
                locator: story.locators.layoutContainerSpecificity,
            });

            await compareScreenshot(
                story,
                "layout-container-flex-column-specificity",
                {
                    locator:
                        story.locators.layoutContainerFlexColumnSpecificity,
                }
            );

            await compareScreenshot(
                story,
                "layout-container-grid-specificity",
                {
                    locator: story.locators.layoutContainerGridSpecificity,
                }
            );

            await story.page.evaluate(() =>
                window.scrollTo(0, document.body.scrollHeight)
            );

            await compareScreenshot(story, "layout-content-specificity", {
                locator: story.locators.layoutContentSpecificity,
            });
        });
    });
});
