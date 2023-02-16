import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                mandatory: true,
                description: (
                    <>
                        Type of <code>Toast</code>
                    </>
                ),
                propTypes: [`success`, `error`, `warning`, `info`],
                defaultValue: `success`,
            },
            {
                name: "theme",
                description: (
                    <>
                        Type of <code>Theme</code>
                    </>
                ),
                propTypes: [`light`, `dark`],
                defaultValue: ``,
            },
            {
                name: "title",
                description: (
                    <>
                        The title of the <code>Toast</code>
                    </>
                ),
                propTypes: [`string`],
                defaultValue: ``,
            },
            {
                name: "children",
                description: (
                    <>
                        {" "}
                        The content of the <code>Toast</code>
                    </>
                ),
                propTypes: ["string"],
                defaultValue: "",
            },
            {
                name: "handleDismiss",
                description: (
                    <>
                        Dismiss when <code>Toast</code> is shown
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
