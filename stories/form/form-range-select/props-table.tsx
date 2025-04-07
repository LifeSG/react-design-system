import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "InputSelect specific props",
        attributes: [
            {
                name: "options",
                mandatory: true,
                description:
                    "A list of options that a user can choose from, has to specify options for from and to select options seperately.",
                propTypes: ["{from: T[], to: T[]}"],
            },
            {
                name: "selectedOption",
                description:
                    "The selected option object contain both selected options",
                propTypes: ["{from: T, to: T}"],
            },
            {
                name: "valueExtractor",
                description:
                    "The function to derive the value from an option. Only single callback used for both selects. Assumption: values are homogenous for both selects.",
                propTypes: ["(option: T) => V"],
            },
            {
                name: "listExtractor",
                description:
                    "The function to derive the option display value from an option. Only single callback used for both selects. Assumption: values are homogenous for both selects.",
                propTypes: ["(option: T) => string"],
            },
            {
                name: "displayValueExtractor",
                description:
                    "The function to derive the selector's display value from an option. Only single callback used for both selects. Assumption: values are homogenous for both selects.",
                propTypes: ["(option: T) => string"],
            },
            {
                name: "valueToStringFunction",
                description:
                    "The function to convert a value to a string. Only single callback used for both selects. Assumption: values are homogenous for both selects.",
                propTypes: ["(value: V) => string"],
            },
            {
                name: "name",
                description: "The name of the component",
                propTypes: ["string"],
            },
            {
                name: "placeholders",
                description: "The placeholder text for each select component",
                propTypes: ["{from: string, to: string}"],
                defaultValue: `{from: "Select", to: "Select"}`,
            },
            {
                name: "disabled",
                description:
                    "Indicates if the component is disabled and selection is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component is readOnly and selection is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: (
                    <>
                        Indicates if an error display is to be set&nbsp; (Not
                        needed if you indicated <code>errorMessage</code>)
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "optionsLoadState",
                description: (
                    <>
                        The visual state to represent the progress when options
                        are loaded asynchronously. This track load state of each
                        select options load state seperately.
                        <code>T</code> can be{" "}
                        <code>success | loading | failed</code>
                    </>
                ),
                propTypes: ["{from: T, to: T}"],
                defaultValue: `{from: "success", to: "success" }`,
            },
            {
                name: "optionTruncationType",
                description:
                    "Specifies the trunction type of the options display. Truncated text will be replaced with ellipsis",
                propTypes: [`"end"`, `"middle"`],
                defaultValue: `"middle"`,
            },
            {
                name: "listStyleWidth",
                description:
                    "Style option: The width of the option display. (E.g. '100%' or '12rem')",
                propTypes: ["string"],
            },
            {
                name: "enableSearch",
                description:
                    "When specified, it will allow a text base search for the items in the list",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "searchPlaceholder",
                description: "The placeholder for the search field",
                propTypes: ["string"],
            },
            {
                name: "searchFunction",
                description:
                    "The custom function to perform a search when the user enters a value in the search input. Only single callback used for both selects. Assumption: values are homogenous for both selects.",
                propTypes: ["(searchValue: string) => T[]"],
            },
            {
                name: "renderListItem",
                description:
                    "Function to customise the rendering of a list item",
                propTypes: [
                    "(item: T, args: ListItemRenderArgs) => JSX.Element",
                ],
            },
            {
                name: "renderCustomSelectedOption",
                description:
                    "Function to customise the selected option display in the selector",
                propTypes: ["(option: T) => JSX.Element"],
            },
            {
                name: "onSelectOption",
                description: "Called when an option is selected",
                propTypes: ["(option: T, extractedValue: T | V) => void"],
            },
            {
                name: "onShowOptions",
                description: "Called when the options dropdown is expanded",
                propTypes: ["() => void"],
            },
            {
                name: "onHideOptions",
                description: "Called when options dropdown is minimised",
                propTypes: ["() => void"],
            },
            {
                name: "onRetry",
                description:
                    "Called when retry button is clicked to retry loading the options",
                propTypes: ["() => void"],
            },
            {
                name: "onSearch",
                description: "Called when a search is being executed",
                propTypes: ["() => void"],
            },
        ],
    },
    {
        name: "ListItemRenderArgs",
        attributes: [
            {
                name: "selected",
                description:
                    "Indicates if the list item is selected for each select",
                propTypes: ["{from: boolean, to: boolean}"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
