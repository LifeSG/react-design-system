import { ApiTable } from "stories/storybook-common/api-table";
import type { ApiTableSectionProps } from "stories/storybook-common/api-table/types";

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
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
