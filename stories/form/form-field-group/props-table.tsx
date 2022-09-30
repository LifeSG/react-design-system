import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "InputGroup specific props",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        All other props inherit&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement"
                            rel="noreferrer"
                        >
                            HTMLInputElement
                        </a>
                    </>
                ),
            },
            {
                name: "addon",
                description: "The addon component properties",
                propTypes: ["AddonProps<T, V>"],
            },
        ],
    },
    {
        name: "AddonProps<T, V>",
        attributes: [
            {
                name: "type",
                description: "The type of addon",
                propTypes: [`"label"`, `"list"`, `"custom"`],
                defaultValue: `"label"`,
            },
            {
                name: "position",
                description: "The position of the addon",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"left"`,
            },
            {
                name: "attributes",
                mandatory: true,
                description: "The addon component properties",
                propTypes: ["ListAddon<T, V>", "LabelAddon", "CustomAddon"],
            },
        ],
    },
    {
        name: "LabelAddon",
        attributes: [
            {
                name: "value",
                description: "The value of the addon label",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "ListAddon<T, V>",
        attributes: [
            {
                name: "value",
                description: "The value of the addon list",
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
                propTypes: ["(option: T) => string"],
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
    {
        name: "CustomAddon",
        attributes: [
            {
                name: "children",
                description: (
                    <>
                        The custom component specified as the addon (relevant if{" "}
                        <code>type</code>&nbsp; is <code>{`"custom"`}</code>
                    </>
                ),
                propTypes: ["JSX.Element"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
