import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Section,
    Table,
} from "../storybook-common/api-table";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

export const HOCTable = () => (
    <Table>
        <Section>PopoverHOCProps</Section>

        <tr>
            <NameCol>onPopoverAppear</NameCol>
            <DescriptionCol propTypes={["() => void"]}>
                <>
                    The callback when the <code>Popover</code> appears
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>onPopoverDismiss</NameCol>
            <DescriptionCol propTypes={["() => void"]}>
                <>
                    The callback when the <code>Popover</code> dismisses
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>

        <Section>PopoverHOCOptionsProps</Section>

        <tr>
            <NameCol mandatory>content</NameCol>
            <DescriptionCol propTypes={["string", "JSX.Element"]}>
                <>
                    The content of the <code>Popover</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>trigger</NameCol>
            <DescriptionCol propTypes={[`"click"`, `"hover"`]}>
                <>
                    The trigger for the appearance of the <code>Popover</code>
                </>
            </DescriptionCol>
            <DefaultCol>{[`"click"`]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>id</NameCol>
            <DescriptionCol propTypes={["string"]}>
                A unique identifier for the component
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>data-testid</NameCol>
            <DescriptionCol propTypes={["string"]}>
                A test identifier for the component
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

export const PopoverTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>children</NameCol>
            <DescriptionCol propTypes={["string", "JSX.Element"]}>
                <>
                    The content of the <code>Popover</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>visible</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                <>
                    The visibility state of the <code>Popover</code>
                </>
            </DescriptionCol>
            <DefaultCol>{["false"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>id</NameCol>
            <DescriptionCol propTypes={["string"]}>
                A unique identifier for the component
            </DescriptionCol>
            <DefaultCol />
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
                A test identifier for the component
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>onMobileClose</NameCol>
            <DescriptionCol propTypes={["() => void"]}>
                <>
                    The callback when the user dismisses the{" "}
                    <code>Popover</code>
                    (modal form) in mobile viewports
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "withPopover",
        component: <HOCTable />,
    },
    {
        title: "Popover",
        component: <PopoverTable />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
