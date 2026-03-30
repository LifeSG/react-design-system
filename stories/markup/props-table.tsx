import { StorybookLink } from "stories/storybook-common";
import { ApiTable, code } from "stories/storybook-common/api-table";
import type { ApiTableSectionProps } from "stories/storybook-common/api-table/types";

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
                            HTMLDivAttributes
                        </a>
                    </>
                ),
            },
            {
                name: "baseTextSize",
                description:
                    "The default font size. If not specified, inherited from the parent",
                propTypes: (
                    <StorybookLink path="/docs/core-typography--docs">
                        TypographySizeType
                    </StorybookLink>
                ),
            },
            {
                name: "baseTextColor",
                description:
                    "The default font color. Supports V4 colour token strings (for example, Colour.text). If not specified, inherited from the parent",
                propTypes: (
                    <>
                        <StorybookLink path="/docs/foundations-colours-introduction--docs">
                            ColourCSSVariableString
                        </StorybookLink>{" "}
                        <code>string</code>
                    </>
                ),
            },
            {
                name: "inline",
                description: (
                    <>
                        Specifies if component is a block {code("<div />")}{" "}
                        element or inline {code("<span />")} element
                    </>
                ),
                propTypes: ["boolean"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
