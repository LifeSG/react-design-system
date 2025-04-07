import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
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
                name: "show",
                description: "Specifies to start the countdown timer",
                propTypes: ["boolean"],
                mandatory: true,
            },
            {
                name: "timer",
                description:
                    "Specifies the countdown timer duration (in seconds)",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "timestamp",
                description: (
                    <>
                        Specifies the timestamp at which the countdown ends
                        (milliseconds since Jan 1, 1970),
                        <br />
                        <strong>Note:</strong> required if timer is not provided
                    </>
                ),
                propTypes: ["number"],
            },
            {
                name: "notifyTimer",
                description:
                    "Specifies the notification threshold timer (in seconds)",
                propTypes: ["number"],
            },
            {
                name: "offset",
                description: (
                    <>
                        Specifies the sticky position in desktop and tablet
                        <br />
                        <strong>Note:</strong> the values are pixel-based
                    </>
                ),
                propTypes: ["{ top: number; left: number; right: number; }"],
                defaultValue: "{ top: 168 }",
            },
            {
                name: "mobileOffset",
                description: (
                    <>
                        Specifies the sticky position in mobile
                        <br />
                        <strong>Note:</strong> the values are pixel-based
                    </>
                ),
                propTypes: ["{ top: number; }"],
                defaultValue: "{ top: 80 }",
            },
            {
                name: "align",
                description:
                    "Specifies if the sticky component is aligned to its left or right",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"right"`,
            },
            {
                name: "fixed",
                description:
                    "Specifies if the component should be sticky when scrolled out of view",
                propTypes: ["boolean"],
                defaultValue: `"true"`,
            },
            {
                name: "onTick",
                description: (
                    <>
                        Called every interval when the timer value becomes equal
                        to or less than <code>notifyTimer</code>
                        <br />
                        <strong>Note:</strong> due to browser limitations, it is
                        not guaranteed to run precisely every second
                    </>
                ),
                propTypes: ["(seconds: number) => void"],
            },
            {
                name: "onNotify",
                description: (
                    <>
                        Called when the timer value becomes less than{" "}
                        <code>notifyTimer</code>
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "onFinish",
                description: "Called when the timer value reaches zero",
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
