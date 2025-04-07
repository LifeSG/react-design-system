import {
    ApiTable,
    ApiTableSectionProps,
    StorybookLink,
} from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "links",
                description: (
                    <>
                        Links to the top section of the <code>Footer</code>
                    </>
                ),
                propTypes: ["FooterLinkProps<T>[][]"],
            },
            {
                name: "children",
                description: (
                    <>
                        Custom content for the top section of the{" "}
                        <code>Footer</code>
                    </>
                ),
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "showDownloadAddon",
                description:
                    "Indicating will show the download app buttons in the footer",
                propTypes: ["boolean"],
            },
            {
                name: "disclaimerLinks",
                description: "Attributes of the mandated disclaimer links",
                propTypes: ["DisclaimerLinks"],
            },
            {
                name: "copyrightInfo",
                description: (
                    <>
                        The copyright information text on the bottom of the{" "}
                        <code>Footer</code>. Note that specifying this will
                        render <code>lastUpdated</code> property irrelevant.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "logoSrc",
                description: (
                    <>
                        The logo image source of the <code>Footer</code>
                    </>
                ),
                propTypes: ["string"],
                defaultValue: "<theme service logo>",
            },
            {
                name: "lastUpdated",
                description: (
                    <>
                        The last updated date that is displayed on the bottom of
                        the <code>Footer</code>. (Not relevant if{" "}
                        <code>copyrightInfo</code> is specified)
                    </>
                ),
                propTypes: ["Date"],
            },
            {
                name: "onFooterLinkClick",
                description: "Called when a footer link item is clicked",
                propTypes: ["(link: FooterLinkProps<T>) => void"],
            },
            {
                name: "layout",
                description:
                    "Specifies the layout type of the content in the footer",
                propTypes: ["stretch | default"],
                defaultValue: "default",
            },
            {
                name: "id",
                description: "The unique id of the component",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "FooterLinkProps<T>",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <StorybookLink path="/docs/core-typography--docs#component-api">
                            TypographyLinkProps
                        </StorybookLink>
                    </>
                ),
            },
            {
                name: "data-options",
                description: "Custom attributes to pass to the link object",
                propTypes: ["T"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the link",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "DisclaimerLinks",
        attributes: [
            {
                name: "privacy",
                description: (
                    <>
                        The privacy statement link attributes.
                        <br />
                        <strong>
                            Note: The link text cannot be customised and will be
                            fixed to <em>Privacy Statement</em>
                        </strong>
                    </>
                ),
                propTypes: (
                    <>
                        <StorybookLink path="/docs/core-typography--docs#component-api">
                            <code>TypographyLinkProps</code>
                        </StorybookLink>
                    </>
                ),
                defaultValue: "Predefined values",
            },
            {
                name: "termsOfUse",
                description: (
                    <>
                        The terms of use link attributes.
                        <br />
                        <strong>
                            Note: The link text cannot be customised and will be
                            fixed to <em>Terms of Use</em>
                        </strong>
                    </>
                ),
                propTypes: (
                    <>
                        <StorybookLink path="/docs/core-typography--docs#component-api">
                            <code>TypographyLinkProps</code>
                        </StorybookLink>
                    </>
                ),
                defaultValue: "Predefined values",
            },
            {
                name: "reportVulnerability",
                description: (
                    <>
                        The report vulnerability link attributes.
                        <br />
                        <strong>
                            Note: The link text cannot be customised and will be
                            fixed to <em>Report Vulnerability</em>
                        </strong>
                    </>
                ),
                propTypes: (
                    <>
                        <StorybookLink path="/docs/core-typography--docs#component-api">
                            <code>TypographyLinkProps</code>
                        </StorybookLink>
                    </>
                ),
                defaultValue: "Predefined values",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
