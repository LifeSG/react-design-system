// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const timetableExtraArgTypes = {
    "TimeTableCellStyleAttributes.backgroundColor": {
        name: "backgroundColor",
        description: "Main background color for the cell",
        control: false,
        table: {
            category: "TimeTableCellStyleAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableCellStyleAttributes.altBackgroundColor": {
        name: "altBackgroundColor",
        description:
            "Alternate background color (used for striped patterns in blocked/pending status)",
        control: false,
        table: {
            category: "TimeTableCellStyleAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableCellStyleAttributes.hoverBackgroundColor": {
        name: "hoverBackgroundColor",
        description: "Hover background color for the cell",
        control: false,
        table: {
            category: "TimeTableCellStyleAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableCellStyleAttributes.altHoverBackgroundColor": {
        name: "altHoverBackgroundColor",
        description: "Alternate hover background color for the cell",
        control: false,
        table: {
            category: "TimeTableCellStyleAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableCellStyleAttributes.styleType": {
        name: "styleType",
        description:
            "Display style for the cell. If not set, defaults based on cell type (blocked/pending = striped, others = solid)",
        control: false,
        table: {
            category: "TimeTableCellStyleAttributes",
            type: {
                summary: '"default" | "solid" | "stripes"',
            },
        },
    },
    "TimeTableRef.resetScroll": {
        name: "resetScroll",
        description:
            "Resets the scroll position to the initialScrollTime if provided",
        control: false,
        table: {
            category: "TimeTableRef",
            type: {
                summary: "() => void",
            },
        },
    },
    "TimeTableRowData.id": {
        name: "id",
        description: "Unique identifier for the row",
        control: false,
        table: {
            category: "TimeTableRowData",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableRowData.name": {
        name: "name",
        description: "Display name of the row",
        control: false,
        table: {
            category: "TimeTableRowData",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableRowData.rowCells": {
        name: "rowCells",
        description: "Array of cell data for this row",
        control: false,
        table: {
            category: "TimeTableRowData",
            type: {
                summary: "TimeTableRowCellData[]",
            },
        },
    },
    "TimeTableRowData.subtitle": {
        name: "subtitle",
        description:
            "Optional subtitle text or element displayed below the row name",
        control: false,
        table: {
            category: "TimeTableRowData",
            type: {
                summary: "string | JSX.Element",
            },
        },
    },
    "TimeTableRowData.rowHeaderPopover": {
        name: "rowHeaderPopover",
        description: "Popover configuration for the row header",
        control: false,
        table: {
            category: "TimeTableRowData",
            type: {
                summary: "TimeTablePopoverProps",
            },
        },
    },
    "TimeTableRowData.outOfRangeCellPopover": {
        name: "outOfRangeCellPopover",
        description: "Popover configuration for cells outside the time range",
        control: false,
        table: {
            category: "TimeTableRowData",
            type: {
                summary: "TimeTablePopoverProps",
            },
        },
    },
    "TimeTableRowData.rowMinTime": {
        name: "rowMinTime",
        description:
            "The minimum time for this row. Format in HH:mm. Defaults to minTime",
        control: false,
        table: {
            category: "TimeTableRowData",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableRowData.rowMaxTime": {
        name: "rowMaxTime",
        description:
            "The maximum time for this row. Format in HH:mm. Defaults to maxTime",
        control: false,
        table: {
            category: "TimeTableRowData",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableRowData.onRowNameClick": {
        name: "onRowNameClick",
        description: "Callback function when the row name is clicked",
        control: false,
        table: {
            category: "TimeTableRowData",
            type: {
                summary:
                    "| ((rowData: TimeTableRowData, e: React.MouseEvent) => void)",
            },
        },
    },
    "TimeTablePopoverProps.trigger": {
        name: "trigger",
        description: "The trigger type for showing the popover",
        control: false,
        table: {
            category: "TimeTablePopoverProps",
            type: {
                summary: "PopoverTriggerType",
            },
        },
    },
    "TimeTablePopoverProps.content": {
        name: "content",
        description: "The content to display in the popover",
        control: false,
        table: {
            category: "TimeTablePopoverProps",
            type: {
                summary: "string | JSX.Element | (() => React.ReactNode)",
            },
        },
    },
    "TimeTablePopoverProps.delay": {
        name: "delay",
        description: "Delay in milliseconds before opening/closing the popover",
        control: false,
        table: {
            category: "TimeTablePopoverProps",
            type: {
                summary: "| { open?: number; close?: number }",
            },
        },
    },
    "TimeTablePopoverProps.offset": {
        name: "offset",
        description: "Offset distance of the popover from the trigger element",
        control: false,
        table: {
            category: "TimeTablePopoverProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimeTableProps.id": {
        name: "id",
        description: "Unique identifier for the timetable",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.className": {
        name: "className",
        description: "Additional CSS class name",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.data-testid": {
        name: "data-testid",
        description: "Test identifier for testing purposes",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.date": {
        name: "date",
        description: "The date to display in the timetable",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.emptyContentMessage": {
        name: "emptyContentMessage",
        description: "Message to display when there is no content",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.rowData": {
        name: "rowData",
        description: "Array of row data to display in the timetable",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "TimeTableRowData[]",
            },
        },
    },
    "TimeTableProps.loading": {
        name: "loading",
        description: "Whether the timetable is in a loading state",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeTableProps.minTime": {
        name: "minTime",
        description: "The minimum time of the timetable. Format in HH:mm",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.maxTime": {
        name: "maxTime",
        description: "The maximum time of the timetable. Format in HH:mm",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.initialScrollTime": {
        name: "initialScrollTime",
        description:
            'Initial scroll position in HH:mm format (e.g., "09:00" will scroll to 9am on mount)',
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.minDate": {
        name: "minDate",
        description: "The minimum selectable date",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.maxDate": {
        name: "maxDate",
        description: "The maximum selectable date",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableProps.totalRecords": {
        name: "totalRecords",
        description: "Total number of records for pagination",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimeTableProps.showCurrentDateAsToday": {
        name: "showCurrentDateAsToday",
        description: 'Whether to display the current date as "Today"',
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeTableProps.showDateAsShortForm": {
        name: "showDateAsShortForm",
        description: "Whether to display the date in short form",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeTableProps.roundInitialScrollTime": {
        name: "roundInitialScrollTime",
        description:
            "Rounds initial scroll time to the nearest interval, e.g 6:30 will be clamped to 6:00 when interval = 60. Default is true",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeTableProps.onRefresh": {
        name: "onRefresh",
        description: "Callback function when the refresh button is clicked",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "TimeTableProps.onPage": {
        name: "onPage",
        description: "Callback function for pagination",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "TimeTableProps.onPreviousDayClick": {
        name: "onPreviousDayClick",
        description:
            "Callback function when the previous day button is clicked",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "TimeTableProps.onNextDayClick": {
        name: "onNextDayClick",
        description: "Callback function when the next day button is clicked",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "TimeTableProps.onCalendarDateSelect": {
        name: "onCalendarDateSelect",
        description:
            "Callback function when a date is selected from the calendar",
        control: false,
        table: {
            category: "TimeTableProps",
            type: {
                summary: "((currentDate: string) => void)",
            },
        },
    },
    "TimeTableRowCellData.id": {
        name: "id",
        description: "Unique identifier for the cell",
        control: false,
        table: {
            category: "TimeTableRowCellData",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableRowCellData.startTime": {
        name: "startTime",
        description: "The start time of the cell. Format in HH:mm",
        control: false,
        table: {
            category: "TimeTableRowCellData",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableRowCellData.endTime": {
        name: "endTime",
        description: "The end time of the cell. Format in HH:mm",
        control: false,
        table: {
            category: "TimeTableRowCellData",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableRowCellData.status": {
        name: "status",
        description:
            'The status/type of the cell. Values: "filled" | "blocked" | "default" | "disabled" | "pending"',
        control: false,
        table: {
            category: "TimeTableRowCellData",
            type: {
                summary: "TimeTableCellType",
            },
        },
    },
    "TimeTableRowCellData.title": {
        name: "title",
        description: "Title text displayed in the cell",
        control: false,
        table: {
            category: "TimeTableRowCellData",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableRowCellData.subtitle": {
        name: "subtitle",
        description: "Subtitle text displayed in the cell",
        control: false,
        table: {
            category: "TimeTableRowCellData",
            type: {
                summary: "string",
            },
        },
    },
    "TimeTableRowCellData.customPopover": {
        name: "customPopover",
        description: "Custom popover configuration for this cell",
        control: false,
        table: {
            category: "TimeTableRowCellData",
            type: {
                summary: "TimeTablePopoverProps",
            },
        },
    },
    "TimeTableRowCellData.cellStyleAttributes": {
        name: "cellStyleAttributes",
        description:
            "Custom style attributes for the cell. If not specified, falls back to default row bar colors.",
        control: false,
        table: {
            category: "TimeTableRowCellData",
            type: {
                summary: "TimeTableCellStyleAttributes",
            },
        },
    },
    "TimeTableRowCellData.onClick": {
        name: "onClick",
        description: "Callback function when the cell is clicked",
        control: false,
        table: {
            category: "TimeTableRowCellData",
            type: {
                summary:
                    "| ((data: TimeTableRowCellData, e: React.MouseEvent) => void)",
            },
        },
    },
    TimeTableCellType: {
        name: "TimeTableCellType",
        control: false,
        table: {
            category: "TimeTableCellType",
            type: {
                summary:
                    '| "filled" | "blocked" | "default" | "disabled" | "pending"',
            },
        },
    },
} satisfies Record<string, unknown>;
