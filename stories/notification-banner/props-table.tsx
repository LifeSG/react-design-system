import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";
import { Heading4 } from "../storybook-common/text.style";

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
                        <a
                            href="./?path=/docs/general-text-introduction--docs#component-api"
                            target="_blank"
                            rel="noreferrer"
                        >
                            TextLinkProps
                        </a>
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
                        <a
                            href="./?path=/docs/general-text-introduction--docs#component-api"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <code>TextLinkProps</code>
                        </a>
                        &nbsp;
                        <a
                            href="./?path=/docs/general-text-introduction--docs#component-api"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <code>TextProps</code>
                        </a>
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
                <Heading4>NotificationContentAttributes</Heading4>
                <HOCTable />
            </div>
        ),
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
