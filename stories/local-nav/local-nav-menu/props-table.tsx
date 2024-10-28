import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: (
                    <>
                        The type of <code>Menu</code>
                    </>
                ),
            },
            {
                name: "visibleSectionIndex",
                description:
                    "which item should be selected from the dropdown for the initial render",
                propTypes: ["number"],
            },
            {
                name: "className",
                description: "The class selector of the element",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier of the element",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the element",
                propTypes: ["string"],
            },

            {
                name: "onNavItemClickCb",
                description: (
                    <>
                        Called when the item in the <code>dropdown</code> is
                        selected or deselected
                    </>
                ),
                propTypes: [
                    "...args: any[]) => (e?: React.MouseEvent) => any;",
                ],
            },

            {
                name: "titleList",
                description: (
                    <>
                        The title inside the <code>dropdown</code>, displayed
                        when the dropdown is open
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
