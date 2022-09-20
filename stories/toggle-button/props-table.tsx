import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Section,
    Table,
} from "../storybook-common/api-table";

export const PropsTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>children</NameCol>
            <DescriptionCol propTypes={["string"]}>
                The content of the button
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>type</NameCol>
            <DescriptionCol propTypes={[`"checkbox"`, `"radio"`]}>
                The function type of the button
            </DescriptionCol>
            <DefaultCol>{[`"checkbox"`]}</DefaultCol>
        </tr>
    </Table>
);
