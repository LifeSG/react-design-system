import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "Input specific props",
        attributes: [
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
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
