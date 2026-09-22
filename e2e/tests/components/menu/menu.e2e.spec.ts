import { expect, Locator, Page, test as base } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

type PlacementExpectation =
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "bottom-start"
    | "bottom-end";

const PLACEMENTS: PlacementExpectation[] = [
    "top",
    "bottom",
    "left",
    "right",
    "bottom-start",
    "bottom-end",
];

const placementButtonNames: Record<PlacementExpectation, string> = {
    top: "Top",
    bottom: "Bottom",
    left: "Left",
    right: "Right",
    "bottom-start": "Bottom start",
    "bottom-end": "Bottom end",
};

class StoryPage extends AbstractStoryPage {
    protected readonly component = "menu";

    public readonly locators: {
        trigger: Locator;
        content: Locator;
        linkFirst: Locator;
        linkSecond: Locator;
        linkThird: Locator;
        linkLong: Locator;
        triggerForPlacement: (position: PlacementExpectation) => Locator;
        contentForPlacement: (position: PlacementExpectation) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            trigger: page.getByRole("button", { name: "Open menu" }),
            content: page.getByTestId("menu-content"),
            linkFirst: page.getByRole("link", { name: "First link" }),
            linkSecond: page.getByRole("link", { name: "Second link" }),
            linkThird: page.getByRole("link", { name: "Third link" }),
            linkLong: page.getByRole("link", {
                name: "This is a long menu link title that should clamp across lines when the menu has limited width",
            }),
            triggerForPlacement: (position: PlacementExpectation) => {
                return page.getByRole("button", {
                    name: placementButtonNames[position],
                    exact: true,
                });
            },
            contentForPlacement: (position: PlacementExpectation) => {
                return page.getByRole("link", {
                    name: `${position} link`,
                });
            },
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Menu", () => {
    test.describe("Default", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Mount", async ({ story }) => {
            await story.locators.trigger.click();
            await expect(story.locators.content).toBeVisible();

            await compareScreenshot(story, "state", {
                fullscreen: true,
            });

            await expect(story.locators.content).toMatchAriaSnapshot(`
                - list:
                  - listitem:
                    - paragraph: Jane Doe
                    - paragraph: jane.doe@example.gov.sg
                - list "Actions":
                  - paragraph: Actions
                  - listitem: Settings
                  - listitem:
                    - link "First link":
                      - /url: "#first-link"
                  - listitem:
                    - link "Second link":
                      - /url: "#second-link"
                  - listitem:
                    - link "Third link":
                      - /url: "#third-link"
                - list "Resources":
                  - paragraph: Resources
                  - listitem:
                    - link "This is a long menu link title that should clamp across lines when the menu has limited width":
                      - /url: "#long-link"
            `);

            await story.page.mouse.click(200, 0);
            await expect(story.locators.content).not.toBeVisible();
        });

