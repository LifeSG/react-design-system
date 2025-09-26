import {
    ApiTable,
    ApiTableSectionProps,
    TabAttribute,
    Tabs,
} from "stories/storybook-common";

const FILTER_CHECKBOX_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Filter.Item
                        </a>
                    </>
                ),
            },
            {
                name: "selectedOptions",
                description: "List of selected options",
                propTypes: ["T[]"],
            },
            {
                name: "options",
                mandatory: true,
                description: "List of options",
                propTypes: ["T[]"],
            },
            {
                name: "minimisableOptions",
                description: "Whether the options can be minimised",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "showAsCheckboxInMobile",
                description: "Display as checkbox list in mobile view",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onSelect",
                description: "Called when selection changes",
                propTypes: ["(options: T[]) => void"],
            },
            {
                name: "useToggleContentWidth",
                description:
                    "Changes the minimum width of the checkbox toggle to fit its content (on mobile)",
                propTypes: ["boolean"],
            },
            {
                name: "labelExtractor",
                description: (
                    <>
                        Function to derive display value from an item. If not
                        set, checks <code>item.label</code>
                    </>
                ),
                propTypes: ["(item: T) => string"],
            },
            {
                name: "valueExtractor",
                description: (
                    <>
                        Function to derive value from an item. If not set,
                        checks <code>item.value</code>
                    </>
                ),
                propTypes: ["(item: T) => string"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Filter.Checkbox",
        component: <ApiTable sections={FILTER_CHECKBOX_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
