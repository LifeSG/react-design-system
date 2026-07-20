export type E2EDateMockGlobal = Record<string, unknown> & {
    __E2E_NATIVE_DATE__?: DateConstructor;
    __E2E_ACTIVE_DATE_SEED__?: string;
    Date: DateConstructor;
};

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

export const initializeNativeDate = (globalObj: E2EDateMockGlobal) => {
    const nativeDate = globalObj.__E2E_NATIVE_DATE__ ?? Date;
    globalObj.__E2E_NATIVE_DATE__ = nativeDate;
    return nativeDate;
};

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
