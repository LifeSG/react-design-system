import { V3_ThemeButton } from "src/v3_theme/components/theme-helper";
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
                    token: V3_ThemeButton["button-radius"],
                },
            },
        ],
    },
];

export const TokensTable = () => {
    return <TokenTable sections={DATA} />;
};
