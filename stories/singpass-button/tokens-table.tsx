import { ThemeButton } from "src/theme/components/theme-helper";
import { TokenTable, TokenTableSectionProps } from "../storybook-common";

const DATA: TokenTableSectionProps[] = [
    {
        attributes: [
            {
                name: "button-radius",
                description: "The radius of the button",
                defaultValue: {
                    type: "default",
                    token: ThemeButton["button-radius"],
                },
            },
        ],
    },
];

export const TokensTable = () => {
    return <TokenTable sections={DATA} />;
};
