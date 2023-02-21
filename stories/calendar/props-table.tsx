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
                        The value of the selected date in string based
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
                        The dates to be disabled. E.g. &nbsp;
                        <code>[YYYY-MM-DD, YYYY-MM-DD]</code>
                    </>
                ),
                propTypes: ["YYYY-MM-DD"],
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
            {
                name: "onChange",
                description: (
                    <>
                        Called when the user selected a value from the calendar.
                        Returns value in&nbsp;
                        <code>YYYY-MM-DD</code>&nbsp;format. Should the value be
                        invalid, the&nbsp; &lsquo;Invalid Date&rsquo; value will
                        be returned
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
