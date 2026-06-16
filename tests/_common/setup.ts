import { jest } from "@jest/globals";

// Make requestAnimationFrame synchronous to avoid async focus issues in tests (see https://github.com/floating-ui/floating-ui/issues/2488)
export const setupRequestAnimationFrameMock = () => {
    globalThis.requestAnimationFrame = (cb: FrameRequestCallback) => {
        cb(0);
        return 0;
    };
};

export const setupResizeObserverMock = () => {
    globalThis.ResizeObserver = class ResizeObserverMock
        implements ResizeObserver
    {
        public observe = jest.fn();
        public unobserve = jest.fn();
        public disconnect = jest.fn();
    };
};

export const setupCommonDomMocks = () => {
    setupRequestAnimationFrameMock();
    setupResizeObserverMock();
};
