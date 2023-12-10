import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Filter } from "../../src/filter";
import { Form } from "../../src/form";
import { StoryContainer } from "../storybook-common";
import {
    DateFilter,
    SearchFilter,
    StyledFilterItem,
    TextFilter,
    useFilters,
} from "./doc-elements";

type Component = typeof Filter;

const meta: Meta<Component> = {
    title: "Modules/Filter",
    component: Filter,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const {
            currentFilters,
            draftFilters,
            clearButtonDisabled,
            updateFilter,
            saveFilters,
            dismissFilters,
            clearFilters,
        } = useFilters({ search: "", date: undefined }); // your custom filter state management here
        return (
            <StoryContainer>
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
            </StoryContainer>
        );
    },
};

export const ConfiguringFilterItem: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
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
            </StoryContainer>
        );
    },
};

export const HandlingExpandedState: StoryObj<Component> = {
    render: () => {
        const [expanded, setExpanded] = useState("item-1");
        const handleExpandChange = (item) => setExpanded(item);
        return (
            <StoryContainer>
                <Filter>
                    <Filter.Item
                        title="Uncontrolled"
                        showMobileDivider={false}
                        initialExpanded
                    >
                        Expanded by default with <code>initialExpanded</code>{" "}
                        prop
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
            </StoryContainer>
        );
    },
};

export const Minimised: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
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
            </StoryContainer>
        );
    },
};

export const AccessingMode: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Filter>
                    <Filter.Item title="Mode" showMobileDivider={false}>
                        {(mode) =>
                            mode === "mobile"
                                ? "Mobile view. Switch to a larger viewport to see default view."
                                : "Default view. Switch to a smaller viewport to see mobile view."
                        }
                    </Filter.Item>
                </Filter>
            </StoryContainer>
        );
    },
};

export const WithFloatingContent: StoryObj<Component> = {
    render: () => {
        const [showOptions, setShowOptions] = useState(false);
        return (
            <StoryContainer>
                <Filter>
                    <Filter.Item
                        title="Category 1"
                        style={{
                            paddingBottom: showOptions ? "17rem" : "1rem",
                        }}
                        showMobileDivider={false}
                    >
                        <Form.Select
                            options={[
                                {
                                    value: "A",
                                    label: "Option A",
                                },
                                {
                                    value: "B",
                                    label: "Option B",
                                },
                                {
                                    value: "C",
                                    label: "Option C",
                                },
                                {
                                    value: "D",
                                    label: "Option D",
                                },
                            ]}
                            valueExtractor={(item) => item.value}
                            listExtractor={(item) => item.label}
                            displayValueExtractor={(item) => item.label}
                            onShowOptions={() => setShowOptions(true)}
                            onHideOptions={() => setShowOptions(false)}
                        />
                    </Filter.Item>
                </Filter>
            </StoryContainer>
        );
    },
};

export const DisplayFilterInFullscreen: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer
                style={{
                    height: "80vh",
                    border: "1px solid grey",
                }}
            >
                <Filter.Page>
                    <div style={{ margin: "1rem" }}>Custom content</div>
                </Filter.Page>
            </StoryContainer>
        );
    },
};
