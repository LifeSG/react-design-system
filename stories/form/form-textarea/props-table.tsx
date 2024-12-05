import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "Textarea specific props",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLTextareaElement
                        </a>
                    </>
                ),
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
                name: "renderCustomCounter",
                description:
                    "Function to render a custom counter label component",
                propTypes: [
                    "(maxLength: number,currentValueLength: number) => JSX.Element",
                ],
            },
            {
                name: "transformValue",
                description: "Function to Transform field value */",
                propTypes: ["(value: string) => JSX.Element"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
