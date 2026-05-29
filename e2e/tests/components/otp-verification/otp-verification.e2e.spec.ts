import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";
import { fixedTimestamp } from "../../consts";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "otp-verification";

    public readonly locators: {
        phoneInteractive: Locator;
        emailInteractive: Locator;
        internals: {
            sendOtpButton: (root?: Locator) => Locator;
            sentOtpButton: (root?: Locator) => Locator;
            verifyButton: (root?: Locator) => Locator;
            phoneNumberInput: (root?: Locator) => Locator;
            emailInput: (root?: Locator) => Locator;
            otpInput: (root?: Locator) => Locator;
            verifiedIcon: (root?: Locator) => Locator;
        };
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            phoneInteractive: page.getByTestId("otp-phone"),
            emailInteractive: page.getByTestId("otp-email"),
            internals: {
                sendOtpButton: (root) =>
                    (root ?? page).getByRole("button", { name: "Send OTP" }),
                sentOtpButton: (root) =>
                    (root ?? page).getByRole("button", { name: "Sent OTP" }),
                verifyButton: (root) =>
                    (root ?? page).getByRole("button", { name: "Verify" }),
                phoneNumberInput: (root) =>
                    (root ?? page).getByRole("textbox", {
                        name: /mobile number/i,
                    }),
                emailInput: (root) =>
                    (root ?? page).getByRole("textbox", {
                        name: /email/i,
                    }),
                otpInput: (root) => (root ?? page).getByRole("spinbutton"),
                verifiedIcon: (root) =>
                    (root ?? page).getByRole("img", { name: "Verified" }),
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

test.describe("OtpVerification", () => {
    test.describe("Phone number", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("phone-number-variants");
            });

            test("Form variants", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("phone-number-variants", { mode: "dark" });
            });

            test("Form variants (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("phone-number-variants", { size: "mobile" });
            });

            test("Form variants (mobile)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("phone-number-otp-state");
            });

            test("OTP states", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("phone-number-otp-state", { mode: "dark" });
            });

            test("OTP states (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("phone-number-otp-state", { size: "mobile" });
            });

            test("OTP states (mobile)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            const now = new Date(fixedTimestamp).getTime();

            test.beforeEach(async ({ story }) => {
                await story.page.clock.install({ time: now - 30 * 1000 });
                await story.init("phone-number-interactive");
            });

            test("OTP verification flow", async ({ story }) => {
                const root = story.locators.phoneInteractive;

                await test.step("Trigger 'Send OTP'", async () => {
                    await story.page.clock.pauseAt(now);

                    await story.locators.internals
                        .phoneNumberInput()
                        .fill("91234567");
                    await story.locators.internals.sendOtpButton().click();

                    await compareScreenshot(story, "send-loading", {
                        locator: root,
                    });
                });

                await test.step("Countdown running state", async () => {
                    await story.page.clock.runFor(1000);

                    await compareScreenshot(story, "countdown-running", {
                        locator: root,
                    });
                });

                await test.step("Countdown complete state", async () => {
                    await story.page.clock.runFor(3000);

                    await compareScreenshot(story, "countdown-complete", {
                        locator: root,
                    });
                });

                await test.step("Fill OTP", async () => {
                    await story.locators.internals.otpInput().fill("123456");

                    await compareScreenshot(story, "otp-filled", {
                        locator: root,
                    });
                });

                await test.step("Trigger 'Verify OTP'", async () => {
                    await story.locators.internals.verifyButton().click();

                    await compareScreenshot(story, "verify-loading", {
                        locator: root,
                    });
                });

                await test.step("Verification complete", async () => {
                    await story.page.clock.runFor(1000);
                    await story.page.clock.resume();

                    await compareScreenshot(story, "verified", {
                        locator: root,
                    });
                });
            });
        });
    });

    test.describe("Email", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("email-variants");
            });

            test("Form variants", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("email-variants", { mode: "dark" });
            });

            test("Form variants (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("email-variants", { size: "mobile" });
            });

            test("Form variants (mobile)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("email-otp-state");
            });

            test("OTP states", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("email-otp-state", { mode: "dark" });
            });

            test("OTP states (dark mode)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("email-otp-state", { size: "mobile" });
            });

            test("OTP states (mobile)", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            const now = new Date(fixedTimestamp).getTime();

            test.beforeEach(async ({ story }) => {
                await story.page.clock.install({ time: now - 30 * 1000 });
                await story.init("email-interactive");
            });

            test("OTP verification flow", async ({ story }) => {
                const root = story.locators.emailInteractive;

                await test.step("Trigger 'Send OTP'", async () => {
                    await story.page.clock.pauseAt(now);

                    await story.locators.internals
                        .emailInput()
                        .fill("test@example.com");
                    await story.locators.internals.sendOtpButton().click();

                    await compareScreenshot(story, "send-loading", {
                        locator: root,
                    });
                });

                await test.step("Countdown running state", async () => {
                    await story.page.clock.runFor(1000);

                    await compareScreenshot(story, "countdown-running", {
                        locator: root,
                    });
                });

                await test.step("Countdown complete state", async () => {
                    await story.page.clock.runFor(3000);

                    await compareScreenshot(story, "countdown-complete", {
                        locator: root,
                    });
                });

                await test.step("Fill OTP", async () => {
                    await story.locators.internals.otpInput().fill("123456");

                    await compareScreenshot(story, "otp-filled", {
                        locator: root,
                    });
                });

                await test.step("Trigger 'Verify OTP'", async () => {
                    await story.locators.internals.verifyButton().click();

                    await compareScreenshot(story, "verify-loading", {
                        locator: root,
                    });
                });

                await test.step("Verification complete", async () => {
                    await story.page.clock.runFor(1000);
                    await story.page.clock.resume();

                    await compareScreenshot(story, "verified", {
                        locator: root,
                    });
                });
            });
        });
    });
});
