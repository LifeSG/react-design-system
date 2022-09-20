import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Table,
} from "../storybook-common/api-table";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

export const AccordionPropsTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>children</NameCol>
            <DescriptionCol propTypes={["JSX.Element", "JSX.Element[]"]}>
                The content of the Accordion
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>title</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The header text content for the Accordion
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>enableExpandAll</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                Specifies if the feature to expand/collapse all child items is
                enabled
            </DescriptionCol>
            <DefaultCol>{["true"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>showTitleInMobile</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                Specifies if the title should be shown in mobile viewports
            </DescriptionCol>
            <DefaultCol>{["false"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>className</NameCol>
            <DescriptionCol propTypes={["string"]}>
                Class selector for the component
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

export const AccordionItemPropsTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>children</NameCol>
            <DescriptionCol propTypes={["JSX.Element", "JSX.Element[]"]}>
                The content of the Accordion.Item
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol mandatory>title</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The label text for the Accordion.Item header
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>type</NameCol>
            <DescriptionCol propTypes={[`"default"`, `"small`]}>
                Sets the style type of the component
            </DescriptionCol>
            <DefaultCol>{[`"default"`]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>expanded</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                Specifies if the item is expanded
            </DescriptionCol>
            <DefaultCol>{["true"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>className</NameCol>
            <DescriptionCol propTypes={["string"]}>
                Class selector for the component
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>data-testid</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The test id for the component
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Accordion",
        component: <AccordionPropsTable />,
    },
    {
        title: "Accordion.Item",
        component: <AccordionItemPropsTable />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
