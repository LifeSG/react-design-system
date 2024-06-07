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
                propTypes: [`string | JSX.Element`],
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
                propTypes: [`string | JSX.Element`],
                defaultValue: "",
                mandatory: true,
            },
            {
                name: "autoDismiss",
                description: (
                    <>
                        Specifies if the <code>Toast</code> will be
                        automatically dismissed after{" "}
                        <code>autoDismissTime</code>.
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "autoDismissTime",
                description: (
                    <>
                        Time in milliseconds until the <code>Toast</code>{" "}
                        automatically dismisses. Defaults to{" "}
                        <strong>4 seconds</strong>.
                    </>
                ),
                propTypes: ["number"],
                defaultValue: "4000",
            },
            {
                name: "fixed",
                description: (
                    <>
                        Specifies if the <code>Toast</code> is to remain
                        displayed at the top of the page even though a scroll
                        has happened
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "actionButton",
                description: (
                    <>
                        Consist of <code>label</code> and <code>onClick</code>,
                        which dictates what the label of the button is and what
                        happens when the button is clicked on
                    </>
                ),
                propTypes: ["ActionButtonProps"],
            },
        ],
    },
    {
        name: "ActionButtonProps",
        attributes: [
            {
                name: "label",
                mandatory: true,
                description: "The label of the button",
                propTypes: ["string"],
            },
            {
                name: "onClick",
                mandatory: true,
                description:
                    "The function that should be rendered when the action button is clicked.",
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
