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
            <NameCol mandatory>iconType</NameCol>
            <DescriptionCol>Refer to the icon types</DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);
