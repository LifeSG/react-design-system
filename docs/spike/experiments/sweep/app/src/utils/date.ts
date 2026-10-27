export type E2EDateMockGlobal = Record<string, unknown> & {
    __E2E_NATIVE_DATE__?: DateConstructor;
    __E2E_ACTIVE_DATE_SEED__?: string;
    Date: DateConstructor;
};

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

/**
 * Initializes or retrieves the native Date constructor from global storage.
 * Ensures consistent reference across SSR and client hydration.
 *
 * @param globalObj The global object to store/retrieve native Date from
 * @returns The original (unmocked) Date constructor
 */
export const initializeNativeDate = (globalObj: E2EDateMockGlobal) => {
    const nativeDate = globalObj.__E2E_NATIVE_DATE__ ?? Date;
    globalObj.__E2E_NATIVE_DATE__ = nativeDate;
    return nativeDate;
};

/**
 * Applies the E2E date mock to a global object.
 * Creates and installs a mock Date constructor that returns a fixed timestamp.
 *
 * @param seed The timestamp seed string to parse (e.g., ISO string)
 * @param globalObj The global object to apply the mock to
 */
export const applyE2EDateMock = (
    seed: string,
    globalObj: E2EDateMockGlobal
) => {
    const nativeDate = initializeNativeDate(globalObj);
    const fixed = new nativeDate(seed).getTime();

    if (Number.isNaN(fixed)) {
        return;
    }

    const MockDate = createMockDate(nativeDate, fixed);

    globalObj.__E2E_ACTIVE_DATE_SEED__ = seed;
    globalObj.Date = MockDate;
};
