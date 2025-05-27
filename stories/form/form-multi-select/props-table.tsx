import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "InputMultiSelect specific props",
        attributes: [
            {
                name: "options",
                mandatory: true,
                description: "A list of options that a user can choose from",
                propTypes: ["T[]"],
            },
            {
                name: "selectedOptions",
                description: "The selected option objects",
                propTypes: ["T[]"],
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
                name: "searchPlaceholder",
                description: "The placeholder for the search field",
                propTypes: ["string"],
            },
            {
                name: "searchFunction",
                description:
                    "The custom function to perform a search when the user enters a value in the search input",
                propTypes: ["(searchValue: string) => T[]"],
            },
            {
                name: "onSelectOptions",
                description:
                    "Called when an option is selected, or when `Select all` or `Unselect all` is clicked",
                propTypes: ["(options: T[]) => void"],
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
                name: "maxSelectable",
                description:
                    "Specifies the maximum options that can be selected",
                propTypes: ["number"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
