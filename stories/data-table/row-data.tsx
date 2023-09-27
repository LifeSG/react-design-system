import React from "react";
import { Pill } from "../../src/pill";

export const generateRows = (size: number) => {
    return new Array(size).fill(0).map((_, i) => {
        const index = i + 1;
        return {
            id: index.toString(),
            status: (
                <Pill type="outline">
                    {index % 4 ? "Pending" : "Completed"}
                </Pill>
            ),
            time: "07/Aug/2023 9.30pm",
            resource:
                index % 3
                    ? "Lorem ipsum dolor sit amet"
                    : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum illum, inventore nemo odit officia suscipit, unde minus corrupti molestias repudiandae reiciendis amet quidem recusandae aperiam sapiente commodi optio? Aperiam, molestias!",
            title: `Title ${index}`,
        };
    });
};

export const DATA_HEADERS = [
    {
        fieldKey: "title",
        label: "Title",
    },
    {
        fieldKey: "status",
        label: "Status",
    },
    {
        fieldKey: "resource",
        label: "Resource",
    },
    {
        fieldKey: "time",
        label: "Time",
    },
];

export const DATA_ROWS = generateRows(5);
