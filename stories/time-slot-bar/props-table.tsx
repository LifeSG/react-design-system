import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "variant",
                description: (
                    <>
                        The display variant of the <code>TimeSlotBar</code>
                    </>
                ),
                propTypes: [`"default"`, `"minified"`],
                defaultValue: "default",
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
                        The start time of time slot bar. Format in&nbsp;
                        <code>HH:mm</code>&nbsp;
                        <br />(<strong>Note</strong>: Minutes to be specified in
                        15 minute blocks. E.g. 00, 15, 30, 45)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "endTime",
                mandatory: true,
                description: (
                    <>
                        The end time of time slot bar. Format in&nbsp;
                        <code>HH:mm</code>&nbsp;
                        <br />(<strong>Note</strong>: Minutes to be specified in
                        15 minute blocks. E.g. 00, 15, 30, 45)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "styleAttributes",
                description: (
                    <>
                        The default style attributes when no time slot is
                        specified for the time period
                    </>
                ),
                propTypes: ["TimeSlotBarStyleAttributes"],
            },
            {
                name: "onSlotClick",
                mandatory: true,
                description: "Called when the user selects a time slot",
                propTypes: ["(timeSlot: TimeSlot) => void"],
            },
            {
                name: "onClick",
                description:
                    "Called when the user selects the time slot bar. Useful if there are no specified slots",
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
                description: "The unique identifier of the slot",
                propTypes: ["string"],
            },
            {
                name: "startTime",
                mandatory: true,
                description: (
                    <>
                        The start time of time slot bar. Format in&nbsp;
                        <code>HH:mm</code>&nbsp;
                        <br />(<strong>Note</strong>: Minutes to be specified in
                        15 minute blocks. E.g. 00, 15, 30, 45)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "endTime",
                mandatory: true,
                description: (
                    <>
                        The end time of time slot bar. Format in&nbsp;
                        <code>HH:mm</code>&nbsp;
                        <br />(<strong>Note</strong>: Minutes to be specified in
                        15 minute blocks. E.g. 00, 15, 30, 45)
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
                name: "label",
                description: <>The text content within the slot cell</>,
                propTypes: ["string"],
            },
            {
                name: "clickable",
                description: <>Specifies if the time slot cell is clickable</>,
                propTypes: ["boolean"],
            },
        ],
    },
    {
        name: "TimeSlotBarStyleAttributes",
        attributes: [
            {
                name: "backgroundColor",
                mandatory: true,
                description: <>The color of the slot</>,
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description: <>The style type of the slot</>,
                propTypes: [`"default"`, `"stripes"`],
                defaultValue: "default",
            },
            {
                name: "backgroundColor2",
                description: (
                    <>
                        The secondary color of the slot. Used in conjuction
                        with&nbsp;
                        <code>styleType</code> of <code>{`"stripes"`}</code>
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
