import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Table,
} from "../storybook-common/api-table";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

export const TooltipTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>children</NameCol>
            <DescriptionCol propTypes={["JSX.Element", "string"]}>
                <>
                    The content of the <code>Tooltip</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>visible</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                <>
                    The visibility state of the <code>Tooltip</code>
                </>
            </DescriptionCol>
            <DefaultCol>{["false"]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>position</NameCol>
            <DescriptionCol
                propTypes={[`"top"`, `"bottom"`, `"left"`, `"right"`]}
            >
                <>
                    The visual of the <code>Tooltip</code> in relation to
                    it&rsquo;s trigger
                </>
            </DescriptionCol>
            <DefaultCol>{[`"top"`]}</DefaultCol>
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
    </Table>
);

export const HOCTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>content</NameCol>
            <DescriptionCol propTypes={["JSX.Element", "string"]}>
                <>
                    The content of the <code>Tooltip</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "withTooltip",
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
                        "withTooltip(component: JSX.Element, options: TooltipHOCOptionsProps);"
                    }
                </code>
                <br />
                <h4>TooltipHOCOptionsProps</h4>
                <HOCTable />
            </div>
        ),
    },
    {
        title: "Tooltip",
        component: <TooltipTable />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
