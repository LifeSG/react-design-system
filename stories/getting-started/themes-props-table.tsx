import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "colorScheme",
                mandatory: true,
                description: <>Specifies the color scheme of the theme</>,
                propTypes: [
                    `"base"`,
                    `"bookingsg"`,
                    `"ccube"`,
                    `"mylegacy"`,
                    `"rbs"`,
                ],
            },
            {
                name: "textStyleScheme",
                mandatory: true,
                description: (
                    <>
                        The text style of the theme that will affect headings,
                        body and hyperlinks
                    </>
                ),
                propTypes: [`"base"`],
            },
            {
                name: "designTokenScheme",
                mandatory: true,
                description: (
                    <>
                        The design token scheme that will affect common style
                        properties throughout components
                    </>
                ),
                propTypes: [`"base"`, `"rbs"`],
            },
            {
                name: "resourceScheme",
                mandatory: true,
                description: (
                    <>
                        The resource scheme that will affect certain images or
                        text values in certain components
                    </>
                ),
                propTypes: [`"base"`, `"bookingsg"`, `"ccube"`, `"rbs"`],
            },
            {
                name: "options",
                description: (
                    <>
                        The options to customise the color scheme, the text
                        style scheme or the design token scheme
                    </>
                ),
                propTypes: ["ThemeSpecOptions"],
            },
        ],
    },
    {
        name: "ThemeSpecOptions",
        attributes: [
            {
                name: "color",
                description: <>The modified color set values</>,
                propTypes: ["ColorSetOptions"],
            },
            {
                name: "textStyle",
                description: <>The modified text style set values</>,
                propTypes: ["TextStyleSetOptionsType"],
            },
            {
                name: "designToken",
                description: <>The modified design token values</>,
                propTypes: ["DesignTokenSetOptions"],
            },
        ],
    },
    {
        name: "ColorSetOptions",
        attributes: [
            {
                name: "ColorSetOptions",
                description: (
                    <>
                        You may refer to the{" "}
                        <a href="https://github.com/LifeSG/react-design-system/blob/master/src/color/types.ts">
                            ColorSet
                        </a>{" "}
                        specifications.
                    </>
                ),
            },
        ],
    },
    {
        name: "TextStyleSetOptionsType",
        attributes: [
            {
                name: "key in TextSizeType",
                description: (
                    <>
                        The attributes to modify the text style. For the
                        different keys available, refer to the text sizes&nbsp;
                        <a href="https://designsystem.life.gov.sg/react/index.html?path=/docs/general-text-introduction--docs#static">
                            specification
                        </a>
                        .
                    </>
                ),
            },
        ],
    },
    {
        name: "TextStyleSpec",
        attributes: [
            {
                name: "fontFamily",
                description: <></>,
                propTypes: ["string"],
            },
            {
                name: "fontSize",
                description: <></>,
                propTypes: ["number"],
            },
            {
                name: "fontWeight",
                description: <></>,
                propTypes: ["number"],
            },
            {
                name: "lineHeight",
                description: <></>,
                propTypes: ["number"],
            },
            {
                name: "letterSpacing",
                description: <></>,
                propTypes: ["number"],
            },
        ],
    },
    {
        name: "DesignTokenSetOptions",
        attributes: [
            {
                name: "DesignTokenSetOptions",
                description: (
                    <>
                        You may refer to the{" "}
                        <a href="https://github.com/LifeSG/react-design-system/blob/master/src/design-token/types.ts">
                            DesignTokenSet
                        </a>{" "}
                        specifications.
                    </>
                ),
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
