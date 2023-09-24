import { Page } from "@playwright/test";

export namespace MockDate {
    export const mock = async (page: Page, date: number | string | Date) => {
        const fakeNow = (
            date instanceof Date ? date : new Date(date)
        ).valueOf();

        // Update the Date accordingly in your test pages
        await page.addInitScript(`{
        // Extend Date constructor to default to fakeNow
        Date = class extends Date {
          constructor(...args) {
            if (args.length === 0) {
              super(${fakeNow});
            } else {
              super(...args);
            }
          }
        }
        // Override Date.now() to start from fakeNow
        const __DateNowOffset = ${fakeNow} - Date.now();
        const __DateNow = Date.now;
        Date.now = () => __DateNow() + __DateNowOffset;
      }`);
    };
}
