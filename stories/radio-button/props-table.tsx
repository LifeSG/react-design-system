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
            <NameCol>checked</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                The selection state of the component
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>disabled</NameCol>
            <DescriptionCol propTypes={["boolean"]}>
                The state in which an action is allowed to be executed
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);
