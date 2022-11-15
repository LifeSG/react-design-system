import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "links",
                mandatory: true,
                description: "The links for the breadcrumbs",
                propTypes: (
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                        target="_blank"
                        rel="noreferrer"
                    >
                        HTMLAnchorElement
                    </a>
                ),
            },
            {
                name: "fadeColor",
                description: (
                    <>
                        When the breadcrumbs are too long, there will be a fade
                        effect at the ends of the breadcrumb. This will control
                        the color of the fade.
                    </>
                ),
                propTypes: ["string[]", "FadeColorSet"],
            },
            {
                name: "fadePosition",
                description: (
                    <>
                        When the breadcrumbs are too long, there will be a fade
                        effect at the ends of the breadcrumb. This will control
                        the color of the fade.
                    </>
                ),
                propTypes: [`"left"`, `"right"`, `"both"`],
                defaultValue: `"both"`,
            },
            {
                name: "itemStyle",
                description: (
                    <>
                        Custom style that can be passed to the
                        <code>Breadcrumb</code> items
                    </>
                ),
                propTypes: ["CSS-JS string"],
            },
            {
                name: "id",
                description: (
                    <>
                        A unique identifier for each <code>Breadcrumb</code>
                        &nbsp;item
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The id used for testing purposes",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "FadeColorSet",
        attributes: [
            {
                name: "left",
                description: "The color of the left fade",
                propTypes: ["string[]"],
            },
            {
                name: "right",
                description: "The color of the right fade",
                propTypes: ["string[]"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
