import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Filter } from "src/filter";
import { StoryDecorator } from "stories/storybook-common";
import { ComponentWithFloatingElement } from "./doc-elements/example-dropdown";
import {
    DateFilter,
    SearchFilter,
    StyledFilterItem,
    TextFilter,
    useFilters,
} from "./doc-elements/example-filter-items";

type Component = typeof Filter;

const meta: Meta<Component> = {
    title: "Selection and input/Filter",
    component: Filter,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        const {
            draftFilters,
            clearButtonDisabled,
            updateFilter,
            saveFilters,
            dismissFilters,
            clearFilters,
        } = useFilters({ search: "", date: undefined }); // your custom filter state management here
        return (
            <Filter
                clearButtonDisabled={clearButtonDisabled}
                onClear={clearFilters}
                onDismiss={dismissFilters}
                onDone={saveFilters}
            >
                {(mode) => (
                    <>
                        <StyledFilterItem
                            $mode={mode}
                            collapsible={false}
                            showMobileDivider={false}
                            showDivider={false}
                        >
                            <SearchFilter
                                mode={mode}
                                value={draftFilters.search}
                                onChange={updateFilter(mode, "search")}
                            />
                        </StyledFilterItem>
                        <Filter.Item title="Date">
                            <DateFilter
                                mode={mode}
                                value={draftFilters.date}
                                onChange={updateFilter(mode, "date")}
                            />
                        </Filter.Item>
                        <Filter.Item title="Just an example of long content that may wrap to the next line">
                            <TextFilter />
                        </Filter.Item>
                    </>
                )}
            </Filter>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const ConfiguringFilterItem: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Filter>
                <Filter.Item
                    title="No divider"
                    showMobileDivider={false}
                    showDivider={false}
                >
                    Without divider
                </Filter.Item>
                <Filter.Item title="With divider">With divider</Filter.Item>
                <Filter.Item title="Default">Collapsible</Filter.Item>
                <Filter.Item>No title, collapsible</Filter.Item>
                <Filter.Item collapsible={false}>
                    No title, not collapsible
                </Filter.Item>
                <Filter.Item title="Not collapsible" collapsible={false}>
                    Always visible
                </Filter.Item>
            </Filter>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const HandlingExpandedState: StoryObj<Component> = {
    render: (_args) => {
        const [expanded, setExpanded] = useState("item-1");
        const handleExpandChange = (item: string) => setExpanded(item);
        return (
            <Filter>
                <Filter.Item
                    title="Uncontrolled"
                    showMobileDivider={false}
                    initialExpanded
                >
                    Expanded by default with <code>initialExpanded</code> prop
                </Filter.Item>
                <Filter.Item
                    title="Controlled Item 1"
                    expanded={expanded === "item-1"}
                    onExpandChange={() => handleExpandChange("item-1")}
                >
                    Controlled by <code>expanded</code> prop
                </Filter.Item>
                <Filter.Item
                    title="Controlled Item 2"
                    expanded={expanded === "item-2"}
                    onExpandChange={() => handleExpandChange("item-2")}
                >
                    Controlled by <code>expanded</code> prop
                </Filter.Item>
            </Filter>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const Minimised: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Filter>
                <Filter.Item
                    title="Minimised"
                    minimisable
                    showMobileDivider={false}
                >
                    <TextFilter />
                </Filter.Item>
                <Filter.Item
                    title="With custom minimised height"
                    minimisable
                    minimisedHeight={100}
                >
                    <TextFilter />
                </Filter.Item>
            </Filter>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const FilterItemTooltip: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Filter>
                <Filter.Item
                    title="Filter item"
                    addon={{
                        type: "popover",
                        content: "This is popover content",
                    }}
                    showMobileDivider={false}
                >
                    This has a tooltip in the filter item title
                </Filter.Item>
            </Filter>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const AccessingMode: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Filter>
                <Filter.Item title="Mode" showMobileDivider={false}>
                    {(mode) =>
                        mode === "mobile"
                            ? "Mobile view. Switch to a larger viewport to see default view."
                            : "Default view. Switch to a smaller viewport to see mobile view."
                    }
                </Filter.Item>
            </Filter>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithFloatingContent: StoryObj<Component> = {
    render: (_args) => {
        const [showOptions, setShowOptions] = useState(false);
        return (
            <Filter>
                <Filter.Item
                    title="Category 1"
                    showMobileDivider={false}
                    expanded
                    style={{
                        paddingBottom: showOptions ? "136px" : undefined,
                    }}
                >
                    <ComponentWithFloatingElement
                        onShowOptions={() => setShowOptions(true)}
                        onHideOptions={() => setShowOptions(false)}
                    />
                </Filter.Item>
            </Filter>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const DisplayFilterInFullscreen: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Filter.Page>
                <div style={{ margin: "1rem" }}>Custom content</div>
            </Filter.Page>
        );
    },
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => {
            return (
                <div
                    style={{
                        height: "clamp(min(80vh,280px), 100vh, 720px)",
                        width: "clamp(min(100vw, 280px), 100vw, 480px)",
                        border: "1px solid grey",
                        margin: "auto",
                    }}
                >
                    <Story />
                </div>
            );
        },
    ],
};
