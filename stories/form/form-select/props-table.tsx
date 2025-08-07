import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "InputSelect specific props",
        attributes: [
            {
                name: "options",
                mandatory: true,
                description: "A list of options that a user can choose from",
                propTypes: ["T[]"],
            },
            {
                name: "selectedOption",
                description: "The selected option object",
                propTypes: ["T"],
            },
            {
                name: "valueExtractor",
                description: "The function to derive the value from an option",
                propTypes: ["(option: T) => V"],
            },
            {
                name: "listExtractor",
                description:
                    "The function to derive the option display value from an option",
                propTypes: ["(option: T) => string"],
            },
            {
                name: "displayValueExtractor",
                description:
                    "The function to derive the selector's display value from an option",
                propTypes: ["(option: T) => string"],
            },
            {
                name: "valueToStringFunction",
                description: "The function to convert a value to a string",
                propTypes: ["(value: V) => string"],
            },
            {
                name: "name",
                description: "The name of the component",
                propTypes: ["string"],
            },
            {
                name: "placeholder",
                description: "The placeholder text of the component",
                propTypes: ["string"],
                defaultValue: "Select",
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
                description:
                    "The visual state to represent the progress when options are loaded asynchronously",
                propTypes: [`"success"`, `"loading"`, `"failed"`],
                defaultValue: `"success"`,
            },
            {
                name: "optionTruncationType",
                description:
                    "Specifies the trunction type of the options display. Truncated text will be replaced with ellipsis",
                propTypes: [`"end"`, `"middle"`],
                defaultValue: `"end"`,
            },
            {
                name: "listStyleWidth (deprecated)",
                description: (
                    <>
                        Style option: The width of the option display.
                        <br />
                        <b>Note:</b> This attribute has no effect and will be
                        removed in a future version
                    </>
                ),
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
                name: "searchFunction",
                description:
                    "The custom function to perform a search when the user enters a value in the search input",
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
            {
                name: "hideNoResultsDisplay",
                description:
                    "If specified, the default no results display will not be rendered",
                propTypes: ["boolean"],
            },
            {
                name: "customLabels",
                description: "Specifies custom label to replace default labels",
                propTypes: ["DropdownCustomLabelProps"],
            },
            {
                name: "renderCustomCallToAction",
                description:
                    "Function to render a custom call to action component at the bottom of dropdown list",
                propTypes: [
                    "(hideOptions: () => void, options: T[]) => JSX.Element",
                ],
            },
            {
                name: "variant",
                description: "The display variant of the component",
                propTypes: [`"small"`, `"default"`],
                defaultValue: `"default"`,
            },
            {
                name: "alignment",
                description:
                    "Specifies if the dropdown is aligned to the left or right of the main field",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"left"`,
            },
            {
                name: "dropdownZIndex",
                description:
                    "The custom z-index of the dropdown. Try specifying this if you encounter z-index conflicts.",
                propTypes: ["number"],
                defaultValue: "50",
            },
            {
                name: "dropdownRootNode",
                description: (
                    <>
                        The root element that hosts the dropdown element. Only
                        specify this if you absolutely need to change the parent
                        of the dropdown.
                        <br />
                        <br />
                        For example, the dropdown is rendered in{" "}
                        <code>body</code> by default. This could cause scroll
                        issues if your UI only scrolls within a certain
                        container. In that case, you can specify this prop so
                        that they share the same stacking context. However, note
                        that this might cause z-index issues since it will no
                        longer be rendered in <code>body</code>.
                    </>
                ),
                propTypes: ["RefObject<HTMLElement>"],
                defaultValue: (
                    <>
                        document <code>body</code>
                    </>
                ),
            },
        ],
    },
    {
        name: "ListItemRenderArgs",
        attributes: [
            {
                name: "selected",
                description: "Indicates if the list item is selected",
                propTypes: ["boolean"],
            },
        ],
    },
    {
        name: "DropdownCustomLabelProps",
        attributes: [
            {
                name: "searchPlaceholder",
                description: "The placeholder for the search field",
                propTypes: ["string"],
            },
            {
                name: "noResultsLabel",
                description:
                    "Specifies to replace the default no results display",
                propTypes: ["string"],
            },
            {
                name: "noResultsDescription",
                description:
                    "Additional description rendered after the default no results display",
                propTypes: ["() => React.ReactNode"],
            },
            {
                name: "selectAllButtonLabel",
                description:
                    "Specifies to replace the default Select all button label",
                propTypes: ["string"],
            },
            {
                name: "clearAllButtonLabel",
                description:
                    "Specifies to replace the default Clear all button label",
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
