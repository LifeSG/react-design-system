import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Table,
} from "../storybook-common/api-table";
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";

export const PropsTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>type</NameCol>
            <DescriptionCol
                propTypes={[
                    `"warning"`,
                    `"error"`,
                    `"success"`,
                    `"information"`,
                    `"description"`,
                ]}
            >
                The style of the Button
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
                Specifies the variant od size of alert
            </DescriptionCol>
            <DefaultCol>default</DefaultCol>
        </tr>
        <tr>
            <NameCol>showIcon</NameCol>
            <DescriptionCol propTypes={[`boolean`]}>
                Specifies if the alert will be display icon
            </DescriptionCol>
            <DefaultCol>false</DefaultCol>
        </tr>
        <tr>
            <NameCol>actionLinkIcon</NameCol>
            <DescriptionCol propTypes={["JSX.Element"]}>
                Specifies if the hyperlink will be display icon
            </DescriptionCol>
            <DefaultCol>
                <>
                    <div style={{ marginRight: "1rem" }}>ArrowRightIcon</div>
                    <ArrowRightIcon />
                </>
            </DefaultCol>
        </tr>
    </Table>
);
