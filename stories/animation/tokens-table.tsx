import { ThemeAnimation } from "src/theme/components/theme-helper";
import { TokenTable, TokenTableSectionProps } from "../storybook-common";

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
                    token: ThemeAnimation["loading-dots-spinner-colour"],
                },
            },
        ],
    },
];

export const TokensTable = () => {
    return <TokenTable sections={DATA} />;
};
