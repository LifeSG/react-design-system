import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLDivElement
                        </a>
                    </>
                ),
            },
            {
                name: "mobileCols",
                description: (
                    <>
                        Specifies the number of columns to be span across in
                        mobile viewports. If an array is specified, the format
                        is as such <code>[startCol, endCol]</code>.
                        <br />
                        <br />
                        Permitted values: <code>1 - 4</code> and{" "}
                        <code>1 - 5</code> if specifying a range.
                        <br />
                        <br />
                        If <code>tabletCols</code> or <code>desktopCols</code>{" "}
                        are not specified, this setting will be applied to
                        tablet and desktop viewports. If all column props are
                        not specified, the div will span across a single column.
                    </>
                ),
                propTypes: [`number`, `number[]`],
            },
            {
                name: "tabletCols",
                description: (
                    <>
                        Specifies the number of columns to be span across in
                        tablet viewports. If an array is specified, the format
                        is as such <code>[startCol, endCol]</code>.
                        <br />
                        <br />
                        Permitted values: <code>1 - 8</code> and{" "}
                        <code>1 - 9</code> if specifying a range.
                        <br />
                        <br />
                        If <code>desktopCols</code> are not specified, this
                        setting will be applied to tablet and desktop viewports.
                        If all column props are not specified, the div will span
                        across a single column.
                    </>
                ),
                propTypes: [`number`, `number[]`],
            },
            {
                name: "desktopCols",
                description: (
                    <>
                        Specifies the number of columns to be span across in
                        desktop viewports. If an array is specified, the format
                        is as such <code>[startCol, endCol]</code>.
                        <br />
                        <br />
                        Permitted values: <code>1 - 12</code> and{" "}
                        <code>1 - 13</code> if specifying a range.
                        <br />
                        <br />
                        If all column props are not specified, the div will span
                        across a single column.
                    </>
                ),
                propTypes: [`number`, `number[]`],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
