process.env.TZ = "UTC";

const moduleFileExtensions = ["tsx", "ts", "js"];
const moduleDirectories = ["node_modules", "<rootDir>"];
const moduleNameMapper = {
    "react-player": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
};

module.exports = {
    rootDir: ".",
    moduleFileExtensions,
    coverageDirectory: "<rootDir>/tests/coverage",
    coveragePathIgnorePatterns: [
        "node_modules",
        "tools/storybook-argtypes/adapters",
    ],
    projects: [
        {
            displayName: "ui",
            testEnvironment: "jsdom",
            testMatch: ["<rootDir>/tests/**/*.spec.[jt]s?(x)"],
            testPathIgnorePatterns: ["<rootDir>/tests/tools/"],
            moduleFileExtensions,
            moduleDirectories,
            moduleNameMapper,
            setupFilesAfterEnv: [
                "jest-canvas-mock",
                "@testing-library/jest-dom",
                "<rootDir>/tests/jest-setup.ts",
            ],
        },
        {
            displayName: "tools",
            testEnvironment: "node",
            testMatch: ["<rootDir>/tests/tools/**/*.spec.[jt]s?(x)"],
            moduleFileExtensions,
            moduleDirectories,
            moduleNameMapper,
        },
    ],
    reporters: ["default", ["jest-junit", { outputName: "junit.xml" }]],
    maxWorkers: process.env.CI ? 1 : "50%",
};
