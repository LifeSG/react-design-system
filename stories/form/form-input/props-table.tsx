import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "Input specific props",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLInputElement
                        </a>
                    </>
                ),
            },
            {
                name: "spacing",
                description: (
                    <>
                        Sets the number of characters before a space is
                        added&nbps; (works only with type <code>tel</code> input
                    </>
                ),

                propTypes: ["number"],
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
                name: "allowClear",
                description:
                    "Indicates if clear icon button will be displayed in the component",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onClear",
                description: "Called when clear icon is clicked",
                propTypes: ["() => void"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description: "Indicates the style type of the component",
                propTypes: [`"no-border"`, `"bordered"`],
                defaultValue: "bordered",
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
