import { defineConfig, devices } from "@playwright/test";

const isDocker = !!process.env.DOCKER;
const baseHost = isDocker ? "host.docker.internal" : "localhost";
const proxyPort = 3010;

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
    /* Run tests in parallel. Undefined resolves to half of the CPU cores. */
    workers: process.env.CI ? "50%" : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: process.env.CI
        ? [["github"], ["html"], ["blob"]]
        : [["list"], ["html"]],
    /* Location of screenshots */
    snapshotPathTemplate:
        "{testDir}/{testFileDir}/__screenshots__/{projectName}/{testName}--{arg}{ext}",
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('')`. */
        baseURL: `http://${baseHost}:3000/`,

        /* Collect trace test fails. See https://playwright.dev/docs/trace-viewer */
        trace: "retain-on-failure",

        /* Connect to remote Playwright server running on Docker */
        ...(isDocker && {
            connectOptions: {
                wsEndpoint: `ws://127.0.0.1:${proxyPort}/`,
            },
        }),
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
        {
            name: "a3-svelte",
            use: {
                ...devices["Desktop Chrome"],
                baseURL: `http://${baseHost}:${proxyPort}/a3-svelte/`,
            },
        },
        {
            name: "a3-vue",
            use: {
                ...devices["Desktop Chrome"],
                baseURL: `http://${baseHost}:${proxyPort}/a3-vue/`,
            },
        },
        {
            name: "a3-angular",
            use: {
                ...devices["Desktop Chrome"],
                baseURL: `http://${baseHost}:${proxyPort}/a3-angular/`,
            },
        },
        {
            name: "a4-svelte",
            use: {
                ...devices["Desktop Chrome"],
                baseURL: `http://${baseHost}:${proxyPort}/a4-svelte/`,
            },
        },
        {
            name: "a4-vue",
            use: {
                ...devices["Desktop Chrome"],
                baseURL: `http://${baseHost}:${proxyPort}/a4-vue/`,
            },
        },
        {
            name: "a4-angular",
            use: {
                ...devices["Desktop Chrome"],
                baseURL: `http://${baseHost}:${proxyPort}/a4-angular/`,
            },
        },
    ],

    /* Run local dev servers before starting the tests */
    webServer: isDocker
        ? [
              {
                  command: "npm run test-e2e:docker",
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
          ]
        : [
              {
                  command: "node scripts/e2e-multi-framework.mjs",
                  url: `http://localhost:${proxyPort}`,
                  reuseExistingServer: true,
                  stderr: "pipe",
                  stdout: "pipe",
                  timeout: 60000,
              },
          ],
});
