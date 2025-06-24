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
            {
                name: "button-default-colour-bg",
                description: "The background colour of the default button",
                defaultValue: {
                    type: "colour-token",
                    token: ThemeButton["button-default-colour-bg"],
                },
            },
            {
                name: "button-default-colour-bg-hover",
                description:
                    "The background colour of the default button when hovered",
                defaultValue: {
                    type: "colour-token",
                    token: ThemeButton["button-default-colour-bg-hover"],
                },
            },
            {
                name: "button-default-colour-text",
                description: "The text colour of the default button",
                defaultValue: {
                    type: "colour-token",
                    token: ThemeButton["button-default-colour-text"],
                },
            },
            {
                name: "button-secondary-colour-border",
                description: "The border colour of the secondary button",
                defaultValue: {
                    type: "colour-token",
                    token: ThemeButton["button-secondary-colour-border"],
                },
            },
            {
                name: "button-secondary-colour-text",
                description: "The text colour of the secondary button",
                defaultValue: {
                    type: "colour-token",
                    token: ThemeButton["button-secondary-colour-text"],
                },
            },
            {
                name: "button-light-colour-text",
                description: "The text colour of the light button",
                defaultValue: {
                    type: "colour-token",
                    token: ThemeButton["button-light-colour-text"],
                },
            },
            {
                name: "button-link-colour-text",
                description: "The text colour of the link button",
                defaultValue: {
                    type: "colour-token",
                    token: ThemeButton["button-link-colour-text"],
                },
            },
        ],
    },
];

export const TokensTable = () => {
    return <TokenTable sections={DATA} />;
};
