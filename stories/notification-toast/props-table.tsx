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
            <DefaultCol />
        </tr>
    </Table>
);
