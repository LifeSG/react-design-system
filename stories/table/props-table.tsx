import {
    ApiTable,
    ApiTableSectionProps,
    PropTableTabs,
} from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component accepts all native HTML{" "}
                        <code>table</code>, <code>thead</code>,{" "}
                        <code>tbody</code>, <code>tr</code>, <code>th</code> and{" "}
                        <code>td</code> attributes via <code>Table</code>,{" "}
                        <code>Table.Head</code>, <code>Table.Body</code>,{" "}
                        <code>Table.Row</code>, <code>Table.HeaderCell</code>{" "}
                        and <code>Table.Cell</code> sub-components respectively.
                    </>
                ),
                propTypes: [],
            },
        ],
    },
];

export const PropsTableTabs = () => (
    <PropTableTabs
        tabs={[{ label: "Table", content: <ApiTable sections={DATA} /> }]}
    />
);
