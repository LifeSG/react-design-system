import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "InputNestedSelect specific props",
        attributes: [
            {
                name: "options",
                mandatory: true,
                description: "A list of options that a user can choose from",
                propTypes: ["T[]"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
