import { test, expect } from "@playwright/test";

test.describe("Accessibility smoke", () => {
    test("file-upload exposes expected button and progress announcement", async ({
        page,
    }) => {
        await page.goto("/components/file-upload/a11y");

        await expect(
            page.getByRole("button", { name: "Upload files" })
        ).toHaveAccessibleName("Upload files");
        await expect(page.locator('[aria-live="polite"]')).toContainText(
            "Starting upload of supporting-document.pdf"
        );
    });

    test("predictive-text-input exposes accessible name and description", async ({
        page,
    }) => {
        await page.goto("/components/predictive-text-input/a11y");

        const combobox = page.getByRole("combobox", {
            name: "Search for options",
        });
        await expect(combobox).toHaveAccessibleName("Search for options");
        await expect(combobox).toHaveAccessibleDescription(
            "Type in 3 or more characters for suggested results."
        );

        await combobox.fill("alp");

        await expect(page.locator('[aria-live="polite"]')).toContainText(
            "1 result found. Press down arrow to scroll through the list."
        );
    });

    test("timeline exposes heading and hidden status text", async ({
        page,
    }) => {
        await page.goto("/components/timeline/a11y");

        await expect(
            page.getByRole("heading", {
                level: 2,
                name: "Application progress",
            })
        ).toBeVisible();
        await expect(page.getByRole("list")).toBeVisible();
        await expect(page.getByRole("listitem").first()).toContainText(
            "Step number 1"
        );
    });

    test("error-display inactivity announces remaining time", async ({
        page,
    }) => {
        await page.goto("/components/error-display/a11y");

        await expect(page.getByRole("heading", { level: 2 })).toBeVisible();
        await expect(page.locator('[aria-live="polite"]')).toContainText(
            "you'll be logged out in 1 minutes 5 seconds"
        );
    });

    test("masked-input readonly button has accessible name", async ({
        page,
    }) => {
        await page.goto("/components/masked-input/a11y");

        const maskedButton = page.getByTestId("masked-input-readonly-button");
        await expect(maskedButton).toHaveAccessibleName(
            "Starting with S1 and ending with 67D"
        );

        await maskedButton.click();

        await expect(maskedButton).toHaveAccessibleName("S1234567D");
    });

    test("filter exposes expand button name and state", async ({ page }) => {
        await page.goto("/components/filter/a11y");

        const toggle = page.getByRole("button", { name: "Category" });
        await expect(toggle).toHaveAccessibleName("Category");
        await expect(toggle).toHaveAttribute("aria-expanded", "false");

        await toggle.click();

        await expect(toggle).toHaveAttribute("aria-expanded", "true");
        await expect(page.getByText("Filter content")).toBeVisible();
    });

    test("pagination exposes landmark and active page semantics", async ({
        page,
    }) => {
        await page.goto("/components/pagination/a11y");

        const navigation = page.getByRole("navigation", { name: "pagination" });
        await expect(navigation).toHaveAccessibleName("pagination");

        await expect(
            page.getByRole("button", { name: "page 1 of 3" })
        ).toHaveAttribute("aria-current", "page");
        await expect(
            page.getByRole("button", { name: "Previous page" })
        ).toBeDisabled();
        await expect(
            page.getByRole("button", { name: "Next page" })
        ).toBeEnabled();
    });

    test("otp-input exposes countdown label and description", async ({
        page,
    }) => {
        await page.goto("/components/otp-input/a11y");

        await expect(
            page.getByRole("group", { name: "3-digit OTP input field" })
        ).toBeVisible();

        const resendButton = page.getByRole("button", {
            name: "Resend OTP in 10 seconds",
        });
        await expect(resendButton).toBeDisabled();
        await expect(resendButton).toHaveAccessibleDescription(
            "10 seconds remaining"
        );
    });

    test("input-group exposes textbox and combobox names and descriptions", async ({
        page,
    }) => {
        await page.goto("/components/input-group/a11y");

        const combobox = page.getByRole("combobox", {
            name: "Contact method",
        });
        await expect(combobox).toHaveAccessibleDescription(
            /Choose and enter value.*Press space to open options/
        );

        const textbox = page.getByRole("textbox", {
            name: "Contact method",
        });
        await expect(textbox).toHaveAccessibleDescription(
            "Choose and enter value"
        );
    });

    test("alert exposes alert role and content", async ({ page }) => {
        await page.goto("/components/alert/a11y");

        await expect(page.getByRole("alert")).toBeVisible();
        await expect(page.getByText("Your details were saved")).toBeVisible();
    });

    test("toast exposes alert role and dismiss button name", async ({
        page,
    }) => {
        await page.goto("/components/toast/a11y");

        await expect(
            page.getByRole("alert").filter({ hasText: "Toast title" })
        ).toBeVisible();
        await expect(
            page.getByRole("button", { name: "Close notification" })
        ).toBeVisible();
    });

    test("calendar-manager toggles month selection controls", async ({
        page,
    }) => {
        await page.goto("/components/calendar-manager/a11y");

        const openMonthSelector = page.getByRole("button", {
            name: /Select month$/i,
        });
        const calendarContainer = page.getByTestId("calendar-container");
        await expect(openMonthSelector).toBeVisible();
        await expect(calendarContainer.locator("[inert]")).toHaveCount(0);

        await openMonthSelector.click();

        await expect(
            page.getByRole("button", { name: /Close month selection$/i })
        ).toBeVisible();
        await expect(calendarContainer.locator("[inert]")).toHaveCount(1);
    });

    test("timepicker-dropdown exposes picker and action buttons", async ({
        page,
    }) => {
        await page.goto("/components/timepicker-dropdown/a11y");

        const hourInput = page.getByRole("spinbutton", { name: "hour" });
        const minuteInput = page.getByRole("spinbutton", { name: "minute" });

        await expect(hourInput).toHaveAccessibleName("hour");
        await expect(minuteInput).toHaveAccessibleName("minute");
        await expect(
            page.getByRole("button", { name: "increase hour" })
        ).toBeVisible();
        await expect(
            page.getByRole("button", { name: "decrease minute" })
        ).toBeVisible();
        await expect(
            page.getByRole("button", { name: "confirm selection" })
        ).toHaveAccessibleName("confirm selection");
        await expect(
            page.getByRole("button", { name: "close selector" })
        ).toHaveAccessibleName("close selector");
    });

    test("accordion exposes expand-all and item expand state", async ({
        page,
    }) => {
        await page.goto("/components/accordion/a11y");

        const expandAll = page.getByRole("button", { name: "Hide all" });
        const firstItem = page.getByRole("button", {
            name: "Personal information",
        });

        await expect(expandAll).toBeVisible();
        await expect(firstItem).toHaveAttribute("aria-expanded", "true");
        await expect(
            page
                .locator('[data-testid="accordion-item-expandable-container"]')
                .first()
        ).not.toHaveAttribute("inert");

        await firstItem.click();

        await expect(firstItem).toHaveAttribute("aria-expanded", "false");
        await expect(
            page
                .locator('[data-testid="accordion-item-expandable-container"]')
                .first()
        ).toHaveAttribute("inert", /^(|true)$/);
    });

    test("box-container exposes region and header toggle semantics", async ({
        page,
    }) => {
        await page.goto("/components/box-container/a11y");

        const region = page.getByRole("region", {
            name: /Supporting documents/i,
        });
        const toggle = page.getByRole("button", {
            name: /Supporting documents/i,
        });

        await expect(region).toHaveAccessibleName(/Supporting documents/i);
        await expect(toggle).toHaveAttribute("aria-expanded", "true");

        await toggle.click();

        await expect(toggle).toHaveAttribute("aria-expanded", "false");
    });

    test("countdown-timer exposes timer role and warning announcement", async ({
        page,
    }) => {
        await page.goto("/components/countdown-timer/a11y");

        await expect(
            page.getByRole("timer", { name: "Countdown timer" })
        ).toBeVisible();
        await expect(
            page
                .getByTestId("countdown-timer-story")
                .locator('[aria-live="assertive"]')
        ).toContainText("Time left: 3 seconds");
    });

    test("feedback-rating exposes slider description and updates value text", async ({
        page,
    }) => {
        await page.goto("/components/feedback-rating/a11y");

        const slider = page.getByRole("slider", {
            name: "Rate your experience",
        });

        await expect(slider).toHaveAccessibleDescription(
            "Minimum, 1 star. Maximum, 5 stars."
        );
        await page.getByTestId("feedback-rating-star-1").click();
        await expect(slider).toHaveAttribute("aria-valuetext", "1 star");
        await expect(
            page.getByRole("button", { name: "Submit" })
        ).toBeEnabled();
    });

    test("progress-indicator exposes hidden status labels for steps", async ({
        page,
    }) => {
        await page.goto("/components/progress-indicator/a11y");

        const completedStep = page.locator("#completed-step-0-title");
        const currentStep = page.locator("#current-step-1-title");

        await expect(completedStep).toContainText("Details");
        await expect(completedStep).toContainText("Completed step");
        await expect(currentStep).toContainText("Verification");
        await expect(currentStep).toContainText("Current step");
        await expect(
            currentStep.locator('[aria-current="true"]')
        ).toBeVisible();
    });

    test("uneditable-section includes hidden field label in retry action text", async ({
        page,
    }) => {
        await page.goto("/components/uneditable-section/a11y");

        await expect(
            page.getByRole("heading", { level: 2, name: "Profile details" })
        ).toBeVisible();
        const retryButton = page.getByTestId("clickable-label");

        await expect(retryButton).toContainText("Try again?NRIC or FIN");
        await expect(retryButton).toHaveAttribute("aria-live", "polite");
        await expect(retryButton).toHaveAccessibleName(
            "Starting with S1 and ending with 67D"
        );
    });

    test("unit-number exposes input names and live-region updates", async ({
        page,
    }) => {
        await page.goto("/components/unit-number/a11y");

        const floorInput = page.getByRole("textbox", {
            name: "Enter floor number",
        });
        const unitInput = page.getByRole("textbox", {
            name: "Enter unit number",
        });

        await floorInput.fill("12");
        await unitInput.fill("34");

        await expect(floorInput).toHaveAccessibleName("Enter floor number");
        await expect(unitInput).toHaveAccessibleName("Enter unit number");
        await expect(page.locator('[aria-live="polite"]')).toContainText(
            "Hash 1 2 Dash 3 4"
        );
    });

    test("pagination accessibility tree snapshot", async ({ page }) => {
        await page.goto("/components/pagination/a11y");

        await expect(
            page.getByRole("navigation", { name: "pagination" })
        ).toMatchAriaSnapshot(
            `- navigation "pagination":
  - button "Previous page" [disabled]
  - button "page 1 of 3": "1"
  - button "page 2 of 3": "2"
  - button "page 3 of 3": "3"
  - button "Next page"`
        );
    });

    test("accordion accessibility tree snapshot", async ({ page }) => {
        await page.goto("/components/accordion/a11y");

        await expect(
            page.getByRole("button", { name: "Personal information" })
        ).toMatchAriaSnapshot(`- button "Personal information" [expanded]`);
    });

    test("feedback-rating accessibility tree snapshot", async ({ page }) => {
        await page.goto("/components/feedback-rating/a11y");

        await expect(
            page.getByRole("slider", { name: "Rate your experience" })
        ).toMatchAriaSnapshot(`- slider "Rate your experience": "0"`);
    });

    test("progress-indicator accessibility tree snapshot", async ({ page }) => {
        await page.goto("/components/progress-indicator/a11y");

        await expect(page.locator("#current-step-1-title")).toMatchAriaSnapshot(
            `- paragraph: Verification Current step`
        );
    });

    test("unit-number accessibility tree snapshot", async ({ page }) => {
        await page.goto("/components/unit-number/a11y");

        await expect(
            page.getByRole("textbox", { name: "Enter floor number" })
        ).toMatchAriaSnapshot(
            `- textbox "Enter floor number":
  - /placeholder: "00"`
        );
    });
});
