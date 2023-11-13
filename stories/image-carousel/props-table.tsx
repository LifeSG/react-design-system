import React from "react";
import { ApiTable, code } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "show",
                description: (
                    <>
                        Toggles the visibility of the <code>Modal</code>
                    </>
                ),
                mandatory: true,
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onOverlayClick",
                description: (
                    <>
                        The callback when the overlay is being clicked on. Will
                        be triggered if <code>enableOverlayClick</code>
                        is specified to <code>true</code>
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "images",
                description: <>Array of URL image</>,
                propTypes: ["string[]"],
            },
            {
                name: "initialIndex",
                description: <>Set initial index slide</>,
                propTypes: ["number"],
                defaultValue: "0",
            },
            {
                name: "zIndex",
                description: (
                    <>
                        Allows a custom <code>z-index</code> to be specified
                        (useful for modal stacking)
                    </>
                ),
                propTypes: ["number"],
            },
            {
                name: "animationFrom",
                description: (
                    <>
                        The animation direction of which the <code>Modal</code>{" "}
                        will appear
                    </>
                ),
                propTypes: [`"top"`, `"bottom"`, `"left"`, `"right"`],
            },
            // Copied from `layout/col-div-props-table.tsx`
            {
                name: "mobileCols",
                description: (
                    <>
                        Refer to{" "}
                        <a
                            href="/?path=/docs/getting-started-layout-column-divs--column-divs#component-api"
                            rel="noreferrer"
                            target="_blank"
                        >
                            ColDiv
                        </a>
                        &nbsp; for more details
                        <br />
                        <em>
                            Note: This works only if you are using the
                            {code(`"grid"`)} layout type
                        </em>
                    </>
                ),
                propTypes: [`number`, `number[]`],
                defaultValue: "4",
            },
            {
                name: "tabletCols",
                description: (
                    <>
                        Refer to{" "}
                        <a
                            href="/?path=/docs/getting-started-layout-column-divs--column-divs#component-api"
                            rel="noreferrer"
                            target="_blank"
                        >
                            ColDiv
                        </a>
                        &nbsp; for more details
                        <br />
                        <em>
                            Note: This works only if you are using the
                            {code(`"grid"`)} layout type
                        </em>
                    </>
                ),
                propTypes: [`number`, `number[]`],
                defaultValue: "8",
            },
            {
                name: "desktopCols",
                description: (
                    <>
                        Refer to{" "}
                        <a
                            href="/?path=/docs/getting-started-layout-column-divs--column-divs#component-api"
                            rel="noreferrer"
                            target="_blank"
                        >
                            ColDiv
                        </a>
                        &nbsp; for more details
                        <br />
                        <em>
                            Note: This works only if you are using the
                            {code(`"grid"`)} layout type
                        </em>
                    </>
                ),
                propTypes: [`number`, `number[]`],
                defaultValue: "12",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
