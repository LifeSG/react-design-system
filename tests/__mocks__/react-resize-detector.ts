import { jest } from "@jest/globals";

export const useResizeDetector = () => ({
    width: 320,
    height: 0,
    ref: jest.fn(),
});
