module.exports = {
    rootDir: ".",
    moduleFileExtensions: ["tsx", "ts", "js"],
    coverageDirectory: "<rootDir>/tests/coverage",
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>/tests/**/*.spec.[jt]s?(x)"],
    moduleNameMapper: {
        "react-player": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy",
    },
    moduleDirectories: ["node_modules", "."],
    setupFilesAfterEnv: ["jest-canvas-mock", "@testing-library/jest-dom"],
};
