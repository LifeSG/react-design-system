import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "InputNestedMultiSelect specific props",
        attributes: [
            {
                name: "options",
                mandatory: true,
                description: "A list of options that a user can choose from",
                propTypes: ["L1OptionProps<V1, V2, V3>[]"],
            },
            {
                name: "selectedKeyPaths",
                description: "The key paths of the selected options",
                propTypes: ["string[][]"],
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
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component has a read only state and selection is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "mode",
                description:
                    "Determines if items are expanded or collapsed when the dropdown is opened",
                propTypes: [`"default"`, `"expand"`, `"collapse"`],
                defaultValue: `"default"`,
            },
            {
                name: "valueToStringFunction",
                description:
                    "The function to convert a value to a string. Only single callback used for both selects. Assumption: values are homogenous for both selects.",
                propTypes: ["(value: V1 | V2 | V3) => string"],
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
                name: "hideNoResultsDisplay",
                description:
                    "If specified, the default no results display will not be rendered",
                propTypes: ["boolean"],
                defaultValue: "false",
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
                name: "onSelectOptions",
                description: "Called when an option is selected",
                propTypes: [
                    "(keyPaths: string[][], values: Array<V1 | V2 | V3>) => void",
                ],
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
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
