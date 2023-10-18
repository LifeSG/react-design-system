import React from "react";
import { ApiTable, code } from "../storybook-common/api-table";
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
                        .
                        <br />
                        <br />
                        Additionally, it also inherits the column props
                        from&nbsp;
                        <a
                            href="/?path=/docs/getting-started-layout-column-divs--column-divs"
                            rel="noreferrer"
                            target="_blank"
                        >
                            ColDiv
                        </a>
                        &nbsp;which can be helpful when using with{" "}
                        {code(`"grid"`)} layout type
                    </>
                ),
            },
            {
                name: "thickness",
                description: (
                    <>The thickness/height of the {code("Divider")} in px</>
                ),
                propTypes: ["number"],
                defaultValue: "1",
            },
            {
                name: "lineStyle",
                description: <>The style type for the {code("Divider")} line</>,
                propTypes: [`"solid"`, `"dashed"`],
                defaultValue: `"solid"`,
            },
            {
                name: "layoutType",
                description: <>The style type for the {code("Divider")} line</>,
                propTypes: [`"flex"`, `"grid"`],
                defaultValue: `"flex"`,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
