import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { modes } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "time-slot-bar";

    public readonly locators: {
        internal: {
            leftArrow: Locator;
            rightArrow: Locator;
        };
        timeSlotBar: Locator;
        withCustomColoursBar: Locator;
        slotClickResult: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                leftArrow: page.getByTestId("time-slot-bar-arrow-left"),
                rightArrow: page.getByTestId("time-slot-bar-arrow-right"),
            },
            timeSlotBar: page.getByTestId("time-slot-bar"),
            withCustomColoursBar: page.getByTestId(
                "time-slot-bar-with-custom-colours"
            ),
            slotClickResult: page.getByTestId("slot-click-result"),
        };
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("TimeSlotBar", () => {
    modes.forEach((mode) => {
        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("default", { mode });
            });

            test(`Default ${mode} mode`, async ({ story }) => {
                await compareScreenshot(story, "mount");

                await expect(story.locators.timeSlotBar).toMatchAriaSnapshot(`
                - paragraph: 8am
                - paragraph: 9am
                - paragraph: 10am
                - paragraph: 11am
                - paragraph: 12pm
                - paragraph: 1pm
                - paragraph: 2pm
                - paragraph: 3pm
                - paragraph: 4pm
                - paragraph: 5pm
                - grid "Time slot bar":
                  - row "8:00AM to 9:00AM, Unavailable 9:00AM to 10:00AM, Available, Available Available 10:00AM to 11:00AM, Unavailable 11:00AM to 12:00PM, Unavailable, Blocked Blocked 12:00PM to 6:00PM, Unavailable":
                    - gridcell "8:00AM to 9:00AM, Unavailable":
                      - button "8:00AM to 9:00AM, Unavailable" [disabled]
                    - gridcell "9:00AM to 10:00AM, Available, Available Available":
                      - button "9:00AM to 10:00AM, Available, Available"
                      - paragraph: Available
                    - gridcell "10:00AM to 11:00AM, Unavailable":
                      - button "10:00AM to 11:00AM, Unavailable" [disabled]
                    - gridcell "11:00AM to 12:00PM, Unavailable, Blocked Blocked":
                      - button "11:00AM to 12:00PM, Unavailable, Blocked" [disabled]
                      - paragraph: Blocked
                    - gridcell "12:00PM to 6:00PM, Unavailable":
                      - button "12:00PM to 6:00PM, Unavailable" [disabled]
            `);

                await story.page
                    .getByTestId("time-slot-bar-slot-a-timeslot")
                    .click();
                await expect(story.locators.slotClickResult).toContainText(
                    "slot: slot-a"
                );
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("minified", { mode });
            });

            test(`Minified ${mode} mode`, async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-initial-scroll-time");
        });

        test("With initial scroll time", async ({ story }) => {
            await expect(story.locators.internal.leftArrow).toBeVisible();

            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-initial-scroll-time");
        });

        test("Overflowing behavior", async ({ story }) => {
            const clickUntilEdge = async (arrow: Locator) => {
                for (let attempt = 0; attempt < 20; attempt += 1) {
                    if (!(await arrow.isVisible())) {
                        return;
                    }

                    await arrow.click();
                    await story.page.waitForTimeout(50);
                }

                throw new Error("Unable to reach timeslot bar edge");
            };

            await expect(story.locators.internal.leftArrow).toBeVisible();
            await expect(story.locators.internal.rightArrow).toBeVisible();

            await clickUntilEdge(story.locators.internal.leftArrow);
            await compareScreenshot(story, "state-with-right-arrow-only");

            await clickUntilEdge(story.locators.internal.rightArrow);
            await compareScreenshot(story, "state-with-left-arrow-only");
        });
    });

    test.describe("Custom Colours Props", () => {
        const styleTypes = ["Default", "Stripes"] as const;
        styleTypes.forEach((styleType) => {
            test.describe(`${styleType} Style Type`, () => {
                test.beforeEach(async ({ story }) => {
                    await story.init("with-custom-colours");
                });

                test("Primary BG", async ({ story }) => {
                    await compareScreenshot(story, "state", {
                        locator: story.page.getByTestId(
                            `time-slot-bar-bg-${styleType.toLowerCase()}`
                        ),
                    });
                });

                test("Secondary BG", async ({ story }) => {
                    await compareScreenshot(story, "state", {
                        locator: story.page.getByTestId(
                            `time-slot-bar-bg-${styleType.toLowerCase()}-with-secondary`
                        ),
                    });
                });
            });
        });
    });

    test.describe("Custom Colours Slots", () => {
        const styleTypes = ["Default", "Stripe"] as const;
        styleTypes.forEach((styleType) => {
            test.describe(`${styleType} Style Type`, () => {
                test.beforeEach(async ({ story }) => {
                    await story.init("with-custom-colours-slots");
                });

                test("Visual", async ({ story }) => {
                    await compareScreenshot(story, "state", {
                        locator: story.page.getByTestId(
                            `time-slot-bar-slot-${styleType.toLowerCase()}`
                        ),
                    });
                });

                test("Hover", async ({ story }) => {
                    const timeslotWithPrimaryBG = story.page.getByTestId(
                        `time-slot-bar-slot-${styleType.toLowerCase()}-slot-${styleType.toLowerCase()}-timeslot`
                    );
                    await timeslotWithPrimaryBG.hover();
                    await compareScreenshot(story, "primary-bg", {
                        locator: timeslotWithPrimaryBG,
                    });

                    const timeslotWithSecondaryBG = story.page.getByTestId(
                        `time-slot-bar-slot-${styleType.toLowerCase()}-slot-${styleType.toLowerCase()}-with-secondary-timeslot`
                    );
                    await timeslotWithSecondaryBG.hover();
                    await compareScreenshot(story, "secondary-bg", {
                        locator: timeslotWithSecondaryBG,
                    });
                });

                test("Label colour", async ({ story }) => {
                    await compareScreenshot(story, "state", {
                        locator: story.page.getByTestId(
                            `time-slot-bar-slot-${styleType.toLowerCase()}-slot-${styleType.toLowerCase()}-label-colour-timeslot`
                        ),
                    });
                });
            });
        });
    });
});
