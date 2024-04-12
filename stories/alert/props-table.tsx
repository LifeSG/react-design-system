import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Table,
} from "../storybook-common/api-table";

export const PropsTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>type</NameCol>
            <DescriptionCol
                propTypes={[
                    `"warning"`,
                    `"error"`,
                    `"success"`,
                    `"info"`,
                    `"description"`,
                ]}
            >
                The style of the component
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>actionLink</NameCol>
            <DescriptionCol
                propTypes={
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <code>HTMLAnchorAttributes</code>
                    </a>
                }
            >
                The attributes of an action link that performs an action on
                click
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>sizeType</NameCol>
            <DescriptionCol propTypes={[`"default"`, `"small"`]}>
                Specifies the size of the component
            </DescriptionCol>
            <DefaultCol>{`"default"`}</DefaultCol>
        </tr>
        <tr>
            <NameCol>showIcon</NameCol>
            <DescriptionCol propTypes={[`boolean`]}>
                Specifies if the icon will be displayed
            </DescriptionCol>
            <DefaultCol>false</DefaultCol>
        </tr>
        <tr>
            <NameCol>actionLinkIcon</NameCol>
            <DescriptionCol propTypes={["JSX.Element"]}>
                Specifies a custom icon for the action link
            </DescriptionCol>
            <DefaultCol>
                <>
                    <div style={{ marginRight: "1rem" }}>
                        <code>{`<ArrowRightIcon />`}</code>
                    </div>
                    <ArrowRightIcon />
                </>
            </DefaultCol>
        </tr>
        <tr>
            <NameCol>customAlertIcon</NameCol>
            <DescriptionCol propTypes={["JSX.Element"]}>
                Specifies a custom replacement icon for the alert
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);
