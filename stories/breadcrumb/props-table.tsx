import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

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
                        if the fade is shown.
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
