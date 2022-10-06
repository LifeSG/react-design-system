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
            <NameCol>displaySize</NameCol>
            <DescriptionCol propTypes={[`"default"`, `"small"`]}>
                The display size of the component
            </DescriptionCol>
            <DefaultCol>{[`"default"`]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>checked</NameCol>
            <DescriptionCol propTypes={[`boolean`]}>
                The selected state of the Checkbox
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);
