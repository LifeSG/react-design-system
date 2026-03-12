import { V3_ThemeAnimation } from "src/v3_theme/components/theme-helper";
import { TokenTable, TokenTableSectionProps } from "stories/storybook-common";

const DATA: TokenTableSectionProps[] = [
    {
        attributes: [
            {
                name: "loading-dots-spinner-colour",
                description: (
                    <>
                        The colour of the <code>LoadingDotsSpinner</code>
                    </>
                ),
                defaultValue: {
                    type: "colour-token",
                    token: V3_ThemeAnimation["loading-dots-spinner-colour"],
                },
            },
        ],
    },
];

export const TokensTable = () => {
    return <TokenTable sections={DATA} />;
};
