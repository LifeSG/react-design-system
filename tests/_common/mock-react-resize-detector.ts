import { jest } from "@jest/globals";

jest.mock("react-resize-detector", () => ({
    useResizeDetector: () => ({
        width: 320,
        height: 0,
        ref: jest.fn(),
    }),
}));
