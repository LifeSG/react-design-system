import { test as base, expect, Locator, Page } from "@playwright/test";
import { fixedTimestamp } from "../../consts";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "otp-input";

    public readonly locators: {
        otpDefault: Locator;
        otpOnly: Locator;
        otpWithError: Locator;
        otpWithPrefix: Locator;
        otp4Digit: Locator;
        otp6Digit: Locator;
        otpCooldown: Locator;
        inputCell: (wrapper: Locator, index: number) => Locator;
        resendButton: (wrapper: Locator) => Locator;
        prefix: (wrapper: Locator) => Locator;
        errorMessage: (wrapper: Locator) => Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            otpDefault: page.getByTestId("otp-default"),
            otpOnly: page.getByTestId("otp-only"),
            otpWithError: page.getByTestId("otp-with-error"),
            otpWithPrefix: page.getByTestId("otp-with-prefix"),
            otp4Digit: page.getByTestId("otp-4-digit"),
            otp6Digit: page.getByTestId("otp-6-digit"),
            otpCooldown: page.getByTestId("otp-cooldown"),
            inputCell: (wrapper: Locator, index: number) =>
                wrapper.getByRole("textbox", {
                    name: new RegExp(`${ordinal(index)} digit`, "i"),
                }),
            resendButton: (wrapper: Locator) =>
                wrapper.getByRole("button", { name: /resend otp/i }),
            prefix: (wrapper: Locator) => wrapper.getByTestId("otp-prefix"),
            errorMessage: (wrapper: Locator) => wrapper.getByRole("paragraph"),
        };
    }
}

function ordinal(n: number): string {
    const s = ["st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v - 1] || "th");
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("OTP Input", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default");
        });

        test("Default", async ({ story }) => {
            const resendBtn = story.locators.resendButton(
                story.locators.otpDefault
            );
            await expect(resendBtn).toBeEnabled();
            await compareScreenshot(story, "mount", { fullscreen: true });

            await expect(story.locators.otpDefault).toMatchAriaSnapshot(`
                - group "6-digit OTP input field":
                  - textbox "1st digit"
                  - textbox "2nd digit"
                  - textbox "3rd digit"
                  - textbox "4th digit"
                  - textbox "5th digit"
                  - textbox "6th digit"
                - button "Resend OTP"
            `);

            await test.step("Partially filled (2 digits)", async () => {
                await story.locators
                    .inputCell(story.locators.otpDefault, 1)
                    .fill("1");
                await story.locators
                    .inputCell(story.locators.otpDefault, 2)
                    .fill("2");
                await compareScreenshot(story, "partially filled");
            });

            await test.step("All digits filled", async () => {
                await story.locators
                    .inputCell(story.locators.otpDefault, 3)
                    .fill("3");
                await story.locators
                    .inputCell(story.locators.otpDefault, 4)
                    .fill("4");
                await story.locators
                    .inputCell(story.locators.otpDefault, 5)
                    .fill("5");
                await story.locators
                    .inputCell(story.locators.otpDefault, 6)
                    .fill("6");
                await compareScreenshot(story, "filled");
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("default", { mode: "dark" });
        });

        test("Default (dark mode)", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.otpDefault,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("otp-only");
        });

        test("OTP only (no action button)", async ({ story }) => {
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("error");
        });

        test("Error state", async ({ story }) => {
            await expect(
                story.locators.errorMessage(story.locators.otpWithError)
            ).toHaveText("Invalid OTP. Please try again.");

            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("with-prefix");
        });

        test("With prefix", async ({ story }) => {
            await expect(
                story.locators.prefix(story.locators.otpWithPrefix)
            ).toBeVisible();
            await compareScreenshot(story, "mount");
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("cooldown", { mockedTimestamp: fixedTimestamp });
        });

        test("Cooldown", async ({ story }) => {
            const resendBtn = story.locators.resendButton(
                story.locators.otpCooldown
            );

            await test.step("Button is disabled and shows countdown on mount", async () => {
                await expect(resendBtn).toBeDisabled();
                await expect(resendBtn).toHaveText(
                    /resend otp in \d+ seconds?/i
                );
                await compareScreenshot(story, "mount");
            });
        });
    });
});
