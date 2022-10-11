import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "CustomField specific props",
        attributes: [
            {
                name: "children",
                description: "The custom element to be added",
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "disabled",
                description: (
                    <>
                        Indicates if the component is disabled and a disabled
                        display is to be present for the label.
                        <br />
                        <strong>
                            (Note: You will need to handle the disabled state of
                            the custom component yourself)
                        </strong>
                    </>
                ),
                propTypes: ["boolean"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
