import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "stretch",
                description:
                    "Specifies if the masthead should stretch to the maximum width of the screen, with a fixed padding",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
