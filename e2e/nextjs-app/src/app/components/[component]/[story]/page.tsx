import dynamic from "next/dynamic";
import {
    applyE2EDateMock,
    type E2EDateMockGlobal,
} from "../../../../utils/date";

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

    // Mock Date on server-side during SSR if timestamp seed is provided.
    // This ensures server-rendered components use the same time as client hydration.
    if (nowSeed !== undefined) {
        applyE2EDateMock(nowSeed, globalThis as E2EDateMockGlobal);
    }

    const Story = dynamic(
        () => import(`@/app/components/${component}/${story}.e2e`),
        {
            ssr: !CSR_ONLY_COMPONENTS.has(component),
        }
    );

    return <Story />;
}
