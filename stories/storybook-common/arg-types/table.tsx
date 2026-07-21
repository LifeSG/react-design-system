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
                /** Detailed type information for the props table. */
                detail?: string | undefined;
                /** Type text summary for the props table. */
                summary?: string | undefined;
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
 * Check if `char` at position `i` is at the top level (not inside any brackets).
 * Mutates the depth counters passed in.
 */
function updateDepth(char: string, prevChar: string, depth: number[]) {
    if (char === "(") depth[0] += 1;
    if (char === ")") depth[0] = Math.max(0, depth[0] - 1);
    if (char === "[") depth[1] += 1;
    if (char === "]") depth[1] = Math.max(0, depth[1] - 1);
    if (char === "{") depth[2] += 1;
    if (char === "}") depth[2] = Math.max(0, depth[2] - 1);
    if (char === "<") depth[3] += 1;
    // Skip ">" when it's part of "=>"
    if (char === ">" && prevChar !== "=") depth[3] = Math.max(0, depth[3] - 1);
}

function isTopLevel(depth: number[]) {
    return depth[0] === 0 && depth[1] === 0 && depth[2] === 0 && depth[3] === 0;
}

/**
 * Returns true when the type text is a single function signature.
 *
 * Distinguishes `(file: Props) => void | Promise<void>` (single function, union return)
 * from `((a: string) => void) | ((b: number) => void)` (union of functions).
 */
function isSingleFunctionType(typeText: string) {
    const trimmed = typeText.trim();

    if (!trimmed.startsWith("(")) {
        return false;
    }

    let arrowCount = 0;
    const depth = [0, 0, 0, 0]; // paren, bracket, brace, angle

    for (let i = 0; i < trimmed.length; i += 1) {
        updateDepth(trimmed[i], trimmed[i - 1] ?? "", depth);

        if (
            isTopLevel(depth) &&
            trimmed[i] === "=" &&
            trimmed[i + 1] === ">"
        ) {
            arrowCount += 1;
            i += 1;
        }
    }

    return arrowCount === 1;
}

/** Split a type summary into union members (handles both `\n|` and ` | ` formats). */
function splitUnionMembers(summary: string) {
    const members = summary.includes("\n|")
        ? summary.split("\n|")
        : summary.split(" | ");

    return members.map((m) => m.trim()).filter(Boolean);
}

/**
 * When a type summary is a union containing function members, collapse it to
 * `firstMember | ...` with the full list in `detail` (shown on hover).
 * Single function types with union return types are left intact.
 */
function normalizeUnionTypeDisplay(argType: GeneratedArgType["value"]) {
    const summary = argType.table?.type?.summary;

    if (!summary || isSingleFunctionType(summary)) {
        return argType;
    }

    const members = splitUnionMembers(summary);

    if (members.length <= 1) {
        return argType;
    }

    const hasFunctionMember = members.some((m) => m.includes("=>"));

    if (!hasFunctionMember) {
        return argType;
    }

    return {
        ...argType,
        table: {
            ...argType.table,
            type: {
                summary: `${members[0]} | ...`,
                detail: members.join("\n"),
            },
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
        return (
            <PureArgsTable
                rows={tabRows[0]?.rows ?? {}}
                sort={sort}
            />
        );
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
