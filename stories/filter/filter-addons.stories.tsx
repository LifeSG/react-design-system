import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from "../../src/filter";
import { StoryContainer } from "../storybook-common";
import { useFilters } from "./doc-elements";

type Component = typeof Filter;

const meta: Meta<Component> = {
    title: "Modules/Filter/Addons",
    component: Filter,
};

export default meta;

export const FilterCheckbox: StoryObj<Component> = {
    render: () => {
        const {
            currentFilters,
            draftFilters,
            clearButtonDisabled,
            updateFilter,
            saveFilters,
            dismissFilters,
            clearFilters,
        } = useFilters({ cat1: [], cat2: [] }); // your custom filter state management here
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
                            <Filter.Checkbox
                                showMobileDivider={false}
                                title="With 5 or less items"
                                selectedOptions={draftFilters.cat1}
                                onSelect={updateFilter(mode, "cat1")}
                                options={[
                                    {
                                        value: "1",
                                        label: "Sample text",
                                    },
                                    {
                                        value: "2",
                                        label: "Sample teeext",
                                    },
                                    {
                                        value: "3",
                                        label: "Sample teeeeeeeeext",
                                    },
                                ]}
                            />
                            <Filter.Checkbox
                                title="With more than 5 items"
                                selectedOptions={draftFilters.cat2}
                                onSelect={updateFilter(mode, "cat2")}
                                options={[
                                    {
                                        value: "1",
                                        label: "Label 1",
                                    },
                                    {
                                        value: "2",
                                        label: "Label 2",
                                    },
                                    {
                                        value: "3",
                                        label: "Label 3",
                                    },
                                    {
                                        value: "4",
                                        label: "Label 4",
                                    },
                                    {
                                        value: "5",
                                        label: "Label 5, which is much longer than other labels for some mysterious reason",
                                    },
                                    {
                                        value: "6",
                                        label: "Label 6",
                                    },
                                    {
                                        value: "7",
                                        label: "Label 7",
                                    },
                                    {
                                        value: "8",
                                        label: "Label 8",
                                    },
                                ]}
                            />
                        </>
                    )}
                </Filter>
            </StoryContainer>
        );
    },
};
