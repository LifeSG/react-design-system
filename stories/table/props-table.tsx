import {
    ApiTable,
    ApiTableSectionProps,
    TabAttribute,
    Tabs,
} from "stories/storybook-common";

const TABLE: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        Inherits props from{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLTableElement (<code>&lt;table&gt;</code>)
                        </a>
                    </>
                ),
            },
        ],
    },
];

const TABLE_HEAD: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        Inherits props from{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLTableSectionElement (<code>&lt;thead&gt;</code>)
                        </a>
                    </>
                ),
            },
        ],
    },
];

const TABLE_BODY: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        Inherits props from{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLTableSectionElement (<code>&lt;tbody&gt;</code>)
                        </a>
                    </>
                ),
            },
        ],
    },
];

const TABLE_ROW: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        Inherits props from{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLTableRowElement (<code>&lt;tr&gt;</code>)
                        </a>
                    </>
                ),
            },
        ],
    },
];

const TABLE_CELL: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        Inherits props from{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLTableCellElement (<code>&lt;td&gt;</code>)
                        </a>
                    </>
                ),
            },
        ],
    },
];

const TABLE_HEADERCELL: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        Inherits props from{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLTableCellElement (<code>&lt;th&gt;</code>)
                        </a>
                    </>
                ),
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Table",
        component: <ApiTable sections={TABLE} />,
    },
    {
        title: "Table.Head",
        component: <ApiTable sections={TABLE_HEAD} />,
    },
    {
        title: "Table.Body",
        component: <ApiTable sections={TABLE_BODY} />,
    },
    {
        title: "Table.Row",
        component: <ApiTable sections={TABLE_ROW} />,
    },
    {
        title: "Table.Cell",
        component: <ApiTable sections={TABLE_CELL} />,
    },
    {
        title: "Table.HeaderCell",
        component: <ApiTable sections={TABLE_HEADERCELL} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
