import { expect, test } from "@playwright/test";
import { fixedTimestamp } from "../consts";

test.describe("Date mock SSR isolation", () => {
    test("does not leak seeded Date into subsequent unseeded request", async ({
        page,
    }) => {
        await page.goto(
            `/components/countdown-timer/non-warn?now=${fixedTimestamp}`
        );

        const seededMarker = page.getByTestId("e2e-active-date-seed");
        await expect(seededMarker).toHaveText(fixedTimestamp);
        await expect(seededMarker).toHaveAttribute("data-date-mocked", "true");

        await page.goto("/components/countdown-timer/non-warn");

        const unseededMarker = page.getByTestId("e2e-active-date-seed");
        await expect(unseededMarker).toHaveText("");
        await expect(unseededMarker).toHaveAttribute(
            "data-date-mocked",
            "false"
        );
    });
});
