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
            <NameCol>size</NameCol>
            <DescriptionCol propTypes={[`"default"`, `"small"`]}>
                Specifies the variant od size of alert
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>enableIcon</NameCol>
            <DescriptionCol propTypes={[`boolean`]}>
                Specifies if the aleet will be display icon
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>linkIconType (hyperLink)</NameCol>
            <DescriptionCol propTypes={[`"internalLink"`, `"externalLink"`]}>
                Specifies if the hyperlink will be display icon
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);
