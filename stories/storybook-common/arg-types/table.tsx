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
        type: {
            /** Whether the prop is required (non-optional). */
            required?: boolean | undefined;
        };
        /** Metadata for Storybook's addon-docs table layout and categorization. */
        table: {
            /** Interface or type alias name for row grouping. */
            category: string;
            /** Optional tab group from `@storybookSection` JSDoc tag. */
            tabGroup: string | undefined;
            /** Deprecation info for Storybook's built-in deprecation badge. */
            jsDocTags?: { deprecated: string } | undefined;
            /** Type information. */
            type: {
                /** Detailed type information for the props table. */
                detail?: string | undefined;
                /** Type text summary for the props table. */
                summary?: string | undefined;
                /** Pre-split union members from the generator (avoids re-parsing pipes in render). */
                summaryParts?: string[] | undefined;
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

// =============================================================================
// Union type display normalization
// =============================================================================

/**
 * Normalize type display for PureArgsTable.
 *
 * - When `summaryParts` is present (union type), joins them into a `summary` string.
 * - If the union contains function members, collapses to `firstMember | ...`
 *   with the full list in `detail` (shown on hover).
 * - When only `summary` is present (non-union), passes through unchanged.
 */
function normalizeUnionTypeDisplay(argType: GeneratedArgType["value"]) {
    const { summaryParts } = argType.table?.type ?? {};

    if (!summaryParts || summaryParts.length <= 1) {
        return argType;
    }

    const hasFunctionMember = summaryParts.some((m) => m.includes("=>"));

    return {
        ...argType,
        table: {
            ...argType.table,
            type: hasFunctionMember
                ? {
                      summary: `${summaryParts[0]} | ...`,
                      detail: summaryParts.join("\n"),
                  }
                : { summary: summaryParts.join(" | ") },
        },
    };
}

// =============================================================================
// Tab rendering
// =============================================================================

interface AutoArgTypesTabsProps {
    of: ArgTypesProps["of"];
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

/** Group generated argTypes rows by their tabGroup, applying union normalization. */
function buildTabRows(
    generatedArgTypes: PureArgsTableRows,
    defaultTabTitle: string
): Array<{ title: string; rows: PureArgsTableRows }> {
    const rowsByTab = new Map<string, PureArgsTableRows>();

    for (const [key, rawArgType] of Object.entries(generatedArgTypes)) {
        const argType = normalizeUnionTypeDisplay(
            rawArgType as GeneratedArgType["value"]
        );
        const tab = argType.table?.tabGroup ?? defaultTabTitle;

        if (!rowsByTab.has(tab)) {
            rowsByTab.set(tab, {});
        }

        rowsByTab.get(tab)![key] = argType;
    }

    return Array.from(rowsByTab.entries())
        .map(([title, rows]) => ({ title, rows }))
        .sort((a, b) => {
            if (a.title === defaultTabTitle) return -1;
            if (b.title === defaultTabTitle) return 1;
            return a.title.localeCompare(b.title);
        });
}

/** Resolve the story title from a stories module passed via `of`. */
function getStoryTitle(
    of: ArgTypesProps["of"]
): keyof typeof storybookArgTypesByTitle | undefined {
    if (!of || typeof of !== "object") {
        return undefined;
    }

    const title = (of as StoriesModuleLike).default?.title;

    if (!title || !(title in storybookArgTypesByTitle)) {
        return undefined;
    }

    return title as keyof typeof storybookArgTypesByTitle;
}

/**
 * Auto-render ArgTypes tabs from the global generated registry.
 * Falls back to standard ArgTypes when the story can't be resolved.
 */
export const AutoArgTypesTabs = ({
    of,
    sort = "alpha",
    defaultTabTitle = "Component",
}: AutoArgTypesTabsProps): JSX.Element => {
    const storyTitle = getStoryTitle(of);
    const generatedArgTypes = storyTitle
        ? storybookArgTypesByTitle[storyTitle]
        : undefined;

    if (!generatedArgTypes) {
        return <ArgTypes of={of} sort={sort} />;
    }

    const tabRows = buildTabRows(
        generatedArgTypes as PureArgsTableRows,
        defaultTabTitle
    );

    if (tabRows.length <= 1) {
        return <PureArgsTable rows={tabRows[0]?.rows ?? {}} sort={sort} />;
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
