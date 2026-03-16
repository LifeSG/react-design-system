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
                name: "otpOnly",
                description:
                    "When enabled, OTP inputs will be rendered without the action button",
                propTypes: ["boolean"],
            },
            {
                name: "numOfInput",
                description: "The number of input fields to display",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "prefix",
                description:
                    "Optional prefix to be displayed. When the OTP is autofilled or pasted from clipboard, the prefix value and separator will be stripped",
                propTypes: ["{ value: string; separator: string; };"],
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
                propTypes: ["() => void"],
            },
            {
                name: "onCooldownEnd",
                description: "Called when the cooldown ends",
                propTypes: ["() => void"],
            },
            {
                name: "onCountdownChange",
                description:
                    "Called when the countdown changes. Returns the remaining time in seconds",
                propTypes: ["(remaining: number) => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
