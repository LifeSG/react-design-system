/**
 * Creates a mock Date constructor that returns a fixed timestamp.
 * Used for E2E tests to ensure consistent time-based rendering across SSR and client hydration.
 *
 * @param nativeDate The original Date constructor to extend
 * @param fixed The fixed timestamp (ms since epoch) that all mocked dates should return
 * @returns A mock Date constructor that behaves like Date but with a frozen time
 */
export const createMockDate = (nativeDate: DateConstructor, fixed: number) => {
    const MockDate = function (this: unknown, ...args: unknown[]) {
        if (!new.target) {
            return new nativeDate(fixed).toString();
        }

        if (args.length === 0) {
            return Reflect.construct(nativeDate, [fixed], new.target);
        }

        return Reflect.construct(nativeDate, args, new.target);
    } as unknown as DateConstructor;

    Object.setPrototypeOf(MockDate.prototype, nativeDate.prototype);
    MockDate.now = () => fixed;
    MockDate.parse = nativeDate.parse;
    MockDate.UTC = nativeDate.UTC;

    return MockDate;
};
