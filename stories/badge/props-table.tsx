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
                    "The number to display inside the badge. Applies to number-based badge variants only",
                propTypes: ["number"],
            },
            {
                name: "variant",
                description: "Specifies the visual style of the badge",
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
                description: "Defines the visual color tone of the badge",
                propTypes: [`"default"`, `"important"`],
                defaultValue: `"default"`,
            },
            {
                name: "badgeOffset",
                description:
                    'Offsets the badge. Accepts a CSS translate value like "50%, -25%".',
                propTypes: ["[string, string]"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
                defaultValue: `"badge"`,
            },
            {
                name: "children",
                description:
                    "Content to display with the badge positioned in the corner",
                propTypes: ["JSX.Element"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
