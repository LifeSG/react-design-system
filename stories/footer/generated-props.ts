// AUTO-GENERATED — do not edit manually.
// Source: src/footer/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const FooterPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "links",
                description:
                    "The footer links. Multi array to present in different columns",
                propTypes: ["FooterLinkProps<T>[][]"],
            },
            {
                name: "showDownloadAddon",
                description:
                    "Indicates if the download app icons are to be present",
                propTypes: ["boolean"],
            },
            {
                name: "showResourceAddon",
                description:
                    "Indicates if additional app resources should be displayed",
                propTypes: ["boolean"],
            },
            {
                name: "children",
                description:
                    "Custom component. This overrides the logo, links and download section",
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "disclaimerLinks",
                description: "Custom disclaimer link attributes",
                propTypes: ["DisclaimerLinks"],
            },
            {
                name: "copyrightInfo",
                description: "A custom copyright text",
                propTypes: ["string"],
            },
            {
                name: "logoSrc",
                description: "Custom logo source",
                propTypes: ["string"],
            },
            {
                name: "lastUpdated",
                description:
                    "Last updated date value that is displayed in the bottom of the Footer",
                propTypes: ["Date"],
            },
            {
                name: "onFooterLinkClick",
                description: "Called when a footer link is clicked.",
                propTypes: ["((link: FooterLinkProps<T>) => void) | undefined"],
            },
            {
                name: "layout",
                description:
                    "Determines if the footer content scales to full width.",
                propTypes: ['"default"', '"stretch"'],
                defaultValue: '"default"',
            },
            {
                name: "id",
                description: "The unique id attribute of the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class selector for the component.",
                propTypes: ["string"],
            },
            {
                name: "hideLogo",
                description: "",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const FooterLinkPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-options",
                description:
                    "Any custom attributes you would like to pass to the link",
                propTypes: ["T"],
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "weight",
                description: "The font weight",
                propTypes: ["opyright bar, bottom bar, pag"],
            },
            {
                name: "external",
                description:
                    "Displays indicator to signal that link leads to an external site",
                propTypes: ["inks. Multi array to"],
            },
            {
                name: "underlineStyle",
                description:
                    "Toggle text decoration for hyperlinks, underline by default",
                propTypes: ["cates if the download app icons are t"],
            },
        ],
    },
];
