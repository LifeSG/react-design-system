import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "PhoneNumberInput specific props",
        attributes: [
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
                name: "countrySelector",
                description: "The countrySelector component properties",
                propTypes: ["ListAddon<T, V>"],
            },
        ],
    },
    {
        name: "CountrySelector<T, V>",
        attributes: [
            {
                name: "value",
                description: "The value of the country selector",
                propTypes: ["T"],
            },
            {
                name: "placeholder",
                description: (
                    <>
                        The placeholder text of the addon (relevant if{" "}
                        <code>type</code>&nbsp; is <code>{`"list"`}</code>)
                    </>
                ),
                propTypes: ["string"],
                defaultValue: "Select",
            },
            {
                name: "options",
                description: "A list of options that a user can choose from",
                propTypes: ["T[]"],
            },
            {
                name: "selectedOption",
                description: "The option that is being selected",
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
                propTypes: ["(option: T) => string | object"],
            },
            {
                name: "displayValueExtractor",
                description:
                    "The function to derive the selector's display value from an option",
                propTypes: ["(option: T) => V"],
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
                name: "data-selector-testid",
                description: (
                    <>
                        The test identifier of the addon selector (relevant if{" "}
                        <code>type</code>&nbsp; is <code>{`"list"`}</code>)
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
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
