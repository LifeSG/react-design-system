// AUTO-GENERATED — do not edit manually.
// Source: src/accordion/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const AccordionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "title",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "enableExpandAll",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "initialDisplay",
                description: "",
                propTypes: ['"collapse-all"', '"expand-all"'],
            },
            {
                name: "showTitleInMobile",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "id",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "headingLevel",
                description: "",
                propTypes: ["number"],
            },
            {
                name: "onExpandCollapseChange",
                description: "",
                propTypes: ["((expanded: boolean) => void) | undefined"],
            },
        ],
    },
];

export const AccordionItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                description: "",
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
            {
                name: "children",
                description: "",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "expanded",
                description:
                    "Omit or set this to undefined to allow 'Hide All'/'Show All' in parent to take precedence for cases where we want the default expand behaviour",
                propTypes: ["boolean"],
            },
            {
                name: "id",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "type",
                description: "",
                propTypes: ["AccordionItemType"],
            },
            {
                name: "collapsible",
                description: "",
                propTypes: ["boolean"],
            },
        ],
    },
];
