import {
    ApiTable,
    ApiTableSectionProps,
    StorybookLink,
    code,
} from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
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
                propTypes: ["string", "(props: unknown) => string"],
            },
            // Copied from `layout/col-div-props-table.tsx`
            {
                name: "mobileCols",
                description: (
                    <>
                        Refer to{" "}
                        <StorybookLink path="/docs/core-layout-coldiv--docs">
                            ColDiv
                        </StorybookLink>
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
                        <StorybookLink path="/docs/core-layout-coldiv--docs">
                            ColDiv
                        </StorybookLink>
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
                        <StorybookLink path="/docs/core-layout-coldiv--docs">
                            ColDiv
                        </StorybookLink>
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
