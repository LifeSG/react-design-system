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
                propTypes={[`"success"`, `"warning"`, `"error"`, `"info"`]}
            >
                The type of status
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
    </Table>
);
