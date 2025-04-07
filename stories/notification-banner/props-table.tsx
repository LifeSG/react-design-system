import {
    ApiTable,
    ApiTableSectionProps,
    StorybookLink,
    TabAttribute,
    Tabs,
} from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The content of the banner",
                propTypes: ["string", "JSX.Element", "JSX.Element[]"],
            },
            {
                name: "dismissible",
                description: (
                    <>
                        Specifies if the <code>NotificationBanner</code> can be
                        dismissed
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "visible",
                description: (
                    <>
                        Specifies if the <code>NotificationBanner</code> is to
                        be displayed
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "sticky",
                description: (
                    <>
                        Specifies if the <code>NotificationBanner</code> is to
                        remain displayed at the top of the page even though a
                        scroll has happened
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "onDismiss",
                description: (
                    <>
                        Called when the <code>NotificationBanner</code> is
                        dismissed
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "onClick",
                description: (
                    <>
                        Called when the <code>NotificationBanner</code> is
                        clicked
                    </>
                ),
                propTypes: [
                    "(event: React.MouseEvent<HTMLDivElement>) => void",
                ],
            },
            {
                name: "maxCollapsedHeight",
                description: (
                    <>
                        Specifies the maximum visible height of the
                        <code>NotificationBanner</code> content
                    </>
                ),
                propTypes: ["number"],
            },
            {
                name: "actionButton",
                description:
                    "The properties of the action button that appears at the bottom of the component",
                propTypes: ["React.ButtonHTMLAttributes<HTMLButtonElement>"],
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
                        This component also inherits props from&nbsp;
                        <StorybookLink path="/docs/core-typography--docs#component-api">
                            TypographyLinkProps
                        </StorybookLink>
                    </>
                ),
            },
        ],
    },
];

const HOC_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                mandatory: true,
                description: "The type of content",
                propTypes: [`"text"`, `"link"`],
            },
            {
                name: "content",
                mandatory: true,
                description: "The text content of the banner",
                propTypes: ["string"],
            },
            {
                name: "otherAttributes",
                description: (
                    <>
                        Additional properties to be passed to the component
                        displaying the content
                    </>
                ),
                propTypes: (
                    <>
                        <StorybookLink path="/docs/core-typography--docs#component-api">
                            <code>TypographyLinkProps</code>
                        </StorybookLink>
                        &nbsp;
                        <StorybookLink path="/docs/core-typography--docs#component-api">
                            <code>TypographyProps</code>
                        </StorybookLink>
                        &nbsp;
                    </>
                ),
            },
        ],
    },
];

export const HOCTable = () => <ApiTable sections={HOC_DATA} />;

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "NotificationBanner",
        component: <ApiTable sections={DATA} />,
    },
    {
        title: "NotificationBanner.Link",
        component: <ApiTable sections={LINK_DATA} />,
    },
    {
        title: "withNotificationBanner",
        component: (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <code>
                    {
                        "withNotificationBanner(data: NotificationContentAttributes[]);"
                    }
                </code>
                <br />
                <h4>NotificationContentAttributes</h4>
                <HOCTable />
            </div>
        ),
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
