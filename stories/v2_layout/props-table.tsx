import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const CONTENT_DATA: ApiTableSectionProps[] = [
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
                name: "type",
                description: "The display type to be rendered",
                propTypes: [`"flex"`, `"flex-column"`, `"grid"`],
                defaultValue: `"flex"`,
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "stretch",
                description: `
                    Specifies if the layout container should stretch to the 
                    maximum width of the screen, with a fixed padding
                `,
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

const SECTION_DATA: ApiTableSectionProps[] = [
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
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "stretch",
                description: `
                    Specifies if the layout container should stretch to the 
                    maximum width of the screen, with a fixed padding
                `,
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

const CONTAINER_DATA: ApiTableSectionProps[] = [
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
                name: "type",
                description: "The display type to be rendered",
                propTypes: [`"flex"`, `"flex-column"`, `"grid"`],
                defaultValue: `"flex"`,
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "stretch",
                description: `
                    Specifies if the layout container should stretch to the 
                    maximum width of the screen, with a fixed padding
                `,
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "V2_Layout.Content",
        component: <ApiTable sections={CONTENT_DATA} />,
    },
    {
        title: "V2_Layout.Section",
        component: <ApiTable sections={SECTION_DATA} />,
    },
    {
        title: "V2_Layout.Container",
        component: <ApiTable sections={CONTAINER_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
