import dynamic from "next/dynamic";
import { createMockDate } from "../../../../utils/date";

/**
 * Components that must be rendered client-side only to avoid hydration mismatches.
 * These typically have complex state initialization or rely on browser APIs.
 *
 * TODO: Remove when each component has stable hydration support.
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

    // Extract timestamp seed from query params for deterministic time-based rendering
    const nowSeed = Array.isArray(now) ? now[0] : now;
    const seedQuery = nowSeed ? `?seed=${encodeURIComponent(nowSeed)}` : "";

    // Mock Date on server-side during SSR if timestamp seed is provided.
    // This ensures server-rendered components use the same time as client hydration.
    if (nowSeed !== undefined) {
        const nativeDate =
            (globalThis as Record<string, unknown>).__E2E_NATIVE_DATE__ ?? Date;
        (globalThis as Record<string, unknown>).__E2E_NATIVE_DATE__ =
            nativeDate;

        const fixed = new (nativeDate as DateConstructor)(nowSeed).getTime();
        (globalThis as Record<string, unknown>).Date = createMockDate(
            nativeDate as DateConstructor,
            fixed
        );
    }

    const Story = dynamic(
        () => import(`@/app/components/${component}/${story}.e2e`),
        {
            ssr: !CSR_ONLY_COMPONENTS.has(component),
        }
    );

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src={`/e2e-date-seed.js${seedQuery}`} />
            <Story />
        </>
    );
}
