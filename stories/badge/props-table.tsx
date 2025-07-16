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
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLAttributes&lt;HTMLDivElement&gt;
                        </a>
                    </>
                ),
            },
            {
                name: "count",
                description:
                    "The number to display inside the badge. Applies to number-based badge variants only. ",
                propTypes: ["number"],
            },
            {
                name: "variant",
                description:
                    "Specifies the visual style of the badge. default is the number variant",
                propTypes: [
                    `"number"`,
                    `"number-with-border"`,
                    `"dot"`,
                    `"dot-with-border"`,
                ],
                defaultValue: `"number"`,
            },
            {
                name: "color",
                description:
                    "Defines the visual color tone of the badge. important is for red color and default is the default color of the theme. ",
                propTypes: [`"default"`, `"important"`],
                defaultValue: `"default"`,
            },
            {
                name: "data-testid",
                description: "Test ID used for targeting elements in tests",
                propTypes: ["string"],
                defaultValue: `"badge"`,
            },
            {
                name: "children",
                description: (
                    <>
                        Content to display with the badge as an overlay.
                        (See&nbsp;
                        <a
                            href="/?path=/story/navigation-avatar--default"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Avatar
                        </a>
                        )
                    </>
                ),
                propTypes: ["JSX.Element"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
