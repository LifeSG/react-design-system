import type { FilterItemCheckboxOptionProps } from "@lifesg/react-design-system/filter";

export const getOptions = (
    count: number,
    labelFormatter: (index: number) => string = (i) => `Option ${i + 1}`
): FilterItemCheckboxOptionProps[] =>
    Array.from({ length: count }, (_, i) => ({
        value: `${i + 1}`,
        label: labelFormatter(i),
    }));

export const nonUniformOptions: FilterItemCheckboxOptionProps[] = [
    { value: "option-1", label: "1" },
    { value: "option-2", label: "Option 2" },
    {
        value: "option-3",
        label: "This is an option with a little bit longer text",
    },
    {
        value: "option-4",
        label: "This is an option which is lengthier than most of the other options for some mysterious reason",
    },
    { value: "option-5", label: "Option 5" },
];

export const nestedOptions: FilterItemCheckboxOptionProps[] = [
    {
        value: "asia",
        label: "Asia",
        options: [
            {
                value: "south-east-asia",
                label: "South-East Asia",
                options: [
                    { value: "singapore", label: "Singapore" },
                    { value: "malaysia", label: "Malaysia" },
                    { value: "thailand", label: "Thailand" },
                ],
            },
            {
                value: "east-asia",
                label: "East Asia",
                options: [
                    { value: "japan", label: "Japan" },
                    { value: "south-korea", label: "South Korea" },
                ],
            },
        ],
    },
    {
        value: "europe",
        label: "Europe",
        options: [
            {
                value: "western-europe",
                label: "Western Europe",
                options: [
                    { value: "france", label: "France" },
                    { value: "germany", label: "Germany" },
                ],
            },
            {
                value: "northern-europe",
                label: "Northern Europe",
                options: [
                    { value: "norway", label: "Norway" },
                    { value: "sweden", label: "Sweden" },
                ],
            },
        ],
    },
    {
        value: "africa",
        label: "Africa",
        options: [
            {
                value: "east-africa",
                label: "East Africa",
                options: [
                    { value: "kenya", label: "Kenya" },
                    { value: "tanzania", label: "Tanzania" },
                ],
            },
        ],
    },
    {
        value: "americas",
        label: "Americas",
        options: [
            {
                value: "north-america",
                label: "North America",
                options: [
                    { value: "usa", label: "United States" },
                    { value: "canada", label: "Canada" },
                ],
            },
            {
                value: "south-america",
                label: "South America",
                options: [
                    { value: "brazil", label: "Brazil" },
                    { value: "argentina", label: "Argentina" },
                ],
            },
        ],
    },
];
