import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "The identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "selectedDate",
                mandatory: true,
                description: (
                    <>
                        The date string to display, any format that is
                        acceptable by <code>Dayjs</code> will work.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "minDate",
                description:
                    "The minimum date that is allowed to be navigated to.",
                propTypes: ["string"],
            },
            {
                name: "maxDate",
                description:
                    "The maximum date that is allowed to be navigated to.",
                propTypes: ["string"],
            },
            {
                name: "isLoading",
                description: "The loading state to disable navigation buttons.",
                defaultValue: "false",
                propTypes: ["boolean"],
            },
            {
                name: "onLeftArrowClick",
                description:
                    "The callback function which will be called on left arrow navigation button click.",
                propTypes: ["(currentDate: string) => void"],
            },
            {
                name: "onRightArrowClick",
                description:
                    "The callback function which will be called on right arrow navigation button click.",
                propTypes: ["(currentDate: string) => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
