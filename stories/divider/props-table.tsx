import type { ApiTableSectionProps } from "stories/storybook-common";
import { ApiTable, code } from "stories/storybook-common";

const colDescription = (breakpoint: string) => (
    <>
        The number of columns to span at the {code(breakpoint)} breakpoint.
        Accepts an array {code("[startCol, endCol]")} to specify column line
        positions. Only applies when {code("layoutType")} is {code('"grid"')}
    </>
);

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLElement
                        </a>
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
            {
                name: "color",
                description: <>The color for the {code("Divider")} line</>,
                propTypes: ["string"],
            },
            {
                name: "xxlCols",
                description: colDescription("xxl"),
                propTypes: ["number", "[number, number]"],
            },
            {
                name: "xlCols",
                description: colDescription("xl"),
                propTypes: ["number", "[number, number]"],
            },
            {
                name: "lgCols",
                description: colDescription("lg"),
                propTypes: ["number", "[number, number]"],
            },
            {
                name: "mdCols",
                description: colDescription("md"),
                propTypes: ["number", "[number, number]"],
            },
            {
                name: "smCols",
                description: colDescription("sm"),
                propTypes: ["number", "[number, number]"],
            },
            {
                name: "xsCols",
                description: colDescription("xs"),
                propTypes: ["number", "[number, number]"],
            },
            {
                name: "xxsCols",
                description: colDescription("xxs"),
                propTypes: ["number", "[number, number]"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
