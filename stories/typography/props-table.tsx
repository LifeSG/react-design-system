import {
    ApiTable,
    ApiTableSectionProps,
    TabAttribute,
    Tabs,
} from "../storybook-common";

const TEXT_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLElement
                        </a>
                    </>
                ),
            },
            {
                name: "inline",
                description:
                    "Sets the text to an inline display to allow a combination of text in a single line",
                propTypes: ["boolean"],
            },
            {
                name: "maxLines",
                description:
                    "Specifies the number of lines visible. Additional lines will be truncated",
                propTypes: ["number"],
            },
            {
                name: "paragraph",
                description:
                    "Adds an extra bottom margin to allow a better separation of text blocks",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "weight",
                description: "The weight of the text component",
                propTypes: [`"regular"`, `"semibold"`, `"bold"`, `"light"`],
                defaultValue: `"regular"`,
            },
        ],
    },
];

const LINK_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLAnchorElement
                        </a>
                    </>
                ),
            },
            {
                name: "weight",
                description: "The weight of the hyperlink component",
                propTypes: [`"regular"`, `"semibold"`, `"bold"`, `"light"`],
                defaultValue: `"regular"`,
            },
            {
                name: "external",
                description:
                    "Indicates if the link is external to the domain. Adds an indicator at the end of the link",
                propTypes: ["boolean"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Heading/Body",
        component: <ApiTable sections={TEXT_DATA} />,
    },
    {
        title: "Link",
        component: <ApiTable sections={LINK_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
