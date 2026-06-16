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
});
