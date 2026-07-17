import { ArgTypes, PureArgsTable } from "@storybook/addon-docs/blocks";

import { storybookArgTypesByTitle } from "../../../.storybook/generated/storybook-argtypes.generated";
import { Tabs } from "../tabs";

type ArgTypesProps = React.ComponentProps<typeof ArgTypes>;

export interface ArgTypesTabConfig {
    title: string;
    include?: Exclude<ArgTypesProps["include"], undefined>;
    exclude?: Exclude<ArgTypesProps["exclude"], undefined>;
}

/**
 * Normalized argTypes row for a single prop or type member.
 * Generated rows are serialized to `.storybook/generated/*.argtypes.generated.ts`
 * for use in Storybook's addon-docs props table UI.
 */
export type GeneratedArgType = {
    /** Unique identifier for the prop: `InterfaceName.propName` or `TypeAliasName`. */
    key: string;
    /** Storybook argTypes object for this prop. */
    value: {
        /** Property name for display in the props table. */
        name: string;
        /** JSDoc description, remarks, and examples formatted for Storybook UI. */
        description: string | undefined;
        /** Deprecation notice from `@deprecated` tag, or `true` if deprecated without message. */
        deprecated: string | boolean | undefined;
        /** Always `false` — disables manual control input in Storybook. */
        control: false;
        /** Metadata for Storybook's addon-docs table layout and categorization. */
        table: {
            /** Interface or type alias name for row grouping. */
            category: string;
            /** Optional tab group from `@storybookSection` JSDoc tag. */
            tabGroup: string | undefined;
            /** Type information. */
            type: {
                /** Type text summary for the props table. */
                summary: string;
            };
            /** Default value from `@default` JSDoc tag, if present. */
            defaultValue:
                | {
                      /** The default value text. */
                      summary: string;
                  }
                | undefined;
        };
    };
};

type PureArgsTableRows = Extract<
    React.ComponentProps<typeof PureArgsTable>,
    { rows: unknown }
>["rows"];

interface AutoArgTypesTabsProps {
    of: ArgTypesProps["of"];
    storyTitle?: keyof typeof storybookArgTypesByTitle;
    sort?: Exclude<ArgTypesProps["sort"], undefined>;
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
        const argType = rawArgType as GeneratedArgType["value"];
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
        generatedArgTypes as PureArgsTableRows,
        defaultTabTitle
    );

    if (tabRows.length === 0) {
        return renderFallbackArgTypes(of, sort);
    }

    if (tabRows.length === 1) {
        return <PureArgsTable rows={tabRows[0].rows} sort={sort} />;
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
