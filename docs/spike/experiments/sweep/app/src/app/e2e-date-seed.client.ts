import { applyE2EDateMock, type E2EDateMockGlobal } from "../utils/date";

if (globalThis.window !== undefined) {
    const globalObj = globalThis as typeof globalThis & E2EDateMockGlobal;

    const pageSeed = new URL(globalThis.location.href).searchParams.get("now");
    const seed = pageSeed ?? globalObj.__E2E_ACTIVE_DATE_SEED__ ?? null;

    if (seed) {
        applyE2EDateMock(seed, globalObj);
    }
}
