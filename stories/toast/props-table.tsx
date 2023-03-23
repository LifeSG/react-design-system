import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLDivElement
                        </a>
                    </>
                ),
            },
            {
                name: "type",
                mandatory: true,
                description: (
                    <>
                        Type of <code>Toast</code>
                    </>
                ),
                propTypes: [`"success"`, `"warning"`, `"error"`, `"info"`],
                defaultValue: `"success"`,
            },
            {
                name: "title",
                description: (
                    <>
                        The title of the <code>Toast</code>
                    </>
                ),
                propTypes: [`string`],
                defaultValue: "",
            },
            {
                name: "description",
                description: (
                    <>
                        The content of the <code>Toast</code>
                    </>
                ),
                propTypes: [`string`],
                defaultValue: "",
                mandatory: true,
            },
            {
                name: "autoDismiss",
                description: (
                    <>
                        An optional duration the <code>toast</code> should be
                        closed
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
