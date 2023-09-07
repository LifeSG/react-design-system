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

const codes = [
    "400",
    "403",
    "404",
    "408",
    "500",
    "502",
    "503",
    "504",
    "confirmation",
    "inactivity",
    "insufficient-credits",
    "link-error",
    "logout",
    "warning",
    "maintenance",
    "no-item-found",
    "payment-unsuccessful",
    "transfer-unsuccessful",
    "unsupported-browser",
    "partially-supported-browser",
];

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
                                display: "flex",
                                flexWrap: "wrap",
                                marginBottom: "0.25rem",
                            }}
                        >
                            {codes.map((code) => (
                                <StyledCode
                                    key={code}
                                >{`"${code}"`}</StyledCode>
                            ))}
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
                propTypes: ["MaintenanceAdditionalAttributes"],
            },
            {
                name: "imageOnly",
                description:
                    "Specifying will allow only the image to be rendered",
                propTypes: ["boolean"],
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
];

export const PropsTable = () => <ApiTable sections={DATA} />;
