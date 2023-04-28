import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        name: "Calendar specific props",
        attributes: [
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "disabledDates",
                description: (
                    <>
                        The dates to be disabled. To specify in a format as such
                        (e.g. <code>[2022-01-01, 2022-02-02]</code>)
                    </>
                ),
                propTypes: ["string[]"],
            },
            {
                name: "id",
                description: "The unique identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "type",
                description: (
                    <>
                        Specifies the calendar type which affects layout and
                        styles. <br />
                        When the <code>standalone</code> type is specified, the
                        component is rendered individually. While if
                        <code>input</code> is specified, the controls interfaces
                        are scaled down. It is usually used when rendering
                        within an input component
                    </>
                ),
                propTypes: [`"standalone"`, `"input"`],
                defaultValue: `"standalone"`,
            },
            {
                name: "value",
                description: (
                    <>
                        The value of the selected date in&nbsp;
                        <code>YYYY-MM-DD</code> format
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "onSelect",
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
