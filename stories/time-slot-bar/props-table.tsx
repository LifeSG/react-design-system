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
                name: "defaultTimeSlot",
                description: (
                    <>The default time slot if no time slot is specified</>
                ),
                propTypes: ["DefaultTimeSlot"],
            },
            {
                name: "onClickSlot",
                description:
                    "The callback function when user clicks on the time slot",
                propTypes: ["(slotId: string) => void"],
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
        name: "DefaultTimeSlot",
        attributes: [
            {
                name: "color",
                mandatory: true,
                description: <>The color of the default slot.</>,
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description: <>The styleType of the default slot.</>,
                propTypes: [`"default"`, `"stripes"`],
                defaultValue: "default",
            },
            {
                name: "secondaryColor",
                description: (
                    <>
                        The secondary color of the default slot. Used in
                        conjuction with&nbsp;
                        <strong>styleType</strong>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "onClick",
                description:
                    "The callback function when user clicks on the time slot",
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
