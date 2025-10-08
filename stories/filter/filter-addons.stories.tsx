import type { Meta, StoryObj } from "@storybook/react";
import { Filter, FilterItemCheckboxOptionProps } from "src/filter";
import { StoryDecorator } from "stories/storybook-common";
import { useFilters } from "./doc-elements/example-filter-items";

type Component = typeof Filter;

const meta: Meta<Component> = {
    title: "Selection and input/Filter/Addons",
    component: Filter,
};

export default meta;

export const FilterCheckbox: StoryObj<Component> = {
    render: () => {
        const {
            draftFilters,
            clearButtonDisabled,
            updateFilter,
            saveFilters,
            dismissFilters,
            clearFilters,
        } = useFilters({ cat1: [], cat2: [], cat3: [], cat4: [] }); // your custom filter state management here
        return (
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
                        <Filter.Checkbox
                            title="With checkbox display for mobile view"
                            showAsCheckboxInMobile
                            selectedOptions={draftFilters.cat3}
                            onSelect={updateFilter(mode, "cat3")}
                            options={[
                                {
                                    value: "1",
                                    label: "Another Label 1",
                                },
                                {
                                    value: "2",
                                    label: "Another Label 2",
                                },
                                {
                                    value: "3",
                                    label: "Another Label 3",
                                },
                                {
                                    value: "4",
                                    label: "Label 4, which is much longer than other labels for some mysterious reason this time",
                                },
                                {
                                    value: "5",
                                    label: "Label 5, which is also quite long but not as long as Label 4",
                                },
                                {
                                    value: "6",
                                    label: "Another Label 6",
                                },
                                {
                                    value: "7",
                                    label: "Another Label 7",
                                },
                                {
                                    value: "8",
                                    label: "Another Label 8",
                                },
                            ]}
                        />
                        <Filter.Checkbox
                            title="Without minimisable options"
                            minimisableOptions={false}
                            selectedOptions={draftFilters.cat4}
                            onSelect={updateFilter(mode, "cat4")}
                            options={[
                                {
                                    value: "1",
                                    label: "Another Label 1",
                                },
                                {
                                    value: "2",
                                    label: "Another Label 2",
                                },
                                {
                                    value: "3",
                                    label: "Another Label 3",
                                },
                                {
                                    value: "4",
                                    label: "Label 4, which is much longer than other labels for some mysterious reason this time",
                                },
                                {
                                    value: "5",
                                    label: "Label 5, which is also quite long but not as long as Label 4",
                                },
                                {
                                    value: "6",
                                    label: "Another Label 6",
                                },
                                {
                                    value: "7",
                                    label: "Another Label 7",
                                },
                                {
                                    value: "8",
                                    label: "Another Label 8",
                                },
                            ]}
                        />
                    </>
                )}
            </Filter>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const FilterCheckboxNested: StoryObj<Component> = {
    render: () => {
        const {
            draftFilters,
            clearButtonDisabled,
            updateFilter,
            saveFilters,
            dismissFilters,
            clearFilters,
        } = useFilters({ nestedWith6Level: [], nestedWithViewMore: [] });

        const nestedWith6Level: FilterItemCheckboxOptionProps[] = [
            {
                value: "food",
                label: "Food & Dining",
                options: [
                    {
                        value: "fastfood",
                        label: "Fast Food",
                        options: [
                            {
                                value: "pizza",
                                label: "Pizza",
                                options: [
                                    {
                                        value: "margherita",
                                        label: "Margherita",
                                        options: [
                                            {
                                                value: "pepperoni",
                                                label: "Pepperoni",
                                                options: [
                                                    {
                                                        value: "restaurants",
                                                        label: "Restaurants",
                                                    },
                                                    {
                                                        value: "italian",
                                                        label: "Italian",
                                                    },
                                                    {
                                                        value: "chinese",
                                                        label: "Chinese",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ];

        const nestedWithViewMore: FilterItemCheckboxOptionProps[] = [
            {
                value: "food",
                label: "Food & Dining",
                options: [
                    {
                        value: "restaurants",
                        label: "Restaurants",
                        options: [
                            { value: "italian", label: "Italian" },
                            { value: "chinese", label: "Chinese" },
                            { value: "japanese", label: "Japanese" },
                        ],
                    },
                    {
                        value: "fastfood",
                        label: "Fast Food",
                        options: [
                            { value: "burgers", label: "Burgers" },
                            { value: "pizza", label: "Pizza" },
                        ],
                    },
                    { value: "cafes", label: "Cafes" },
                ],
            },
            {
                value: "shopping",
                label: "Shopping",
                options: [
                    {
                        value: "clothing",
                        label: "Clothing",
                        options: [
                            { value: "mens", label: "Men's Wear" },
                            { value: "womens", label: "Women's Wear" },
                            { value: "kids", label: "Kids' Wear" },
                        ],
                    },
                    { value: "electronics", label: "Electronics" },
                    { value: "books", label: "Books" },
                ],
            },
            {
                value: "entertainment",
                label: "Entertainment",
                options: [
                    { value: "movies", label: "Movies" },
                    { value: "concerts", label: "Concerts" },
                    { value: "sports", label: "Sports" },
                ],
            },
        ];

        return (
            <Filter
                clearButtonDisabled={clearButtonDisabled}
                onClear={clearFilters}
                onDismiss={dismissFilters}
                onDone={saveFilters}
            >
                {(mode) => (
                    <>
                        <Filter.Checkbox
                            title="Nested Options With 6 level"
                            selectedOptions={draftFilters.nestedWith6Level}
                            onSelect={updateFilter(mode, "nestedWith6Level")}
                            options={nestedWith6Level}
                            minimisable={false}
                        />
                        <Filter.Checkbox
                            title="Nested options with view more"
                            selectedOptions={draftFilters.nestedWithViewMore}
                            onSelect={updateFilter(mode, "nestedWithViewMore")}
                            options={nestedWithViewMore}
                        />
                    </>
                )}
            </Filter>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
