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
            <NameCol mandatory>styleType</NameCol>
            <DescriptionCol
                propTypes={[`"default"`, `"secondary"`, `"light"`, `"link"`]}
            >
                The style of the Button
            </DescriptionCol>
            <DefaultCol>{[`"default"`]}</DefaultCol>
        </tr>
        <tr>
            <NameCol>loading</NameCol>
            <DescriptionCol propTypes={[`boolean`]}>
                Setting will display a loading spinner
            </DescriptionCol>
            <DefaultCol>{["false"]}</DefaultCol>
        </tr>
    </Table>
);
