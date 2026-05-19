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
            });
        });

        test.describe("", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("minified", { mode });
            });

            test(`Minified ${mode} mode`, async ({ story }) => {
                await compareScreenshot(story, "mount");

                await expect(story.locators.timeSlotBar).toMatchAriaSnapshot(`
                - paragraph: 8am
                - paragraph: 10am
                - paragraph: 12pm
                - paragraph: 2pm
                - paragraph: 4pm
                - paragraph: 6pm
                - paragraph: 8pm
                - grid "Time slot bar, 8:00AM to 9:00AM, Unavailable, 9:00AM to 10:00AM, Available, 10:00AM to 2:00PM, Unavailable, 2:00PM to 3:30PM, Available, 3:30PM to 10:00PM, Unavailable":
                  - row:
                    - gridcell
                    - gridcell
                    - gridcell
                    - gridcell
                    - gridcell
                `);
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
            const clickUntilEdge = async (getArrow: () => Locator) => {
                for (let attempt = 0; attempt < 20; attempt += 1) {
                    const arrow = getArrow();

                    if (!(await arrow.isVisible().catch(() => false))) {
                        return;
                    }

                    await arrow.click({ force: true }).catch(() => undefined);
                    await story.page.waitForTimeout(50);
                }

                throw new Error("Unable to reach timeslot bar edge");
            };

            await expect(story.locators.internal.leftArrow).toBeVisible();
            await expect(story.locators.internal.rightArrow).toBeVisible();

            await clickUntilEdge(() => story.locators.internal.leftArrow);
            await compareScreenshot(story, "state-with-right-arrow-only");

            await clickUntilEdge(() => story.locators.internal.rightArrow);
            await compareScreenshot(story, "state-with-left-arrow-only");
        });
    });

    test.describe("Custom Colours Props", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("with-custom-colours");
            });

            test("Visual", async ({ story }) => {
                await compareScreenshot(story, "state");
            });
        });
    });

    test.describe("Custom Colours Slots", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("with-custom-colours-slots");
            });

            test("Visual", async ({ story }) => {
                await compareScreenshot(story, "state");
            });
        });

        const styleTypes = ["Default", "Stripe"] as const;
        test.describe("Hover", () => {
            test.beforeEach(async ({ story }) => {
                await story.init("with-custom-colours-slots");
            });

            styleTypes.forEach((styleType) => {
                test(`${styleType} Style Type`, async ({ story }) => {
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
            });
        });
    });
});