        test("Keyboard navigation", async ({ story }) => {
            await story.locators.trigger.click();
            await expect(story.locators.content).toBeVisible();

            await story.locators.linkFirst.focus();
            await expect(story.locators.linkFirst).toBeFocused();

            await story.page.keyboard.press("ArrowDown");
            await expect(story.locators.linkSecond).toBeFocused();

            await story.page.keyboard.press("ArrowDown");
            await expect(story.locators.linkThird).toBeFocused();

            await story.page.keyboard.press("ArrowDown");
            await expect(story.locators.linkLong).toBeFocused();

            await story.page.keyboard.press("ArrowDown");
            await expect(story.locators.linkFirst).toBeFocused();
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { size: "mobile" });
            });

            test("Mobile", async ({ story }) => {
                await story.locators.trigger.click();
                await expect(story.locators.content).toBeVisible();

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });

                await story.page.mouse.click(200, 0);
                await expect(story.locators.content).not.toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("overflow");
        });

        test("Overflow", async ({ story }) => {
            await compareScreenshot(story, "state");
        });
    });

    test.describe("Variants", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("variants");
            });

            test("Section and Item", async ({ story }) => {
                await expect(story.locators.content).toBeVisible();

                await compareScreenshot(story, "state", {
                    locator: story.locators.content,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("variants", { mode: "dark" });
            });

            test("Section and Item Dark Mode", async ({ story }) => {
                await expect(story.locators.content).toBeVisible();

                await compareScreenshot(story, "state", {
                    locator: story.locators.content,
                });
            });
        });
    });

    test.describe("Placements", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("placements");
        });

        for (const placement of PLACEMENTS) {
            test(`position=${placement}`, async ({ story }) => {
                const trigger = story.locators.triggerForPlacement(placement);
                const content = story.locators.contentForPlacement(placement);

                await trigger.click();
                await expect(content).toBeVisible();

                await compareScreenshot(story, "state", {
                    fullscreen: true,
                });
            });
        }
    });

    test.describe("Grid layout", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("grid-layout");
            });

            test("renders grid with scrollable overflow", async ({ story }) => {
                const content = story.page.getByTestId("menu-content");
                const section = story.page.getByTestId("menu-section");

                await expect(content).toBeVisible();
                await expect(
                    section.getByRole("link", { name: "Link 1" })
                ).toBeVisible();
                await expect(
                    section.getByRole("link", { name: "Link 8" })
                ).toBeVisible();

                await compareScreenshot(story, "state", {
                    locator: content,
                });
            });

            test("keyboard navigation moves through grid items", async ({
                story,
            }) => {
                const content = story.page.getByTestId("menu-content");
                const link1 = story.page.getByRole("link", { name: "Link 1" });
                const link2 = story.page.getByRole("link", { name: "Link 2" });
                const link8 = story.page.getByRole("link", { name: "Link 8" });

                await expect(content).toBeVisible();

                await link1.focus();
                await expect(link1).toBeFocused();

                await story.page.keyboard.press("ArrowDown");
                await expect(link2).toBeFocused();

                // wrap from last to first
                await link8.focus();
                await story.page.keyboard.press("ArrowDown");
                await expect(link1).toBeFocused();
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("grid-layout-with-label");
            });

            test("renders grid with label above items", async ({ story }) => {
                const content = story.page.getByTestId("menu-content");
                const label = story.page.getByText("Category");
                const link1 = story.page.getByRole("link", { name: "Link 1" });

                await expect(content).toBeVisible();
                await expect(label).toBeVisible();

                const labelBox = await label.boundingBox();
                const link1Box = await link1.boundingBox();

                if (!labelBox || !link1Box) {
                    throw new Error("Could not get bounding boxes");
                }

                // label should sit above all link rows
                expect(labelBox.y + labelBox.height).toBeLessThanOrEqual(
                    link1Box.y
                );

                await compareScreenshot(story, "state", {
                    locator: content,
                });
            });

            test("label does not occupy a grid column slot", async ({
                story,
            }) => {
                // With 3 columns and 2 rows the first 6 links fill the visible
                // area; link 7 should overflow into column 4, not row 1 col 1.
                const link1Box = await story.page
                    .getByRole("link", { name: "Link 1" })
                    .boundingBox();
                const link4Box = await story.page
                    .getByRole("link", { name: "Link 4" })
                    .boundingBox();
                const link7Box = await story.page
                    .getByRole("link", { name: "Link 7" })
                    .boundingBox();

                if (!link1Box || !link4Box || !link7Box) {
                    throw new Error("Could not get bounding boxes");
                }

                // link 1 and link 4 should be in different columns (same row)
                expect(link4Box.x).toBeGreaterThan(link1Box.x);

                // link 7 overflows to col 4 — its x should be greater than link 4
                expect(link7Box.x).toBeGreaterThan(link4Box.x);

                // link 7 must share the same top-row y as link 1 (row 1 of items)
                expect(link7Box.y).toBeCloseTo(link1Box.y, 0);
            });
        });
    });
});
