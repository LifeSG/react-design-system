import type { ApiTableSectionProps } from "stories/storybook-common/api-table";
import { ApiTable } from "stories/storybook-common/api-table";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "displaySize",
                description: "The display size of the component",
                propTypes: [`"default"`, `"small"`],
                defaultValue: `"default"`,
            },
            {
                name: "checked",
                description: "The selected state of the component",
                propTypes: ["boolean"],
            },
            {
                name: "disabled",
                description:
                    "The state in which an action is allowed to be executed",
                propTypes: ["boolean"],
            },
            {
                name: "focusableWhenDisabled",
                description:
                    "Allows the component to remain focusable when disabled while preventing all user interaction.",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
