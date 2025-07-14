import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
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
                name: "isOverlay",
                description:
                    "Positions the badge in an overlaid manner on top of an icon or avatar. When set to `true`, positioning offsets are applied for proper placement.",
                propTypes: ["boolean"],
                defaultValue: `false`,
            },
            {
                name: "data-testid",
                description: "Test ID used for targeting elements in tests",
                propTypes: ["string"],
                defaultValue: `"badge"`,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
