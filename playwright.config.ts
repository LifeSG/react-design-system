import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: "./e2e/tests",
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Disable retries */
    retries: 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: "html",
    /* Location of screenshots */
    snapshotPathTemplate:
        "{testDir}/{testFileDir}/__screenshots__/{projectName}/{testName}--{arg}{ext}",
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('')`. */
        baseURL: "http://host.docker.internal:3000",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",

        /* Connect to remote Playwright server running on Docker */
        connectOptions: {
            wsEndpoint: `ws://127.0.0.1:3010/`,
        },
        /* Ignore HTTPS errors when fetching assets within the Docker container */
        ignoreHTTPSErrors: true,
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"],
            },
        },
    ],

    /* Run local dev servers before starting the tests */
    webServer: [
        {
            command: "npm run test-e2e-docker",
            wait: {
                stdout: /Listening on ws:\/\/0\.0\.0\.0:(?<PLAYWRIGHT_SERVER_PORT>\d+)/,
            },
            gracefulShutdown: { signal: "SIGTERM", timeout: 30000 },
            reuseExistingServer: !process.env.CI,
            stderr: "pipe",
            stdout: "pipe",
        },
        {
            command: process.env.CI
                ? "cd e2e/nextjs-app && npm run build && npm run start"
                : "cd e2e/nextjs-app && npm run dev",
            url: "http://localhost:3000",
            reuseExistingServer: !process.env.CI,
            stderr: "pipe",
            stdout: "pipe",
        },
    ],
});
