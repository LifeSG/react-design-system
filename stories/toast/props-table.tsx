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
                        Status type of <code>Toast</code>
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
                name: "label",
                description: (
                    <>
                        The label of the <code>Toast</code>. Can be used to
                        display the content information.
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
                        Specifies if the <code>Toast</code> will be
                        automatically dismiss after <strong>4 seconds</strong>
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onDismiss",
                description: (
                    <>
                        Called when the <code>Toast</code> is dismissed, either
                        by user action or from auto dismiss.
                    </>
                ),
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
