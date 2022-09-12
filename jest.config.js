module.exports = {
    moduleFileExtensions: ["tsx", "ts", "js"],
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.(js|ts)?(x)",
        "<rootDir>/tests/**/*.(ts)?(x)",
    ],
    moduleNameMapper: {
        "react-player": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["jest-canvas-mock"],
};
