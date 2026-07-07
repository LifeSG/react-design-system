import { ComponentToken } from "src/theme";
import type { TokenTableSectionProps } from "stories/storybook-common";
import { TokenTable } from "stories/storybook-common";

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
                    token: ComponentToken.Animation[
                        "loading-dots-spinner-colour"
                    ],
                },
            },
        ],
    },
];

export const TokensTable = () => {
    return <TokenTable sections={DATA} />;
};
