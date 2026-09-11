import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "fullscreen-image-carousel";

    public readonly locators: {
        modal: Locator;
        slideItem: Locator;
        prevBtn: Locator;
        forwardBtn: Locator;
        thumbnailItems: Locator;
        thumbnailContainer: Locator;
        counter: Locator;
        fileInfoName: Locator;
        customAction: (name: string) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            modal: page.getByTestId("image-carousel-modal"),
            slideItem: page.getByTestId("slide-item").first(),
            prevBtn: page.getByTestId("prev-btn"),
            forwardBtn: page.getByTestId("forward-btn"),
            thumbnailItems: page.getByTestId("thumbnail-item"),
            thumbnailContainer: page.getByTestId("thumbnail-container"),
            counter: page.getByTestId("carousel-counter"),
            fileInfoName: page.getByTestId("file-info-name"),
            /*
             * By accessible name rather than test id: ariaLabel is required on
             * a custom action precisely because the icon is aria-hidden, so
             * addressing the button the way a screen reader would also pins
             * that the label reaches the DOM.
             */
            customAction: (name: string) => page.getByRole("button", { name }),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

/*
 * story.waitForImageLoad() is NOT sufficient on its own for this component, and
 * the first mobile baseline generated for the custom-actions story is the proof:
 * a 13KB PNG with a blank slide and blank thumbnails, where the same story on
 * desktop is 480KB.
 *
 * StatefulImage renders <LoadingDots /> — not an <img> — until its preloader
 * resolves (src/fullscreen-image-carousel/stateful-image.tsx:78). So while the
 * photos are in flight there are NO img elements, waitForImageLoad's `every`
 * runs over an empty NodeList and returns true, and the wait passes instantly.
 * toHaveScreenshot's default animations: "disabled" then freezes the dot loader
 * to a frame that is effectively empty, and two consecutive frames match at
 * once — so the loading state is captured as a stable, reproducible baseline
 * rather than a flake a re-run would expose.
 *
 * Waiting for every slide and thumbnail to actually HAVE an img is therefore
 * the real load signal; waitForImageLoad afterwards adds the decode check.
 * toHaveCount retries, and the containers themselves render synchronously.
 */
const waitForCarouselImages = async (story: StoryPage) => {
    const slides = story.page.getByTestId("slide-item");
    const thumbnails = story.locators.thumbnailItems;

    await expect(slides.locator("img")).toHaveCount(await slides.count());
    await expect(thumbnails.locator("img")).toHaveCount(
        await thumbnails.count()
    );
    await story.waitForImageLoad();
};

test.describe("FullscreenImageCarousel", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
            await story.page.waitForLoadState("networkidle");
        });

        test("Default", async ({ story }) => {
            await test.step("Initial render", async () => {
                await compareScreenshot(story, "mount", {
                    fullscreen: true,
                });
            });

            await test.step("Hover on current thumbnail", async () => {
                await story.locators.thumbnailItems.nth(0).hover();
                await compareScreenshot(story, "thumbnail-current-hover", {
                    locator: story.locators.thumbnailContainer,
                });
            });

            await test.step("Hover on next thumbnail", async () => {
                await story.locators.thumbnailItems.nth(1).hover();
                await compareScreenshot(story, "thumbnail-next-hover", {
                    locator: story.locators.thumbnailContainer,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
            await story.page.waitForLoadState("networkidle");
        });

        test("Default (dark mode)", async ({ story }) => {
            await test.step("Initial render", async () => {
                await compareScreenshot(story, "mount", {
                    fullscreen: true,
                });
            });

            await test.step("Hover on current thumbnail", async () => {
                await story.locators.thumbnailItems.nth(0).hover();
                await compareScreenshot(story, "thumbnail-current-hover", {
                    locator: story.locators.thumbnailContainer,
                });
            });

            await test.step("Hover on next thumbnail", async () => {
                await story.locators.thumbnailItems.nth(1).hover();
                await compareScreenshot(story, "thumbnail-next-hover", {
                    locator: story.locators.thumbnailContainer,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { size: "mobile" });
            await story.page.waitForLoadState("networkidle");
        });

        test("Mobile", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error-state");
        });

        test("Placeholder (image error state)", async ({ story }) => {
            await test.step("Modal is visible", async () => {
                await expect(story.locators.modal).toBeVisible();
            });

            await test.step("Placeholder renders in slide", async () => {
                await expect(story.locators.slideItem).toBeVisible();

                await compareScreenshot(story, "mount", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error-state", { mode: "dark" });
        });

        test("Placeholder (dark mode)", async ({ story }) => {
            await expect(story.locators.slideItem).toBeVisible();

            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("configurable-carousel");
            await story.page.waitForLoadState("networkidle");
        });

        test("Configurable", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-content");
            await story.page.waitForLoadState("networkidle");
        });

        test("Custom content", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-file-data");
            await story.page.waitForLoadState("networkidle");
        });

        test("Carousel with file data", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-file-data", { mode: "dark" });
            await story.page.waitForLoadState("networkidle");
        });

        test("Carousel with file data (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("long-file-name");
            await story.page.waitForLoadState("networkidle");
        });

        test("Long file name", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    /*
     * The customActions-absent case is covered by every test above this one:
     * none of them pass customActions, and all of their baselines are unchanged
     * by the feature. There is deliberately no separate "absent" test here — it
     * would assert nothing that those baselines do not already assert.
     */
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-actions");
            await story.page.waitForLoadState("networkidle");
            await waitForCarouselImages(story);
        });

        test("Custom actions", async ({ story }) => {
            await test.step("Component-level actions on the first slide", async () => {
                await expect(
                    story.locators.customAction("Download image")
                ).toBeVisible();
                await expect(
                    story.locators.customAction("Share image")
                ).toBeVisible();

                await compareScreenshot(story, "mount", {
                    fullscreen: true,
                });
            });

            /*
             * The assertions carry as much of this step as the baseline does.
             * Three buttons here would mean the item's list was merged into the
             * component-level one; download and share still showing would mean
             * the item's list was ignored outright. Both are invisible on slide
             * 1, so this is the only place either regression surfaces.
             */
            await test.step("The item's own actions replace them on the second slide", async () => {
                await story.locators.forwardBtn.click();
                await expect(story.locators.fileInfoName).toHaveText(
                    "image-2.jpg"
                );
                await waitForCarouselImages(story);

                await expect(
                    story.locators.customAction("Print image")
                ).toBeVisible();
                await expect(
                    story.locators.customAction("Download image")
                ).toBeHidden();
                await expect(
                    story.locators.customAction("Share image")
                ).toBeHidden();

                await compareScreenshot(story, "item-override", {
                    fullscreen: true,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-actions", { mode: "dark" });
            await story.page.waitForLoadState("networkidle");
            await waitForCarouselImages(story);
        });

        test("Custom actions (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    /*
     * Mobile is where the top bar is tightest — the custom actions sit between
     * the file info and the magnifier — so it is the viewport where a second
     * action can crowd, wrap, or push the magnifier off the edge.
     */
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("custom-actions", { size: "mobile" });
            await story.page.waitForLoadState("networkidle");
            await waitForCarouselImages(story);
        });

        test("Custom actions (mobile)", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });
});
