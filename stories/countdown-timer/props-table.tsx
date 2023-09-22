import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

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
                    "Specifies the duration of the timer in minutes and seconds",
                propTypes: ["{minutes: number, seconds: number}"],
                mandatory: true,
            },
            {
                name: "notifyTimer",
                description: "Specifies the timer for the notification",
                propTypes: ["{minutes: number, seconds: number}"],
            },
            {
                name: "offset",
                description: (
                    <>
                        Specifies the sitcky position once browser scroll down
                        to bottom
                        <br />- For tablet and desktop views, the default sticky
                        position is <code>168px</code> from the top.
                        <br />- For mobile, the default position is
                        <code>80px</code> from the top
                        <br />
                        <strong>(Note: it is pixel base)</strong>
                    </>
                ),
                propTypes: ["{top: number, left: number}"],
            },
            {
                name: "onDuration",
                description: (
                    <>
                        Called when timer value becomes equal to or less than
                        the total specified amount of <code>notifyMinutes</code>{" "}
                        and
                        <code>notifySeconds</code>
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "onNotify",
                description: (
                    <>
                        Called when timer value becomes less than the total
                        specified amount <code>notifyMinutes</code> and{" "}
                        <code>notifySeconds</code>
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "onFinish",
                description: "Called when timer value has finished ",
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
