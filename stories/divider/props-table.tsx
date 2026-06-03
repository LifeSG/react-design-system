import type { ApiTableSectionProps } from "stories/storybook-common";
import { ApiTable, code } from "stories/storybook-common";

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
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
