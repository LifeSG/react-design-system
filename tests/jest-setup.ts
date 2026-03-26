Object.defineProperty(globalThis, "scrollTo", {
    writable: true,
    value: () => {
        // noop for jsdom
    },
});
