import { ArgTypes, PureArgsTable } from "@storybook/addon-docs/blocks";

import { storybookArgTypesByTitle } from "../../../.storybook/generated/storybook-argtypes.generated";
import type { TabAttribute } from "../tabs";
import { Tabs } from "../tabs";

type ArgTypesProps = React.ComponentProps<typeof ArgTypes>;

export interface ArgTypesTabConfig {
    title: string;
    include?: ArgTypesProps["include"];
    exclude?: ArgTypesProps["exclude"];
}

interface ArgTypesTabsProps {
    of: ArgTypesProps["of"];
    tabs: ArgTypesTabConfig[];
    sort?: ArgTypesProps["sort"];
}

interface GeneratedArgType {
    table?: {
        tabGroup?: string;
    };
}

type PureArgsTableRows = Extract<
    React.ComponentProps<typeof PureArgsTable>,
    { rows: unknown }
>["rows"];

interface AutoArgTypesTabsProps {
    of: ArgTypesProps["of"];
    storyTitle?: keyof typeof storybookArgTypesByTitle;
    sort?: ArgTypesProps["sort"];
    defaultTabTitle?: string;
}

type StoryMetaLike = {
    title?: string;
};

type StoriesModuleLike = {
    default?: StoryMetaLike;
    [key: string]: unknown;
};

/** Render plain ArgTypes as a safe fallback when grouping cannot be resolved. */
function renderFallbackArgTypes(
    of: ArgTypesProps["of"],
    sort: ArgTypesProps["sort"]
) {
    return <ArgTypes of={of} sort={sort} />;
}

/**
 * Resolve a stable `of` target for ArgTypes filtering mode.
 *
 * When a stories module is passed, use the first named story export instead of
 * meta-level `of` so include/exclude filtering behaves consistently.
 */
function getArgTypesFilterTarget(of: ArgTypesProps["of"]): ArgTypesProps["of"] {
    if (!of || typeof of !== "object") {
        return of;
    }

    const storiesModule = of as StoriesModuleLike;
    const storyEntries = Object.entries(storiesModule).filter(
        ([key, value]) => key !== "default" && typeof value === "object"
    );

    if (storyEntries.length === 0) {
        return of;
    }

    return storyEntries[0][1] as ArgTypesProps["of"];
}

/**
 * Render Storybook ArgTypes tables as tabs.
 *
 * Each tab can provide include/exclude filters so compound components can show
 * separate API views (e.g. Main component, Subcomponent 1, Subcomponent 2).
 */
export const ArgTypesTabs = ({
    of,
    tabs,
    sort = "alpha",
}: ArgTypesTabsProps): JSX.Element => {
    const argTypesOf = getArgTypesFilterTarget(of);

    if (tabs.length === 0) {
        return renderFallbackArgTypes(argTypesOf, sort);
    }

    const tabsData: TabAttribute[] = tabs.map((tab) => ({
        title: tab.title,
        component: (
            <ArgTypes
                of={argTypesOf}
                include={tab.include}
                exclude={tab.exclude}
                sort={sort}
            />
        ),
    }));

    return <Tabs tabs={tabsData} />;
};

/**
 * Build per-tab ArgTypes row objects keyed exactly as generated.
 *
 * This avoids relying on include/exclude name matching behavior and ensures
 * each tab only renders rows that belong to its own tab group.
 */
function buildTabRowsFromGeneratedArgTypes(
    generatedArgTypes: PureArgsTableRows,
    defaultTabTitle: string
): Array<{ title: string; rows: PureArgsTableRows }> {
    const rowsBySubcategory = new Map<string, PureArgsTableRows>();

    Object.entries(generatedArgTypes).forEach(([key, rawArgType]) => {
        if (!key.includes(".")) {
            return;
        }

        const argType = rawArgType as GeneratedArgType;
        const tabTitle = argType.table?.tabGroup ?? defaultTabTitle;

        if (!rowsBySubcategory.has(tabTitle)) {
            rowsBySubcategory.set(tabTitle, {});
        }

        const rows = rowsBySubcategory.get(tabTitle);

        if (rows) {
            rows[key] = rawArgType;
        }
    });

    return Array.from(rowsBySubcategory.entries()).map(([title, rows]) => ({
        title,
        rows,
    }));
}

/** Resolve a story title from a Storybook stories module passed via `of`. */
function getStoryTitleFromOf(
    of: ArgTypesProps["of"]
): keyof typeof storybookArgTypesByTitle | undefined {
    if (!of || typeof of !== "object") {
        return undefined;
    }

    const storiesModule = of as StoriesModuleLike;
    const title = storiesModule.default?.title;

    if (!title || !(title in storybookArgTypesByTitle)) {
        return undefined;
    }

    return title as keyof typeof storybookArgTypesByTitle;
}

/**
 * Auto-render ArgTypes tabs from the global generated registry.
 *
 * This mode bypasses ArgTypes include/exclude matching and uses generated rows
 * directly (via `PureArgsTable`) so each tab reliably renders only its own
 * tab-group entries.
 */
export const AutoArgTypesTabs = ({
    of,
    storyTitle,
    sort = "alpha",
    defaultTabTitle = "Component",
}: AutoArgTypesTabsProps): JSX.Element => {
    const resolvedStoryTitle = storyTitle ?? getStoryTitleFromOf(of);

    if (!resolvedStoryTitle) {
        return renderFallbackArgTypes(of, sort);
    }

    const generatedArgTypes = storybookArgTypesByTitle[resolvedStoryTitle];

    if (!generatedArgTypes) {
        return renderFallbackArgTypes(of, sort);
    }

    const tabRows = buildTabRowsFromGeneratedArgTypes(
        generatedArgTypes,
        defaultTabTitle
    );

    if (tabRows.length === 0) {
        return renderFallbackArgTypes(of, sort);
    }

    return (
        <Tabs
            tabs={tabRows.map((tab) => ({
                title: tab.title,
                component: <PureArgsTable rows={tab.rows} sort={sort} />,
            }))}
        />
    );
};
