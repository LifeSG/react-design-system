import {
    ApiTable,
    ApiTableSectionProps,
    StorybookLink,
} from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "actionButtonProps",
                description: "The call to action custom button props",
                propTypes: (
                    <StorybookLink path="/docs/selection-and-input-button-base--docs#component-api">
                        ButtonProps
                    </StorybookLink>
                ),
            },
            {
                name: "cooldownDuration",
                description:
                    "The cooldown duration before the call to action button can be enabled",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "errorMessage",
                description: "Indicates if an error message is to be display.",
                propTypes: ["boolean"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "numOfInput",
                description: "The number of input fields to display",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "value",
                description: "The value of the input fields",
                propTypes: ["string[]"],
            },
            {
                name: "onChange",
                description:
                    "Called when a change is made on the input field. Returns the value of the inputs",
                propTypes: ["(value: string[]) => void"],
            },
            {
                name: "onCooldownStart",
                description: "Called when the cooldown begins",
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onCooldownEnd",
                description: "Called when the cooldown ends",
                propTypes: ["(value: string) => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
