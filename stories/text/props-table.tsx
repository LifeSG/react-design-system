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
            <NameCol mandatory>weight</NameCol>
            <DescriptionCol
                propTypes={[`"regular"`, `"semibold"`, `"bold"`, `"light"`]}
            >
                Specifies the weight of the component
            </DescriptionCol>
            <DefaultCol>
                <>
                    Display and Headers: <code>{`"bold"`}</code>
                    <br />
                    General: <br />
                    <code>{`"regular"`}</code>
                </>
            </DefaultCol>
        </tr>
        <tr>
            <NameCol>inline</NameCol>
            <DescriptionCol propTypes={[`boolean`]}>
                Sets the text to an inline display to allow a combination of
                components in a single line
            </DescriptionCol>
            <DefaultCol>{["false"]}</DefaultCol>
        </tr>

        <Section>Applies to static text only</Section>
        <tr>
            <NameCol mandatory>paragraph</NameCol>
            <DescriptionCol propTypes={[`boolean`]}>
                Adds an extra bottom margin to non header text to allow a better
                separation of blocks of text
            </DescriptionCol>
            <DefaultCol>{["false"]}</DefaultCol>
        </tr>

        <Section>Applies to hyperlinks only</Section>
        <tr>
            <NameCol mandatory>external</NameCol>
            <DescriptionCol propTypes={[`boolean`]}>
                It is an indication if the link is external to the domain. Adds
                an extra indicator at the end of the link
            </DescriptionCol>
            <DefaultCol>{["false"]}</DefaultCol>
        </tr>
    </Table>
);
