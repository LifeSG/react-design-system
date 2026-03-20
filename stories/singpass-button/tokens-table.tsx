import { ComponentToken } from "src/theme";
import type { TokenTableSectionProps } from "stories/storybook-common";
import { TokenTable } from "stories/storybook-common";

const DATA: TokenTableSectionProps[] = [
    {
        attributes: [
            {
                name: "button-radius",
                description: "The radius of the button",
                defaultValue: {
                    type: "default",
                    token: ComponentToken.Button["radius"],
                },
            },
        ],
    },
];

export const TokensTable = () => {
    return <TokenTable sections={DATA} />;
};
