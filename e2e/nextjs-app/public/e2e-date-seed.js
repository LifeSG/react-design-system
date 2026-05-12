/**
 * E2E Date Seed Bootstrap Script
 * Runs before client hydration to install a mocked Date constructor if a `seed` query param is provided.
 * This ensures server-side and client-side rendering use the same time for consistent snapshots.
 * URL: /e2e-date-seed.js?seed=<ISO_DATE_STRING>
 */
(function () {
    // Read from page URL first (preferred), then fallback to script src query params.
    // This allows the script to be loaded in <head> without dynamic script src values.
    const pageSeed = new URL(globalThis.location.href).searchParams.get("now");

    // Extract fallback seed from script src query params (e.g., /e2e-date-seed.js?seed=2026-04-12)
    const script = document.currentScript;
    const scriptSrc = script ? script.src : globalThis.location.href;
    const url = new URL(scriptSrc);
    const seed = pageSeed ?? url.searchParams.get("seed");
    const nativeDate = globalThis.__E2E_NATIVE_DATE__ || Date;

    // Preserve reference to native Date for future resets
    globalThis.__E2E_NATIVE_DATE__ = nativeDate;

    if (!seed) {
        globalThis.Date = nativeDate;
        return;
    }

    // Parse seed timestamp and create a frozen Date mock
    const fixed = new nativeDate(seed).getTime();

    class MockDate extends nativeDate {
        constructor(...args) {
            if (args.length === 0) {
                super(fixed);
                return;
            }

            super(...args);
        }

        static now() {
            return fixed;
        }
    }

    MockDate.parse = nativeDate.parse;
    MockDate.UTC = nativeDate.UTC;

    globalThis.Date = MockDate;
})();
