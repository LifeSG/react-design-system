import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "testId",
                description: "data-testid",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "className",
                propTypes: ["string"],
            },
            {
                name: "slots",
                mandatory: true,
                description: (
                    <>
                        The time slots for the <code>TimeSlotBar</code>
                    </>
                ),
                propTypes: ["TimeSlot[]"],
            },
            {
                name: "startTime",
                mandatory: true,
                description: (
                    <>
                        The start time of time slot bar. Format in HH:mm.&nbsp;
                        <strong>Note: Minutes can be 00, 15, 30, 45</strong>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "endTime",
                mandatory: true,
                description: (
                    <>
                        The end time of time slot bar. Format in HH:mm.&nbsp;
                        <strong>Note: Minutes can be 00, 15, 30, 45</strong>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "styleAttributes",
                description: (
                    <>
                        The default styling attributes when no time slot is
                        specified for the time period
                    </>
                ),
                propTypes: ["TimeSlotBarStyleAttributes"],
            },
            {
                name: "onSlotClick",
                mandatory: true,
                description:
                    "The callback function when user clicks on the time slot",
                propTypes: ["(timeSlot: TimeSlot) => void"],
            },
            {
                name: "onClick",
                description:
                    "The default on click behaviour when no time slot is specified for the time period",
                propTypes: ["() => void"],
            },
        ],
    },
    {
        name: "TimeSlot",
        attributes: [
            {
                name: "id",
                mandatory: true,
                description: "The id of the slot",
                propTypes: ["string"],
            },
            {
                name: "startTime",
                mandatory: true,
                description: (
                    <>
                        The start time of slot. Format in HH:mm.&nbsp;
                        <strong>Note: Minutes can be 00, 15, 30, 45</strong>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "endTime",
                mandatory: true,
                description: (
                    <>
                        The end time of slot. Format in HH:mm.&nbsp;
                        <strong>Note: Minutes can be 00, 15, 30, 45</strong>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "styleAttributes",
                description: <>The styling attributes for the time slot</>,
                propTypes: ["TimeSlotBarStyleAttributes"],
            },
            {
                name: "text",
                description: <>The text inside slot cell.</>,
                propTypes: ["string"],
            },
            {
                name: "clickable",
                description: <>Specify if the time slot cell is clickable</>,
                propTypes: ["boolean"],
            },
        ],
    },
    {
        name: "TimeSlotBarStyleAttributes",
        attributes: [
            {
                name: "color",
                mandatory: true,
                description: <>The color of the slot.</>,
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description: <>The styleType of the slot.</>,
                propTypes: [`"default"`, `"stripes"`],
                defaultValue: "default",
            },
            {
                name: "secondaryColor",
                description: (
                    <>
                        The secondary color of the slot. Used in conjuction
                        with&nbsp;
                        <strong>styleType</strong>
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
