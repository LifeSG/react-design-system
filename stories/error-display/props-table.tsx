import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                mandatory: true,
                description: "The type of error",
                propTypes: (
                    <>
                        <div
                            style={{
                                display: "block",
                                marginBottom: "0.25rem",
                            }}
                        >
                            <code
                                style={{ marginRight: "0.25rem" }}
                            >{`"400"`}</code>
                            <code
                                style={{ marginRight: "0.25rem" }}
                            >{`"403"`}</code>
                            <code
                                style={{ marginRight: "0.25rem" }}
                            >{`"404"`}</code>
                            <code
                                style={{ marginRight: "0.25rem" }}
                            >{`"408"`}</code>
                            <code
                                style={{ marginRight: "0.25rem" }}
                            >{`"500"`}</code>
                            <code>{`"503"`}</code>
                        </div>
                        <div style={{ display: "block" }}>
                            <code
                                style={{ marginRight: "0.25rem" }}
                            >{`"maintenance"`}</code>
                            <code
                                style={{ marginRight: "0.25rem" }}
                            >{`"unsupported-browser"`}</code>
                            <code>{`"partially-unsupported-browser"`}</code>
                        </div>
                    </>
                ),
            },
            {
                name: "img",
                description: "The error image properties",
                propTypes: (
                    <>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <code>HTMLImageElement</code>
                        </a>
                    </>
                ),
            },
            {
                name: "title",
                description: (
                    <>
                        The title of the <code>ErrorDisplay</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "description",
                description: (
                    <>
                        The description of the <code>ErrorDisplay</code>
                    </>
                ),
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "additionalProps",
                description: "Additional properties for certain error types",
                propTypes: [
                    "MaintenanceAdditionalAttributes",
                    "Error500AdditionalAttributes",
                ],
            },
        ],
    },
    {
        name: "MaintenanceAdditionalAttributes",
        attributes: [
            {
                name: "dateString",
                mandatory: true,
                description: "The date display for the maintenance display",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "Error500AdditionalAttributes",
        attributes: [
            {
                name: "referenceId",
                mandatory: true,
                description:
                    "A reference id to be display and appended to the 500 error description",
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
