import React from "react";
import styled from "styled-components";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

// =============================================================================
// CUSTOM STYLING
// =============================================================================
const StyledCode = styled.code`
    margin-right: 0.25rem;
`;

// =============================================================================
// DATA
// =============================================================================

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
                            <StyledCode>{`"400"`}</StyledCode>
                            <StyledCode>{`"403"`}</StyledCode>
                            <StyledCode>{`"404"`}</StyledCode>
                            <StyledCode>{`"408"`}</StyledCode>
                            <StyledCode>{`"500"`}</StyledCode>
                            <code>{`"503"`}</code>
                        </div>
                        <div style={{ display: "block" }}>
                            <StyledCode>{`"maintenance"`}</StyledCode>
                            <StyledCode>{`"unsupported-browser"`}</StyledCode>
                            <code>{`"partially-supported-browser"`}</code>
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
                name: "actionButton",
                description:
                    "The properties of the action button that appears at the bottom of the component",
                propTypes: (
                    <>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <code>HTMLButtonElement</code>
                        </a>
                    </>
                ),
                defaultValue: (
                    <>
                        No default values except,
                        <br />
                        <code>children</code>: <code>Proceed</code>
                    </>
                ),
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
