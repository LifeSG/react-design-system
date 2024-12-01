import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

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
                            HTMLDivAttributes
                        </a>
                    </>
                ),
            },
            {
                name: "colorType",
                description: (
                    <>
                        The color style of the <code>Pill</code>
                    </>
                ),
                propTypes: [
                    `"black"`,
                    `"grey"`,
                    `"green"`,
                    `"yellow"`,
                    `"red"`,
                    `"blue"`,
                ],
                defaultValue: `"black"`,
            },
            {
                name: "type",
                mandatory: true,
                description: (
                    <>
                        The display style of the <code>Pill</code>
                    </>
                ),
                propTypes: [`"solid"`, `"outline"`],
            },
            {
                name: "icon",
                description: "A component to be displayed as the icon",
                propTypes: ["JSX.Element"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
