import dynamic from "next/dynamic";
import { after } from "next/server";
import {
    applyE2EDateMock,
    initializeNativeDate,
    type E2EDateMockGlobal,
} from "@/utils/date";

/**
 * Components that must be rendered client-side only to avoid hydration mismatches.
 * These typically have complex state initialization or rely on browser APIs.
 */
const CSR_ONLY_COMPONENTS = new Set([
    "badge",
    "date-range-input",
    "date-input",
    "select",
    "input-multi-select",
    "input-select",
    "nested-select",
    "nested-multi-select",
    "input-group",
    "language-switcher",
    "time-slot-bar",
    "time-range-picker",
]);

export default async function Page({
    params,
    searchParams,
}: Readonly<{
    params: Promise<{ component: string; story: string }>;
    searchParams: Promise<{
        now?: string | string[];
    }>;
}>) {
    const { component, story } = await params;
    const { now } = await searchParams;
    const globalObj = globalThis as typeof globalThis & E2EDateMockGlobal;
    const nativeDate = initializeNativeDate(globalObj);

    // Extract timestamp seed from query params for deterministic time-based rendering
    const nowSeed = Array.isArray(now) ? now[0] : now;

    if (nowSeed !== undefined) {
        // Ensure a stale mock from a prior request is always cleared first.
        globalObj.Date = nativeDate;
        globalObj.__E2E_ACTIVE_DATE_SEED__ = undefined;

        applyE2EDateMock(nowSeed, globalObj);

        if (globalObj.Date !== nativeDate) {
            // Restore native Date after this request finishes streaming.
            after(() => {
                globalObj.Date = nativeDate;
                globalObj.__E2E_ACTIVE_DATE_SEED__ = undefined;
            });
        }
    }

    const Story = dynamic(
        () => import(`@/app/components/${component}/${story}.e2e`),
        {
            ssr: !CSR_ONLY_COMPONENTS.has(component),
        }
    );

    const activeSeed = globalObj.__E2E_ACTIVE_DATE_SEED__ ?? "";
    const isDateMocked = globalObj.Date !== nativeDate;

    return (
        <>
            <div
                data-testid="e2e-active-date-seed"
                data-date-mocked={String(isDateMocked)}
                className={"hidden"}
            >
                {activeSeed}
            </div>
            <Story />
        </>
    );
}
