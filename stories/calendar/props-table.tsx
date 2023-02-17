import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        name: "Calendar specific props",
        attributes: [
            {
                name: "value",
                description: (
                    <>
                        The value of the start date in string based
                        format.&nbsp;
                        <code>YYYY-MM-DD</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "disabledDates",
                description: (
                    <>
                        Date value will be disabled, unselectable.&nbsp;
                        <code>YYYY-MM-DD</code>
                    </>
                ),
                propTypes: ["YYYY-MM-DD"],
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when the user selected a value from the calendar.
                        Returns value in&nbsp;
                        <code>YYYY-MM-DD</code>&nbsp;format. Should the value be
                        invalid, the&nbsp; &lsquo;Invalid date&rsquo; value will
                        be returned
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
            {
                name: "type",
                description: (
                    <>
                        Specifies the calendar type which affects layout and
                        styles
                    </>
                ),
                propTypes: [`"calendar"`, `"input"`],
                defaultValue: `"calendar"`,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
